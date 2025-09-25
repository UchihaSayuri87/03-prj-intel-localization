document.body.setAttribute('dir', 'rtl');

// --- Dark Mode Toggle Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeLabel = document.getElementById('darkModeLabel');
// Save dark mode preference in localStorage
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
  // On toggle
  darkModeToggle.addEventListener('change', function() {
    setDarkMode(this.checked);
  });
  // On load
  if (localStorage.getItem('darkMode') === '1') {
    darkModeToggle.checked = true;
    setDarkMode(true);
  }
}

// --- Enhanced Real Language Translation ---
// Define translations for all visible text (add more as needed)
const translations = {
  en: {
    header: "Sustainability Through the Ages",
    sub: "Discover Intel's journey through time and see how our dedication to innovation has shaped a more sustainable future for technology and the planet",
    subscribe: "Subscribe to Our Newsletter",
    email: "Email Address",
    subscribeBtn: "Subscribe",
    success: "Thank you for subscribing!",
    learnMore: "Learn More",
    cardTitles: [
      "Intel Founded",
      "First Microprocessor",
      "8086 Processor",
      "386 Processor",
      "Peak GHG Emissions",
      "RISE Strategy",
      "Net-Zero by 2040",
      "Renewable Electricity",
      "Sustainability Summit"
    ],
    cardDescs: [
      "Robert Noyce and Gordon Moore rename NM Electronics to Intel Corporation establishing the foundation for decades of technological innovation",
      "Intel introduces the 4004 the world's first commercial microprocessor sparking the microprocessor revolution and advancing the future of computing",
      "The 8086 processor launches establishing the x86 architecture that powers countless PCs and servers today",
      "Intel unveils the 386 processor with 32-bit architecture ushering in a new era of performance and multitasking for personal computers",
      "This year marks Intel's highest annual greenhouse gas emissions from operations In the following years Intel invests heavily in chemical abatement renewable energy and energy-efficient manufacturing to reverse this trend",
      "Intel launches its RISE (Responsible Inclusive Sustainable Enabling) strategy and 2030 goals driving industry-wide progress in climate action water stewardship and waste reduction",
      "Intel commits to achieving net-zero greenhouse gas emissions (Scope 1 and 2) across global operations by 2040 building on years of environmental initiatives",
      "Intel achieves 99% renewable electricity usage worldwide significantly reducing carbon emissions and advancing long-term sustainability goals",
      "Intel hosts its first Sustainability Summit bringing together suppliers government officials and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing"
    ],
    modalTitle: "Intel Sustainability",
    modalBody: "Intel is dedicated to a sustainable future through innovation responsible manufacturing and global collaboration Learn more about our RISE strategy net-zero goals and water and waste initiatives",
    modalClose: "Close",
    colTitles: [
      "RISE Strategy",
      "Commitment",
      "Water & Waste"
    ],
    colDescs: [
      "Through its RISE (Responsible Inclusive Sustainable Enabling) strategy Intel sets ambitious 2030 goals to drive progress in climate action water stewardship and waste reduction",
      "In 2022 Intel pledged to achieve net-zero greenhouse gas emissions (Scope 1 and 2) by 2040 building on decades of environmental initiatives and industry partnerships",
      "Intel conserves billions of gallons of water annually and partners with local communities to restore watersheds The company also recycles and upcycles materials to reduce waste and promote a circular economy"
    ],
    darkModeLabel: "Dark Mode",
    langLabel: "Language:",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    emailHelp: "We will never share your email with anyone else",
    swipeHint: "⇆ Swipe or scroll to view the timeline"
  },
  es: {
    header: "Sostenibilidad a Través de los Años",
    sub: "Descubre el recorrido de Intel a lo largo del tiempo y cómo nuestro compromiso con la innovación ha forjado un futuro más sostenible para la tecnología y el planeta",
    subscribe: "Suscríbete a Nuestro Boletín",
    email: "Correo Electrónico",
    subscribeBtn: "Suscribirse",
    success: "¡Gracias por suscribirte!",
    learnMore: "Más Información",
    cardTitles: [
      "Fundación de Intel",
      "Primer Microprocesador",
      "Procesador 8086",
      "Procesador 386",
      "Máximas Emisiones de GEI",
      "Estrategia RISE",
      "Cero Neto para 2040",
      "Electricidad Renovable",
      "Cumbre de Sostenibilidad"
    ],
    cardDescs: [
      "Robert Noyce y Gordon Moore renombran NM Electronics como Intel Corporation sentando las bases para décadas de innovación tecnológica",
      "Intel presenta el 4004 el primer microprocesador comercial del mundo iniciando la revolución del microprocesador y el avance de la computación",
      "Se lanza el procesador 8086 estableciendo la arquitectura x86 que impulsa innumerables PCs y servidores en la actualidad",
      "Intel presenta el procesador 386 con arquitectura de 32 bits marcando una nueva era de rendimiento y multitarea para computadoras personales",
      "Este año marca el mayor nivel anual de emisiones de gases de efecto invernadero de Intel En los años siguientes Intel invierte fuertemente en reducción química energía renovable y manufactura eficiente para revertir esta tendencia",
      "Intel lanza su estrategia RISE (Responsable Inclusiva Sostenible Facilitadora) y metas para 2030 impulsando el progreso en acción climática gestión del agua y reducción de residuos",
      "Intel se compromete a lograr emisiones netas cero (alcance 1 y 2) en todas sus operaciones globales para 2040 basándose en años de iniciativas ambientales",
      "Intel alcanza un 99% de uso de electricidad renovable en todo el mundo reduciendo significativamente las emisiones de carbono y avanzando hacia sus objetivos de sostenibilidad a largo plazo",
      "Intel organiza su primera Cumbre de Sostenibilidad reuniendo a proveedores funcionarios gubernamentales y líderes de la industria para colaborar en la próxima generación de manufactura sostenible de semiconductores"
    ],
    modalTitle: "Sostenibilidad en Intel",
    modalBody: "Intel está dedicada a un futuro sostenible mediante la innovación la manufactura responsable y la colaboración global Conoce más sobre nuestra estrategia RISE metas de cero neto y las iniciativas de agua y residuos",
    modalClose: "Cerrar",
    colTitles: [
      "Estrategia RISE",
      "Compromiso",
      "Agua y Residuos"
    ],
    colDescs: [
      "A través de su estrategia RISE (Responsable Inclusiva Sostenible Facilitadora) Intel establece ambiciosas metas para 2030 para impulsar el progreso en acción climática gestión del agua y reducción de residuos",
      "En 2022 Intel se comprometió a lograr emisiones netas cero de gases de efecto invernadero (alcance 1 y 2) para 2040 basándose en décadas de iniciativas ambientales y alianzas en la industria",
      "Intel conserva miles de millones de galones de agua anualmente y colabora con comunidades locales para restaurar cuencas La empresa también recicla y reutiliza materiales para reducir residuos y promover una economía circular"
    ],
    darkModeLabel: "Modo Oscuro",
    langLabel: "Idioma:",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    contact: "Contacto",
    emailHelp: "Nunca compartiremos tu correo electrónico con nadie más",
    swipeHint: "⇆ Desliza o desplázate para ver la línea de tiempo"
  },
  zh: {
    header: "跨越时代的可持续发展",
    sub: "探索英特尔的历史旅程了解我们对创新的承诺如何塑造了技术与地球更可持续的未来",
    subscribe: "订阅我们的新闻通讯",
    email: "电子邮箱地址",
    subscribeBtn: "订阅",
    success: "感谢您的订阅！",
    learnMore: "了解更多",
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
  }
  // Add more languages as needed (zh, fr, ar, etc.)
};

