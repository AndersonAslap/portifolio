(() => {
  const STORAGE_KEY = 'ap-lang';
  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };

  // PT is the source text already in the HTML; EN and ES are applied on top.
  const dict = {
    en: {
      'meta.title': 'Anderson Paiva — Software Architect & DevOps',
      'meta.description': 'Anderson Paiva, Software Architect & DevOps with 8 years of experience. Architecture, system development and integration, DevOps and AI applied to business.',
      skip: 'Skip to content',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.role': 'Software Architect & DevOps',
      'hero.lead': 'I build solutions to my clients’ problems, with solid architecture, reliable integrations, end-to-end automation and AI applied where it creates real value.',
      'cta.whatsapp': 'Chat on WhatsApp',
      'hero.location': 'Abreu e Lima, Brazil · Remote',
      'hero.current': 'Senior Architect at Accenture',
      'map.title': 'Services map: architecture, systems, integrations, DevOps and applied AI',
      'svc.arch.short': 'Architecture',
      'nav.services': 'Services',
      'svc.title': 'From design to operations, one single line.',
      'svc.lead': 'I work with companies and teams that need to get an idea off the ground, connect systems that don’t talk to each other, or put delivery on autopilot.',
      'svc.arch.name': 'Software architecture',
      'svc.arch.desc': 'Scalable, secure architecture design, recorded technical decisions and reviews of existing systems before technical debt turns into cost.',
      'svc.arch.tags': 'Solution design · Reviews · Modernization',
      'svc.dev.name': 'System development',
      'svc.dev.desc': 'Custom systems, from back end to integration interfaces, with clean, tested code that is ready to grow with the business.',
      'svc.dev.tags': 'APIs · Back end · Web systems',
      'svc.int.name': 'Systems integration',
      'svc.int.desc': 'I connect platforms, APIs and external providers so data and processes flow without manual rework or spreadsheets in the middle.',
      'svc.int.tags': 'APIs · Messaging · Omnichannel',
      'svc.ops.name': 'DevOps & platform',
      'svc.ops.desc': 'CI/CD pipelines, Kubernetes, infrastructure as code and GitOps to ship often, safely and predictably.',
      'svc.ai.name': 'AI applied to business',
      'svc.ai.desc': 'Integrating AI models into products and processes, choosing the right model for each task and measuring the value it delivers.',
      'svc.model.label': 'Engagement models:',
      'svc.model': 'fixed-scope project, hourly consulting or dedicated allocation.',
      'svc.dev.short': 'Systems',
      'svc.int.short': 'Integrations',
      'svc.ops.short': 'DevOps',
      'svc.ai.short': 'Applied AI',
      'about.title': 'Technology in service of the problem, not the other way around.',
      'about.p1': 'I’m Anderson Paiva, a software architect and DevOps engineer with 8 years of experience in engineering, systems architecture and automation. Today I work as a Senior Architect at Accenture.',
      'about.p2': 'My path includes modernizing an environmental licensing system, an omnichannel platform integrated with several messaging providers and AI models, and infrastructure automation on Kubernetes. In every one of these projects the starting point was the same: understand the business problem before choosing the technology.',
      'about.principles': 'How I work',
      'about.k1': 'Problem before tooling',
      'about.v1': 'I start with what needs to change in the business. The stack comes later.',
      'about.k2': 'Architecture the team can sustain',
      'about.v2': 'Solutions that are simple to operate, documented and easy to evolve.',
      'about.k3': 'End-to-end automation',
      'about.v3': 'What repeats becomes a pipeline: build, tests, deploy and infrastructure as code.',
      'about.k4': 'Transparency',
      'about.v4': 'Risks, deadlines and trade-offs stated clearly from day one.',
      'contact.title1': 'Let’s talk about',
      'contact.title2': 'your project.',
      'contact.lead': 'Tell me which problem you need to solve. I read every message and reply personally.',
      'footer.place': 'Abreu e Lima, Pernambuco, Brazil.',
      'footer.top': 'Back to top',
    },
    es: {
      'meta.title': 'Anderson Paiva — Arquitecto de Software & DevOps',
      'meta.description': 'Anderson Paiva, Arquitecto de Software & DevOps con 8 años de experiencia. Arquitectura, desarrollo e integración de sistemas, DevOps e IA aplicada al negocio.',
      skip: 'Saltar al contenido',
      'menu.open': 'Abrir menú',
      'menu.close': 'Cerrar menú',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.role': 'Arquitecto de Software & DevOps',
      'hero.lead': 'Construyo soluciones para los problemas de mis clientes, con arquitectura sólida, integraciones confiables, automatización de punta a punta e IA aplicada donde genera valor real.',
      'cta.whatsapp': 'Hablar por WhatsApp',
      'hero.location': 'Abreu e Lima, Brasil · Remoto',
      'hero.current': 'Arquitecto Sénior en Accenture',
      'map.title': 'Mapa de servicios: arquitectura, sistemas, integraciones, DevOps e IA aplicada',
      'svc.arch.short': 'Arquitectura',
      'nav.services': 'Servicios',
      'svc.title': 'Del diseño a la operación, en una sola línea.',
      'svc.lead': 'Trabajo con empresas y equipos que necesitan sacar una idea del papel, conectar sistemas que no se comunican o automatizar sus entregas.',
      'svc.arch.name': 'Arquitectura de software',
      'svc.arch.desc': 'Diseño de arquitecturas escalables y seguras, decisiones técnicas documentadas y revisión de sistemas existentes antes de que la deuda técnica se convierta en costo.',
      'svc.arch.tags': 'Diseño de solución · Revisión · Modernización',
      'svc.dev.name': 'Desarrollo de sistemas',
      'svc.dev.desc': 'Sistemas a medida, del back-end a las interfaces de integración, con código limpio, probado y listo para crecer junto al negocio.',
      'svc.dev.tags': 'APIs · Back-end · Sistemas web',
      'svc.int.name': 'Integración de sistemas',
      'svc.int.desc': 'Conecto plataformas, APIs y proveedores externos para que los datos y procesos fluyan sin retrabajo manual ni hojas de cálculo de por medio.',
      'svc.int.tags': 'APIs · Mensajería · Omnicanal',
      'svc.ops.name': 'DevOps y plataforma',
      'svc.ops.desc': 'Pipelines de CI/CD, Kubernetes, infraestructura como código y GitOps para entregar con frecuencia, seguridad y previsibilidad.',
      'svc.ai.name': 'IA aplicada al negocio',
      'svc.ai.desc': 'Integración de modelos de IA en productos y procesos, eligiendo el modelo adecuado para cada tarea y midiendo el valor que entrega.',
      'svc.model.label': 'Formas de contratación:',
      'svc.model': 'proyecto cerrado, consultoría por hora o asignación.',
      'svc.dev.short': 'Sistemas',
      'svc.int.short': 'Integraciones',
      'svc.ops.short': 'DevOps',
      'svc.ai.short': 'IA aplicada',
      'about.title': 'La tecnología al servicio del problema, no al revés.',
      'about.p1': 'Soy Anderson Paiva, arquitecto de software y DevOps con 8 años de experiencia en ingeniería, arquitectura de sistemas y automatización. Hoy trabajo como Arquitecto Sénior en Accenture.',
      'about.p2': 'Mi trayectoria incluye la modernización de un sistema de licenciamiento ambiental, una plataforma omnicanal integrada con varios proveedores de mensajería y modelos de IA, y la automatización de infraestructura en Kubernetes. En todos estos proyectos el punto de partida fue el mismo: entender el problema del negocio antes de elegir la tecnología.',
      'about.principles': 'Cómo trabajo',
      'about.k1': 'El problema antes que la herramienta',
      'about.v1': 'Empiezo por lo que necesita cambiar en el negocio. La tecnología viene después.',
      'about.k2': 'Arquitectura que el equipo puede sostener',
      'about.v2': 'Soluciones simples de operar, documentadas y fáciles de evolucionar.',
      'about.k3': 'Automatización de punta a punta',
      'about.v3': 'Lo que se repite se convierte en pipeline: build, pruebas, deploy e infraestructura como código.',
      'about.k4': 'Transparencia',
      'about.v4': 'Riesgos, plazos y trade-offs explicados con claridad desde el primer día.',
      'contact.title1': 'Hablemos sobre',
      'contact.title2': 'tu proyecto.',
      'contact.lead': 'Cuéntame qué problema necesitas resolver. Leo cada mensaje y respondo personalmente.',
      'footer.place': 'Abreu e Lima, Pernambuco, Brasil.',
      'footer.top': 'Volver arriba',
    },
  };

  // Capture the Portuguese source once so switching back is lossless.
  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const ariaNodes = [...document.querySelectorAll('[data-i18n-aria]')];
  const metaDesc = document.querySelector('meta[name="description"]');
  dict.pt = {
    'meta.title': document.title,
    'meta.description': metaDesc.content,
    'menu.open': 'Abrir menu',
    'menu.close': 'Fechar menu',
  };
  textNodes.forEach((el) => { dict.pt[el.dataset.i18n] ??= el.textContent; });

  let current = 'pt';
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  function t(key) {
    return dict[current][key] ?? dict.pt[key];
  }

  function applyLang(lang) {
    current = dict[lang] ? lang : 'pt';
    document.documentElement.lang = HTML_LANG[current];
    document.title = t('meta.title');
    metaDesc.content = t('meta.description');
    textNodes.forEach((el) => { el.textContent = t(el.dataset.i18n); });
    ariaNodes.forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === current));
    });
    syncMenuLabel();
    try { localStorage.setItem(STORAGE_KEY, current); } catch {}
  }

  function initialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch {}
    const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return dict[nav] ? nav : 'pt';
  }

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Mobile menu
  function syncMenuLabel() {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  }
  function setMenu(open) {
    menu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
    syncMenuLabel();
  }
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuBtn.focus();
    }
  });

  // Hero lines: measure so the draw-on animation knows each length
  document.querySelectorAll('.map-line').forEach((path) => {
    path.style.setProperty('--len', Math.ceil(path.getTotalLength()));
  });
  document.querySelector('.map').classList.add('map-ready');

  // Scroll rail progress
  const root = document.documentElement;
  let ticking = false;
  let updateProgress = function () {
    const max = root.scrollHeight - innerHeight;
    root.style.setProperty('--progress', max > 0 ? (scrollY / max).toFixed(4) : 0);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });

  // Rail stations: one per section, lit once the ride has reached it
  const railStops = document.getElementById('rail-stops');
  const stops = ['sobre', 'servicos', 'contato'].map((id) => {
    const li = document.createElement('li');
    li.className = 'station absolute -left-[6.5px] size-3.5 -translate-y-1/2';
    railStops.append(li);
    return { li, section: document.getElementById(id) };
  });
  function placeStops() {
    const max = root.scrollHeight - innerHeight;
    stops.forEach((stop) => {
      stop.at = Math.min(1, Math.max(0, (stop.section.offsetTop - innerHeight * 0.5) / max));
      stop.li.style.top = `${stop.at * 100}%`;
    });
  }
  const baseUpdate = updateProgress;
  updateProgress = function () {
    baseUpdate();
    const progress = parseFloat(root.style.getPropertyValue('--progress')) || 0;
    stops.forEach((stop) => stop.li.classList.toggle('station-lit', progress >= stop.at - 0.001));
  };
  addEventListener('resize', () => { placeStops(); updateProgress(); });
  addEventListener('load', () => { placeStops(); updateProgress(); });
  placeStops();
  updateProgress();

  // Active section in the nav
  const links = [...document.querySelectorAll('.nav-link')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.setAttribute('aria-current', String(a.hash === `#${entry.target.id}`)));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => {
    const section = document.querySelector(a.hash);
    if (section) observer.observe(section);
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyLang(initialLang());
})();
