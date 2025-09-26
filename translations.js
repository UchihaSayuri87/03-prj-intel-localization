/**
 * translations.js
 * Handles all UI translations and language switching for the Intel Sustainability Timeline project.
 * - Supports multiple languages for all visible UI text, including timeline cards, modal, form, and footer.
 * - Dynamically updates the DOM when the user selects a language.
 * - Ensures accessibility and RTL/LTR layout switching.
 * 
 * Suggestions implemented:
 * - Added detailed comments for maintainability.
 * - Uses data-i18n attributes for easier mapping and updating of translatable elements.
 * - Covers all UI text in translations.
 * - Allows switching back and forth between languages.
 * - Handles RTL/LTR switching.
 */

// --- Translation dictionary ---
// Each language code maps to a set of UI strings and arrays for cards/columns.
const translations = {
  en: {
    header: "Sustainability Through the Ages",
    sub: "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    subscribe: "Subscribe to our Newsletter",
    email: "Email address",
    subscribeBtn: "Subscribe",
    success: "Thank you for subscribing!",
    learnMore: "Learn More",
    cardTitles: [
      "1968: Intel Founded",
      "1971: First Microprocessor",
      "1978: 8086 Processor",
      "1985: 386 Processor",
      "2000: Peak GHG Emissions",
      "2020: RISE Strategy",
      "2022: Net-Zero By 2040",
      "2023: Renewable Electricity",
      "2024: Sustainability Summit"
    ],
    cardDescs: [
      "Robert Noyce and Gordon Moore rename NM Electronics to Intel Corporation, establishing the foundation for decades of technological innovation.",
      "Intel introduces the 4004, the world's first commercial microprocessor, sparking the microprocessor revolution and advancing the future of computing.",
      "The 8086 processor launches, establishing the x86 architecture that powers countless PCs and servers today.",
      "Intel unveils the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
      "This year marks Intel's highest annual greenhouse gas emissions from operations. Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
      "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, driving industry-wide progress in climate action, water stewardship, and waste reduction.",
      "Intel commits to achieving net-zero greenhouse gas emissions (Scope 1 and 2) across global operations by 2040, building on years of environmental initiatives.",
      "Intel achieves 99% renewable electricity usage worldwide, significantly reducing carbon emissions and advancing long-term sustainability goals.",
      "Intel hosts its first Sustainability Summit, bringing together suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing."
    ],
    modalTitle: "Intel Sustainability",
    modalBody: "Intel is committed to a sustainable future through innovation, responsible manufacturing, and global collaboration. Learn more about our RISE strategy, net-zero goals, and water & waste initiatives.",
    modalClose: "Close",
    colTitles: [
      "RISE Strategy",
      "Commitment",
      "Water & Waste"
    ],
    colDescs: [
      "Under its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy, Intel sets ambitious 2030 goals, including driving industry-wide progress on climate action, water stewardship, and waste reduction.",
      "In 2022, Intel pledged to achieve net-zero greenhouse gas emissions (Scope 1 and 2) by 2040. This commitment builds on decades of environmental initiatives and partnerships across the semiconductor industry.",
      "Intel conserves billions of gallons of water annually and collaborates with local communities to restore watersheds. Intel also upcycles and recycles materials to reduce waste and advance a circular economy."
    ],
    darkModeLabel: "Dark Mode",
    langLabel: "Language:",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    emailHelp: "We'll never share your email with anyone else.",
    swipeHint: "⇆ Swipe or scroll to view the timeline"
  },
  zh: {
    header: "跨越时代的可持续发展",
    sub: "探索英特尔的时光之旅，了解我们对创新的承诺如何塑造了技术和地球更可持续的未来。",
    subscribe: "订阅我们的新闻通讯",
    email: "电子邮箱",
    subscribeBtn: "订阅",
    success: "感谢您的订阅！",
    learnMore: "了解更多",
    cardTitles: [
      "1968：英特尔成立",
      "1971：首款微处理器",
      "1978：8086处理器",
      "1985：386处理器",
      "2000：温室气体排放峰值",
      "2020：RISE战略",
      "2022：2040年净零排放",
      "2023：可再生电力",
      "2024：可持续发展峰会"
    ],
    cardDescs: [
      "罗伯特·诺伊斯和戈登·摩尔将NM Electronics更名为英特尔公司，为数十年的技术创新奠定基础。",
      "英特尔推出4004，全球首款商用微处理器，引领微处理器革命，推动计算未来。",
      "8086处理器发布，确立了如今广泛应用于PC和服务器的x86架构。",
      "英特尔发布32位架构的386处理器，开启个人电脑性能和多任务处理新时代。",
      "这一年英特尔运营的温室气体排放量达到历史最高。随后数年英特尔大力投资于化学减排、可再生能源和高效制造，扭转这一趋势。",
      "英特尔启动RISE（责任、包容、可持续、赋能）战略及2030目标，推动气候行动、水资源管理和废弃物减少的行业进步。",
      "英特尔承诺到2040年实现全球运营范围内温室气体净零排放（范围1和2），延续多年的环保举措。",
      "英特尔全球可再生电力使用率达到99%，大幅降低碳排放，推动长期可持续目标。",
      "英特尔举办首届可持续发展峰会，汇聚供应商、政府官员和行业领袖，共同推动下一代可持续半导体制造。"
    ],
    modalTitle: "英特尔可持续发展",
    modalBody: "英特尔致力于通过创新、负责任的制造和全球协作实现可持续未来。了解我们的RISE战略、净零目标以及水资源与废弃物举措。",
    modalClose: "关闭",
    colTitles: [
      "RISE战略",
      "承诺",
      "水资源与废弃物"
    ],
    colDescs: [
      "通过RISE（责任、包容、可持续、赋能）战略，英特尔制定了雄心勃勃的2030目标，推动气候行动、水资源管理和废弃物减少。",
      "2022年，英特尔承诺到2040年实现温室气体净零排放（范围1和2），基于数十年的环保举措和行业合作。",
      "英特尔每年节约数十亿加仑水，并与当地社区合作修复流域，同时回收和再利用材料减少废弃物，促进循环经济。"
    ],
    darkModeLabel: "深色模式",
    langLabel: "语言：",
    privacy: "隐私政策",
    terms: "使用条款",
    contact: "联系我们",
    emailHelp: "我们绝不会与他人分享您的邮箱。",
    swipeHint: "⇆ 滑动或滚动以查看时间线"
  },
  hi: {
    header: "युगों के पार स्थिरता",
    sub: "इंटेल की यात्रा को जानें, कैसे हमारी नवाचार प्रतिबद्धता ने तकनीक और पृथ्वी के लिए अधिक टिकाऊ भविष्य गढ़ा।",
    subscribe: "हमारे न्यूज़लेटर की सदस्यता लें",
    email: "ईमेल पता",
    subscribeBtn: "सदस्यता लें",
    success: "सदस्यता के लिए धन्यवाद!",
    learnMore: "और जानें",
    cardTitles: [
      "1968: इंटेल की स्थापना",
      "1971: पहला माइक्रोप्रोसेसर",
      "1978: 8086 प्रोसेसर",
      "1985: 386 प्रोसेसर",
      "2000: ग्रीनहाउस गैस उत्सर्जन शिखर",
      "2020: RISE रणनीति",
      "2022: 2040 तक नेट-ज़ीरो",
      "2023: नवीकरणीय बिजली",
      "2024: स्थिरता शिखर सम्मेलन"
    ],
    cardDescs: [
      "रॉबर्ट नॉयस और गॉर्डन मूर ने NM Electronics का नाम बदलकर इंटेल कॉर्पोरेशन रखा, जिससे दशकों की तकनीकी नवाचार की नींव पड़ी।",
      "इंटेल ने 4004 पेश किया, दुनिया का पहला व्यावसायिक माइक्रोप्रोसेसर, जिसने माइक्रोप्रोसेसर क्रांति की शुरुआत की।",
      "8086 प्रोसेसर लॉन्च हुआ, जिससे x86 आर्किटेक्चर स्थापित हुआ जो आज अनगिनत पीसी और सर्वर को शक्ति देता है।",
      "इंटेल ने 32-बिट आर्किटेक्चर के साथ 386 प्रोसेसर पेश किया, जिससे व्यक्तिगत कंप्यूटरों के लिए प्रदर्शन और मल्टीटास्किंग का नया युग शुरू हुआ।",
      "इस वर्ष इंटेल के संचालन से ग्रीनहाउस गैस उत्सर्जन सबसे अधिक था। इंटेल ने रासायनिक नियंत्रण, नवीकरणीय ऊर्जा और ऊर्जा-कुशल निर्माण में भारी निवेश किया।",
      "इंटेल ने अपनी RISE (उत्तरदायी, समावेशी, स्थायी, सक्षम) रणनीति और 2030 लक्ष्य शुरू किए, जिससे जलवायु कार्रवाई, जल प्रबंधन और अपशिष्ट में प्रगति हुई।",
      "इंटेल ने 2040 तक वैश्विक संचालन में नेट-ज़ीरो ग्रीनहाउस गैस उत्सर्जन (स्कोप 1 और 2) प्राप्त करने का संकल्प लिया।",
      "इंटेल ने दुनिया भर में 99% नवीकरणीय बिजली का उपयोग हासिल किया, जिससे दीर्घकालिक स्थिरता लक्ष्य आगे बढ़े।",
      "इंटेल ने अपनी पहली स्थिरता शिखर बैठक आयोजित की, जिसमें आपूर्तिकर्ता, सरकारी अधिकारी और उद्योग के नेता शामिल हुए।"
    ],
    modalTitle: "इंटेल स्थिरता",
    modalBody: "इंटेल नवाचार, जिम्मेदार निर्माण और वैश्विक सहयोग के माध्यम से एक स्थायी भविष्य के लिए प्रतिबद्ध है। RISE रणनीति, नेट-ज़ीरो लक्ष्य और जल एवं अपशिष्ट पहलों के बारे में जानें।",
    modalClose: "बंद करें",
    colTitles: [
      "RISE रणनीति",
      "प्रतिबद्धता",
      "जल और अपशिष्ट"
    ],
    colDescs: [
      "अपनी RISE (उत्तरदायी, समावेशी, स्थायी, सक्षम) रणनीति के तहत, इंटेल ने 2030 के लिए महत्वाकांक्षी लक्ष्य निर्धारित किए हैं, जिसमें जलवायु कार्रवाई, जल प्रबंधन और अपशिष्ट में प्रगति शामिल है।",
      "2022 में, इंटेल ने 2040 तक नेट-ज़ीरो ग्रीनहाउस गैस उत्सर्जन (स्कोप 1 और 2) प्राप्त करने का संकल्प लिया।",
      "इंटेल हर साल अरबों गैलन पानी बचाता है और स्थानीय समुदायों के साथ मिलकर जलग्रहों को पुनर्स्थापित करता है, साथ ही अपशिष्ट कम करने के लिए सामग्रियों का पुनर्चक्रण करता है।"
    ],
    darkModeLabel: "डार्क मोड",
    langLabel: "भाषा:",
    privacy: "गोपनीयता नीति",
    terms: "उपयोग की शर्तें",
    contact: "संपर्क करें",
    emailHelp: "हम कभी भी आपका ईमेल किसी और के साथ साझा नहीं करेंगे।",
    swipeHint: "⇆ समयरेखा देखने के लिए स्वाइप या स्क्रॉल करें"
  },
  es: {
    header: "Sostenibilidad a través de los tiempos",
    sub: "Explora el viaje de Intel a lo largo del tiempo y descubre cómo nuestro compromiso con la innovación ha forjado un futuro más sostenible para la tecnología y nuestro planeta.",
    subscribe: "Suscríbete a nuestro boletín",
    email: "Correo electrónico",
    subscribeBtn: "Suscribirse",
    success: "¡Gracias por suscribirte!",
    learnMore: "Saber más",
    cardTitles: [
      "1968: Fundación de Intel",
      "1971: Primer microprocesador",
      "1978: Procesador 8086",
      "1985: Procesador 386",
      "2000: Pico de emisiones GEI",
      "2020: Estrategia RISE",
      "2022: Cero emisiones netas para 2040",
      "2023: Electricidad renovable",
      "2024: Cumbre de sostenibilidad"
    ],
    cardDescs: [
      "Robert Noyce y Gordon Moore renombraron NM Electronics a Intel Corporation, sentando las bases para décadas de innovación tecnológica.",
      "Intel presenta el 4004, el primer microprocesador comercial del mundo, iniciando la revolución del microprocesador.",
      "El procesador 8086 se lanza, estableciendo la arquitectura x86 que impulsa innumerables PCs y servidores hoy en día.",
      "Intel presenta el procesador 386 con arquitectura de 32 bits, marcando una nueva era de rendimiento y multitarea.",
      "Este año marca el mayor nivel anual de emisiones de gases de efecto invernadero de Intel. Intel invierte en reducción química, energía renovable y fabricación eficiente.",
      "Intel lanza su estrategia RISE (Responsable, Inclusiva, Sostenible, Facilitadora) y objetivos 2030, impulsando el progreso en acción climática, gestión del agua y reducción de residuos.",
      "Intel se compromete a lograr cero emisiones netas de gases de efecto invernadero (alcance 1 y 2) en sus operaciones globales para 2040.",
      "Intel logra un 99% de uso de electricidad renovable en todo el mundo, reduciendo significativamente las emisiones de carbono.",
      "Intel organiza su primera Cumbre de Sostenibilidad, reuniendo a proveedores, funcionarios gubernamentales y líderes de la industria."
    ],
    modalTitle: "Sostenibilidad de Intel",
    modalBody: "Intel está comprometida con un futuro sostenible a través de la innovación, la fabricación responsable y la colaboración global. Conoce más sobre nuestra estrategia RISE, metas de cero emisiones y acciones de agua y residuos.",
    modalClose: "Cerrar",
    colTitles: [
      "Estrategia RISE",
      "Compromiso",
      "Agua y residuos"
    ],
    colDescs: [
      "Bajo su estrategia RISE (Responsable, Inclusiva, Sostenible, Facilitadora), Intel establece ambiciosos objetivos para 2030, impulsando el progreso en acción climática, gestión del agua y reducción de residuos.",
      "En 2022, Intel se comprometió a lograr cero emisiones netas de gases de efecto invernadero (alcance 1 y 2) para 2040.",
      "Intel conserva miles de millones de galones de agua anualmente y colabora con comunidades locales para restaurar cuencas. También recicla materiales para reducir residuos."
    ],
    darkModeLabel: "Modo oscuro",
    langLabel: "Idioma:",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    contact: "Contacto",
    emailHelp: "Nunca compartiremos tu correo electrónico con nadie.",
    swipeHint: "⇆ Desliza o desplaza para ver la línea de tiempo"
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

// Add language names for selector (for translation)
const langNames = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  bn: "বাংলা",
  ru: "Русский",
  pt: "Português",
  ur: "اردو",
  ja: "日本語"
};

// --- Utility: Get translation for a key (supports nested keys/arrays) ---
function t(lang, key) {
  // Example: t('en', 'cardTitles[0]')
  const parts = key.split(/[\[\]\.]+/).filter(Boolean);
  let value = translations[lang];
  for (const part of parts) {
    if (value && typeof value === 'object') value = value[part];
    else break;
  }
  return value || '';
}

// --- Update all translatable content on the page ---
function updateAllContent(lang) {
  // Update elements with data-i18n="key" or data-i18n="array[index]"
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(lang, key);
  });

  // Update input placeholders if needed
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(lang, key));
  });

  // Update aria-labels if needed
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', t(lang, key));
  });

  // Update document direction for RTL languages
  setDirForLang(lang);
}

