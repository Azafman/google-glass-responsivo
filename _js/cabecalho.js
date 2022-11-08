window.addEventListener('load', start);
function chmScroll() {
     console.log('scroll');
}
function appearItem(itens) {
     itens.forEach(el => {
          el.classList.replace('scroll', 'event-start');
     });
}

function toggleClass(itens) {
     itens[0].parentElement.classList.toggle("nav1");
     itens.forEach(el => el.classList.toggle('item-menu1'));
     document.querySelector('.nav').classList.toggle("nav1");
}

document.addEventListener('scroll', chmScroll)
document.addEventListener('click', (e) => {
     if(e.target.classList.contains('container-menu') || e.target.classList.contains('container-menu')) {
          toggleClass(document.querySelectorAll(".item-menu"));
     }

})

function start() {
     appearItem(document.querySelectorAll(".scroll"));//essa função será responsável pelo efeito de scroll
}


// function calcularCompra(qtde = 0) {
//      if(document.querySelector('#resposta-pedido').checked) {
//           document.querySelector('input#tot-Glass').value = `R$ ${(qtde * 549.99).toFixed(2)}`
//      } else {
          
//      }
// }                                                            
