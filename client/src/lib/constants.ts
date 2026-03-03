/*
  DESIGN: Terra Narrativa — 大地敘事
  All content data for the circular economy course website
*/

// CDN URLs
export const CDN = {
  logo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/logo_d7076b10.png",
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/hero-bg-FBXzR8yksDSKZar4t4cbYU.webp",
  linearVsCircular: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/linear-vs-circular-fQNptWWEf7k3pdJFEj4PeZ.webp",
  trilogyBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/trilogy-bg-STWNMqN3dvQxjL6qHwhKhE.webp",
  painPointsBg: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/pain-points-bg-LMChATZo3cAxd4S7MVdknE.webp",
  futureVision: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/future-vision-kYLi4cDoKeE2iftGhaPqew.webp",
  caseStudy: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/case-study_abfcc959.png",
  instructor1: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/instructor-1_34b563dc.png",
  instructor2: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/instructor-2_50f88fcd.png",
  instructor3: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/instructor-3_30d28bfd.png",
  ctLogo: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030685271/bYvWFJVpzRTCP96AsfFiQw/Circular Taiwan Logo_c5aaae16.png",
};

export const NAV_ITEMS = [
  { label: "企業痛點", href: "#pain-points" },
  { label: "觀念釋疑", href: "#myths" },
  { label: "循環三部曲", href: "#trilogy" },
  { label: "課程模組", href: "#modules" },
  { label: "師資陣容", href: "#instructors" },
  { label: "立即報名", href: "#cta" },
];

export const PAIN_POINTS = [
  {
    icon: "TrendingDown",
    title: "失控的成本",
    subtitle: "原物料價格劇烈波動",
    description: "全球原物料價格劇烈波動，國際供應鏈因地緣政治與極端氣候事件而高度不穩定。線性供應鏈「取用—製造—丟棄」模式的結構性脆弱，正在嚴重侵蝕利潤空間。",
    stat: "67%",
    statLabel: "企業面臨原料成本上漲壓力",
  },
  {
    icon: "FileX",
    title: "消失的訂單",
    subtitle: "ESG 合規成為生存門檻",
    description: "國際品牌客戶紛紛提出嚴格的 ESG 與淨零碳排要求。不符合永續標準就意味著被踢出供應鏈——這已不再是「加分題」，而是「生存題」。",
    stat: "83%",
    statLabel: "國際買主要求供應商 ESG 報告",
  },
  {
    icon: "CloudFog",
    title: "模糊的未來",
    subtitle: "碳關稅與法規風險遽增",
    description: "歐盟碳邊境調整機制（CBAM）、國內碳費制度與資源循環促進法陸續上路。企業面對的不只是現在的成本壓力，更是未來制度環境的根本性改變。",
    stat: "2026",
    statLabel: "歐盟 CBAM 全面實施年",
  },
];

export const LINEAR_TRAITS = [
  {
    trait: "破壞性",
    description: "對生態與自然資源的持續消耗",
    impact: "原物料供應日益不穩定，成本持續攀升",
    icon: "Flame",
  },
  {
    trait: "退化性",
    description: "對系統韌性的持續耗損",
    impact: "供應鏈脆弱，一旦斷鏈便全面停擺",
    icon: "TrendingDown",
  },
  {
    trait: "剝削性",
    description: "將外部成本轉嫁至社會與未來世代",
    impact: "面臨日益嚴格的法規懲罰與社會壓力",
    icon: "Scale",
  },
];

