export const carBrands = [
  { id: "bmw", name: "BMW", count: 128 },
  { id: "mercedes", name: "Mercedes-Benz", count: 96 },
  { id: "audi", name: "Audi", count: 84 },
  { id: "porsche", name: "Porsche", count: 72 },
  { id: "toyota", name: "Toyota", count: 64 },
  { id: "honda", name: "Honda", count: 56 },
  { id: "volkswagen", name: "Volkswagen", count: 48 },
  { id: "ford", name: "Ford", count: 42 },
  { id: "nissan", name: "Nissan", count: 38 },
  { id: "tesla", name: "Tesla", count: 32 },
]

export const productCategories = [
  { id: "exhaust", name: "排气系统", icon: "exhaust" },
  { id: "bodykit", name: "空气动力套件", icon: "bodykit" },
  { id: "suspension", name: "悬挂系统", icon: "suspension" },
  { id: "wheel", name: "轮毂轮胎", icon: "wheel" },
  { id: "interior", name: "内饰改装", icon: "interior" },
  { id: "ecu", name: "ECU 调校", icon: "ecu" },
  { id: "brake", name: "刹车系统", icon: "brake" },
  { id: "lighting", name: "灯光系统", icon: "lighting" },
]

const withBasePath = (path: string) => `/car${path}`

export interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  image: string
  description: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "钛合金运动排气系统",
    brand: "BMW",
    category: "exhaust",
    price: 12800,
    image: withBasePath("/images/product-exhaust.jpg"),
    description: "高流量钛合金排气，提升引擎声浪与动力输出，适配 BMW 3系/4系。",
    tags: ["BMW 3系", "BMW 4系", "钛合金"],
  },
  {
    id: "2",
    name: "碳纤维空力套件",
    brand: "Mercedes-Benz",
    category: "bodykit",
    price: 28800,
    image: withBasePath("/images/product-bodykit.jpg"),
    description: "全碳纤维材质空力套件，含前唇、侧裙、后扩散器，提升下压力与视觉效果。",
    tags: ["Mercedes C级", "碳纤维", "空力"],
  },
  {
    id: "3",
    name: "高性能可调避震器",
    brand: "Audi",
    category: "suspension",
    price: 8600,
    image: withBasePath("/images/product-suspension.jpg"),
    description: "32段阻尼可调绞牙避震，铝合金材质，适配 Audi A4/A5 全系。",
    tags: ["Audi A4", "Audi A5", "可调避震"],
  },
  {
    id: "4",
    name: "锻造铝合金轮毂 20寸",
    brand: "Porsche",
    category: "wheel",
    price: 6800,
    image: withBasePath("/images/product-wheel.jpg"),
    description: "单片锻造工艺，轻量化设计，哑光黑配机加工唇边，适配 Porsche 911。",
    tags: ["Porsche 911", "锻造", "20寸"],
  },
  {
    id: "5",
    name: "全段钛合金排气",
    brand: "Toyota",
    category: "exhaust",
    price: 15800,
    image: withBasePath("/images/product-exhaust.jpg"),
    description: "从头段到尾段全钛合金材质，大幅减轻重量，GR Supra 专属设计。",
    tags: ["GR Supra", "全段排气", "钛合金"],
  },
  {
    id: "6",
    name: "宽体空力套件",
    brand: "BMW",
    category: "bodykit",
    price: 38800,
    image: withBasePath("/images/product-bodykit.jpg"),
    description: "FRP+碳纤维复合材质宽体套件，含宽体翼子板、前后包围，竞技风格。",
    tags: ["BMW M3", "宽体", "竞技"],
  },
  {
    id: "7",
    name: "气动避震系统",
    brand: "Mercedes-Benz",
    category: "suspension",
    price: 18800,
    image: withBasePath("/images/product-suspension.jpg"),
    description: "全自动气动避震，APP远程控制车身高度，含气泵与储气罐全套。",
    tags: ["Mercedes C级", "气动", "APP控制"],
  },
  {
    id: "8",
    name: "多片式锻造轮毂 19寸",
    brand: "Audi",
    category: "wheel",
    price: 8800,
    image: withBasePath("/images/product-wheel.jpg"),
    description: "三片式锻造结构，钛金螺栓固定，可定制颜色与偏距。",
    tags: ["Audi RS4", "三片式", "定制"],
  },
]