// --- Set RTL/LTR direction based on language ---
function setDirForLang(lang) {
  const rtlLangs = ['ar', 'he', 'fa', 'ur', 'ps', 'dv', 'ku', 'yi', 'ug', 'sd'];
  const isRTL = rtlLangs.includes(lang);
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', isRTL);
}

// --- Language switching logic ---
function setLanguage(lang) {
  // Save language to localStorage for persistence
  localStorage.setItem('lang', lang);
  // Set <html lang="...">
  document.documentElement.lang = lang;
  // Update all UI text
  updateAllContent(lang);
  updateLangSelector(lang);
}

// --- Utility: update language selector options' text if needed
function updateLangSelector(lang) {
  const langSelect = document.getElementById('lang-toggle');
  if (!langSelect) return;
  Array.from(langSelect.options).forEach(opt => {
    const code = opt.value;
    // Use the language's own name for the selector
    opt.textContent = langNames[code] || code;
  });
  langSelect.value = lang;
}

// --- On page load: initialize language and event listeners ---
document.addEventListener('DOMContentLoaded', () => {
  // Detect saved language or default to English
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  // Language selector event
  const langSelect = document.getElementById('lang-toggle');
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', e => {
      setLanguage(e.target.value);
    });
  }

  // Dark mode toggle event (optional, if present)
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    darkToggle.addEventListener('change', e => {
      document.body.classList.toggle('dark-mode', e.target.checked);
    });
  }
});

// --- SUGGESTION: Use data-i18n attributes in your HTML for all translatable elements ---
// Example for a timeline card title:
// <h3 class="card-title fs-5" data-i18n="cardTitles[0]"></h3>
// Example for a card description:
// <p class="card-text" data-i18n="cardDescs[0]"></p>

// --- SUGGESTION: Add comments to your HTML to clarify which elements are dynamically translated ---

// --- SUGGESTION: Test language switching, RTL/LTR, and accessibility in all supported languages ---

// --- SUGGESTION: For performance, defer this script if possible, and use loading="lazy" for images ---

// --- SUGGESTION: Keep translations.js organized and modular as the project grows ---

// --- SUGGESTION: For accessibility, ensure all interactive elements have clear labels and color contrast is sufficient ---

// --- SUGGESTION: Add a favicon and meta tags for better SEO and sharing (in your HTML <head>) ---

// --- SUGGESTION: Organize assets in folders (img/, css/, js/) for maintainability ---

// --- SUGGESTION: If using Google Translate or similar, use rtl-detect.js to auto-switch RTL/LTR as needed ---

// --- END OF SUGGESTIONS ---
  return value || '';


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