export const MYTHS = [
  {
    number: "01",
    myth: "循環經濟就是做好回收",
    truth: "超越廢棄 → 高價值循環",
    description: "循環經濟的核心是「從末端處理，轉向源頭設計與資源再定義」。回收只是眾多循環策略中的一種，且往往是價值最低的選項。",
    opportunity: "透過「資源再定義」，過去被視為廢棄物的副產品，可以被重新定義為高價值的工業原料，開創全新的產品線與利基市場。",
    comparison: [
      { old: "末端處理：產品報廢後才思考回收", new: "源頭設計：設計階段就規劃完整生命週期" },
      { old: "價值遞減：回收材料品質逐次降低", new: "價值維持：確保材料可被高價值循環利用" },
      { old: "被動應對：回收是「處理廢棄物」", new: "主動創造：循環是「創造新價值」的策略" },
    ],
  },
  {
    number: "02",
    myth: "循環經濟是額外的成本負擔",
    truth: "超越擁有 → 產品服務化",
    description: "從「銷售產品」轉為「提供使用價值與服務模式」。企業不再賣燈泡，而是賣照明時數；不再賣輪胎，而是賣行駛里程。",
    opportunity: "產品服務化模式創造更穩定、更長期的經常性收入（Recurring Revenue），大幅提升客戶黏著度與終身價值。",
    comparison: [
      { old: "一次性銷售，營收波動大", new: "經常性收入，現金流穩定" },
      { old: "賣完即斷，客戶關係薄弱", new: "持續服務，客戶黏著度高" },
      { old: "產品越耐用，賣得越少", new: "產品越耐用，服務成本越低" },
    ],
  },
  {
    number: "03",
    myth: "循環經濟是我一家企業的事",
    truth: "超越單打獨鬥 → 系統性合作",
    description: "循環經濟的實現需要「從企業競爭，走向跨產業、跨部會的供應網絡整合」。這不是某個產業的優化，而是整體經濟邏輯的轉型。",
    opportunity: "透過建立跨產業的「產業共生」網絡，一家工廠的廢棄物成為另一家工廠的原料，共同降低成本、分散風險。",
    comparison: [
      { old: "各自為政，資源浪費", new: "產業共生，資源共享" },
      { old: "獨自承擔轉型風險", new: "風險共擔，價值共創" },
      { old: "競爭導向，零和思維", new: "合作導向，正和思維" },
    ],
  },
];

export const TRILOGY = [
  {
    number: "01",
    title: "循環好主意",
    subtitle: "Good Ideas",
    color: "forest",
    description: "超越傳統 3R（Reduce / Reuse / Recycle）中「少壞就是好」的消極思維，從「源頭 2R」開始——Redefine（重新定義未來市場的需求與價值）與 Redesign（重新設計制度與商業模式）。",
    traits: ["再生型 Regenerative", "恢復型 Restorative", "包容性 Inclusive"],
    quote: "一個真正的「循環好主意」，必須同時具備再生型、恢復型與包容性三個特質。",
  },
  {
    number: "02",
    title: "循環好治理",
    subtitle: "Good Governance",
    color: "amber",
    description: "如果無法將「好主意」所帶來的外部效益反映在業者的財報上，業者就無法「吃得到」，自然也就缺乏推動的意願。好治理的角色至關重要。",
    traits: ["排除法制障礙", "公共採購導向", "財稅制度改革", "科技研發支持", "循環人才培育", "基金金融支持"],
    quote: "業者最需要的往往不是「錢」，而是「讓好主意不被既有制度卡住」。",
  },
  {
    number: "03",
    title: "循環好生意",
    subtitle: "Good Businesses",
    color: "terracotta",
    description: "當「好主意」結合「好治理」，自然會產生真正的「好生意」。不再只是 shareholder 導向的短期獲利最大化，而是 stakeholder 導向的長期韌性最大化。",
    traits: ["SDGs 對齊", "韌性台灣", "淨零台灣", "進步台灣"],
    quote: "這樣的好生意，才真正支撐「韌性台灣、淨零台灣、進步台灣」。",
  },
];

