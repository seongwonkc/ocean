// ── LANGUAGE TOGGLE ──
const translations = {
  en: {
    eyebrow: "A children's IP rooted in Korean mythology & the Big Five",
    h1: "Every child<br>contains <em>multitudes.</em>",
    subtitle: "OCEAN helps you understand yours.",
    cta: "Meet the Characters",
    concept_label: "The Science",
    concept_h2: "MBTI is fun. But it wasn't built to grow.",
    concept_p1: "You've probably seen your child's MBTI floating around. It's fun — but it wasn't designed for children, and it wasn't designed to change.",
    concept_p2: "OCEAN is built on the Big Five — the most rigorously tested personality framework in psychology. Unlike MBTI, Big Five traits are measurable, developmentally meaningful, and most importantly: <strong>they can grow.</strong>",
    concept_p3: "We didn't build OCEAN to label your child. We built it to help you see them more clearly.",
    characters_label: "The Characters",
    characters_h2: "Five children. Five spirits. One family.",
    characters_sub: "Meet the world of OCEAN.",
    world_label: "The World",
    world_h2: "A warm house at the edge of somewhere familiar.",
    world_p1: "Five children, different ages, different spirits — same family. A place where a mountain spirit thinks nothing of sitting next to a fox.",
    world_p2: "Where the loudest voice and the quietest one need each other more than either will admit.",
    why_label: "For Investors & Partners",
    why_h2: "Korea's premium kids market. Science-backed personality development.",
    why1_h: "Free Assessment",
    why1_p: "Big Five test for children, delivered in warm character-coded language parents immediately understand.",
    why2_h: "Premium Consultation",
    why2_p: "Full professional report with child psychology specialist. Science-backed, parent-facing.",
    why3_h: "Learning Products",
    why3_p: "Personalized books and 학습지 tied to your child's actual profile. Traits are improvable — we show parents how.",
    why4_h: "OCEAN Education",
    why4_p: "Long-term: an OCEAN-model early education program built around the Big Five framework.",
    why_quote: "\"The characters are the thread that ties it all together.\"",
    waitlist_h2: "Be the first to know.",
    waitlist_p: "OCEAN is coming. Join the waitlist and we'll reach out when we launch.",
    tab_parents: "I'm a Parent",
    tab_investors: "I'm an Investor",
    placeholder: "Your email address",
    submit: "Join Waitlist",
    footer: "© 2025 OCEAN / 오션. All rights reserved.",
    chars: [
      { name: "Chiu", kr: "치우", age: "Age 9", desc: "The one who was already ready before you asked." },
      { name: "Osol", kr: "오솔", age: "Age 8", desc: "Always mid-thought, mid-wonder, mid-everything." },
      { name: "Epa", kr: "이파", age: "Age 6", desc: "First through the door, loudest in the room, last to leave." },
      { name: "Aru", kr: "아루", age: "Age 7", desc: "Knows how everyone's feeling before they do." },
      { name: "Nuri", kr: "누리", age: "Age 5", desc: "Feels everything. Misses nothing." }
    ]
  },
  kr: {
    eyebrow: "한국 신화와 Big Five를 담은 어린이 IP",
    h1: "우리 아이,<br>왜 그랬을까요?",
    subtitle: "오션이 함께 찾아드립니다.",
    cta: "캐릭터 만나기",
    concept_label: "과학적 배경",
    concept_h2: "MBTI, 재미있죠. 근데 뭔가 아쉽지 않으셨나요?",
    concept_p1: "MBTI, 재미있죠. 근데 솔직히 우리 아이한테 딱 맞는 것 같으면서도… 뭔가 아쉬울 때 있지 않으셨나요?",
    concept_p2: "오션은 Big Five — 심리학에서 가장 오랫동안 검증된 성격 모델을 바탕으로 만들었어요. MBTI와 다른 점이 하나 있어요. Big Five는 변해요. <strong>자랄 수 있어요.</strong> 우리 아이와 함께요.",
    concept_p3: "유형으로 가두려는 게 아니에요. "아, 그래서 그랬구나" — 그 순간을 드리고 싶어서 만들었습니다.",
    characters_label: "캐릭터",
    characters_h2: "다섯 아이. 다섯 기운. 그런데 왜 이렇게 다 다를까요?",
    characters_sub: "오션의 세계를 만나보세요.",
    world_label: "세계관",
    world_h2: "어딘가 낯익은 곳, 따뜻한 집 한 채.",
    world_p1: "나이도 다르고 기운도 다른 다섯 아이가 함께 살아요. 산신령이 여우 옆에 앉는 게 전혀 이상하지 않은 곳.",
    world_p2: "제일 시끄러운 아이와 제일 조용한 아이가 사실 서로 제일 필요한 곳. 오션의 집은 그런 곳이에요.",
    why_label: "투자자 & 파트너",
    why_h2: "프리미엄 아동 콘텐츠 시장. 과학이 뒷받침하는 성격 발달.",
    why1_h: "무료 검사",
    why1_p: "아이를 위한 Big Five 검사. 부모님이 바로 이해할 수 있는 따뜻한 언어로 전달합니다.",
    why2_h: "프리미엄 상담",
    why2_p: "아동심리 전문가와의 심층 상담. 과학적 근거, 부모님 눈높이에 맞게.",
    why3_h: "학습 콘텐츠",
    why3_p: "우리 아이 성향에 맞춘 책과 학습지. Big Five는 키울 수 있습니다.",
    why4_h: "오션 교육",
    why4_p: "Big Five 철학을 담은 유아 교육 프로그램. 오션의 장기 비전입니다.",
    why_quote: "\"처음부터 끝까지, 오션의 다섯 친구들이 함께합니다.\"",
    waitlist_h2: "가장 먼저 만나보세요.",
    waitlist_p: "오션이 곧 찾아옵니다. 사전 신청하시면 런칭 소식을 제일 먼저 전해드릴게요.",
    tab_parents: "부모입니다",
    tab_investors: "투자자/파트너입니다",
    placeholder: "이메일 주소를 입력해주세요",
    submit: "사전 신청하기",
    footer: "© 2025 OCEAN / 오션. All rights reserved.",
    chars: [
      { name: "Chiu", kr: "치우", age: "9살", desc: "시키기도 전에 이미 다 해놓은 아이." },
      { name: "Osol", kr: "오솔", age: "8살", desc: "맨날 딴 생각하는 것 같은데, 사실 제일 많이 생각하는 아이." },
      { name: "Epa", kr: "이파", age: "6살", desc: "어디서든 제일 먼저 친구 사귀는 아이." },
      { name: "Aru", kr: "아루", age: "7살", desc: "아무 말 안 해도 눈치채는 아이." },
      { name: "Nuri", kr: "누리", age: "5살", desc: "별것 아닌 것에 가장 크게 감동받는 아이." }
    ]
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Toggle buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Hero
  document.querySelector('.hero-eyebrow').innerHTML = t.eyebrow;
  document.querySelector('.hero h1').innerHTML = t.h1;
  document.querySelector('.hero-subtitle').textContent = t.subtitle;
  document.querySelector('.hero-cta').textContent = t.cta;

  // Concept
  document.querySelector('.concept .section-label').textContent = t.concept_label;
  document.querySelector('.concept h2').textContent = t.concept_h2;
  const conceptPs = document.querySelectorAll('.concept p');
  conceptPs[0].innerHTML = t.concept_p1;
  conceptPs[1].innerHTML = t.concept_p2;
  conceptPs[2].innerHTML = t.concept_p3;

  // Characters
  document.querySelector('.characters .section-label').textContent = t.characters_label;
  document.querySelector('.characters-header h2').textContent = t.characters_h2;
  document.querySelector('.characters-header p').textContent = t.characters_sub;

  const cards = document.querySelectorAll('.character-card');
  t.chars.forEach((char, i) => {
    cards[i].querySelector('.character-age').textContent = char.age;
    cards[i].querySelector('.character-desc').textContent = char.desc;
  });

  // World
  document.querySelector('.world .section-label').textContent = t.world_label;
  document.querySelector('.world-text h2').textContent = t.world_h2;
  const worldPs = document.querySelectorAll('.world-text p');
  worldPs[0].textContent = t.world_p1;
  worldPs[1].textContent = t.world_p2;

  // Why
  document.querySelector('.why .section-label').textContent = t.why_label;
  document.querySelector('.why h2').textContent = t.why_h2;
  const whyItems = document.querySelectorAll('.why-item');
  const whyKeys = ['why1', 'why2', 'why3', 'why4'];
  whyKeys.forEach((key, i) => {
    whyItems[i].querySelector('h3').textContent = t[key + '_h'];
    whyItems[i].querySelector('p').textContent = t[key + '_p'];
  });
  document.querySelector('.why-quote').textContent = t.why_quote;

  // Waitlist
  document.querySelector('.waitlist h2').textContent = t.waitlist_h2;
  document.querySelector('.waitlist > p') && (document.querySelector('.waitlist-desc').textContent = t.waitlist_p);
  const tabs = document.querySelectorAll('.waitlist-tabs button');
  tabs[0].textContent = t.tab_parents;
  tabs[1].textContent = t.tab_investors;
  document.querySelector('.waitlist-form input').placeholder = t.placeholder;
  document.querySelector('.waitlist-form button').textContent = t.submit;

  // Footer
  document.querySelector('footer p').textContent = t.footer;
}

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