// Utility: get translation or fallback to English, then fallback to key
function t(lang, key, idx) {
  const langObj = translations[lang] || translations['en'] || {};
  if (Array.isArray(langObj[key]) && typeof idx === 'number') {
    return (langObj[key] && langObj[key][idx]) || (translations['en'][key] && translations['en'][key][idx]) || '';
  }
  return (langObj[key] !== undefined ? langObj[key] : (translations['en'] ? translations['en'][key] : key)) || key;
}

// Main translation update function
function updateAllContent(lang) {
  // Header
  const headerH1 = document.querySelector('header h1');
  if (headerH1) headerH1.textContent = t(lang, 'header');
  const headerP = document.querySelector('header p');
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
  const cols = document.querySelectorAll('.container .card');
  cols.forEach((col, i) => {
    const title = col.querySelector('.card-title');
    if (title) title.textContent = t(lang, 'colTitles', i);
    const text = col.querySelector('.card-text');
    if (text) text.textContent = t(lang, 'colDescs', i);
    const btn = col.querySelector('.btn');
    if (btn) btn.textContent = t(lang, 'learnMore');
  });

  // Subscription section
  const subscribeSection = document.querySelector('section.py-5.bg-white h2');
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

  // Footer (single, cleaned up)
  const footer = document.querySelector('footer.intel-footer');
  if (footer) {
    const links = footer.querySelectorAll('nav a');
    if (links.length >= 3) {
      links[0].textContent = t(lang, 'privacy');
      links[1].textContent = t(lang, 'terms');
      links[2].textContent = t(lang, 'contact');
    }
  }
}

// Language toggle logic
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('change', function() {
    updateAllContent(this.value);
    // Optionally, set dir for RTL languages
    const rtlLangs = ['ar', 'he', 'fa', 'ur'];
    document.body.setAttribute('dir', rtlLangs.includes(this.value) ? 'rtl' : 'ltr');
  });
  // Set dir for default language
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];
  document.body.setAttribute('dir', rtlLangs.includes(langToggle.value) ? 'rtl' : 'ltr');
}

// Ensure translation after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  if (langToggle) {
    updateAllContent(langToggle.value);
  } else {
    // fallback to English if no toggle
    updateAllContent('en');
  }
});
