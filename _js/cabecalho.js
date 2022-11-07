const larguraTela = window.screen.width;
window.addEventListener('load', start);
function chmScroll() {
     console.log('scroll');
}
function appearItem(itens) {
     itens.forEach(el => {
          el.classList.replace('scroll', 'event-start');
     });
     document.addEventListener('scroll', chmScroll)
}
function start() {
     appearItem(document.querySelectorAll(".scroll"));
     if(larguraTela >= 850) {
          document.querySelector('.container-menu')
          sumirMenu()
          menu.style.display = 'none';
          console.log(iframe);
     }
}


// function mudaClasse(objeto) {
//      const items = objeto.getElementsByClassName('item-menu')
//      const navegacao = document.getElementsByClassName('nav')
//      setTimeout(() => {
//           navegacao[0].classList.toggle('nav1');
//      }, 200)
//      for(let i in items) {
//           items[i].classList.toggle('item-menu1');
//      }
// }    
// function calcularCompra(qtde = 0) {
//      if(document.querySelector('#resposta-pedido').checked) {
//           document.querySelector('input#tot-Glass').value = `R$ ${(qtde * 549.99).toFixed(2)}`
//      } else {
          
//      }
// }                                                            
// (function() {
//      const menu = document.getElementsByClassName('container-menu')[0];
//      menu.classList.replace()
     
//      let largura = window.screen.width;
//      if(largura >= 850) {
//           menu.style.display = 'none';
//           console.log(iframe);
//      }    
// })();