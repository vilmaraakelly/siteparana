const elements = document.querySelectorAll('.fade');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  // Efeito Fade
  elements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }

  });

  // Mudança no Header
  if (window.scrollY > 50) {

    header.classList.add('scrolled');

  } else {

    header.classList.remove('scrolled');

  }

});
