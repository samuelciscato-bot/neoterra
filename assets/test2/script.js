const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const year = document.querySelector('[data-year]');
if (year) {
  year.textContent = new Date().getFullYear();
}

const trackEvent = (name, payload = {}) => {
  const eventPayload = { event: name, ...payload };
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  } else {
    console.info('track', eventPayload);
  }
};

document.querySelectorAll('[data-track]').forEach((el) => {
  el.addEventListener('click', () => {
    trackEvent(el.dataset.track, {
      label: el.dataset.trackLabel || el.textContent.trim(),
      location: window.location.pathname,
    });
  });
});

document.querySelectorAll('form[data-track]').forEach((form) => {
  form.addEventListener('submit', () => {
    trackEvent(form.dataset.track, {
      label: form.dataset.trackLabel || 'form submit',
      location: window.location.pathname,
    });
  });
});

const quiz = document.querySelector('[data-quiz]');
if (quiz) {
  const steps = Array.from(quiz.querySelectorAll('[data-step]'));
  let active = 0;
  const showStep = (index) => {
    steps.forEach((step, i) => step.classList.toggle('active', i === index));
  };
  showStep(active);
  quiz.addEventListener('click', (event) => {
    const next = event.target.closest('[data-next]');
    const prev = event.target.closest('[data-prev]');
    if (next && active < steps.length - 1) {
      active += 1;
      showStep(active);
      trackEvent('quiz_next', { step: active + 1 });
    }
    if (prev && active > 0) {
      active -= 1;
      showStep(active);
      trackEvent('quiz_prev', { step: active + 1 });
    }
  });
  quiz.addEventListener('change', (event) => {
    if (event.target.matches('input, select')) {
      trackEvent('quiz_answer', {
        step: active + 1,
        name: event.target.name,
        value: event.target.value,
      });
    }
  });
}
