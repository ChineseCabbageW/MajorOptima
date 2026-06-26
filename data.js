/**
 * ============================================================
 * 中国高中生专业选择引导工具 - 完整数据文件
 * ============================================================
 * 数据涵盖：
 *   1. RIASEC 兴趣测评题库
 *   2. 能力自评题库
 *   3. 价值观题库
 *   4. 性格特质题库
 *   5. 学科门类与专业数据
 *   6. 通俗分类
 *   7. RIASEC → 学科映射
 *   8. 踩坑警示
 *   9. RIASEC 类型描述
 * ============================================================
 */

window.APP_DATA = {

  // ============================================================
  // 1. RIASEC 兴趣测评题库（18题，配对比较）
  //    每种类型 R/I/A/S/E/C 各出现 3 次作为选项
  // ============================================================
  riasecQuestions: [
    // 1. R vs I
    { id: "q1", optionA: { text: "在创客实验室里动手组装一台3D打印机", type: "R" }, optionB: { text: "研究一道数学难题，尝试用多种方法证明", type: "I" } },
    // 2. R vs A
    { id: "q2", optionA: { text: "学习使用木工工具亲手制作一件实木家具", type: "R" }, optionB: { text: "周末在家写一首原创歌曲或拍一段创意短视频", type: "A" } },
    // 3. R vs S
    { id: "q3", optionA: { text: "拆解并修理家里坏掉的小家电", type: "R" }, optionB: { text: "去敬老院做义工，陪老人聊天散步", type: "S" } },
    // 4. R vs E
    { id: "q4", optionA: { text: "参加机器人社团，调试程序让机器人动起来", type: "R" }, optionB: { text: "竞选社团外联部部长，去拉赞助商谈合作", type: "E" } },
    // 5. R vs C
    { id: "q5", optionA: { text: "在野外勘探采集矿石标本", type: "R" }, optionB: { text: "整理班级电脑里的文件，按科目和日期严格分类", type: "C" } },
    // 6. I vs A
    { id: "q6", optionA: { text: "收集气象数据，分析气候变化的规律", type: "I" }, optionB: { text: "用水彩画一幅风景画，描绘大自然的美", type: "A" } },
    // 7. I vs S
    { id: "q7", optionA: { text: "在实验室里独立完成一个化学反应观察实验", type: "I" }, optionB: { text: "担任心理委员，倾听并开导有烦恼的同学", type: "S" } },
    // 8. I vs E
    { id: "q8", optionA: { text: "独自深入研究一个生物学课题，写出学术报告", type: "I" }, optionB: { text: "带领团队参加商业模拟赛，做CEO制定战略", type: "E" } },
    // 9. I vs C
    { id: "q9", optionA: { text: "阅读关于人工智能最新算法的科研论文", type: "I" }, optionB: { text: "负责录入全校期末考试的成绩，确保数据零差错", type: "C" } },
    // 10. A vs S
    { id: "q10", optionA: { text: "为学校艺术节设计舞台海报和视觉方案", type: "A" }, optionB: { text: "在班级里帮同学调解矛盾，做大家的知心朋友", type: "S" } },
    // 11. A vs E
    { id: "q11", optionA: { text: "为微电影比赛创作感人的剧本并担任导演", type: "A" }, optionB: { text: "负责微电影比赛的场地协调、宣传和团队管理", type: "E" } },
    // 12. A vs C
    { id: "q12", optionA: { text: "自由创作一组校园生活漫画并投稿", type: "A" }, optionB: { text: "负责校刊社的账目核对与印刷成本登记", type: "C" } },
    // 13. S vs E
    { id: "q13", optionA: { text: "开设同伴辅导站，一对一帮助学习困难的同学", type: "S" }, optionB: { text: "在模拟联合国大会上代表某国发言，进行谈判辩论", type: "E" } },
    // 14. S vs C
    { id: "q14", optionA: { text: "假期去特殊学校做志愿者，陪伴特殊儿童", type: "S" }, optionB: { text: "负责班级图书角的书籍整理、借阅登记和逾期提醒", type: "C" } },
    // 15. E vs C
    { id: "q15", optionA: { text: "策划校园跳蚤市场，带领团队完成招商和宣传", type: "E" }, optionB: { text: "帮老师整理全班的体测数据，制作成严谨的Excel表格", type: "C" } }
  ],

  // ============================================================
  // 2. 能力自评题库（7题，5级量表）
  // ============================================================
  abilityQuestions: [
    {
      id: "ab1",
      dimension: "language",
      question: "你觉得自己在写作文、演讲、表达观点方面的能力如何？",
      description: "包括写作、口头表达、阅读理解、外语学习等",
      levels: [
        { value: 1, label: "很弱", desc: "写作经常跑题，不敢在众人面前说话" },
        { value: 2, label: "偏弱", desc: "能基本表达，但经常词不达意" },
        { value: 3, label: "一般", desc: "能清楚表达自己的想法，作文中等水平" },
        { value: 4, label: "较强", desc: "作文经常被当范文，演讲比赛拿过奖" },
        { value: 5, label: "很强", desc: "文笔出众，善于说服他人，外语学得很好" }
      ]
    },
    {
      id: "ab2",
      dimension: "logic",
      question: "你觉得自己在数学运算、逻辑推理、科学分析方面的能力如何？",
      description: "包括数学计算、逻辑推理、数据分析、编程思维等",
      levels: [
        { value: 1, label: "很弱", desc: "数学长期不及格，一看公式就头疼" },
        { value: 2, label: "偏弱", desc: "基础题能做，稍难的推理题就困难" },
        { value: 3, label: "一般", desc: "数学中等水平，逻辑题需要时间但能做出来" },
        { value: 4, label: "较强", desc: "数学成绩稳定前列，喜欢挑战难题" },
        { value: 5, label: "很强", desc: "数学竞赛水平，编程或数据分析得心应手" }
      ]
    },
    {
      id: "ab3",
      dimension: "spatial",
      question: "你觉得自己在空间想象、立体几何、地图识别方面的能力如何？",
      description: "包括立体几何、机械制图、建筑空间感知、地理读图等",
      levels: [
        { value: 1, label: "很弱", desc: "看不懂立体几何图形，方向感很差" },
        { value: 2, label: "偏弱", desc: "简单的立体图形能理解，但复杂的就困难" },
        { value: 3, label: "一般", desc: "立体几何成绩中等，能看懂基本的工程图" },
        { value: 4, label: "较强", desc: "空间想象力好，立体几何是强项" },
        { value: 5, label: "很强", desc: "能轻松在脑中旋转和操作三维物体" }
      ]
    },
    {
      id: "ab4",
      dimension: "artistic",
      question: "你觉得自己在美术、音乐、设计等艺术方面的感知力如何？",
      description: "包括色彩感知、音乐鉴赏、审美判断、创意设计等",
      levels: [
        { value: 1, label: "很弱", desc: "对美术音乐不感兴趣，觉得自己没有审美" },
        { value: 2, label: "偏弱", desc: "能欣赏但不擅长创作，审美比较大众化" },
        { value: 3, label: "一般", desc: "有一定审美能力，偶尔会被艺术作品打动" },
        { value: 4, label: "较强", desc: "有较好的审美品位，擅长某种艺术形式" },
        { value: 5, label: "很强", desc: "艺术感知力出众，常有独特的审美见解和创作" }
      ]
    },
    {
      id: "ab5",
      dimension: "interpersonal",
      question: "你觉得自己在与人交流、团队合作、理解他人方面的能力如何？",
      description: "包括沟通表达、团队协作、共情理解、冲突处理等",
      levels: [
        { value: 1, label: "很弱", desc: "不善社交，与人沟通常感到紧张和不自在" },
        { value: 2, label: "偏弱", desc: "能与熟人正常交流，但不擅长主动社交" },
        { value: 3, label: "一般", desc: "社交能力正常，团队合作基本顺畅" },
        { value: 4, label: "较强", desc: "善于与人打交道，经常被推选为班干部" },
        { value: 5, label: "很强", desc: "天生社交达人，能与任何人迅速建立良好关系" }
      ]
    },
    {
      id: "ab6",
      dimension: "intrapersonal",
      question: "你觉得自己对自身性格、优缺点、情绪的了解程度如何？",
      description: "包括自我反思、情绪管理、目标规划、自我激励等",
      levels: [
        { value: 1, label: "很弱", desc: "不太了解自己想要什么，经常感到迷茫" },
        { value: 2, label: "偏弱", desc: "模糊知道自己的一些特点，但不够清晰" },
        { value: 3, label: "一般", desc: "对自己有基本了解，偶尔会自我反思" },
        { value: 4, label: "较强", desc: "清楚自己的优缺点，有比较明确的目标" },
        { value: 5, label: "很强", desc: "非常了解自己，善于自我调节和长期规划" }
      ]
    },
    {
      id: "ab7",
      dimension: "handson",
      question: "你觉得自己在动手操作、实验实践、体育运动方面的能力如何？",
      description: "包括实验操作、手工制作、体育运动、工具使用等",
      levels: [
        { value: 1, label: "很弱", desc: "手笨脚笨，实验课经常出状况" },
        { value: 2, label: "偏弱", desc: "动手能力一般，按说明书操作还行" },
        { value: 3, label: "一般", desc: "动手能力中等，实验课能顺利完成" },
        { value: 4, label: "较强", desc: "喜欢动手，实验操作熟练，体育也不错" },
        { value: 5, label: "很强", desc: "心灵手巧，什么都能拆能装，运动能力出色" }
      ]
    }
  ],

  // ============================================================
  // 3. 价值观题库（6题）
  // ============================================================
  valuesQuestions: [
    {
      id: "v1",
      dimension: "stability",
      question: "关于未来职业的稳定性，你更倾向于？",
      options: [
        { value: 5, label: "非常看重稳定，最好是铁饭碗（公务员、事业编等）" },
        { value: 4, label: "比较看重，希望有稳定的收入和福利保障" },
        { value: 3, label: "无所谓，稳定和挑战都能接受" },
        { value: 2, label: "不太在意稳定，愿意承受一定的不确定性换取更多可能" },
        { value: 1, label: "完全不在意稳定，喜欢充满变化和挑战的工作" }
      ]
    },
    {
      id: "v2",
      dimension: "income",
      question: "关于未来的收入水平，你的期待是？",
      options: [
        { value: 5, label: "收入是第一考虑因素，哪个赚钱多选哪个" },
        { value: 4, label: "收入很重要，希望能达到中上水平" },
        { value: 3, label: "够用就行，不会为了钱做不喜欢的事" },
        { value: 2, label: "收入不是主要考虑，更看重个人成长和兴趣" },
        { value: 1, label: "只要能养活自己，愿意为理想和热爱牺牲收入" }
      ]
    },
    {
      id: "v3",
      dimension: "contribution",
      question: "关于工作的社会价值，你怎么看？",
      options: [
        { value: 5, label: "必须做对社会有重大意义的工作，这是核心驱动力" },
        { value: 4, label: "希望工作能帮助他人，有一定的社会价值" },
        { value: 3, label: "有社会价值最好，但不是决定性因素" },
        { value: 2, label: "偶尔想想社会贡献，但更关注个人发展" },
        { value: 1, label: "没太想过这个问题，更关注自己的感受" }
      ]
    },
    {
      id: "v4",
      dimension: "creativity",
      question: "关于工作中的创造性和创新空间，你怎么看？",
      options: [
        { value: 5, label: "创造力是灵魂，必须做充满创新和挑战的工作" },
        { value: 4, label: "希望工作有创造空间，不要太重复单调" },
        { value: 3, label: "有一些创新机会就好，不需要天天都有新挑战" },
        { value: 2, label: "更喜欢有章可循的工作，过多创新让我有压力" },
        { value: 1, label: "喜欢按部就班、流程清晰的工作" }
      ]
    },
    {
      id: "v5",
      dimension: "freedom",
      question: "关于工作的时间和空间自由度，你怎么看？",
      options: [
        { value: 5, label: "自由至上，想做数字游民或自由职业者" },
        { value: 4, label: "希望弹性工作，不想被打卡和坐班束缚" },
        { value: 3, label: "有一定自由度就好，朝九晚五也能接受" },
        { value: 2, label: "规律的作息让我更有安全感，不太需要自由度" },
        { value: 1, label: "完全接受严格的工作时间和制度安排" }
      ]
    },
    {
      id: "v6",
      dimension: "status",
      question: "关于职业的社会声望和地位，你怎么看？",
      options: [
        { value: 5, label: "很在意，希望从事受人尊敬的体面职业" },
        { value: 4, label: "比较在意，希望家人说起来有面子" },
        { value: 3, label: "有一定社会认可就好，不刻意追求" },
        { value: 2, label: "不太在意别人怎么看，自己喜欢就好" },
        { value: 1, label: "完全不在意，社会评价与我无关" }
      ]
    }
  ],

  // ============================================================
  // 4. 性格特质题库（8题，4维度各2题）
  // ============================================================
  bigFiveQuestions: [
    { id: "bf1", dimension: "O", dimensionLabel: "开放性", reverse: false, question: "我喜欢尝试新事物、探索未知领域（如新爱好、新观点）。" },
    { id: "bf2", dimension: "O", dimensionLabel: "开放性", reverse: true, question: "我更喜欢熟悉且有规律的日常生活，对完全陌生的事物感到抗拒。" },
    { id: "bf3", dimension: "C", dimensionLabel: "责任心", reverse: false, question: "做事之前，我总是会提前制定详细的计划并严格执行。" },
    { id: "bf4", dimension: "C", dimensionLabel: "责任心", reverse: true, question: "我做事比较随意，经常把任务拖延到最后一刻才开始。" },
    { id: "bf5", dimension: "E", dimensionLabel: "外向性", reverse: false, question: "在人群中，我常常是主动开启话题、活跃气氛的那个人。" },
    { id: "bf6", dimension: "E", dimensionLabel: "外向性", reverse: true, question: "在人多喧闹的社交场合，我通常会保持沉默或尽量边缘化。" },
    { id: "bf7", dimension: "A", dimensionLabel: "宜人性", reverse: false, question: "我非常在意他人的感受，很容易同情那些遇到困难的人。" },
    { id: "bf8", dimension: "A", dimensionLabel: "宜人性", reverse: true, question: "比起照顾别人的情绪，我更倾向于直接指出问题，甚至显得有些冷漠。" },
    { id: "bf9", dimension: "N", dimensionLabel: "神经质", reverse: false, question: "面对突发的考试或意外变故，我很容易感到焦虑和紧张。" },
    { id: "bf10", dimension: "N", dimensionLabel: "神经质", reverse: true, question: "面对压力和危机，我通常能保持情绪稳定，不容易感到恐慌。" }
  ],

  // ============================================================
  // 5. 学科门类与专业数据（教育部12个本科学科门类）
  // ============================================================
  majorCategories: [
  {
    "code": "01",
    "name": "哲学",
    "description": "研究世界观、人生观、价值观等根本问题，培养批判性思维和逻辑分析能力。",
    "majors": [
      {
        "name": "哲学",
        "description": "研究存在、认识、价值等根本问题的学科",
        "coreCourses": [
          "马克思主义哲学",
          "西方哲学史",
          "中国哲学史",
          "逻辑学",
          "伦理学"
        ],
        "careerPaths": [
          "公务员",
          "高校教师",
          "出版编辑",
          "文化传媒",
          "企业管理"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "A"
        ],
        "abilityNeeds": {
          "language": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "逻辑学",
        "description": "研究推理、论证和有效思维形式的学科",
        "coreCourses": [
          "形式逻辑",
          "数理逻辑",
          "归纳逻辑",
          "模态逻辑",
          "计算机科学基础"
        ],
        "careerPaths": [
          "人工智能研究",
          "软件工程",
          "法律逻辑分析",
          "学术研究",
          "数据分析"
        ],
        "salary": {
          "high": "20-35万",
          "mid": "10-18万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "language": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "宗教学",
        "description": "研究宗教现象、宗教历史和宗教文化的学科",
        "coreCourses": [
          "宗教学概论",
          "中国宗教史",
          "世界宗教史",
          "宗教哲学",
          "宗教社会学"
        ],
        "careerPaths": [
          "学术研究",
          "文化交流",
          "博物馆策展",
          "出版编辑",
          "公务员"
        ],
        "salary": {
          "high": "12-20万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "language": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "伦理学",
        "description": "研究道德原则和行为规范的学科",
        "coreCourses": [
          "伦理学原理",
          "应用伦理学",
          "生命伦理学",
          "中西伦理思想比较",
          "政治哲学"
        ],
        "careerPaths": [
          "伦理咨询",
          "政策分析",
          "公务员",
          "学术研究",
          "企业合规"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "language": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "马克思主义哲学",
        "description": "研究马克思主义哲学理论体系及其当代发展",
        "coreCourses": [
          "辩证唯物主义",
          "历史唯物主义",
          "马克思主义经典著作导读",
          "政治经济学",
          "科学社会主义"
        ],
        "careerPaths": [
          "高校思政教师",
          "党政机关",
          "理论研究",
          "出版传媒",
          "企业党务"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "language": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      }
    ]
  },
  {
    "code": "02",
    "name": "经济学",
    "description": "研究资源配置、经济运行规律和经济政策，培养分析经济问题和制定决策的能力。",
    "majors": [
      {
        "name": "经济学",
        "description": "研究经济运行规律和经济政策的基础学科",
        "coreCourses": [
          "微观经济学",
          "宏观经济学",
          "计量经济学",
          "政治经济学",
          "博弈论"
        ],
        "careerPaths": [
          "银行/证券/基金",
          "政府经济部门",
          "经济研究机构",
          "企业战略分析",
          "高校教师"
        ],
        "salary": {
          "high": "30-80万",
          "mid": "12-25万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "E"
        ],
        "abilityNeeds": {
          "logic": 4
        },
        "valuesFit": [
          "income",
          "status"
        ]
      },
      {
        "name": "金融学",
        "description": "研究货币、银行、投资等金融活动的学科",
        "coreCourses": [
          "金融学",
          "公司金融",
          "投资学",
          "金融风险管理",
          "金融工程"
        ],
        "careerPaths": [
          "投资银行",
          "基金公司",
          "商业银行",
          "保险公司",
          "金融科技"
        ],
        "salary": {
          "high": "50-150万",
          "mid": "15-35万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "E",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "income",
          "status"
        ]
      },
      {
        "name": "国际经济与贸易",
        "description": "研究国际贸易规则和跨境经济活动的学科",
        "coreCourses": [
          "国际贸易理论",
          "国际金融",
          "国际商法",
          "跨境电商",
          "外贸实务"
        ],
        "careerPaths": [
          "外贸公司",
          "跨国企业",
          "海关",
          "国际物流",
          "跨境电商"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "E",
          "C"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "income",
          "freedom"
        ]
      },
      {
        "name": "财政学",
        "description": "研究政府收支活动和公共资源配置的学科",
        "coreCourses": [
          "财政学",
          "税收学",
          "政府预算",
          "国债学",
          "公共经济学"
        ],
        "careerPaths": [
          "税务局",
          "财政局",
          "审计署",
          "会计师事务所",
          "银行"
        ],
        "salary": {
          "high": "25-45万",
          "mid": "10-20万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "C",
          "E"
        ],
        "abilityNeeds": {
          "logic": 3
        },
        "valuesFit": [
          "stability",
          "status"
        ]
      },
      {
        "name": "保险学",
        "description": "研究风险管理和保险制度的学科",
        "coreCourses": [
          "保险学原理",
          "精算学",
          "风险管理",
          "人寿保险",
          "财产保险"
        ],
        "careerPaths": [
          "保险公司",
          "精算师",
          "风险评估",
          "银行",
          "社会保障部门"
        ],
        "salary": {
          "high": "30-60万",
          "mid": "12-25万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "C",
          "I"
        ],
        "abilityNeeds": {
          "logic": 3,
          "interpersonal": 3
        },
        "valuesFit": [
          "stability",
          "income"
        ]
      },
      {
        "name": "统计学",
        "description": "研究数据收集、分析和推断的学科",
        "coreCourses": [
          "概率论",
          "数理统计",
          "回归分析",
          "时间序列分析",
          "多元统计分析"
        ],
        "careerPaths": [
          "数据分析师",
          "量化分析",
          "市场调研",
          "政府统计部门",
          "互联网公司"
        ],
        "salary": {
          "high": "35-70万",
          "mid": "15-30万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4
        },
        "valuesFit": [
          "income",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      }
    ]
  },
  {
    "code": "03",
    "name": "法学",
    "description": "研究法律制度、法律关系和法律实践，培养法律思维和维护社会公正的能力。",
    "majors": [
      {
        "name": "法学",
        "description": "研究法律体系和法律实践的学科",
        "coreCourses": [
          "宪法学",
          "民法学",
          "刑法学",
          "行政法",
          "法理学"
        ],
        "careerPaths": [
          "律师",
          "法官/检察官",
          "公务员",
          "企业法务",
          "法律顾问"
        ],
        "salary": {
          "high": "30-100万",
          "mid": "10-25万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "E",
          "I"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "status",
          "income"
        ]
      },
      {
        "name": "政治学与行政学",
        "description": "研究政治制度、行政管理和公共政策的学科",
        "coreCourses": [
          "政治学原理",
          "行政管理学",
          "中国政治制度",
          "比较政治学",
          "公共政策学"
        ],
        "careerPaths": [
          "公务员",
          "事业单位",
          "党政机关",
          "智库研究",
          "新闻媒体"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "E",
          "S"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "status",
          "contribution"
        ]
      },
      {
        "name": "社会学",
        "description": "研究社会结构、社会关系和社会变迁的学科",
        "coreCourses": [
          "社会学概论",
          "社会研究方法",
          "社会统计学",
          "社会心理学",
          "城市社会学"
        ],
        "careerPaths": [
          "社会调查",
          "政策研究",
          "NGO组织",
          "人力资源",
          "市场调研"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "language": 3,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "creativity"
        ]
      },
      {
        "name": "社会工作",
        "description": "运用专业方法帮助个人和群体解决社会问题的学科",
        "coreCourses": [
          "社会工作导论",
          "个案社会工作",
          "小组社会工作",
          "社区社会工作",
          "社会福利思想"
        ],
        "careerPaths": [
          "社工机构",
          "社区工作者",
          "公益组织",
          "企业社会责任",
          "政府民政部门"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "S",
          "E"
        ],
        "abilityNeeds": {
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "stability"
        ]
      },
      {
        "name": "思想政治教育",
        "description": "培养从事思想政治教育工作的专业人才",
        "coreCourses": [
          "思想政治教育学原理",
          "马克思主义理论",
          "教育学",
          "心理学",
          "政治学"
        ],
        "careerPaths": [
          "中学政治教师",
          "高校辅导员",
          "党政机关",
          "企业党务",
          "思政研究"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "S",
          "E"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "stability",
          "contribution"
        ]
      },
      {
        "name": "国际政治",
        "description": "研究国际关系和国际政治格局的学科",
        "coreCourses": [
          "国际政治学",
          "国际关系史",
          "外交学",
          "国际组织",
          "国际法"
        ],
        "careerPaths": [
          "外交部门",
          "国际组织",
          "涉外企业",
          "智库研究",
          "新闻媒体"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "E",
          "I"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "status",
          "contribution"
        ]
      }
    ]
  },
  {
    "code": "04",
    "name": "教育学",
    "description": "研究教育现象、教育规律和教育实践，培养教育工作者和教育研究人才。",
    "majors": [
      {
        "name": "教育学",
        "description": "研究教育理论和教育规律的基础学科",
        "coreCourses": [
          "教育学原理",
          "教育心理学",
          "教育史",
          "课程与教学论",
          "教育研究方法"
        ],
        "careerPaths": [
          "教育行政",
          "教育研究",
          "课程设计",
          "教育培训",
          "出版编辑"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "S",
          "I"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 4
        },
        "valuesFit": [
          "stability",
          "contribution"
        ]
      },
      {
        "name": "学前教育",
        "description": "研究幼儿教育理论和实践的学科",
        "coreCourses": [
          "学前教育学",
          "幼儿心理学",
          "幼儿园课程",
          "学前卫生学",
          "儿童文学"
        ],
        "careerPaths": [
          "幼儿园教师",
          "早教机构",
          "幼教管理",
          "幼教研究",
          "儿童产品设计"
        ],
        "salary": {
          "high": "12-20万",
          "mid": "6-10万",
          "low": "4-6万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "S",
          "A"
        ],
        "abilityNeeds": {
          "artistic": 3,
          "interpersonal": 4
        },
        "valuesFit": [
          "stability",
          "contribution"
        ]
      },
      {
        "name": "特殊教育",
        "description": "研究特殊儿童教育方法和康复训练的学科",
        "coreCourses": [
          "特殊教育学",
          "残疾儿童心理学",
          "行为矫正技术",
          "手语",
          "教育康复学"
        ],
        "careerPaths": [
          "特教学校教师",
          "康复中心",
          "社会福利机构",
          "教育研究",
          "公益组织"
        ],
        "salary": {
          "high": "12-20万",
          "mid": "6-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "S",
          "I"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 4
        },
        "valuesFit": [
          "stability",
          "contribution"
        ]
      },
      {
        "name": "教育技术学",
        "description": "研究信息技术在教育中应用的学科",
        "coreCourses": [
          "教育技术学导论",
          "教学设计",
          "多媒体技术",
          "在线教育开发",
          "学习科学"
        ],
        "careerPaths": [
          "教育科技公司",
          "在线教育平台",
          "企业培训",
          "数字化教学设计",
          "教育软件开发"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "10-18万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 3,
          "handson": 3
        },
        "valuesFit": [
          "stability",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "体育教育",
        "description": "培养体育教师和体育工作者的学科",
        "coreCourses": [
          "运动解剖学",
          "运动生理学",
          "体育教学论",
          "运动训练学",
          "体育心理学"
        ],
        "careerPaths": [
          "中小学体育教师",
          "体育教练",
          "健身行业",
          "体育管理",
          "运动康复"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "7-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "R",
          "S"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "stability",
          "freedom"
        ]
      }
    ]
  },
  {
    "code": "05",
    "name": "文学",
    "description": "研究语言、文学和传播的学科门类，培养语言运用和文化传播能力。",
    "majors": [
      {
        "name": "汉语言文学",
        "description": "研究中国语言和文学作品的学科",
        "coreCourses": [
          "中国古代文学",
          "中国现当代文学",
          "古代汉语",
          "文学理论",
          "语言学概论"
        ],
        "careerPaths": [
          "中学语文教师",
          "编辑出版",
          "新闻记者",
          "文案策划",
          "公务员"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "A",
          "I"
        ],
        "abilityNeeds": {
          "language": 4
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "新闻学",
        "description": "研究新闻采写编评和传播规律的学科",
        "coreCourses": [
          "新闻学概论",
          "新闻采访与写作",
          "新闻编辑",
          "新闻评论",
          "传媒伦理"
        ],
        "careerPaths": [
          "记者",
          "编辑",
          "新媒体运营",
          "公关传播",
          "政府新闻部门"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "E"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "creativity",
          "status"
        ]
      },
      {
        "name": "广告学",
        "description": "研究广告策划、创意和传播的学科",
        "coreCourses": [
          "广告学概论",
          "广告策划",
          "广告创意与设计",
          "消费者行为学",
          "品牌管理"
        ],
        "careerPaths": [
          "广告公司",
          "品牌策划",
          "市场营销",
          "新媒体运营",
          "公关公司"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "E"
        ],
        "abilityNeeds": {
          "artistic": 4,
          "language": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "英语",
        "description": "系统学习英语语言和英美文化的学科",
        "coreCourses": [
          "综合英语",
          "英美文学",
          "翻译理论与实践",
          "语言学",
          "跨文化交际"
        ],
        "careerPaths": [
          "翻译",
          "外贸业务",
          "英语教师",
          "国际组织",
          "出版传媒"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "A",
          "S"
        ],
        "abilityNeeds": {
          "language": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "freedom",
          "status"
        ]
      },
      {
        "name": "网络与新媒体",
        "description": "研究数字媒体内容生产和网络传播的新兴学科",
        "coreCourses": [
          "新媒体概论",
          "数字内容制作",
          "数据新闻",
          "短视频创作",
          "社交媒体运营"
        ],
        "careerPaths": [
          "新媒体运营",
          "内容创作者",
          "数字营销",
          "短视频导演",
          "互联网产品"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "E"
        ],
        "abilityNeeds": {
          "language": 3,
          "artistic": 3
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "传播学",
        "description": "研究人类传播行为和传播规律的学科",
        "coreCourses": [
          "传播学概论",
          "传播研究方法",
          "舆论学",
          "跨文化传播",
          "传播政治经济学"
        ],
        "careerPaths": [
          "媒体机构",
          "互联网公司",
          "公关公司",
          "政府宣传部门",
          "学术研究"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "E"
        ],
        "abilityNeeds": {
          "language": 4
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      }
    ]
  },
  {
    "code": "06",
    "name": "历史学",
    "description": "研究人类社会发展的历史过程，培养史料分析和历史思维能力。",
    "majors": [
      {
        "name": "历史学",
        "description": "研究人类社会发展过程的基础学科",
        "coreCourses": [
          "中国古代史",
          "中国近现代史",
          "世界古代史",
          "世界近现代史",
          "史学理论"
        ],
        "careerPaths": [
          "中学历史教师",
          "博物馆",
          "文化遗产保护",
          "出版编辑",
          "公务员"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "A"
        ],
        "abilityNeeds": {
          "language": 4,
          "intrapersonal": 3
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ]
      },
      {
        "name": "考古学",
        "description": "通过实物遗存研究古代社会历史的学科",
        "coreCourses": [
          "考古学概论",
          "田野考古学",
          "文物鉴定",
          "博物馆学",
          "科技考古"
        ],
        "careerPaths": [
          "考古研究所",
          "博物馆",
          "文物保护单位",
          "拍卖行",
          "高校教师"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "spatial": 3
        },
        "valuesFit": [
          "contribution",
          "freedom"
        ]
      },
      {
        "name": "文物与博物馆学",
        "description": "研究文物保护和博物馆管理的学科",
        "coreCourses": [
          "博物馆学概论",
          "文物保护技术",
          "文物鉴定",
          "展览策划",
          "文化遗产管理"
        ],
        "careerPaths": [
          "博物馆",
          "文物保护",
          "拍卖公司",
          "文化旅游",
          "政府文化部门"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "A"
        ],
        "abilityNeeds": {
          "language": 4,
          "intrapersonal": 3
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ]
      },
      {
        "name": "世界史",
        "description": "研究世界各国和地区历史发展进程的学科",
        "coreCourses": [
          "世界通史",
          "地区国别史",
          "国际关系史",
          "西方史学史",
          "专题研究"
        ],
        "careerPaths": [
          "学术研究",
          "翻译",
          "国际交流",
          "外事部门",
          "出版传媒"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "A"
        ],
        "abilityNeeds": {
          "language": 4,
          "intrapersonal": 3
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ]
      },
      {
        "name": "文化遗产",
        "description": "研究文化遗产保护、传承与利用的学科",
        "coreCourses": [
          "文化遗产学",
          "非物质文化遗产",
          "遗产保护法规",
          "数字化保护技术",
          "文化产业管理"
        ],
        "careerPaths": [
          "文化遗产保护机构",
          "文旅部门",
          "城市规划",
          "博物馆",
          "文化创意产业"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "A"
        ],
        "abilityNeeds": {
          "language": 4,
          "intrapersonal": 3
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ]
      }
    ]
  },
  {
    "code": "07",
    "name": "理学",
    "description": "研究自然界基本规律的学科门类，是科学研究和技术创新的基础。",
    "majors": [
      {
        "name": "数学与应用数学",
        "description": "研究数量关系和空间结构的基础学科",
        "coreCourses": [
          "数学分析",
          "高等代数",
          "概率论",
          "实变函数",
          "常微分方程"
        ],
        "careerPaths": [
          "数学教师",
          "数据科学家",
          "量化分析师",
          "精算师",
          "学术研究"
        ],
        "salary": {
          "high": "30-70万",
          "mid": "12-25万",
          "low": "6-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 5
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "物理学",
        "description": "研究物质运动规律和基本相互作用的学科",
        "coreCourses": [
          "力学",
          "电磁学",
          "热力学",
          "量子力学",
          "固体物理"
        ],
        "careerPaths": [
          "科研机构",
          "高校教师",
          "半导体/芯片行业",
          "核能行业",
          "数据分析"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "spatial": 4
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "化学",
        "description": "研究物质组成、结构和变化规律的学科",
        "coreCourses": [
          "无机化学",
          "有机化学",
          "分析化学",
          "物理化学",
          "结构化学"
        ],
        "careerPaths": [
          "化工企业",
          "制药公司",
          "材料研发",
          "环境检测",
          "学术研究"
        ],
        "salary": {
          "high": "25-45万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "生物科学",
        "description": "研究生命现象和生命活动规律的学科",
        "coreCourses": [
          "细胞生物学",
          "分子生物学",
          "遗传学",
          "生物化学",
          "生态学"
        ],
        "careerPaths": [
          "生物制药",
          "基因检测",
          "科研院所",
          "农业科技",
          "环境保护"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4
        },
        "valuesFit": [
          "creativity",
          "contribution"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "心理学",
        "description": "研究人类心理活动和行为规律的学科",
        "coreCourses": [
          "普通心理学",
          "发展心理学",
          "社会心理学",
          "实验心理学",
          "心理统计学"
        ],
        "careerPaths": [
          "心理咨询师",
          "人力资源",
          "用户研究",
          "教育心理",
          "临床心理"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "freedom"
        ]
      },
      {
        "name": "地理科学",
        "description": "研究地球表层自然和人文地理环境的学科",
        "coreCourses": [
          "自然地理学",
          "人文地理学",
          "地理信息系统",
          "遥感概论",
          "城市规划原理"
        ],
        "careerPaths": [
          "地理教师",
          "城市规划",
          "GIS开发",
          "环境评估",
          "国土资源管理"
        ],
        "salary": {
          "high": "20-35万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "spatial": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "freedom"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "统计学",
        "description": "研究数据收集、分析和推断方法的学科",
        "coreCourses": [
          "概率论",
          "数理统计",
          "回归分析",
          "抽样调查",
          "多元统计分析"
        ],
        "careerPaths": [
          "数据分析师",
          "量化交易",
          "市场研究",
          "政府统计",
          "互联网公司"
        ],
        "salary": {
          "high": "35-70万",
          "mid": "15-30万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4
        },
        "valuesFit": [
          "contribution",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      }
    ]
  },
  {
    "code": "08",
    "name": "工学",
    "description": "应用自然科学原理解决工程技术问题的学科门类，是就业面最广的门类。",
    "majors": [
      {
        "name": "计算机科学与技术",
        "description": "研究计算机系统和软件开发的核心学科",
        "coreCourses": [
          "数据结构",
          "操作系统",
          "计算机网络",
          "算法设计",
          "数据库系统"
        ],
        "careerPaths": [
          "软件工程师",
          "算法工程师",
          "架构师",
          "产品经理",
          "创业"
        ],
        "salary": {
          "high": "40-100万+",
          "mid": "15-35万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "spatial": 3
        },
        "valuesFit": [
          "income",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "人工智能",
        "description": "研究智能系统和机器学习的前沿学科",
        "coreCourses": [
          "机器学习",
          "深度学习",
          "计算机视觉",
          "自然语言处理",
          "强化学习"
        ],
        "careerPaths": [
          "AI算法工程师",
          "机器学习工程师",
          "AI产品经理",
          "自动驾驶",
          "科研"
        ],
        "salary": {
          "high": "50-150万+",
          "mid": "20-45万",
          "low": "12-20万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 5
        },
        "valuesFit": [
          "income",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "电子信息工程",
        "description": "研究电子系统和信息处理技术的学科",
        "coreCourses": [
          "电路原理",
          "信号与系统",
          "数字电子技术",
          "通信原理",
          "电磁场理论"
        ],
        "careerPaths": [
          "芯片设计",
          "通信工程师",
          "嵌入式开发",
          "物联网",
          "电子产品研发"
        ],
        "salary": {
          "high": "30-60万",
          "mid": "12-25万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 3
        },
        "valuesFit": [
          "income",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "机械工程",
        "description": "研究机械设计、制造和自动化的传统工科",
        "coreCourses": [
          "工程力学",
          "机械设计基础",
          "机械制造工艺",
          "控制工程",
          "有限元分析"
        ],
        "careerPaths": [
          "机械设计工程师",
          "汽车制造",
          "航空航天",
          "工业机器人",
          "智能制造"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "spatial": 4,
          "handson": 4
        },
        "valuesFit": [
          "stability",
          "income"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "电气工程及其自动化",
        "description": "研究电能生产、传输和控制的学科",
        "coreCourses": [
          "电路理论",
          "电力系统分析",
          "电力电子技术",
          "自动控制原理",
          "电机学"
        ],
        "careerPaths": [
          "电网公司",
          "发电集团",
          "电力设计院",
          "新能源企业",
          "自动化公司"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-22万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 3
        },
        "valuesFit": [
          "stability",
          "income"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "土木工程",
        "description": "研究建筑物和基础设施设计与施工的学科",
        "coreCourses": [
          "结构力学",
          "混凝土结构设计",
          "土力学",
          "工程测量",
          "建筑施工"
        ],
        "careerPaths": [
          "建筑设计院",
          "施工单位",
          "房地产",
          "市政工程",
          "监理公司"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "C"
        ],
        "abilityNeeds": {
          "spatial": 4,
          "handson": 4
        },
        "valuesFit": [
          "stability",
          "income"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "软件工程",
        "description": "研究大规模软件系统的设计、开发和维护",
        "coreCourses": [
          "软件工程",
          "Java程序设计",
          "Web开发",
          "软件测试",
          "项目管理"
        ],
        "careerPaths": [
          "软件开发工程师",
          "全栈工程师",
          "技术经理",
          "创业",
          "互联网产品"
        ],
        "salary": {
          "high": "40-100万+",
          "mid": "15-30万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "spatial": 3
        },
        "valuesFit": [
          "income",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "自动化",
        "description": "研究自动控制系统和智能化技术的学科",
        "coreCourses": [
          "自动控制原理",
          "传感器技术",
          "嵌入式系统",
          "PLC编程",
          "机器人技术"
        ],
        "careerPaths": [
          "自动化工程师",
          "工业机器人",
          "智能制造",
          "航空航天",
          "新能源"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-22万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 3
        },
        "valuesFit": [
          "income",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "建筑学",
        "description": "研究建筑设计和城市规划的艺术与技术学科",
        "coreCourses": [
          "建筑设计",
          "建筑历史",
          "建筑构造",
          "城市规划原理",
          "建筑CAD"
        ],
        "careerPaths": [
          "建筑设计师",
          "城市规划师",
          "室内设计",
          "景观设计",
          "房地产开发"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "spatial": 4,
          "artistic": 4
        },
        "valuesFit": [
          "creativity",
          "status"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "生物医学工程",
        "description": "将工程技术应用于医学和健康领域的交叉学科",
        "coreCourses": [
          "生物医学工程导论",
          "医学成像原理",
          "生物力学",
          "生物材料",
          "医疗器械"
        ],
        "careerPaths": [
          "医疗器械公司",
          "医院设备科",
          "生物制药",
          "科研机构",
          "健康科技"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-22万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 3,
          "handson": 3
        },
        "valuesFit": [
          "income",
          "contribution"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "数据科学与大数据技术",
        "description": "研究大数据采集、处理和分析的新兴学科",
        "coreCourses": [
          "大数据技术基础",
          "数据挖掘",
          "机器学习",
          "分布式计算",
          "数据可视化"
        ],
        "careerPaths": [
          "数据工程师",
          "数据分析师",
          "算法工程师",
          "商业分析",
          "互联网公司"
        ],
        "salary": {
          "high": "35-80万",
          "mid": "15-30万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4
        },
        "valuesFit": [
          "income",
          "creativity"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "网络安全",
        "description": "研究信息系统安全防护和攻防技术的学科",
        "coreCourses": [
          "密码学",
          "网络安全",
          "系统安全",
          "渗透测试",
          "安全攻防实践"
        ],
        "careerPaths": [
          "安全工程师",
          "渗透测试工程师",
          "安全架构师",
          "安全运维",
          "网警"
        ],
        "salary": {
          "high": "35-70万",
          "mid": "15-30万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 3
        },
        "valuesFit": [
          "income",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      }
    ]
  },
  {
    "code": "09",
    "name": "农学",
    "description": "研究农业生产和农业科技的学科门类，关乎国家粮食安全和生态文明建设。",
    "majors": [
      {
        "name": "农学",
        "description": "研究作物生产和农业技术的基础学科",
        "coreCourses": [
          "作物栽培学",
          "作物育种学",
          "植物保护",
          "土壤肥料学",
          "农业生态学"
        ],
        "careerPaths": [
          "农业科研院所",
          "种业公司",
          "农业技术推广",
          "农业管理",
          "农业电商"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "7-15万",
          "low": "4-8万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "stability"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "园艺",
        "description": "研究果树、蔬菜、花卉等园艺作物的学科",
        "coreCourses": [
          "果树栽培学",
          "蔬菜栽培学",
          "花卉学",
          "园艺植物育种",
          "设施园艺"
        ],
        "careerPaths": [
          "园艺公司",
          "农业科研",
          "景观设计",
          "花卉产业",
          "休闲农业"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "handson": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "stability"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "动物科学",
        "description": "研究动物繁育和畜牧业的学科",
        "coreCourses": [
          "动物遗传学",
          "动物营养学",
          "动物繁殖学",
          "畜牧学",
          "饲料科学"
        ],
        "careerPaths": [
          "畜牧企业",
          "饲料公司",
          "动物科研",
          "宠物行业",
          "农业管理"
        ],
        "salary": {
          "high": "15-30万",
          "mid": "7-15万",
          "low": "4-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "stability"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "动物医学",
        "description": "研究动物疾病诊疗和公共卫生的学科",
        "coreCourses": [
          "兽医病理学",
          "兽医药理学",
          "兽医外科学",
          "动物传染病学",
          "兽医公共卫生"
        ],
        "careerPaths": [
          "宠物医院兽医",
          "动物检疫",
          "生物制药",
          "畜牧企业",
          "科研院所"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "income",
          "contribution"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "食品科学与工程",
        "description": "研究食品加工、安全和营养的学科",
        "coreCourses": [
          "食品化学",
          "食品微生物学",
          "食品工艺学",
          "食品安全学",
          "食品营养学"
        ],
        "careerPaths": [
          "食品企业",
          "质量检测",
          "食品研发",
          "食品安全监管",
          "营养咨询"
        ],
        "salary": {
          "high": "20-35万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "stability"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "林学",
        "description": "研究森林培育、保护和利用的学科",
        "coreCourses": [
          "森林培育学",
          "森林保护学",
          "森林生态学",
          "林木遗传育种",
          "森林经理学"
        ],
        "careerPaths": [
          "林业局",
          "自然保护区",
          "林业规划院",
          "生态修复公司",
          "科研院所"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "logic": 3
        },
        "valuesFit": [
          "contribution",
          "stability"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      }
    ]
  },
  {
    "code": "10",
    "name": "医学",
    "description": "研究人体健康和疾病防治的学科门类，社会需求大但学习周期长、要求高。",
    "majors": [
      {
        "name": "临床医学",
        "description": "培养能独立进行疾病诊断和治疗的医生",
        "coreCourses": [
          "系统解剖学",
          "病理学",
          "药理学",
          "内科学",
          "外科学"
        ],
        "careerPaths": [
          "医院临床医生",
          "医学研究",
          "医药企业",
          "公共卫生部门",
          "医学教育"
        ],
        "salary": {
          "high": "30-80万",
          "mid": "10-25万",
          "low": "6-12万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "status"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "口腔医学",
        "description": "研究口腔疾病诊治和口腔修复的学科",
        "coreCourses": [
          "口腔解剖生理学",
          "口腔内科学",
          "口腔外科学",
          "口腔修复学",
          "正畸学"
        ],
        "careerPaths": [
          "口腔医院",
          "私立牙科诊所",
          "口腔医疗器械",
          "医学研究",
          "口腔公共卫生"
        ],
        "salary": {
          "high": "40-100万+",
          "mid": "15-35万",
          "low": "8-15万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "status"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "药学",
        "description": "研究药物研发、生产和应用的学科",
        "coreCourses": [
          "药物化学",
          "药剂学",
          "药理学",
          "药物分析",
          "天然药物化学"
        ],
        "careerPaths": [
          "药企研发",
          "医院药剂科",
          "药品监管",
          "医药代表",
          "CRO公司"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4
        },
        "valuesFit": [
          "stability",
          "income"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "护理学",
        "description": "研究护理理论和护理实践的学科",
        "coreCourses": [
          "基础护理学",
          "内科护理学",
          "外科护理学",
          "妇产科护理学",
          "儿科护理学"
        ],
        "careerPaths": [
          "医院护士",
          "社区护理",
          "护理管理",
          "护理教育",
          "健康咨询"
        ],
        "salary": {
          "high": "15-25万",
          "mid": "7-12万",
          "low": "4-7万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "S",
          "C"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "handson": 3
        },
        "valuesFit": [
          "stability",
          "contribution"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "中医学",
        "description": "研究中医理论和临床诊治的传统医学学科",
        "coreCourses": [
          "中医基础理论",
          "中医诊断学",
          "中药学",
          "方剂学",
          "针灸学"
        ],
        "careerPaths": [
          "中医医院",
          "中医诊所",
          "中药企业",
          "养生保健",
          "中医教育"
        ],
        "salary": {
          "high": "25-60万",
          "mid": "10-20万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "status"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "预防医学",
        "description": "研究疾病预防和公共卫生的学科",
        "coreCourses": [
          "流行病学",
          "卫生统计学",
          "环境卫生学",
          "营养与食品卫生",
          "职业卫生学"
        ],
        "careerPaths": [
          "疾控中心",
          "卫生监督所",
          "医院感控科",
          "公共卫生机构",
          "健康管理"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "status"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      },
      {
        "name": "医学影像学",
        "description": "研究医学影像诊断和影像技术的学科",
        "coreCourses": [
          "医学影像学",
          "超声诊断学",
          "CT诊断学",
          "MRI诊断学",
          "放射治疗学"
        ],
        "careerPaths": [
          "医院影像科",
          "医疗器械公司",
          "AI医疗影像",
          "影像诊断中心",
          "科研"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-22万",
          "low": "6-12万"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "R"
        ],
        "abilityNeeds": {
          "logic": 4,
          "handson": 4,
          "interpersonal": 4
        },
        "valuesFit": [
          "contribution",
          "status"
        ],
        "subjectRequired": [
          "physics",
          "chemistry"
        ]
      }
    ]
  },
  {
    "code": "11",
    "name": "管理学",
    "description": "研究组织管理和资源配置的学科门类，培养管理决策和领导能力。",
    "majors": [
      {
        "name": "工商管理",
        "description": "研究企业经营管理理论和方法的学科",
        "coreCourses": [
          "管理学原理",
          "市场营销",
          "财务管理",
          "战略管理",
          "人力资源管理"
        ],
        "careerPaths": [
          "企业管理",
          "市场营销",
          "人力资源",
          "咨询公司",
          "创业"
        ],
        "salary": {
          "high": "30-80万",
          "mid": "10-25万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "E",
          "C"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 4
        },
        "valuesFit": [
          "status",
          "income"
        ]
      },
      {
        "name": "会计学",
        "description": "研究财务信息记录、分析和报告的学科",
        "coreCourses": [
          "基础会计",
          "中级财务会计",
          "成本会计",
          "审计学",
          "税法"
        ],
        "careerPaths": [
          "会计师事务所",
          "企业财务",
          "银行",
          "税务师",
          "财务分析师"
        ],
        "salary": {
          "high": "25-60万",
          "mid": "8-20万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "C",
          "E"
        ],
        "abilityNeeds": {
          "logic": 3,
          "language": 2
        },
        "valuesFit": [
          "stability",
          "income"
        ]
      },
      {
        "name": "市场营销",
        "description": "研究市场分析和营销策略的学科",
        "coreCourses": [
          "市场营销学",
          "消费者行为学",
          "市场调研",
          "品牌管理",
          "数字营销"
        ],
        "careerPaths": [
          "市场经理",
          "品牌策划",
          "销售管理",
          "数字营销",
          "市场分析"
        ],
        "salary": {
          "high": "30-70万",
          "mid": "10-22万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "E",
          "A"
        ],
        "abilityNeeds": {
          "interpersonal": 5,
          "language": 4
        },
        "valuesFit": [
          "income",
          "freedom"
        ]
      },
      {
        "name": "公共事业管理",
        "description": "研究公共组织和公共政策管理的学科",
        "coreCourses": [
          "公共管理学",
          "公共政策分析",
          "行政法",
          "公共经济学",
          "社会保障学"
        ],
        "careerPaths": [
          "公务员",
          "事业单位",
          "社会组织",
          "医院管理",
          "教育管理"
        ],
        "salary": {
          "high": "20-35万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "E",
          "S"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 3
        },
        "valuesFit": [
          "stability",
          "status"
        ]
      },
      {
        "name": "信息管理与信息系统",
        "description": "研究信息系统设计和信息资源管理的交叉学科",
        "coreCourses": [
          "管理信息系统",
          "数据库原理",
          "系统分析与设计",
          "数据挖掘",
          "ERP原理"
        ],
        "careerPaths": [
          "IT咨询",
          "企业信息化",
          "数据分析",
          "产品经理",
          "ERP实施"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-22万",
          "low": "7-12万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "I",
          "C"
        ],
        "abilityNeeds": {
          "logic": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "income",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "物流管理",
        "description": "研究物流系统规划和供应链管理的学科",
        "coreCourses": [
          "物流学概论",
          "供应链管理",
          "仓储管理",
          "运输管理",
          "物流信息系统"
        ],
        "careerPaths": [
          "物流企业",
          "电商物流",
          "供应链管理",
          "仓储运营",
          "跨境物流"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-18万",
          "low": "5-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "E",
          "C"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 3
        },
        "valuesFit": [
          "stability",
          "status"
        ]
      },
      {
        "name": "旅游管理",
        "description": "研究旅游业经营管理和旅游资源开发的学科",
        "coreCourses": [
          "旅游学概论",
          "酒店管理",
          "旅游规划",
          "旅游市场营销",
          "旅游经济学"
        ],
        "careerPaths": [
          "旅行社",
          "酒店集团",
          "景区管理",
          "文旅策划",
          "旅游电商"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "E",
          "S"
        ],
        "abilityNeeds": {
          "interpersonal": 4,
          "language": 3
        },
        "valuesFit": [
          "stability",
          "status"
        ]
      }
    ]
  },
  {
    "code": "12",
    "name": "艺术学",
    "description": "研究艺术创作和艺术理论的学科门类，培养创造力和审美能力。",
    "majors": [
      {
        "name": "视觉传达设计",
        "description": "研究平面设计和视觉信息传播的学科",
        "coreCourses": [
          "设计素描",
          "色彩构成",
          "字体设计",
          "包装设计",
          "UI/UX设计"
        ],
        "careerPaths": [
          "UI设计师",
          "平面设计师",
          "品牌设计",
          "广告公司",
          "互联网公司"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "8-18万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "环境设计",
        "description": "研究室内外空间环境设计的学科",
        "coreCourses": [
          "室内设计原理",
          "景观设计",
          "空间造型",
          "建筑装饰材料",
          "工程制图"
        ],
        "careerPaths": [
          "室内设计师",
          "景观设计师",
          "展示设计",
          "装饰公司",
          "规划设计院"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "8-18万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "数字媒体艺术",
        "description": "研究数字技术与艺术创作结合的新兴学科",
        "coreCourses": [
          "数字图像处理",
          "三维建模",
          "动画设计",
          "交互设计",
          "影视后期"
        ],
        "careerPaths": [
          "游戏美术",
          "影视特效",
          "UI/UX设计",
          "数字内容创作",
          "元宇宙设计"
        ],
        "salary": {
          "high": "25-50万",
          "mid": "10-20万",
          "low": "6-10万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "artistic": 4,
          "logic": 3
        },
        "valuesFit": [
          "creativity",
          "income"
        ]
      },
      {
        "name": "音乐表演",
        "description": "研究音乐演奏和演唱技巧的学科",
        "coreCourses": [
          "乐器演奏/声乐",
          "音乐理论",
          "和声学",
          "音乐史",
          "室内乐"
        ],
        "careerPaths": [
          "演出团体",
          "音乐教师",
          "音乐制作",
          "文化传媒",
          "自媒体音乐人"
        ],
        "salary": {
          "high": "20-60万",
          "mid": "6-15万",
          "low": "3-6万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "A",
          "S"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "美术学",
        "description": "研究绘画、雕塑等造型艺术的学科",
        "coreCourses": [
          "素描",
          "色彩",
          "中国画",
          "油画",
          "雕塑",
          "美术史"
        ],
        "careerPaths": [
          "美术教师",
          "自由艺术家",
          "画廊策展",
          "艺术品经纪",
          "美术编辑"
        ],
        "salary": {
          "high": "15-40万",
          "mid": "6-12万",
          "low": "3-6万"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "A",
          "I"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "动画",
        "description": "研究动画创作和动画技术的学科",
        "coreCourses": [
          "动画运动规律",
          "角色设计",
          "场景设计",
          "动画分镜",
          "三维动画"
        ],
        "careerPaths": [
          "动画公司",
          "游戏公司",
          "影视后期",
          "自媒体创作",
          "动画教育"
        ],
        "salary": {
          "high": "20-40万",
          "mid": "8-15万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      },
      {
        "name": "影视摄影与制作",
        "description": "研究影视拍摄和后期制作的学科",
        "coreCourses": [
          "摄影基础",
          "影视照明",
          "非线性编辑",
          "影视导演",
          "纪录片创作"
        ],
        "careerPaths": [
          "影视公司",
          "广告公司",
          "短视频创作",
          "电视台",
          "自由摄影师"
        ],
        "salary": {
          "high": "25-60万",
          "mid": "8-18万",
          "low": "5-8万"
        },
        "gradSchoolNecessity": "低",
        "riasecTypes": [
          "A",
          "R"
        ],
        "abilityNeeds": {
          "artistic": 5
        },
        "valuesFit": [
          "creativity",
          "freedom"
        ]
      }
    ]
  },
  {
    "code": "13",
    "name": "军事学",
    "description": "研究战争规律和军事理论的学科门类，由军事院校培养，招生有特殊要求。",
    "majors": [
      {
        "name": "军事指挥",
        "description": "培养军事指挥人才的学科",
        "coreCourses": [
          "军事理论",
          "战术学",
          "军事地形学",
          "军事管理学",
          "战役学"
        ],
        "careerPaths": [
          "军队指挥员",
          "军事参谋",
          "国防教育",
          "军事研究"
        ],
        "salary": {
          "high": "享受军官待遇",
          "mid": "享受军官待遇",
          "low": "享受军官待遇"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "E",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "contribution",
          "status",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "军事后勤",
        "description": "研究军事后勤保障和管理的学科",
        "coreCourses": [
          "军事后勤学",
          "军事装备管理",
          "军事运输",
          "军需保障",
          "军事经济学"
        ],
        "careerPaths": [
          "军队后勤部门",
          "国防工业",
          "军事物流",
          "军事研究"
        ],
        "salary": {
          "high": "享受军官待遇",
          "mid": "享受军官待遇",
          "low": "享受军官待遇"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "C",
          "R"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "contribution",
          "status",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "军事通信",
        "description": "研究军事通信技术和信息化作战的学科",
        "coreCourses": [
          "军事通信原理",
          "电子对抗",
          "密码学",
          "信息安全",
          "指挥自动化"
        ],
        "careerPaths": [
          "军队通信部门",
          "军事科研",
          "国防企业",
          "信息化建设"
        ],
        "salary": {
          "high": "享受军官待遇",
          "mid": "享受军官待遇",
          "low": "享受军官待遇"
        },
        "gradSchoolNecessity": "中",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "contribution",
          "status",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "武器系统工程",
        "description": "研究武器装备设计和武器系统的学科",
        "coreCourses": [
          "武器系统概论",
          "弹道学",
          "火控系统",
          "武器制造工艺",
          "系统工程"
        ],
        "careerPaths": [
          "军工企业",
          "军事科研院所",
          "武器研发",
          "国防科技"
        ],
        "salary": {
          "high": "享受军官待遇",
          "mid": "享受军官待遇",
          "low": "享受军官待遇"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "R",
          "I"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "contribution",
          "status",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      },
      {
        "name": "军事医学",
        "description": "研究战时医疗救治和军事卫勤保障的学科",
        "coreCourses": [
          "野战外科学",
          "军事预防医学",
          "军事心理学",
          "卫勤组织学",
          "核化生防护医学"
        ],
        "careerPaths": [
          "军队医院",
          "军事医学科研",
          "卫勤保障",
          "国防医学教育"
        ],
        "salary": {
          "high": "享受军官待遇",
          "mid": "享受军官待遇",
          "low": "享受军官待遇"
        },
        "gradSchoolNecessity": "高",
        "riasecTypes": [
          "I",
          "S"
        ],
        "abilityNeeds": {
          "handson": 4,
          "interpersonal": 3
        },
        "valuesFit": [
          "contribution",
          "status",
          "stability"
        ],
        "subjectRequired": [
          "physics"
        ]
      }
    ]
  }
],

  popularCategories: [
    {
      id: "pc1",
      name: "和数据打交道",
      emoji: "📊",
      description: "喜欢数字、表格、编程，善于从数据中找规律",
      relatedMajorCategories: ["07", "08", "02"],
      typicalMajors: ["统计学", "计算机科学与技术", "数据科学与大数据技术", "金融学", "人工智能", "数学与应用数学", "信息管理与信息系统"],
      riasecMatch: ["I", "C"]
    },
    {
      id: "pc2",
      name: "和人打交道",
      emoji: "🤝",
      description: "喜欢沟通交流、帮助他人、解决人际问题",
      relatedMajorCategories: ["04", "03", "07"],
      typicalMajors: ["教育学", "心理学", "社会工作", "法学", "思想政治教育", "学前教育", "护理学"],
      riasecMatch: ["S", "E"]
    },
    {
      id: "pc3",
      name: "和机器打交道",
      emoji: "⚙️",
      description: "喜欢机械、电路、动手拆装，对技术和工程感兴趣",
      relatedMajorCategories: ["08"],
      typicalMajors: ["机械工程", "电气工程及其自动化", "自动化", "电子信息工程", "车辆工程", "生物医学工程"],
      riasecMatch: ["R", "I"]
    },
    {
      id: "pc4",
      name: "和文字打交道",
      emoji: "✍️",
      description: "喜欢阅读写作、语言表达、文化研究",
      relatedMajorCategories: ["05", "06", "01"],
      typicalMajors: ["汉语言文学", "新闻学", "英语", "历史学", "哲学", "传播学", "广告学"],
      riasecMatch: ["A", "I"]
    },
    {
      id: "pc5",
      name: "和自然打交道",
      emoji: "🌿",
      description: "喜欢大自然、动植物、环境保护",
      relatedMajorCategories: ["09", "07"],
      typicalMajors: ["生物科学", "农学", "林学", "动物科学", "食品科学与工程", "地理科学", "动物医学"],
      riasecMatch: ["I", "R"]
    },
    {
      id: "pc6",
      name: "和创意打交道",
      emoji: "🎨",
      description: "喜欢设计、绘画、音乐、影视等艺术创作",
      relatedMajorCategories: ["12", "08"],
      typicalMajors: ["视觉传达设计", "环境设计", "数字媒体艺术", "动画", "建筑学", "影视摄影与制作", "音乐表演"],
      riasecMatch: ["A", "R"]
    },
    {
      id: "pc7",
      name: "和生命打交道",
      emoji: "🏥",
      description: "对医学、药学、健康管理感兴趣，想治病救人",
      relatedMajorCategories: ["10"],
      typicalMajors: ["临床医学", "口腔医学", "药学", "中医学", "护理学", "预防医学", "医学影像学"],
      riasecMatch: ["I", "S"]
    },
    {
      id: "pc8",
      name: "和商业打交道",
      emoji: "💼",
      description: "对经营管理、投资理财、市场竞争感兴趣",
      relatedMajorCategories: ["11", "02"],
      typicalMajors: ["工商管理", "会计学", "市场营销", "金融学", "国际经济与贸易", "物流管理", "旅游管理"],
      riasecMatch: ["E", "C"]
    },
    {
      id: "pc9",
      name: "和代码打交道",
      emoji: "💻",
      description: "对编程开发、软件系统、互联网产品感兴趣",
      relatedMajorCategories: ["08"],
      typicalMajors: ["计算机科学与技术", "软件工程", "人工智能", "数据科学与大数据技术", "网络安全", "电子信息工程"],
      riasecMatch: ["I", "R"]
    },
    {
      id: "pc10",
      name: "和国家打交道",
      emoji: "🏛️",
      description: "对政治、法律、公共管理、社会治理感兴趣",
      relatedMajorCategories: ["03", "11"],
      typicalMajors: ["法学", "政治学与行政学", "公共事业管理", "国际政治", "社会学", "思想政治教育"],
      riasecMatch: ["E", "S"]
    }
  ],

  // ============================================================
  // 7. RIASEC → 学科门类与专业方向映射
  // ============================================================
  riasecToMajors: {
    R: {
      label: "现实型",
      bestFitCategories: ["08", "09"],
      description: "动手能力强，喜欢操作机器和工具，偏好有具体成果的工作",
      recommendedMajors: [
        "机械工程", "电气工程及其自动化", "土木工程", "计算机科学与技术",
        "电子信息工程", "自动化", "建筑学", "农学",
        "动物医学", "食品科学与工程", "体育教育"
      ],
      careerKeywords: ["工程师", "技术员", "设计师", "建筑师", "农艺师"]
    },
    I: {
      label: "研究型",
      bestFitCategories: ["07", "10", "08"],
      description: "好奇心强，善于独立思考和深入分析，喜欢探索未知",
      recommendedMajors: [
        "数学与应用数学", "物理学", "化学", "生物科学", "心理学",
        "临床医学", "人工智能", "统计学", "经济学",
        "哲学", "地理科学"
      ],
      careerKeywords: ["科研人员", "分析师", "医生", "教授", "研究员"]
    },
    A: {
      label: "艺术型",
      bestFitCategories: ["12", "05"],
      description: "富有想象力和创造力，重视自我表达，不喜欢循规蹈矩",
      recommendedMajors: [
        "视觉传达设计", "环境设计", "数字媒体艺术", "动画",
        "音乐表演", "汉语言文学", "新闻学", "广告学",
        "建筑学", "影视摄影与制作", "网络与新媒体"
      ],
      careerKeywords: ["设计师", "作家", "记者", "艺术家", "导演"]
    },
    S: {
      label: "社会型",
      bestFitCategories: ["04", "10", "03"],
      description: "关心他人，善于沟通合作，喜欢帮助和教导别人",
      recommendedMajors: [
        "教育学", "学前教育", "特殊教育", "心理学", "社会工作",
        "护理学", "临床医学", "中医学", "法学",
        "思想政治教育"
      ],
      careerKeywords: ["教师", "医生", "护士", "社工", "咨询师"]
    },
    E: {
      label: "企业型",
      bestFitCategories: ["11", "02", "03"],
      description: "有领导力和说服力，喜欢竞争和挑战，追求影响力和成就",
      recommendedMajors: [
        "工商管理", "市场营销", "金融学", "法学",
        "国际经济与贸易", "政治学与行政学", "旅游管理",
        "公共事业管理", "国际政治"
      ],
      careerKeywords: ["企业家", "经理", "律师", "政治家", "销售总监"]
    },
    C: {
      label: "常规型",
      bestFitCategories: ["02", "11"],
      description: "做事有条理，注重细节和准确性，喜欢按规则办事",
      recommendedMajors: [
        "会计学", "财政学", "统计学", "保险学",
        "信息管理与信息系统", "物流管理", "审计学",
        "图书馆学", "档案学"
      ],
      careerKeywords: ["会计师", "审计师", "统计师", "档案管理员", "银行职员"]
    }
  },

  // ============================================================
  // 8. 踩坑警示列表
  // ============================================================
  pitfalls: [
    {
      id: "pit1",
      title: "🚫 望文生义选专业",
      severity: "danger",
      description: '很多专业的名字和实际内容差距极大。比如"信息与计算科学"不是计算机而是数学，"精算学"不是数学而是保险，"地理信息系统"偏向编程而非背地图。',
      correctApproach: "一定要仔细查看专业的培养方案、核心课程和毕业去向，不能只凭名字猜内容。去目标院校官网查看教学计划是最可靠的方式。",
      examples: [
        "信息与计算科学 → 实际是数学系，不是计算机系",
        "生物医学工程 → 偏工科（医疗器械），不是学医",
        "数字媒体技术 → 偏编程，数字媒体艺术 → 偏设计"
      ]
    },
    {
      id: "pit2",
      title: "🚫 盲目追求热门专业",
      severity: "danger",
      description: '今天的热门可能是明天的"天坑"。前几年生物、环境、材料等专业被热捧，如今被称为"天坑四大"。计算机虽然热门，但竞争极其激烈，也不一定适合所有人。',
      correctApproach: "不要只看当前就业热度，要结合自身兴趣和能力综合考虑。一个不喜欢、学不好的热门专业，远不如一个喜欢、学得好的冷门专业。",
      examples: [
        "2010年前后土木工程特别热门，现在建筑业下行",
        "计算机虽热门，但35岁焦虑、加班严重等问题突出",
        "适合自己的才是最好的，而非最热门的"
      ]
    },
    {
      id: "pit3",
      title: "🚫 完全由家长做主选专业",
      severity: "warning",
      description: "家长的意见值得参考，但专业是你自己要学4年、从事一辈子的事。完全由家长包办可能导致进入大学后严重缺乏学习动力，甚至厌学、退学。",
      correctApproach: "和家长充分沟通你的想法，让他们了解你的兴趣和特长。最好一起做研究、一起讨论，而不是单方面决定。你才是这个决定的第一责任人。",
      examples: [
        "家长让学医，孩子怕血晕针，进去才发现完全不行",
        "家长认为公务员稳定，但孩子不喜欢体制内的工作节奏",
        "尊重孩子意愿的同时给予理性分析，才是最好的方式"
      ]
    },
    {
      id: "pit4",
      title: '🚫 不了解"专业调剂"的风险',
      severity: "danger",
      description: '如果在志愿填报时勾选了"服从调剂"，可能会被调剂到完全不相关的专业。尤其是在冲高填报的院校，调剂的概率更大。',
      correctApproach: "填报每所院校时，仔细查看该校所有招生专业，确保即使被调剂也能接受。如果某校有你完全无法接受的专业，要慎重考虑是否填报。了解目标学校的转专业政策作为备选方案。",
      examples: [
        "冲某985院校被调剂到护理学，文科生被调剂到冷门工科",
        "部分高校转专业政策宽松，入学后可以申请转专业",
        "在同一所学校内，不同专业的就业前景可能天差地别"
      ]
    },
    {
      id: "pit5",
      title: "🚫 忽视身体条件限制",
      severity: "warning",
      description: "部分专业对身体条件有明确要求，包括视力、色觉、身高等。色盲/色弱不能报考化学、医学、生物等专业，飞行类专业对视力有严格要求。",
      correctApproach: "提前查阅《普通高等学校招生体检工作指导意见》，核实目标专业的体检要求。如有色觉异常、近视等情况，务必提前排除受限专业。",
      examples: [
        "色弱不能学化学、药学、生物工程、临床医学等",
        "部分军校和公安院校有身高和体重要求",
        "隐瞒体检问题即使入学也可能被退档"
      ]
    },
    {
      id: "pit6",
      title: "🚫 只看分数排名不看学科实力",
      severity: "warning",
      description: "同一个专业在不同学校的实力差距巨大。985/211学校的冷门专业不一定比普通学校的王牌专业更有竞争力。",
      correctApproach: "关注学科评估结果（如教育部第五轮学科评估）、国家一流本科专业建设点等指标。读一个学校的强势专业，往往比读名校的弱势专业更有价值。",
      examples: [
        "江南大学的食品科学比很多985大学都强",
        "西南政法大学的法学比多数985法学强",
        "北京邮电大学的通信工程行业认可度极高"
      ]
    },
    {
      id: "pit7",
      title: "🚫 忽视地域因素的影响",
      severity: "info",
      description: "大学所在城市对实习、就业、人脉积累有巨大影响。在北上广深杭读书，接触的实习机会和行业资源远多于三四线城市。",
      correctApproach: "结合你未来想发展的城市来选择大学。如果想从事互联网/金融/传媒等行业，优先考虑一线城市的院校。如果想进体制内或回家乡发展，则选择省会院校也很好。",
      examples: [
        "在上海读金融，实习和就业机会远多于中西部城市",
        "想做互联网，北京杭州深圳有天然优势",
        "想回家乡发展，省内名校的校友资源更实用"
      ]
    },
    {
      id: "pit8",
      title: "🚫 不了解新高考选科与专业的关联",
      severity: "danger",
      description: "新高考模式下，选科组合直接限制了可报考的专业范围。如不选物理，工学、理学大部分专业不能报考；不选化学，医学、药学类大部分专业不能报考。",
      correctApproach: "在高一选科前就要初步了解未来的专业方向。查阅各高校的选科要求，确保你的选科组合覆盖目标专业。物理+化学组合覆盖面最广（可报95%以上专业）。",
      examples: [
        "不选物理 → 工学门类90%以上专业无法报考",
        "不选化学 → 医学、药学、化工等方向大幅受限",
        "纯文科组合 → 可选专业范围显著缩小"
      ]
    },
    {
      id: "pit9",
      title: '🚫 被"考研必须"的说法吓到',
      severity: "info",
      description: "虽然部分专业确实需要深造（如基础理学、医学），但很多人过度焦虑考研问题，以至于放弃自己真正喜欢的方向。本科阶段认真学习积累能力才是关键。",
      correctApproach: '了解目标专业的就业现实：有些专业本科就业好（如计算机、电气），有些需要读研（如临床医学、基础学科研究）。但不要因为"可能需要考研"就放弃兴趣——考研也是一种正常的学业路径。',
      examples: [
        "临床医学确实需要规培+读研，但这是培养好医生的必经之路",
        "基础学科读研后转行互联网/金融的案例非常多",
        "本科学得好的话，推免（保研）是大概率事件"
      ]
    },
    {
      id: "pit10",
      title: "🚫 把高考志愿当唯一机会",
      severity: "info",
      description: "高考志愿确实重要，但不是一锤定音的终身判决。很多人在大学期间通过转专业、辅修双学位、跨考研究生等方式调整了方向。",
      correctApproach: "认真对待志愿填报，但不必过度焦虑。了解目标学校的转专业政策、辅修制度、跨专业保研/考研政策。保持学习能力和探索精神比选对一个具体专业更重要。",
      examples: [
        "很多985高校允许大一结束后转专业（如浙大、中科大）",
        "修读辅修/双学位可以拓宽就业面",
        "跨专业考研是非常普遍的现象，尤其是从理转文/商"
      ]
    }
  ],

  // ============================================================
  // 9. RIASEC 类型描述
  // ============================================================
  riasecTypes: {
    R: {
      code: "R",
      chineseName: "现实型",
      englishName: "Realistic",
      emoji: "🔧",
      color: "#e74c3c",
      description: "你是一个喜欢动手操作、解决实际问题的人。你偏好具体的、有形的工作成果，善于使用工具和机器，喜欢户外活动和体力劳动。你比较务实，不太喜欢抽象理论和社交应酬。",
      strengths: ["动手能力强", "务实可靠", "体力和耐力好", "善于解决具体问题"],
      typicalCareers: ["工程师", "建筑师", "飞行员", "外科医生", "厨师", "运动员", "技术工人"],
      keywords: ["动手", "实践", "操作", "户外", "工具", "制造"]
    },
    I: {
      code: "I",
      chineseName: "研究型",
      englishName: "Investigative",
      emoji: "🔬",
      color: "#3498db",
      description: "你是一个好奇心旺盛、善于独立思考的人。你喜欢探究事物的本质和规律，享受分析和解决复杂问题的过程。你偏好用逻辑和数据说话，不太喜欢被人管或管理他人。",
      strengths: ["逻辑思维强", "好奇心旺盛", "善于分析", "独立思考"],
      typicalCareers: ["科学家", "医生", "程序员", "数据分析师", "教授", "研究员", "心理咨询师"],
      keywords: ["思考", "研究", "分析", "探索", "好奇", "逻辑"]
    },
    A: {
      code: "A",
      chineseName: "艺术型",
      englishName: "Artistic",
      emoji: "🎨",
      color: "#9b59b6",
      description: "你是一个富有想象力和创造力的人。你重视自我表达和情感体验，喜欢自由不受约束的环境。你有独特的审美感受，不喜欢循规蹈矩的程式化工作。",
      strengths: ["创造力强", "想象力丰富", "审美敏锐", "善于表达"],
      typicalCareers: ["设计师", "作家", "记者", "画家", "导演", "建筑师", "音乐家"],
      keywords: ["创造", "表达", "想象", "审美", "自由", "灵感"]
    },
    S: {
      code: "S",
      chineseName: "社会型",
      englishName: "Social",
      emoji: "🤝",
      color: "#2ecc71",
      description: "你是一个关心他人、善于沟通的人。你喜欢与人互动，愿意帮助和教导别人，有同理心和服务精神。你看重人际关系和团队和谐，不太喜欢独自工作或与机器打交道。",
      strengths: ["善于沟通", "同理心强", "乐于助人", "团队合作好"],
      typicalCareers: ["教师", "社工", "护士", "心理咨询师", "人力资源", "公务员", "志愿者"],
      keywords: ["帮助", "教导", "沟通", "关怀", "合作", "服务"]
    },
    E: {
      code: "E",
      chineseName: "企业型",
      englishName: "Enterprising",
      emoji: "🏆",
      color: "#f39c12",
      description: "你是一个有领导力和说服力的人。你喜欢竞争和挑战，追求权力、地位和财富。你善于组织和激励他人，有冒险精神，不喜欢被动服从和重复劳动。",
      strengths: ["领导力强", "善于说服", "有进取心", "敢于冒险"],
      typicalCareers: ["企业家", "律师", "经理", "政治家", "销售总监", "投资人", "主持人"],
      keywords: ["领导", "竞争", "影响", "决策", "说服", "成就"]
    },
    C: {
      code: "C",
      chineseName: "常规型",
      englishName: "Conventional",
      emoji: "📋",
      color: "#1abc9c",
      description: "你是一个做事有条理、注重细节的人。你喜欢按规则和流程办事，追求精确和完美。你擅长整理信息和处理数据，不太喜欢模糊不清和频繁变化的环境。",
      strengths: ["做事条理", "注重细节", "精确认真", "执行力强"],
      typicalCareers: ["会计师", "审计师", "银行职员", "行政管理", "档案管理", "质量检测", "数据录入"],
      keywords: ["秩序", "规则", "精确", "整理", "细节", "流程"]
    }
  }

}; // end of window.APP_DATA
