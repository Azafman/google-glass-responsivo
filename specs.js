function naveguePara(cabecalho, main, localMap) {
     cabecalho.classList.add('order2')
     main.children[0].style.marginTop = 0;

     for(let c = 0; c < main.children.length; c++) {
          main.children[c].classList.remove('order1')
     }
     document.querySelector(`section.${localMap}`).classList.add('order1');
     // console.log(document.getElementsByTagName('map')[0].children[0].getAttribute('coords'))
     determineCoords(document.getElementsByTagName('map')[0].children, screen.width);
}
function determineCoords(mapas, largura) {
     if(largura > 1150) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura > 1050 && largura < 1150) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura > 950 && largura < 1050) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura > 850 && largura < 950) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura <= 850) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura <= 700 && largura > 600) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
          
     } else if(largura <= 600) {
          mapas[0].getAttribute('coords')
          mapas[1].getAttribute('coords')
          mapas[2].getAttribute('coords')
          mapas[3].getAttribute('coords')
     }
}
