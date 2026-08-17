document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

// i18n
const translations = {
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_exp: 'Background',
    nav_contact: 'Contact',

    hero_eyebrow: '// available for a first developer role',
    hero_role: 'Junior Full-Stack Developer',
    hero_lead: "Graduate in Computer Programming from La Cité collégiale, specialized in React, TypeScript, Node.js and Next.js. I like building complete applications, from the frontend down to the database, and shipping them to production.",
    hero_cta_projects: 'See my projects',
    hero_cta_contact: 'Get in touch',

    about_title: 'About',
    about_text: "Junior full-stack developer based in Gatineau, passionate about building complete web applications — from the interface down to the database. Hands-on experience with real projects deployed to production, including authentication, PWAs, and API integration. Native French speaker, intermediate English.",
    fact_projects: 'deployed projects',
    fact_commits: 'commits on Libéo',
    fact_grad: 'graduate, La Cité collégiale',

    skills_title: 'Technical Skills',
    skill_frontend: 'Frontend',
    skill_backend: 'Backend',
    skill_db: 'Databases',
    skill_tools: 'Tools',
    skill_other: 'Other',

    projects_title: 'Projects',
    proj_gymtrack: `
      <li>Full-stack fitness tracking application (PWA) hosted in production on a dedicated server</li>
      <li>Full authentication (email/password + Google OAuth), dashboard, search across 873 exercises, personal record tracking</li>
      <li>Stats page with body weight chart and volume-per-muscle breakdown, Git workflow feat/ → dev → main</li>
    `,
    proj_gymfox: `
      <li>E-commerce frontend for gym accessories, deployed on Vercel</li>
      <li>PWA support with install banner, partial internationalization (navbar and hero)</li>
    `,
    proj_libeo: `
      <li>Simulated banking application built in partnership with a colleague (107 commits)</li>
      <li>Client profile management, multiple accounts, transfers, payments, deposits, AI assistant</li>
      <li>Frontend lead: styling, design system, Jira backlog (8 epics, 118 sub-tasks)</li>
    `,

    exp_title: 'Background',
    edu_heading: 'Education',
    edu_1_title: 'Diploma in Computer Programming',
    edu_1_desc: 'Web, mobile and standalone applications · Databases · AI · Software testing · Agile',
    edu_2_title: 'High School Diploma',
    work_heading: 'Work Experience',
    work_1_date: '2025 – present',
    work_1_title: 'Customer Service & Supply',
    work_1_desc: 'Customer service, delivery and store supply management',
    work_2_title: 'Customer Service & Cook',
    work_2_desc: "4 years of experience in customer service and kitchen work, opening/closing shifts, deliveries",

    lang_fr: 'French',
    lang_fr_level: 'native speaker',
    lang_en: 'English',
    lang_en_level: 'intermediate',

    contact_title: 'Contact',
    contact_lead: "Open to first developer job opportunities. Feel free to reach out.",
    form_name: 'Name',
    form_email: 'Email',
    form_message: 'Message',
    form_send: 'Send message',
    footer_built: 'Designed and hand-coded.'
  }
};

const formMessages = {
  fr: {
    sending: 'Envoi en cours...',
    success: "Message envoyé ! Je te réponds dès que possible.",
    error: "Une erreur est survenue. Écris-moi directement à zachary.belley@outlook.com.",
    notConfigured: "Le formulaire n'est pas encore configuré — écris-moi directement à zachary.belley@outlook.com."
  },
  en: {
    sending: 'Sending...',
    success: "Message sent! I'll get back to you as soon as possible.",
    error: "Something went wrong. Email me directly at zachary.belley@outlook.com.",
    notConfigured: "The form isn't configured yet — email me directly at zachary.belley@outlook.com."
  }
};

let currentLang = 'fr';
const originalFr = {};

function cacheOriginal() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    originalFr[el.getAttribute('data-i18n')] = { el, html: false, content: el.textContent };
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    originalFr[el.getAttribute('data-i18n-html')] = { el, html: true, content: el.innerHTML };
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'fr') {
      el.textContent = originalFr[key].content;
    } else if (translations.en[key]) {
      el.textContent = translations.en[key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (lang === 'fr') {
      el.innerHTML = originalFr[key].content;
    } else if (translations.en[key]) {
      el.innerHTML = translations.en[key];
    }
  });
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  currentLang = lang;
}

cacheOriginal();
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

// Reveal on scroll
const revealables = document.querySelectorAll('.section, .hero');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealables.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  io.observe(el);
});

// Contact form (EmailJS — see README for setup instructions)
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

const contactForm = document.getElementById('contactForm');
const cfSubmit = document.getElementById('cf-submit');
const cfStatus = document.getElementById('cf-status');

if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

function setStatus(text, type) {
  cfStatus.textContent = text;
  cfStatus.classList.remove('success', 'error');
  if (type) cfStatus.classList.add(type);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Honeypot: bots fill hidden fields, humans never do
  if (contactForm.company.value) return;

  const msgs = formMessages[currentLang];

  if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    setStatus(msgs.notConfigured, 'error');
    return;
  }

  cfSubmit.disabled = true;
  setStatus(msgs.sending, null);

  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
    .then(() => {
      setStatus(msgs.success, 'success');
      contactForm.reset();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setStatus(msgs.error, 'error');
    })
    .finally(() => {
      cfSubmit.disabled = false;
    });
});
