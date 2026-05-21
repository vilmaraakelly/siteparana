const elements = document.querySelectorAll('.fade');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  elements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }

  });

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});

const audioFile = document.getElementById('audioFile');
const player = document.getElementById('player');

audioFile.addEventListener('change', function(){

  const arquivo = this.files[0];

  if(arquivo){

    const url = URL.createObjectURL(arquivo);

    player.src = url;

  }

});
