
function naveguePara(cabecalho, main, localMap) {
     cabecalho.classList.add('order2')
     main.children[0].style.marginTop = 0;

     document.querySelector(`section.${localMap}`).classList.add('order1');
     for(let c in main.children) {
          main.children[c].classList.add('order2')
     }
//      if(localMap == 'camera') {
//           main.children[1].classList.add('order1');
//      } else if (localMap == 'bateria') {
//           main.children[3].classList.add('order1');
//      } else if (localMap == 'sensores') {
//           main.children[2].classList.add('order1');
//      } else if (localMap == 'tela') {
//           main.children[0].classList.add('order1');
//      }
}
