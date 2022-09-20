(function(){
     let larguraSpecs = window.screen.width;
     if(larguraSpecs >= 800) {
          const iframeCabecalho = document.getElementsByClassName('img-mao');
          iframeCabecalho[0].classList.toggle('vira-de-novo')
     }
})();