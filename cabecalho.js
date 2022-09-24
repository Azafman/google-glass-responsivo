function mudaClasse(objeto) {
     // objeto.classList.toggle('item-muda');
     const items = objeto.getElementsByClassName('item-menu')
     const navegacao = document.getElementsByClassName('nav')
     setTimeout(() => {
          navegacao[0].classList.toggle('nav1');
     }, 200)
     for(let i in items) {
          items[i].classList.toggle('item-menu1');
     }
}                                                                
(function() {
     const menu = document.getElementsByClassName('container-menu')[0];
     const iframe = document.getElementsByTagName('iframe')[0]
     
     let largura = window.screen.width;
     if(largura >= 850) {
          menu.style.display = 'none';
          //iframe.classList.toggle('nav1');
          console.log(iframe);
     }    
})();