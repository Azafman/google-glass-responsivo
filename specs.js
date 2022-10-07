
function naveguePara(cabecalho, main, localMap) {
     cabecalho.classList.add('order2')
     main.children[0].style.marginTop = 0;

     for(let c = 0; c < main.children.length; c++) {
          main.children[c].classList.remove('order1')
     }
     document.querySelector(`section.${localMap}`).classList.add('order1');
}
