/**
 * 专业探索罗盘 — 核心交互逻辑
 * 
 * 架构概览：
 * - AppState: 全局状态管理
 * - ScreenManager: 页面/步骤切换
 * - QuestionRenderer: 题目渲染引擎
 * - ChartEngine: Canvas 图表绘制（雷达图、柱状图）
 * - MatchingEngine: 综合匹配算法
 * - ReportRenderer: 结果报告渲染
 * - ThemeManager: 主题切换
 */

(function () {
  'use strict';

  const DATA = window.APP_DATA;

  // ============================================================
  // 全局状态
  // ============================================================
  const AppState = {
    currentScreen: 'welcome',
    // RIASEC 答题
    riasec: { currentIndex: 0, answers: [] },     // answers: [{chosen: 'R'|'I'|...}]
    // 能力评估
    ability: { currentIndex: 0, answers: [] },     // answers: [1-5]
    // 价值观
    values: { currentIndex: 0, answers: [] },      // answers: varies by question type
    // 性格特质
    personality: { currentIndex: 0, answers: [] }, // answers: [{dimension, value}]
    // 现实约束
    constraints: {
      scoreRange: '',
      economicLevel: '',
      regionPrefs: [],
      studyAbroad: '',
      subjectCombo: []
    },
    // 计算结果
    results: null
  };

  // 步骤定义
  const SCREENS = [
    { id: 'welcome', label: '开始', emoji: '🏠' },
    { id: 'riasec', label: '兴趣', emoji: '🔍' },
    { id: 'ability', label: '能力', emoji: '💪' },
    { id: 'values', label: '价值观', emoji: '💎' },
    { id: 'personality', label: '性格', emoji: '🧩' },
    { id: 'constraints', label: '现实', emoji: '🏠' },
    { id: 'results', label: '报告', emoji: '🎓' }
  ];

  // ============================================================
  // 工具函数
  // ============================================================
  function $(selector) { return document.querySelector(selector); }
  function $$(selector) { return document.querySelectorAll(selector); }

  function animate(el, className, duration) {
    return new Promise(resolve => {
      el.classList.add(className);
      setTimeout(() => {
        el.classList.remove(className);
        resolve();
      }, duration || 400);
    });
  }

  // ============================================================
  // 主题管理
  // ============================================================
  const ThemeManager = {
    init() {
      const saved = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', saved);
      const btn = $('#themeToggle');
      btn.addEventListener('click', () => this.toggle());
    },
    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  };

  // ============================================================
  // 进度条 & 步骤指示器
  // ============================================================
  const ProgressManager = {
    init() {
      const container = $('#stepIndicators');
      // 只显示主要步骤（不含 welcome）
      const steps = SCREENS.slice(1);
      container.innerHTML = steps.map((s, i) => `
        <div class="step-dot ${i === 0 ? '' : ''}" data-step="${s.id}" title="${s.label}">
          <span class="step-dot-emoji">${s.emoji}</span>
          <span class="step-dot-label">${s.label}</span>
        </div>
      `).join('');
    },

    update(screenId) {
      const steps = SCREENS.slice(1);
      const currentIdx = steps.findIndex(s => s.id === screenId);
      const pct = currentIdx < 0 ? 0 : ((currentIdx) / (steps.length - 1)) * 100;
      $('#progressFill').style.width = pct + '%';

      $$('.step-dot').forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i < currentIdx) dot.classList.add('completed');
        if (i === currentIdx) dot.classList.add('active');
      });

      // 欢迎页隐藏进度条
      const container = $('#progressContainer');
      container.style.display = screenId === 'welcome' ? 'none' : 'block';
    }
  };

  // ============================================================
  // 页面切换
  // ============================================================
  const ScreenManager = {
    go(targetId) {
      const currentEl = $(`.screen.active`);
      const targetEl = $(`#screen-${targetId}`);
      if (!targetEl || currentEl === targetEl) return;

      // 离开动画
      if (currentEl) {
        currentEl.classList.add('slide-out');
        setTimeout(() => {
          currentEl.classList.remove('active', 'slide-out');
        }, 350);
      }

      // 进入动画
      setTimeout(() => {
        targetEl.classList.add('active', 'slide-in');
        setTimeout(() => targetEl.classList.remove('slide-in'), 350);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, currentEl ? 200 : 0);

      AppState.currentScreen = targetId;
      ProgressManager.update(targetId);

      // 进入结果页时计算
      if (targetId === 'results') {
        this.generateResults();
      }
    },

    generateResults() {
      AppState.results = MatchingEngine.compute();
      ReportRenderer.render(AppState.results);
    }
  };

  // ============================================================
  // 题目渲染引擎
  // ============================================================
  const QuestionRenderer = {
    // --- RIASEC 题目 ---
    renderRiasecQuestion(index) {
      const questions = DATA.riasecQuestions;
      if (index < 0 || index >= questions.length) return;
      const q = questions[index];
      const area = $('#riasecQuestionArea');
      const answered = AppState.riasec.answers[index];

      area.innerHTML = `
        <div class="question-card fade-in">
          <div class="question-text">${q.question || '以下两个活动，你更喜欢哪个？'}</div>
          <div class="pair-options">
            <button class="option-btn pair-option ${answered && answered.chosen === q.optionA.type ? 'selected' : ''}"
              data-type="${q.optionA.type}" data-side="A">
              <span class="option-emoji">${q.optionA.emoji || ''}</span>
              <span class="option-text">${q.optionA.text}</span>
            </button>
            <div class="pair-vs">VS</div>
            <button class="option-btn pair-option ${answered && answered.chosen === q.optionB.type ? 'selected' : ''}"
              data-type="${q.optionB.type}" data-side="B">
              <span class="option-emoji">${q.optionB.emoji || ''}</span>
              <span class="option-text">${q.optionB.text}</span>
            </button>
          </div>
        </div>
      `;

      area.querySelectorAll('.pair-option').forEach(btn => {
        btn.addEventListener('click', () => {
          area.querySelectorAll('.pair-option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          AppState.riasec.answers[index] = { chosen: btn.dataset.type };
          btn.blur();
          document.activeElement.blur();
          setTimeout(() => $('#riasecNext').click(), 300);
        });
      });

      this.updateCounter('riasec', index, questions.length);
      this.updateNavState('riasec', index, questions.length);
    },

    // --- 能力评估题目 ---
    renderAbilityQuestion(index) {
      const questions = DATA.abilityQuestions;
      if (index < 0 || index >= questions.length) return;
      const q = questions[index];
      const area = $('#abilityQuestionArea');
      const answered = AppState.ability.answers[index];

      // Find the initially selected level description
      let initialDesc = '请选择一个等级以查看详细的行为指标描述。';
      if (answered != null) {
        const lvl = q.levels.find(l => l.value === answered);
        if (lvl) initialDesc = `<strong>${lvl.label}</strong>：${lvl.desc}`;
      }

      area.innerHTML = `
        <div class="question-card fade-in">
          <div class="question-emoji">${q.emoji || '💪'}</div>
          <div class="question-text">${q.question}</div>
          <div class="question-hint">${q.description || ''}</div>
          <div class="scale-options">
            ${q.levels.map(lvl => `
              <button class="scale-btn ${answered === lvl.value ? 'selected' : ''}" data-value="${lvl.value}">
                <span class="scale-value">${lvl.value}</span>
                <span class="scale-label">${lvl.label}</span>
              </button>
            `).join('')}
          </div>
          <div class="scale-level-desc" id="scaleLevelDesc">
            ${initialDesc}
          </div>
        </div>
      `;

      // Bind select and hover events
      const scaleBtns = area.querySelectorAll('.scale-btn');
      const descBox = area.querySelector('#scaleLevelDesc');

      scaleBtns.forEach(btn => {
        const val = parseInt(btn.dataset.value, 10);
        const lvl = q.levels.find(l => l.value === val);

        // Hover effect to preview description
        btn.addEventListener('mouseenter', () => {
          if (lvl) {
            descBox.innerHTML = `<strong>${lvl.label}</strong>：${lvl.desc}`;
          }
        });

        // Click event
        btn.addEventListener('click', () => {
          scaleBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          AppState.ability.answers[index] = val;
          if (lvl) {
            descBox.innerHTML = `<strong>${lvl.label}</strong>：${lvl.desc}`;
          }
          btn.blur();
          document.activeElement.blur();
          setTimeout(() => $('#abilityNext').click(), 400);
        });
      });

      // Mouse leave scale options area resets description to current selection (if any)
      area.querySelector('.scale-options').addEventListener('mouseleave', () => {
        const currentAnswer = AppState.ability.answers[index];
        if (currentAnswer != null) {
          const lvl = q.levels.find(l => l.value === currentAnswer);
          if (lvl) {
            descBox.innerHTML = `<strong>${lvl.label}</strong>：${lvl.desc}`;
            return;
          }
        }
        descBox.innerHTML = '请选择一个等级以查看详细的行为指标描述。';
      });

      this.updateCounter('ability', index, questions.length);
      this.updateNavState('ability', index, questions.length);
    },

    // --- 价值观题目 ---
    renderValuesQuestion(index) {
      const questions = DATA.valuesQuestions;
      if (index < 0 || index >= questions.length) return;
      const q = questions[index];
      const area = $('#valuesQuestionArea');
      const answered = AppState.values.answers[index];

      const optionsHtml = q.options.map((opt, i) => `
        <button class="option-btn ${answered === i ? 'selected' : ''}" data-index="${i}">
          <span class="option-text">${opt.label}</span>
        </button>
      `).join('');

      area.innerHTML = `
        <div class="question-card fade-in">
          <div class="question-text">${q.question}</div>
          ${q.hint ? `<div class="question-hint">${q.hint}</div>` : ''}
          <div class="options-list">
            ${optionsHtml}
          </div>
        </div>
      `;

      area.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          area.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          AppState.values.answers[index] = parseInt(btn.dataset.index, 10);
          btn.blur();
          document.activeElement.blur();
          setTimeout(() => $('#valuesNext').click(), 300);
        });
      });

      this.updateCounter('values', index, questions.length);
      this.updateNavState('values', index, questions.length);
    },

    // --- 性格特质题目 ---
    renderPersonalityQuestion(index) {
      const questions = DATA.bigFiveQuestions;
      if (index < 0 || index >= questions.length) return;
      const q = questions[index];
      const area = $('#personalityQuestionArea');
      const answered = AppState.personality.answers[index];

      const opts = [
        { value: 5, label: "非常符合" },
        { value: 4, label: "比较符合" },
        { value: 3, label: "一般" },
        { value: 2, label: "比较不符合" },
        { value: 1, label: "非常不符合" }
      ];

      area.innerHTML = `
        <div class="question-card fade-in">
          <div class="question-text">${q.question}</div>
          <div class="options-list">
            ${opts.map((opt) => `
              <button class="option-btn ${answered && answered.rawValue == opt.value ? 'selected' : ''}" 
                data-dimension="${q.dimension}" data-value="${opt.value}">
                <span class="option-text">${opt.label}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      area.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          area.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          const rawValue = parseInt(btn.dataset.value, 10);
          const finalValue = q.reverse ? (6 - rawValue) : rawValue;
          AppState.personality.answers[index] = {
            dimension: btn.dataset.dimension,
            rawValue: rawValue,
            value: finalValue
          };
          btn.blur();
          document.activeElement.blur();
          setTimeout(() => $('#personalityNext').click(), 300);
        });
      });

      this.updateCounter('personality', index, questions.length);
      this.updateNavState('personality', index, questions.length);
    },

    // --- 通用：更新计数器 ---
    updateCounter(section, index, total) {
      const el = $(`#${section}Counter`);
      if (el) el.textContent = `${index + 1} / ${total}`;
    },

    updateNavState(section, index, total) {
      const prevBtn = $(`#${section}Prev`);
      const nextBtn = $(`#${section}Next`);
      if (prevBtn) {
        if (section === 'riasec') {
          prevBtn.style.visibility = 'visible';
        }
        if (index === 0) {
          prevBtn.textContent = '← 返回上一步';
        } else {
          prevBtn.textContent = '← 上一题';
        }
      }
      if (nextBtn) {
        if (index === total - 1) {
          nextBtn.textContent = '进入下一步 →';
        } else {
          nextBtn.textContent = '下一题 →';
        }
      }
    }
  };

  // ============================================================
  // 图表引擎
  // ============================================================
  const ChartEngine = {
    // --- 雷达图 ---
    drawRadar(canvasId, labels, values, maxValue) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const W = rect.width;
      const H = rect.height;
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(cx, cy) * 0.7;
      const n = labels.length;
      const angleStep = (Math.PI * 2) / n;
      const startAngle = -Math.PI / 2;

      ctx.clearRect(0, 0, W, H);

      // 获取主题色
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
      const textColor = isDark ? '#e2e8f0' : '#334155';
      const fillColor = 'rgba(124, 58, 237, 0.2)';
      const strokeColor = '#7C3AED';

      // 画背景网格（5层）
      for (let layer = 1; layer <= 5; layer++) {
        const r = (R / 5) * layer;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const angle = startAngle + i * angleStep;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 画轴线
      for (let i = 0; i < n; i++) {
        const angle = startAngle + i * angleStep;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 画数据区域（带动画效果通过 requestAnimationFrame）
      const normalizedValues = values.map(v => v / maxValue);

      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const idx = i % n;
        const angle = startAngle + idx * angleStep;
        const r = R * normalizedValues[idx];
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // 画数据点
      for (let i = 0; i < n; i++) {
        const angle = startAngle + i * angleStep;
        const r = R * normalizedValues[i];
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 画标签
      ctx.font = '14px "Noto Sans SC", sans-serif';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < n; i++) {
        const angle = startAngle + i * angleStep;
        const labelR = R + 30;
        const x = cx + labelR * Math.cos(angle);
        const y = cy + labelR * Math.sin(angle);
        ctx.fillText(labels[i], x, y);
      }
    },

    // --- 柱状图 ---
    drawBar(canvasId, labels, values, colors) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const W = rect.width;
      const H = rect.height;
      const padding = { top: 20, right: 20, bottom: 50, left: 20 };
      const chartW = W - padding.left - padding.right;
      const chartH = H - padding.top - padding.bottom;
      const maxVal = Math.max(...values, 5);
      const barWidth = (chartW / labels.length) * 0.6;
      const gap = (chartW / labels.length) * 0.4;

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const textColor = isDark ? '#e2e8f0' : '#334155';
      const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

      ctx.clearRect(0, 0, W, H);

      // 横向参考线
      for (let i = 0; i <= 5; i++) {
        const y = padding.top + chartH - (chartH / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(W - padding.right, y);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 画柱子
      const defaultColors = ['#7C3AED', '#A855F7', '#F97316', '#10B981', '#3B82F6', '#EC4899', '#F59E0B'];
      labels.forEach((label, i) => {
        const x = padding.left + (chartW / labels.length) * i + gap / 2;
        const barH = (values[i] / maxVal) * chartH;
        const y = padding.top + chartH - barH;
        const color = (colors && colors[i]) || defaultColors[i % defaultColors.length];

        // 渐变填充
        const grad = ctx.createLinearGradient(x, y, x, y + barH);
        grad.addColorStop(0, color);
        grad.addColorStop(1, color + '88');
        ctx.fillStyle = grad;

        // 圆角矩形
        const radius = 6;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + barWidth - radius, y);
        ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
        ctx.lineTo(x + barWidth, y + barH);
        ctx.lineTo(x, y + barH);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();

        // 数值标签
        ctx.fillStyle = textColor;
        ctx.font = 'bold 14px "Noto Sans SC", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(values[i], x + barWidth / 2, y - 8);

        // 底部标签
        ctx.font = '12px "Noto Sans SC", sans-serif';
        ctx.fillText(label, x + barWidth / 2, padding.top + chartH + 20);
      });
    }
  };

  // ============================================================
  // 匹配引擎
  // ============================================================
  const MatchingEngine = {
    compute() {
      const riasecScores = this.calcRiasec();
      const abilityScores = this.calcAbility();
      const valuesProfile = this.calcValues();
      const personalityProfile = this.calcPersonality();
      const constraints = this.getConstraints();
      const recommendations = this.match(riasecScores, abilityScores, valuesProfile, personalityProfile, constraints);

      return {
        riasecScores,
        abilityScores,
        valuesProfile,
        personalityProfile,
        constraints,
        recommendations
      };
    },

    calcRiasec() {
      const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
      AppState.riasec.answers.forEach(a => {
        if (a && a.chosen) scores[a.chosen] = (scores[a.chosen] || 0) + 1;
      });
      return scores;
    },

    calcAbility() {
      const questions = DATA.abilityQuestions;
      const result = {};
      questions.forEach((q, i) => {
        result[q.dimension] = AppState.ability.answers[i] || 3;
      });
      return result;
    },

    calcValues() {
      const questions = DATA.valuesQuestions;
      const valueCounts = {};
      questions.forEach((q, i) => {
        const ans = AppState.values.answers[i];
        if (ans == null) return;
        const opt = q.options[ans];
        if (opt) {
          valueCounts[q.dimension] = opt.value;
        }
      });
      // 按分数排序
      return Object.entries(valueCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([key, score]) => ({ key, score }));
    },

    calcPersonality() {
      const dimensions = {};
      AppState.personality.answers.forEach(a => {
        if (!a) return;
        if (!dimensions[a.dimension]) dimensions[a.dimension] = [];
        dimensions[a.dimension].push(a.value);
      });
      // 计算每个维度平均分
      const profile = {};
      for (const [dim, vals] of Object.entries(dimensions)) {
        const sum = vals.reduce((acc, v) => acc + parseInt(v, 10), 0);
        profile[dim] = sum / vals.length;
      }
      return profile;
    },

    getConstraints() {
      return {
        scoreRange: $('#scoreRange')?.value || AppState.constraints.scoreRange,
        economicLevel: $('#economicLevel')?.value || AppState.constraints.economicLevel,
        regionPrefs: Array.from($$('#regionPrefs .chip.selected')).map(c => c.dataset.value),
        studyAbroad: $('#studyAbroad')?.value || AppState.constraints.studyAbroad,
        subjectCombo: Array.from($$('#subjectCombo .chip.selected')).map(c => c.dataset.value)
      };
    },

    match(riasec, ability, values, personality, constraints) {
      // 1. 找到 RIASEC 主导类型（前2-3个）
      const sortedRiasec = Object.entries(riasec).sort((a, b) => b[1] - a[1]);
      const dominantTypes = sortedRiasec.slice(0, 3).filter(([_, v]) => v > 0).map(([k]) => k);

      // 2. 获取匹配的通俗分类
      const matchedPopular = [];
      const popularCats = DATA.popularCategories || [];
      popularCats.forEach(cat => {
        let score = 0;
        // 和 RIASEC 类型匹配
        if (cat.riasecMatch) {
          dominantTypes.forEach((t, i) => {
            if (cat.riasecMatch.includes(t)) score += (3 - i);
          });
        }
        if (score > 0) {
          matchedPopular.push({ ...cat, score });
        }
      });
      matchedPopular.sort((a, b) => b.score - a.score);

      // 3. 获取匹配的具体专业
      const matchedMajors = [];
      const categories = DATA.majorCategories || [];
      categories.forEach(cat => {
        (cat.majors || []).forEach(major => {
        let riasecScore = 0;

        // RIASEC 匹配
        if (major.riasecTypes) {
          dominantTypes.forEach((t, i) => {
            if (major.riasecTypes.includes(t)) riasecScore += (3 - i) * 2;
          });
        }

        // 选科约束
        let isSubjectValid = true;
        if (constraints.subjectCombo.length > 0 && major.subjectRequired) {
          const hasRequired = major.subjectRequired.some(s => constraints.subjectCombo.includes(s));
          if (!hasRequired) isSubjectValid = false;
        }

        if (isSubjectValid) {
          // 大五人格映射: 简单匹配逻辑
          let bigFiveScore = 0;
          if (personality) {
             const bfMapping = {
               "01": { O: 4, C: 3, E: 3, A: 3, N: 3 }, // 哲学
               "02": { O: 3, C: 4, E: 4, A: 3, N: 3 }, // 经济
               "03": { O: 3, C: 4, E: 4, A: 4, N: 3 }, // 法学
               "04": { O: 4, C: 4, E: 4, A: 5, N: 2 }, // 教育
               "05": { O: 5, C: 3, E: 3, A: 3, N: 3 }, // 文学
               "06": { O: 4, C: 3, E: 3, A: 3, N: 3 }, // 历史
               "07": { O: 5, C: 4, E: 2, A: 3, N: 3 }, // 理学
               "08": { O: 4, C: 5, E: 3, A: 3, N: 3 }, // 工学
               "09": { O: 3, C: 4, E: 3, A: 3, N: 3 }, // 农学
               "10": { O: 4, C: 5, E: 4, A: 5, N: 2 }, // 医学
               "11": { O: 3, C: 5, E: 5, A: 4, N: 3 }, // 管理
               "12": { O: 5, C: 3, E: 4, A: 3, N: 4 }  // 艺术
             };
             const targetBF = bfMapping[cat.code];
             if (targetBF) {
               let diff = 0;
               ['O','C','E','A','N'].forEach(dim => {
                 diff += Math.abs((personality[dim] || 3) - targetBF[dim]);
               });
               bigFiveScore = Math.max(0, 1 - (diff / 15)); 
             } else {
               bigFiveScore = 0.5;
             }
          }
          
          // 归一化其他分数
          // RIASEC
          const riasecNorm = Math.min(1, riasecScore / 12);
          
          // Ability (引入溢出梯度加分)
          let abilityScore = 0;
          let abilityMax = 0;
          if (major.abilityNeeds && ability) {
            Object.entries(major.abilityNeeds).forEach(([dim, level]) => {
              abilityMax += 1;
              const userLevel = ability[dim] || 3;
              if (userLevel > level) {
                abilityScore += 1 + 0.1 * (userLevel - level); // 超出部分奖励
              } else if (userLevel === level) {
                abilityScore += 1;
              } else if (userLevel === level - 1) {
                abilityScore += 0.5;
              }
            });
          }
          const abilityNorm = abilityMax > 0 ? abilityScore / abilityMax : 0.5;
          
          // Values
          let valuesScore = 0;
          let valuesMax = 0;
          if (major.valuesFit && values.length > 0) {
            const topValues = values.slice(0, 3).map(v => v.key);
            major.valuesFit.forEach(v => {
              valuesMax += 1;
              if (topValues.includes(v)) valuesScore += 1;
            });
          }
          const valuesNorm = valuesMax > 0 ? valuesScore / valuesMax : 0.5;
          
          // 最终加权：RIASEC 40%, Ability 25%, Values 20%, BigFive 15%
          const finalScore = Math.min(100, (riasecNorm * 0.4 + abilityNorm * 0.25 + valuesNorm * 0.2 + bigFiveScore * 0.15) * 100);

          if (finalScore > 0) {
            matchedMajors.push({
              ...major,
              category: cat.name,
              matchScore: finalScore
            });
          }
        }
        });
      });

      matchedMajors.sort((a, b) => b.matchScore - a.matchScore);

      return {
        dominantTypes,
        popularCategories: matchedPopular.slice(0, 4),
        majors: matchedMajors.slice(0, 12)
      };
    }
  };

  // ============================================================
  // 报告渲染
  // ============================================================
  const ReportRenderer = {
    render(results) {
      this.renderRiasecSummary(results.riasecScores, results.recommendations.dominantTypes);
      this.renderRadarChart(results.riasecScores);
      this.renderBarChart(results.abilityScores);
      this.renderValuesResult(results.valuesProfile);
      this.renderPersonalityResult(results.personalityProfile);
      this.renderPopularCategories(results.recommendations.popularCategories);
      this.renderMajorCards(results.recommendations.majors);
      this.renderPitfalls();
    },

    renderRiasecSummary(scores, dominant) {
      const types = DATA.riasecTypes || {};
      const container = $('#riasecSummary');
      const summaryHtml = dominant.map(typeCode => {
        const t = types[typeCode] || {};
        return `
          <div class="riasec-type-card">
            <span class="riasec-type-emoji">${t.emoji || '🔵'}</span>
            <div class="riasec-type-info">
              <strong>${t.name || typeCode} (${t.nameEn || typeCode})</strong>
              <p>${t.description || ''}</p>
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="riasec-code">
          <span class="code-label">你的兴趣代码：</span>
          <span class="code-value">${dominant.join('')}</span>
        </div>
        ${summaryHtml}
      `;
    },

    renderRadarChart(scores) {
      const types = DATA.riasecTypes || {};
      const labels = Object.keys(scores).map(k => {
        const t = types[k];
        return t ? `${t.emoji} ${t.chineseName}` : k;
      });
      const values = Object.values(scores);
      const maxVal = Math.max(...values, 3);

      // 延迟绘制确保 canvas 可见
      setTimeout(() => {
        ChartEngine.drawRadar('radarChart', labels, values, maxVal);
      }, 500);
    },

    renderBarChart(abilityScores) {
      const dimensionLabels = {
        language: '语言表达',
        logic: '数理逻辑',
        spatial: '空间想象',
        artistic: '艺术审美',
        interpersonal: '人际沟通',
        intrapersonal: '自我认知',
        handson: '动手实践'
      };

      const labels = Object.keys(abilityScores).map(k => dimensionLabels[k] || k);
      const values = Object.values(abilityScores);

      setTimeout(() => {
        ChartEngine.drawBar('barChart', labels, values);
      }, 700);
    },

    renderValuesResult(valuesProfile) {
      const container = $('#valuesResult');
      const valueLabels = {
        stability: '稳定安全',
        income: '高收入',
        contribution: '社会贡献',
        creativity: '创造创新',
        freedom: '自由灵活',
        status: '社会地位',
        growth: '个人成长',
        balance: '工作生活平衡'
      };

      const medalEmojis = ['🥇', '🥈', '🥉'];

      container.innerHTML = valuesProfile.slice(0, 6).map((v, i) => `
        <div class="value-rank-item fade-in" style="animation-delay: ${i * 0.1}s">
          <span class="value-rank-medal">${medalEmojis[i] || '🏅'}</span>
          <span class="value-rank-label">${valueLabels[v.key] || v.key}</span>
          <div class="value-rank-bar">
            <div class="value-rank-fill" style="width: ${(v.score / (valuesProfile[0]?.score || 1)) * 100}%"></div>
          </div>
        </div>
      `).join('');
    },

    renderPersonalityResult(profile) {
      const container = $('#personalityResult');
      const dimensionInfo = {
        'O': { label: '开放性 (O)', poles: ['保守传统', '创新开放'] },
        'C': { label: '责任心 (C)', poles: ['随性灵活', '严谨自律'] },
        'E': { label: '外向性 (E)', poles: ['内敛独处', '活跃社交'] },
        'A': { label: '宜人性 (A)', poles: ['自我坚定', '合作共情'] },
        'N': { label: '神经质 (N)', poles: ['情绪稳定', '容易焦虑'] }
      };

      container.innerHTML = Object.entries(profile).map(([dim, val]) => {
        const info = dimensionInfo[dim] || { label: dim, poles: ['低', '高'] };
        const score = parseFloat(val) || 3;
        const percent = ((score - 1) / 4) * 100;
        const isLeft = score < 3;
        const isRight = score > 3;
        return `
          <div class="personality-dimension">
            <div class="personality-dim-label" style="display: flex; justify-content: space-between; align-items: center;">
              <span>${info.label}</span>
              <span style="font-size: 0.85em; color: #7c3aed; font-weight: 600; background: rgba(124, 58, 237, 0.1); padding: 2px 8px; border-radius: 12px;">得分: ${score.toFixed(1)}</span>
            </div>
            <div class="personality-spectrum">
              <span class="spectrum-pole ${isLeft ? 'active' : ''}">${info.poles[0]}</span>
              <div class="spectrum-bar">
                <div class="spectrum-indicator" style="left: ${percent}%"></div>
              </div>
              <span class="spectrum-pole ${isRight ? 'active' : ''}">${info.poles[1]}</span>
            </div>
          </div>
        `;
      }).join('');
    },

    renderPopularCategories(categories) {
      const container = $('#popularCategoriesGrid');
      if (!categories || categories.length === 0) {
        container.innerHTML = '<p class="no-data">请先完成以上测评以获得推荐</p>';
        return;
      }
      container.innerHTML = categories.map((cat, i) => {
        const officialCats = cat.relatedMajorCategories ? cat.relatedMajorCategories.map(code => {
          const c = DATA.majorCategories.find(mc => mc.code === code);
          return c ? c.name : code;
        }).join('、') : '';
        return `
          <div class="popular-category fade-in" style="animation-delay: ${i * 0.15}s">
            <span class="popular-cat-emoji">${cat.emoji || '📂'}</span>
            <h4 class="popular-cat-name">${cat.name}</h4>
            <p class="popular-cat-desc">${cat.description || ''}</p>
            <div class="popular-cat-official">
              <span class="tag">对应学科: ${officialCats}</span>
            </div>
          </div>
        `;
      }).join('');
    },

    renderMajorCards(majors) {
      const container = $('#majorCardsGrid');
      if (!majors || majors.length === 0) {
        container.innerHTML = '<p class="no-data">请先完成以上测评以获得推荐</p>';
        return;
      }
      container.innerHTML = majors.map((m, i) => {
        const gradNeed = m.gradSchoolNecessity || '可选';
        const gradTag = gradNeed === '高' ? 'red' : gradNeed === '中' ? 'orange' : 'green';
        const salaryText = m.salary && m.salary.mid ? m.salary.mid : '一般';
        const matchScoreHtml = m.matchScore ? `<span style="font-size: 0.8rem; color: #1abc9c; margin-left: 8px; font-weight: normal;">契合度: ${Math.round(m.matchScore)}%</span>` : '';
        
        // 经济合理约束警告
        const econLevel = AppState.results && AppState.results.constraints ? AppState.results.constraints.economicLevel : '';
        let warningHtml = '';
        if (econLevel === 'low') {
          if (gradNeed === '高') {
            warningHtml = `
              <div class="econ-warning-danger">
                ⚠️ 学制长/建议考研，请结合家庭财务与时间成本理性选择
              </div>
            `;
          } else if (gradNeed === '中') {
            warningHtml = `
              <div class="econ-warning-warning">
                💡 该专业考研比例较高，建议结合长线学业投入成本理性考量
              </div>
            `;
          }
        }

        return `
          <div class="major-card fade-in" style="animation-delay: ${i * 0.08}s">
            <div class="major-card-header">
              <h4 class="major-card-name">${m.name} ${matchScoreHtml}</h4>
              <span class="major-card-category">${m.category || ''}</span>
            </div>
            <div class="major-card-body">
              <p class="major-card-desc">${m.description || ''}</p>
              <div class="major-card-detail">
                <div class="detail-item">
                  <span class="detail-label">📚 核心课程</span>
                  <span class="detail-value">${(m.coreCourses || []).join('、')}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">💼 就业方向</span>
                  <span class="detail-value">${(m.careerPaths || []).join('、')}</span>
                </div>
              </div>
              <div class="major-card-tags">
                <span class="tag">💰 薪资 ${salaryText}</span>
                <span class="tag ${gradTag}">🎓 考研 ${gradNeed}</span>
              </div>
              ${warningHtml}
            </div>
          </div>
        `;
      }).join('');
    },

    renderPitfalls() {
      const container = $('#pitfallsGrid');
      const pitfalls = DATA.pitfalls || [];
      container.innerHTML = pitfalls.map((p, i) => `
        <div class="pitfall-card ${p.severity || 'warning'} fade-in" style="animation-delay: ${i * 0.1}s">
          <div class="pitfall-icon">${p.severity === 'danger' ? '🚨' : p.severity === 'info' ? '💡' : '⚠️'}</div>
          <div class="pitfall-content">
            <h4 class="pitfall-title">${p.title}</h4>
            <p class="pitfall-desc">${p.description}</p>
            <p class="pitfall-advice">✅ ${p.correctApproach}</p>
          </div>
        </div>
      `).join('');
    }
  };

  // ============================================================
  // 事件绑定
  // ============================================================
  function bindEvents() {
    // 开始按钮
    $('#startBtn').addEventListener('click', () => {
      ScreenManager.go('riasec');
      QuestionRenderer.renderRiasecQuestion(0);
    });

    // ---- RIASEC 导航 ----
    $('#riasecPrev').addEventListener('click', () => {
      const idx = AppState.riasec.currentIndex;
      if (idx === 0) {
        ScreenManager.go('welcome');
      } else {
        AppState.riasec.currentIndex--;
        QuestionRenderer.renderRiasecQuestion(AppState.riasec.currentIndex);
      }
    });
    $('#riasecNext').addEventListener('click', () => {
      const idx = AppState.riasec.currentIndex;
      const total = DATA.riasecQuestions.length;
      if (!AppState.riasec.answers[idx]) {
        shakeElement($('#riasecQuestionArea .question-card'));
        return;
      }
      if (idx >= total - 1) {
        ScreenManager.go('ability');
        QuestionRenderer.renderAbilityQuestion(0);
      } else {
        AppState.riasec.currentIndex++;
        QuestionRenderer.renderRiasecQuestion(AppState.riasec.currentIndex);
      }
    });

    // ---- 能力评估导航 ----
    $('#abilityPrev').addEventListener('click', () => {
      const idx = AppState.ability.currentIndex;
      if (idx === 0) {
        ScreenManager.go('riasec');
        QuestionRenderer.renderRiasecQuestion(AppState.riasec.currentIndex);
      } else {
        AppState.ability.currentIndex--;
        QuestionRenderer.renderAbilityQuestion(AppState.ability.currentIndex);
      }
    });
    $('#abilityNext').addEventListener('click', () => {
      const idx = AppState.ability.currentIndex;
      const total = DATA.abilityQuestions.length;
      if (AppState.ability.answers[idx] == null) {
        shakeElement($('#abilityQuestionArea .question-card'));
        return;
      }
      if (idx >= total - 1) {
        ScreenManager.go('values');
        QuestionRenderer.renderValuesQuestion(0);
      } else {
        AppState.ability.currentIndex++;
        QuestionRenderer.renderAbilityQuestion(AppState.ability.currentIndex);
      }
    });

    // ---- 价值观导航 ----
    $('#valuesPrev').addEventListener('click', () => {
      const idx = AppState.values.currentIndex;
      if (idx === 0) {
        ScreenManager.go('ability');
        QuestionRenderer.renderAbilityQuestion(AppState.ability.currentIndex);
      } else {
        AppState.values.currentIndex--;
        QuestionRenderer.renderValuesQuestion(AppState.values.currentIndex);
      }
    });
    $('#valuesNext').addEventListener('click', () => {
      const idx = AppState.values.currentIndex;
      const total = DATA.valuesQuestions.length;
      if (AppState.values.answers[idx] == null) {
        shakeElement($('#valuesQuestionArea .question-card'));
        return;
      }
      if (idx >= total - 1) {
        ScreenManager.go('personality');
        QuestionRenderer.renderPersonalityQuestion(0);
      } else {
        AppState.values.currentIndex++;
        QuestionRenderer.renderValuesQuestion(AppState.values.currentIndex);
      }
    });

    // ---- 性格特质导航 ----
    $('#personalityPrev').addEventListener('click', () => {
      const idx = AppState.personality.currentIndex;
      if (idx === 0) {
        ScreenManager.go('values');
        QuestionRenderer.renderValuesQuestion(AppState.values.currentIndex);
      } else {
        AppState.personality.currentIndex--;
        QuestionRenderer.renderPersonalityQuestion(AppState.personality.currentIndex);
      }
    });
    $('#personalityNext').addEventListener('click', () => {
      const idx = AppState.personality.currentIndex;
      const total = DATA.bigFiveQuestions.length;
      if (!AppState.personality.answers[idx]) {
        shakeElement($('#personalityQuestionArea .question-card'));
        return;
      }
      if (idx >= total - 1) {
        ScreenManager.go('constraints');
      } else {
        AppState.personality.currentIndex++;
        QuestionRenderer.renderPersonalityQuestion(AppState.personality.currentIndex);
      }
    });

    // ---- 现实约束导航 ----
    $('#constraintsPrev').addEventListener('click', () => {
      ScreenManager.go('personality');
      QuestionRenderer.renderPersonalityQuestion(AppState.personality.currentIndex);
    });
    $('#generateReportBtn').addEventListener('click', () => {
      ScreenManager.go('results');
    });

    // ---- Chip 选择 ----
    $$('.chip-group').forEach(group => {
      group.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          // 如果是"都可以"或"传统文/理科"这种独占选项
          if (chip.dataset.value === 'any' || chip.dataset.value === 'traditional') {
            group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
          } else {
            // 取消独占选项
            group.querySelectorAll('.chip[data-value="any"], .chip[data-value="traditional"]').forEach(c => c.classList.remove('selected'));
            chip.classList.toggle('selected');
          }
        });
      });
    });

    // ---- 打印 ----
    $('#btnPrint').addEventListener('click', () => {
      window.print();
    });

    // ---- 重新测评 ----
    $('#btnRestart').addEventListener('click', () => {
      if (confirm('确定要重新开始吗？当前的答题记录将会清除。')) {
        // 重置状态
        AppState.riasec = { currentIndex: 0, answers: [] };
        AppState.ability = { currentIndex: 0, answers: [] };
        AppState.values = { currentIndex: 0, answers: [] };
        AppState.personality = { currentIndex: 0, answers: [] };
        AppState.results = null;
        // 重置表单
        $$('.chip.selected').forEach(c => c.classList.remove('selected'));
        $$('.form-select').forEach(s => s.value = '');
        ScreenManager.go('welcome');
      }
    });

    // ---- 主题变化时重绘图表 ----
    const observer = new MutationObserver(() => {
      if (AppState.results) {
        ReportRenderer.renderRadarChart(AppState.results.riasecScores);
        ReportRenderer.renderBarChart(AppState.results.abilityScores);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ---- 窗口 resize 重绘图表 ----
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (AppState.results && AppState.currentScreen === 'results') {
          ReportRenderer.renderRadarChart(AppState.results.riasecScores);
          ReportRenderer.renderBarChart(AppState.results.abilityScores);
        }
      }, 300);
    });
  }

  // 抖动动画
  function shakeElement(el) {
    if (!el) return;
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 500);
  }

  // ============================================================
  // 初始化
  // ============================================================
  function init() {
    ThemeManager.init();
    ProgressManager.init();
    ProgressManager.update('welcome');
    bindEvents();
  }

  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
