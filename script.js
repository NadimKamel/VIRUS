const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});
menu?.addEventListener('click', () => links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links?.classList.remove('open')));

document.querySelectorAll('.reveal').forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); } });
  }, {threshold:.12});
  observer.observe(el);
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