export interface Tutorial {
  id: string
  title: string
  category: string
  brand: string
  duration: string
  level: "入门" | "进阶" | "专业"
  price: number
  free: boolean
  description: string
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "BMW 3系排气系统更换全流程",
    category: "exhaust",
    brand: "BMW",
    duration: "45分钟",
    level: "进阶",
    price: 99,
    free: false,
    description: "详细讲解 BMW F30/G20 3系排气系统拆装全过程，包括密封胶使用技巧与调试方法。",
  },
  {
    id: "2",
    title: "绞牙避震安装与调校入门",
    category: "suspension",
    brand: "通用",
    duration: "60分钟",
    level: "入门",
    price: 0,
    free: true,
    description: "适合初学者的避震系统安装基础教程，涵盖预载设定与阻尼调校基础。",
  },
  {
    id: "3",
    title: "碳纤维空力套件安装指南",
    category: "bodykit",
    brand: "Mercedes-Benz",
    duration: "90分钟",
    level: "专业",
    price: 199,
    free: false,
    description: "Mercedes C级碳纤维套件专业安装教程，含对位技巧、固定方式与漆面保护。",
  },
  {
    id: "4",
    title: "轮毂更换与轮胎匹配教程",
    category: "wheel",
    brand: "通用",
    duration: "30分钟",
    level: "入门",
    price: 0,
    free: true,
    description: "通用轮毂更换教程，讲解 PCD、ET值、中心孔等参数选择要点。",
  },
  {
    id: "5",
    title: "Porsche 911 刹车系统升级",
    category: "brake",
    brand: "Porsche",
    duration: "75分钟",
    level: "专业",
    price: 299,
    free: false,
    description: "Porsche 911 大六活塞卡钳升级与碳陶刹车盘安装全流程。",
  },
  {
    id: "6",
    title: "ECU 调校基础概念",
    category: "ecu",
    brand: "通用",
    duration: "40分钟",
    level: "进阶",
    price: 149,
    free: false,
    description: "了解 ECU 调校的基本原理、常用工具与安全注意事项。",
  },
]

export interface KnowledgeArticle {
  id: string
  title: string
  category: string
  excerpt: string
  readTime: string
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "1",
    title: "改装排气对年检的影响与合规指南",
    category: "法规政策",
    excerpt: "全面解读中国现行改装法规中关于排气系统改装的相关规定，以及如何合规改装。",
    readTime: "8 分钟",
  },
  {
    id: "2",
    title: "涡轮增压 vs 机械增压：哪种更适合你？",
    category: "动力改装",
    excerpt: "对比两种主流增压方式的工作原理、优缺点及适用场景，帮助你做出最佳选择。",
    readTime: "12 分钟",
  },
  {
    id: "3",
    title: "碳纤维材质在汽车改装中的应用",
    category: "材质科学",
    excerpt: "深入了解碳纤维的制造工艺、强度特性以及在改装领域的常见应用场景。",
    readTime: "10 分钟",
  },
  {
    id: "4",
    title: "避震系统改装完全指南",
    category: "底盘改装",
    excerpt: "从弹簧、减震器到防倾杆，全方位解析底盘悬挂系统的改装方案与选择思路。",
    readTime: "15 分钟",
  },
  {
    id: "5",
    title: "刹车系统升级：安全改装第一步",
    category: "制动系统",
    excerpt: "详解刹车系统各组件的升级方案，包括卡钳、刹车盘、刹车皮的选择与搭配。",
    readTime: "11 分钟",
  },
  {
    id: "6",
    title: "轮毂参数详解：PCD、ET值与中心孔",
    category: "轮毂轮胎",
    excerpt: "搞懂轮毂的关键参数，避免选购误区，确保安装适配与行车安全。",
    readTime: "7 分钟",
  },
  {
    id: "7",
    title: "汽车贴膜改色的材质与工艺",
    category: "外观改装",
    excerpt: "了解当前主流的车身贴膜材质类型、施工工艺以及日常维护注意事项。",
    readTime: "9 分钟",
  },
  {
    id: "8",
    title: "新能源汽车改装趋势与注意事项",
    category: "新能源",
    excerpt: "探讨电动车改装的特殊性，包括电池安全、动力系统优化与合规要求。",
    readTime: "13 分钟",
  },
]
