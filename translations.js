// --- Dark Mode Toggle Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeLabel = document.getElementById('darkModeLabel');

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', '1');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', '0');
  }
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function() {
    setDarkMode(this.checked);
  });
  if (localStorage.getItem('darkMode') === '1') {
    darkModeToggle.checked = true;
    setDarkMode(true);
  }
}

// --- Translation Helper ---
function t(lang, key, idx) {
  const dict = translations[lang] || translations['en'];
  const value = dict[key];
  if (Array.isArray(value)) {
    return typeof idx === 'number' && value[idx] !== undefined ? value[idx] : '';
  }
  return value || '';
}

// --- Main Translation Update ---
function updateAllContent(lang) {
  // Hero section
  const headerH1 = document.querySelector('.hero-section h1');
  if (headerH1) headerH1.textContent = t(lang, 'header');
  const headerP = document.querySelector('.hero-section p.lead');
  if (headerP) headerP.textContent = t(lang, 'sub');

  // Navbar language label
  const langLabel = document.querySelector('.lang-label');
  if (langLabel) langLabel.textContent = t(lang, 'langLabel');
  // Dark mode label
  if (darkModeLabel) darkModeLabel.textContent = t(lang, 'darkModeLabel') || 'Dark Mode';

  // Timeline swipe hint
  const swipeHint = document.querySelector('.swipe-hint span');
  if (swipeHint) swipeHint.textContent = t(lang, 'swipeHint');

  // Timeline cards
  const cards = document.querySelectorAll('#timeline .glass-card');
  cards.forEach((card, i) => {
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = t(lang, 'cardTitles', i);
    const desc = card.querySelector('.card-desc');
    if (desc) desc.textContent = t(lang, 'cardDescs', i);
  });

  // 3-column section
  const infoCards = document.querySelectorAll('section.container .card');
  infoCards.forEach((col, i) => {
    const title = col.querySelector('.card-title');
    if (title) title.textContent = t(lang, 'colTitles', i);
    const text = col.querySelector('.card-text');
    if (text) text.textContent = t(lang, 'colDescs', i);
    const btn = col.querySelector('.btn');
    if (btn) btn.textContent = t(lang, 'learnMore');
  });

  // Subscription section
  const subscribeSection = document.querySelector('.py-5.bg-white h2');
  if (subscribeSection) subscribeSection.textContent = t(lang, 'subscribe');
  const formLabel = document.querySelector('.form-label');
  if (formLabel) formLabel.textContent = t(lang, 'email');
  const formBtn = document.querySelector('#subscribe-form button[type="submit"]');
  if (formBtn) formBtn.textContent = t(lang, 'subscribeBtn');
  const subscribeSuccess = document.getElementById('subscribe-success');
  if (subscribeSuccess) subscribeSuccess.textContent = t(lang, 'success');
  const emailHelp = document.getElementById('emailHelp');
  if (emailHelp) emailHelp.textContent = t(lang, 'emailHelp');

  // Modal
  const modalLabel = document.getElementById('intelModalLabel');
  if (modalLabel) modalLabel.textContent = t(lang, 'modalTitle');
  const modalBody = document.querySelector('.modal-body p');
  if (modalBody) modalBody.textContent = t(lang, 'modalBody');
  const modalClose = document.querySelector('.modal-footer .btn');
  if (modalClose) modalClose.textContent = t(lang, 'modalClose');

  // Footer
  const footer = document.querySelector('footer.intel-footer');
  if (footer) {
    const links = footer.querySelectorAll('nav a');
    if (links.length >= 3) {
      links[0].textContent = t(lang, 'privacy');
      links[1].textContent = t(lang, 'terms');
      links[2].textContent = t(lang, 'contact');
    }
  }

  // Page title
  document.title = t(lang, 'header');
}