export const MODULES = [
  {
    id: "A",
    title: "痛點覺醒與觀念翻轉",
    subtitle: "從經營困境看見系統性風險",
    hours: "3",
    topics: [
      "企業經營三大痛點深度剖析",
      "線性經濟的結構性缺陷：破壞性、退化性、剝削性",
      "三大迷思破除與三大商機揭示",
      "從「好生意」到「好主意」的思維翻轉",
    ],
  },
  {
    id: "B",
    title: "循環商業模式設計",
    subtitle: "從好主意到可執行的商業藍圖",
    hours: "6",
    topics: [
      "循環商業模式畫布（Circular Business Model Canvas）實作",
      "產品服務化（PaaS）模式設計與定價策略",
      "高價值循環的源頭設計方法論",
      "價值鏈創新與產業共生網絡建構",
    ],
  },
  {
    id: "C",
    title: "政策解讀與治理策略",
    subtitle: "讓好主意不被制度卡住",
    hours: "3",
    topics: [
      "歐盟 CBAM 與國際永續法規全景解讀",
      "台灣碳費制度與資源循環促進法因應策略",
      "六大政策槓桿的企業運用指南",
      "ESG 報告與循環經濟指標整合",
    ],
  },
  {
    id: "D",
    title: "標竿實踐與行動方案",
    subtitle: "從案例學習到自身行動計畫",
    hours: "6",
    topics: [
      "國內外循環經濟標竿企業深度案例分析",
      "企業循環轉型路徑圖（Roadmap）制定",
      "跨產業合作與產業共生實務演練",
      "個人化行動方案發表與專家回饋",
    ],
  },
];

export const INSTRUCTORS = [
  {
    name: "黃育徵 董事長",
    title: "循環台灣基金會 董事長",
    bio: "「循環三部曲」核心論述提出者，長期推動台灣循環經濟政策與產業轉型，為台灣循環經濟領域最具影響力的思想領袖。",
    image: CDN.instructor1,
  },
  {
    name: "資深產業顧問",
    title: "傳播顧問團隊",
    bio: "25 年廣告、媒體與數位傳播經驗，擅長將複雜的永續議題轉化為企業可理解、可執行的策略語言與行動方案。",
    image: CDN.instructor2,
  },
  {
    name: "循環經濟實務專家",
    title: "產業轉型顧問",
    bio: "深耕循環經濟商業模式設計與產業共生網絡建構，協助多家台灣中小企業成功完成循環轉型，具備豐富的實戰經驗。",
    image: CDN.instructor3,
  },
];

export const PACKAGES = [
  {
    name: "觀念啟蒙班",
    price: "NT$ 4,800",
    originalPrice: "NT$ 6,000",
    duration: "3 小時",
    description: "適合初步了解循環經濟的企業主與經理人",
    includes: ["模組 A：痛點覺醒與觀念翻轉", "課程講義 PDF", "循環經濟入門工具包"],
    highlight: false,
  },
  {
    name: "策略實戰班",
    price: "NT$ 18,800",
    originalPrice: "NT$ 24,000",
    duration: "18 小時（完整四模組）",
    description: "適合準備啟動循環轉型的企業決策者",
    includes: [
      "完整四大模組（A + B + C + D）",
      "循環商業模式畫布工具包",
      "一對一顧問諮詢（1 小時）",
      "課後社群永久會員資格",
      "結業證書",
    ],
    highlight: true,
  },
  {
    name: "企業包班",
    price: "專案報價",
    originalPrice: "",
    duration: "客製化",
    description: "為企業量身打造的循環轉型培訓方案",
    includes: [
      "依企業需求客製課程內容",
      "企業現場診斷與分析",
      "專屬顧問團隊駐場輔導",
      "轉型路徑圖制定",
      "後續追蹤與成效評估",
    ],
    highlight: false,
  },
];

export const COMPARISON = [
  {
    dimension: "切入角度",
    market: "從國際標準、法規要求或環保責任出發",
    ours: "從企業經營的真實痛點出發",
  },
  {
    dimension: "核心訴求",
    market: "「您應該做循環經濟」（義務導向）",
    ours: "「循環經濟能解決您的經營問題」（價值導向）",
  },
  {
    dimension: "觀念框架",
    market: "偏重 3R（Reduce / Reuse / Recycle）",
    ours: "導入 2R（Redefine / Redesign）與循環三部曲",
  },
  {
    dimension: "商業連結",
    market: "較弱，多停留在概念層面",
    ours: "強烈，每個觀念都對應具體商業模式與商機",
  },
  {
    dimension: "目標學員",
    market: "永續部門、環安衛人員",
    ours: "企業主、高階經理人、策略決策者",
  },
];
