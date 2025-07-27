/**
 * 设置变量
 * 所有网站内容都在这里设置，无后台，请保证这个文件放在合适的直链储存
 * 下面的内容均为示例，请自行修改
 */


themecss = "./themes/$t$.min-5.5.css";
oneuiapp = ["./oneui.app.min-5.8.js"];

/**
 * 网站基础信息设置
 */

//网站标题
dctitle = "D的世界";

//网站关键字，用空格分隔
keywords = "D的世界 D工作室 d工作室";

//网站介绍
descrp = "D工作室的官网";

//网站图标
ico = "https://www.pldduck.top/favicon.ico";

//备案号
beiancode = "湘ICP备2025101669号-2";

//添加板块：特点feature，一言hito，作品work，动态zone，成员member，联系contact，把不要的删除
modules = ["feature","hito","work","zone","member","contact","flinks","gallery"];

//防止XXS扒站
//true开启，false关闭
fxxs = true;

//IE浏览器提示
//true开启，false关闭
banie = true;



/**
 * 网站内容设置
 */

//团队名称
teamname = "D工作室";

//建立年份
teamday = "2024";

//网站左上角处名称
headtitle = "D工作室官网";

//网站顶端跳转按钮，每个数组内第一个元素为板块，第二个为font-awesome图标，第三个为名字
//第一个topd为首页，不可删除
headbuts = [["topd","fa fa-home","首页"],["work","fa fa-boxes-stacked","作品"],["member","fa fa-person-walking","成员"],["contact","fab fa-qq","联系"]];

//网站第一板块背景图URL
blk1bg = "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png";

//今日诗词
//如果jrsc内容为api，则调用今日诗词API，否则为所填内容
jrsc = "D的世界-D工作室的主站点";

//网站第一板块子标题
blk1stitle = "D工作室的主站点";

//弹窗内容
//标题，文字(\n换行)
aler = ["欢迎来到D的世界~","D的世界是D工作室的主站点\n这是一个基于停更项目二次开发的开源项目(原作者不知为何停更了)\n所以我决定继续优化这个项目\n此项目目前已在GitHub完全开源\n感谢你的访问"];

//About模块内容
//首页图下面4个图标对应的文字
//按顺序依次填写font-awesome图标、标题、内容
aboutmod = [
  [
    "fa fa-boxes",
    "我们擅长",
    "静态网页开发和基础PHP使用"
  ],
  [
    "fa fa-laptop-code",
    "不专业网页开发",
    "如果你愿意相信我们..."
  ],
  [
    "fa fa-cloud",
    "我们正在努力学习中",
    "永远在学习的路上"
  ],
  [
    "fa fa-user-lock",
    "穷!",
    "我们只为网站配备了一台2H2G3M腾讯轻量云 请各位高手手下留情"
  ]
];

//联系方式设置
//目前只支持2个，可自己修改代码增加
//按顺序依次填写font-awesome图标、标题、链接
//邮箱请务必加前缀 mailto:
contacts = [
  [
    "fab fa-qq",
    "QQ群",
    "https://im.qq.com"
  ],
  [
    "fab fa-google",
    "邮箱",
    "mailto:duck@pldduck.top"
  ]
];




/**
 * 内容撰写
 */

//友链
//每个项依次写：图片URL，名称，简介，链接
flinks = [
  [
    "https://cloud.tencent.com/favicon.ico",
    "腾讯云",
    "有亿点点black心的大厂",
    "https://cloud.tencent.com"
  ],
  [
    "https://www.pldduck.top/favicon.ico",
    "等着你来登陆",
    "联系duck吧！",
    "https://www.pldduck.top"
  ]
];

//成员
//每个项依次写：背景图片URL，头像，名称，简介，联系方式[QQ号，网站，邮箱]
//无就留空
memb = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "https://q.qlogo.cn/headimg_dl?dst_uin=2472652060&spec=640",
    "duck",
    "不太爱管事的懒惰程序员",
    [
      "2472652060",
      "https://www.pldduck.top",
      "duck@pldduck.top"
    ]
  ]

];

//动态
//每个项依次写：图片URL，时间，事件
zone = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2025-4-13",
    "这套新源码正式服役"
  ]

];

//作品
//最核心部分！！！
//每个项依次写：图片URL，时间，标题，简介，网址，[类型]
cont = [
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png",
    "2024-12-23", 
    "Dblog",
    "基于typecho和D工作室自研主题的官方博客", 
    "https://blog.pldduck.top",
    ["博客"]
  ],
  [
    "https://npm.elemecdn.com/zxmacc-staticr@v1.0.5/images/background/day02.png", 
    "2025-7-25",
    "Dpic1",
    "二次元随机图片API",
    "https://pic1.pldduck.top",
    ["图片API"]
  ]
];