// --- Language Toggle Logic ---
const langToggle = document.getElementById('lang-toggle');
const rtlLangs = ['ar', 'he', 'fa', 'ur'];

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  updateAllContent(lang);
  document.body.setAttribute('dir', rtlLangs.includes(lang) ? 'rtl' : 'ltr');
  if (langToggle) langToggle.value = lang;
}

if (langToggle) {
  langToggle.addEventListener('change', function() {
    setLanguage(this.value);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  let lang = 'en';
  if (langToggle && langToggle.value && translations[langToggle.value]) {
    lang = langToggle.value;
  }
  setLanguage(lang);
});

// Suggestions:
// - Remove any duplicate or misplaced translation objects at the end of this file.
// - Ensure your translations object is defined only once and is complete for all languages you want to support.
// - Keep translation keys and the order of elements in sync with your HTML structure.
// - If you add new visible text, add a translation key for it in all languages and update updateAllContent to set its text.
// - Use browser console to check for selector errors or missing keys.
// - For accessibility, ensure all interactive elements have localized aria-labels or text.
// - If you add dynamic content, call updateAllContent after adding new elements to ensure translation.
  const translations = {
    zh: {
      cardTitles: [
        "英特尔成立",
        "首款微处理器",
        "8086处理器",
        "386处理器",
        "温室气体排放峰值",
        "RISE战略",
        "2040年净零排放",
        "可再生电力",
        "可持续发展峰会"
      ],
      cardDescs: [
        "罗伯特·诺伊斯和戈登·摩尔将NM Electronics更名为英特尔公司为数十年的技术创新奠定基础",
        "英特尔推出4004全球首款商用微处理器引领微处理器革命推动计算未来",
        "8086处理器发布确立了如今广泛应用于PC和服务器的x86架构",
        "英特尔发布32位架构的386处理器开启个人电脑性能和多任务处理新时代",
        "这一年英特尔运营的温室气体排放量达到历史最高随后数年英特尔大力投资于化学减排可再生能源和高效制造扭转这一趋势",
        "英特尔启动RISE（责任包容可持续赋能）战略及2030目标推动气候行动水资源管理和废弃物减少的行业进步",
        "英特尔承诺到2040年实现全球运营范围内温室气体净零排放（范围1和2）延续多年的环保举措",
        "英特尔全球可再生电力使用率达到99%大幅降低碳排放推动长期可持续目标",
        "英特尔举办首届可持续发展峰会汇聚供应商政府官员和行业领袖共同推动下一代可持续半导体制造"
      ],
      modalTitle: "英特尔可持续发展",
      modalBody: "英特尔致力于通过创新负责任的制造和全球协作实现可持续未来了解我们的RISE战略净零目标以及水资源与废弃物举措",
      modalClose: "关闭",
      colTitles: [
        "RISE战略",
        "承诺",
        "水资源与废弃物"
      ],
      colDescs: [
        "通过RISE（责任包容可持续赋能）战略英特尔制定了雄心勃勃的2030目标推动气候行动水资源管理和废弃物减少",
        "2022年英特尔承诺到2040年实现温室气体净零排放（范围1和2）基于数十年的环保举措和行业合作",
        "英特尔每年节约数十亿加仑水并与当地社区合作修复流域同时回收和再利用材料减少废弃物促进循环经济"
      ],
      darkModeLabel: "深色模式",
      langLabel: "语言：",
      privacy: "隐私政策",
      terms: "使用条款",
      contact: "联系我们",
      emailHelp: "我们绝不会与他人分享您的邮箱",
      swipeHint: "⇆ 滑动或滚动以查看时间线"
    },
    fr: {
    header: "Durabilité à travers les âges",
    sub: "Découvrez le parcours d'Intel à travers le temps et comment notre engagement envers l'innovation a façonné un avenir plus durable pour la technologie et le planète",
    subscribe: "Abonnez-vous à notre newsletter",
    email: "Adresse e-mail",
    subscribeBtn: "S'abonner",
    success: "Merci pour votre abonnement !",
    learnMore: "En savoir plus",
    cardTitles: [
      "Création d'Intel",
      "Premier microprocesseur",
      "Processeur 8086",
      "Processeur 386",
      "Pic d'émissions de GES",
      "Stratégie RISE",
      "Zéro émission nette d'ici 2040",
      "Électricité renouvelable",
      "Sommet sur la durabilité"
    ],
    cardDescs: [
      "Robert Noyce et Gordon Moore renomment NM Electronics en Intel Corporation posant les bases de décennies d'innovation technologique",
      "Intel présente le 4004 le premier microprocesseur commercial au monde lançant la révolution du microprocesseur et l'avenir de l'informatique",
      "Lancement du processeur 8086 établissant l'architecture x86 qui alimente d'innombrables PC et serveurs aujourd'hui",
      "Intel dévoile le processeur 386 avec une architecture 32 bits inaugurant une nouvelle ère de performance et de multitâche pour les ordinateurs personnels",
      "Cette année marque le plus haut niveau annuel d'émissions de gaz à effet de serre d'Intel Dans les années suivantes Intel investit massivement dans la réduction chimique l'énergie renouvelable et la fabrication écoénergétique pour inverser cette tendance",
      "Intel lance sa stratégie RISE (Responsable Inclusive Durable Facilitante) et ses objectifs 2030 stimulant les progrès du secteur en matière d'action climatique de gestion de l'eau et de réduction des déchets",
      "Intel s'engage à atteindre la neutralité carbone (Scope 1 et 2) dans ses opérations mondiales d'ici 2040 s'appuyant sur des années d'initiatives environnementales",
      "Intel atteint 99% d'utilisation d'électricité renouvelable dans le monde réduisant considérablement les émissions de carbone et faisant progresser ses objectifs de durabilité à long terme",
      "Intel organise son premier Sommet sur la durabilité réunissant fournisseurs responsables gouvernementaux et leaders du secteur pour collaborer sur la fabrication durable de semi-conducteurs de nouvelle génération"
    ],
    modalTitle: "Durabilité chez Intel",
    modalBody: "Intel s'engage pour un avenir durable grâce à l'innovation la fabrication responsable et la collaboration mondiale Découvrez notre stratégie RISE nos objectifs zéro émission nette et nos initiatives sur l'eau et les déchets",
    modalClose: "Fermer",
    colTitles: [
      "Stratégie RISE",
      "Engagement",
      "Eau & Déchets"
    ],
    colDescs: [
      "Avec sa stratégie RISE (Responsable Inclusive Durable Facilitante) Intel fixe des objectifs ambitieux pour 2030 afin de faire progresser l'action climatique la gestion de l'eau et la réduction des déchets",
      "En 2022 Intel s'est engagé à atteindre la neutralité carbone (Scope 1 et 2) d'ici 2040 s'appuyant sur des décennies d'initiatives environnementales et de partenariats industriels",
      "Intel économise des milliards de litres d'eau chaque année et collabore avec les communautés locales pour restaurer les bassins versants L'entreprise recycle et valorise également les matériaux pour réduire les déchets et promouvoir une économie circulaire"
    ],
    darkModeLabel: "Mode sombre",
    langLabel: "Langue :",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    contact: "Contact",
    emailHelp: "Nous ne partagerons jamais votre e-mail avec qui que ce soit",
    swipeHint: "⇆ Faites glisser ou faites défiler pour voir la chronologie"
  },
  ar: {
    header: "الاستدامة عبر العصور",
    sub: "اكتشف رحلة إنتل عبر الزمن وكيف شكل التزامنا بالابتكار مستقبلًا أكثر استدامة للتكنولوجيا والكوكب",
    subscribe: "اشترك في نشرتنا الإخبارية",
    email: "البريد الإلكتروني",
    subscribeBtn: "اشترك",
    success: "شكرًا لاشتراكك!",
    learnMore: "اعرف المزيد",
    cardTitles: [
      "تأسيس إنتل",
      "أول معالج دقيق",
      "معالج 8086",
      "معالج 386",
      "ذروة انبعاثات الغازات الدفيئة",
      "استراتيجية RISE",
      "صفر انبعاثات بحلول 2040",
      "الكهرباء المتجددة",
      "قمة الاستدامة"
    ],
    cardDescs: [
      "روبرت نويس وغوردون مور يغيران اسم NM Electronics إلى شركة إنتل مما يمهد الطريق لعقود من الابتكار التكنولوجي",
      "تقدم إنتل 4004 أول معالج دقيق تجاري في العالم مما يشعل ثورة المعالجات الدقيقة ويدفع مستقبل الحوسبة",
      "إطلاق معالج 8086 الذي أسس معمارية x86 التي تشغل العديد من أجهزة الكمبيوتر والخوادم اليوم",
      "تقدم إنتل معالج 386 بمعمارية 32 بت مما يدشن عصرًا جديدًا من الأداء وتعدد المهام لأجهزة الكمبيوتر الشخصية",
      "يمثل هذا العام أعلى انبعاثات سنوية للغازات الدفيئة من عمليات إنتل في السنوات التالية تستثمر إنتل بكثافة في تقليل الانبعاثات الكيميائية والطاقة المتجددة والتصنيع الفعال للطاقة لعكس هذا الاتجاه",
      "تطلق إنتل استراتيجيتها RISE (مسؤولة شاملة مستدامة ممكّنة) وأهداف 2030 لدفع التقدم في العمل المناخي وإدارة المياه وتقليل النفايات",
      "تلتزم إنتل بتحقيق صافي انبعاثات صفرية (النطاق 1 و2) في عملياتها العالمية بحلول عام 2040 استنادًا إلى سنوات من المبادرات البيئية",
      "تحقق إنتل استخدام 99% من الكهرباء المتجددة عالميًا مما يقلل بشكل كبير من انبعاثات الكربون ويدفع أهداف الاستدامة طويلة الأجل",
      "تنظم إنتل أول قمة استدامة تجمع الموردين والمسؤولين الحكوميين وقادة الصناعة للتعاون في تصنيع أشباه الموصلات المستدامة للجيل القادم"
    ],
    modalTitle: "استدامة إنتل",
    modalBody: "تلتزم إنتل بمستقبل مستدام من خلال الابتكار والتصنيع المسؤول والتعاون العالمي تعرف على المزيد حول استراتيجية RISE وأهداف الصفر الصافي ومبادرات المياه والنفايات",
    modalClose: "إغلاق",
    colTitles: [
      "استراتيجية RISE",
      "الالتزام",
      "المياه والنفايات"
    ],
    colDescs: [
      "من خلال استراتيجية RISE (مسؤولة شاملة مستدامة ممكّنة) تضع إنتل أهدافًا طموحة لعام 2030 لدفع التقدم في العمل المناخي وإدارة المياه وتقليل النفايات",
      "في عام 2022 تعهدت إنتل بتحقيق صافي انبعاثات صفرية (النطاق 1 و2) بحلول عام 2040 استنادًا إلى عقود من المبادرات البيئية والشراكات الصناعية",
      "تحافظ إنتل سنويًا على مليارات الجالونات من المياه وتتعاون مع المجتمعات المحلية لاستعادة الأحواض كما تعيد تدوير المواد لتقليل النفايات وتعزيز الاقتصاد الدائري"
    ],
    darkModeLabel: "الوضع الداكن",
    langLabel: "اللغة:",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    contact: "اتصل بنا",
    emailHelp: "لن نشارك بريدك الإلكتروني مع أي طرف آخر",
    swipeHint: "⇆ اسحب أو مرر لعرض الجدول الزمني"
  },
  ja: {
    header: "時代を超えて続くサステナビリティ",
    sub: "インテルの歩みを振り返り 私たちのイノベーションへの情熱がテクノロジーと地球のより持続可能な未来をどのように築いてきたかをご覧ください",
    subscribe: "ニュースレターに登録する",
    email: "メールアドレス",
    subscribeBtn: "登録する",
    success: "ご登録ありがとうございます！",
    learnMore: "もっと詳しく",
    cardTitles: [
      "インテル創業",
      "初のマイクロプロセッサ",
      "8086プロセッサ",
      "386プロセッサ",
      "温室効果ガス排出量ピーク",
      "RISE戦略",
      "2040年ネットゼロ目標",
      "再生可能エネルギー",
      "サステナビリティサミット"
    ],
    cardDescs: [
      "ロバート・ノイスとゴードン・ムーアがNM Electronicsをインテル株式会社に改名し 長年にわたる技術革新の礎を築きました",
      "インテルは世界初の商用マイクロプロセッサ4004を発表し マイクロプロセッサ革命とコンピューティングの未来を切り開きました",
      "8086プロセッサの登場により 現代の多くのPCやサーバーを支えるx86アーキテクチャが確立されました",
      "インテルは32ビットアーキテクチャの386プロセッサを発表し パーソナルコンピュータの性能とマルチタスクの新時代を切り開きました",
      "この年 インテルの事業における温室効果ガス排出量が過去最高となりました その後 インテルは化学物質の削減 再生可能エネルギー エネルギー効率の高い製造に大きく投資し この傾向を逆転させました",
      "インテルはRISE（責任 包摂 持続可能 エンパワーメント）戦略と2030年目標を開始し 気候変動対策 水資源管理 廃棄物削減の業界全体の進展を推進しています",
      "インテルは2040年までにグローバル事業全体で温室効果ガス排出量ネットゼロ（スコープ1・2）を達成することを約束し 長年の環境イニシアチブを基盤としています",
      "インテルは世界中で99%の再生可能電力使用を達成し 炭素排出量を大幅に削減し 長期的なサステナビリティ目標を推進しています",
      "インテルは初のサステナビリティサミットを開催し サプライヤー 政府関係者 業界リーダーが次世代の持続可能な半導体製造について協力しました"
    ],
    modalTitle: "インテルのサステナビリティ",
    modalBody: "インテルはイノベーション 責任ある製造 グローバルな連携を通じて持続可能な未来を目指しています RISE戦略 ネットゼロ目標 水と廃棄物への取り組みについて詳しくご覧ください",
    modalClose: "閉じる",
    colTitles: [
      "RISE戦略",
      "コミットメント",
      "水と廃棄物"
    ],
    colDescs: [
      "RISE（責任 包摂 持続可能 エンパワーメント）戦略を通じて インテルは2030年までに気候変動対策 水資源管理 廃棄物削減の野心的な目標を掲げています",
      "2022年 インテルは2040年までに温室効果ガス排出量ネットゼロ（スコープ1・2）を達成することを誓い 長年の環境活動と業界パートナーシップを基盤としています",
      "インテルは毎年数十億ガロンの水を節約し 地域社会と協力して流域を回復しています また 廃棄物削減と循環型経済の推進のために 材料のリサイクルと再利用にも取り組んでいます"
    ],
    darkModeLabel: "ダークモード",
    langLabel: "言語：",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    contact: "お問い合わせ",
    emailHelp: "メールアドレスを第三者と共有することはありません",
    swipeHint: "⇆ タイムラインを見るにはスワイプまたはスクロールしてください"
  }
};
// --- END ---

// Helper function for translation lookup
function t(lang, key, idx) {
  const dict = translations[lang] || translations['en'];
  const value = dict[key];
  if (Array.isArray(value)) {
    return typeof idx === 'number' && value[idx] !== undefined ? value[idx] : '';
  }
  return value || '';
}

// Main translation update function
function updateAllContent(lang) {
  // Hero section
  const headerH1 = document.querySelector('.hero-section h1');
  if (headerH1) headerH1.textContent = t(lang, 'header');
  const headerP = document.querySelector('.hero-section p.lead');
  if (headerP) headerP.textContent = t(lang, 'sub');

  // Navbar language label
  const langLabel = document.querySelector('.lang-label');
  if (langLabel) langLabel.textContent = t(lang, 'langLabel');
  // Dark mode label
  if (darkModeLabel) darkModeLabel.textContent = t(lang, 'darkModeLabel') || 'Dark Mode';

  // Timeline swipe hint
  const swipeHint = document.querySelector('.swipe-hint span');
  if (swipeHint) swipeHint.textContent = t(lang, 'swipeHint');

  // Timeline cards
  const cards = document.querySelectorAll('#timeline .glass-card');
  cards.forEach((card, i) => {
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = t(lang, 'cardTitles', i);
    const desc = card.querySelector('.card-desc');
    if (desc) desc.textContent = t(lang, 'cardDescs', i);
  });

  // 3-column section
  const infoCards = document.querySelectorAll('section.container .card');
  infoCards.forEach((col, i) => {
    const title = col.querySelector('.card-title');
    if (title) title.textContent = t(lang, 'colTitles', i);
    const text = col.querySelector('.card-text');
    if (text) text.textContent = t(lang, 'colDescs', i);
    const btn = col.querySelector('.btn');
    if (btn) btn.textContent = t(lang, 'learnMore');
  });

  // Subscription section
  const subscribeSection = document.querySelector('.py-5.bg-white h2');
  if (subscribeSection) subscribeSection.textContent = t(lang, 'subscribe');
  const formLabel = document.querySelector('.form-label');
  if (formLabel) formLabel.textContent = t(lang, 'email');
  const formBtn = document.querySelector('#subscribe-form button[type="submit"]');
  if (formBtn) formBtn.textContent = t(lang, 'subscribeBtn');
  const subscribeSuccess = document.getElementById('subscribe-success');
  if (subscribeSuccess) subscribeSuccess.textContent = t(lang, 'success');
  const emailHelp = document.getElementById('emailHelp');
  if (emailHelp) emailHelp.textContent = t(lang, 'emailHelp');

  // Modal
  const modalLabel = document.getElementById('intelModalLabel');
  if (modalLabel) modalLabel.textContent = t(lang, 'modalTitle');
  const modalBody = document.querySelector('.modal-body p');
  if (modalBody) modalBody.textContent = t(lang, 'modalBody');
  const modalClose = document.querySelector('.modal-footer .btn');
  if (modalClose) modalClose.textContent = t(lang, 'modalClose');

  // Footer
  const footer = document.querySelector('footer.intel-footer');
  if (footer) {
    const links = footer.querySelectorAll('nav a');
    if (links.length >= 3) {
      links[0].textContent = t(lang, 'privacy');
      links[1].textContent = t(lang, 'terms');
      links[2].textContent = t(lang, 'contact');
    }
  }

  // Page title
  document.title = t(lang, 'header');
}

// Language toggle logic

function setLanguage(lang) {
  // If the language is not in translations, fallback to English
  if (!translations[lang]) lang = 'en';
  updateAllContent(lang);
  document.body.setAttribute('dir', rtlLangs.includes(lang) ? 'rtl' : 'ltr');
  if (langToggle) langToggle.value = lang;
}

if (langToggle) {
  langToggle.addEventListener('change', function() {
    setLanguage(this.value);
  });
}

// Ensure translation after DOM is fully loaded, default to English
document.addEventListener('DOMContentLoaded', function() {
  let lang = 'en';
  if (langToggle && langToggle.value && translations[langToggle.value]) {
    lang = langToggle.value;
  }
  setLanguage(lang);
});
