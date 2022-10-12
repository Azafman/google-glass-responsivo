function naveguePara(cabecalho, main, localMap) {
     cabecalho.classList.add('order2')
     main.children[0].style.marginTop = 0;

     for(let c = 0; c < main.children.length; c++) {
          main.children[c].classList.remove('order1')
     }
     document.querySelector(`section.${localMap}`).classList.add('order1');
}
function determineCoords(mapas, largura) {
     
     if(largura > 1150) {
          mapas[0].setAttribute('coords','298,216,198,294')
          mapas[1].setAttribute('coords','173,268,18')
          mapas[2].setAttribute('coords','83,57,18')
          mapas[3].setAttribute('coords','29,145,103,237,91,289,24,18')
     } else if(largura > 850 && largura <= 1150) {
          mapas[0].setAttribute('coords','244,174,163,236')
          mapas[1].setAttribute('coords','142,220,18')
          mapas[2].setAttribute('coords','71,48,18')
          mapas[3].setAttribute('coords','25,117,85,191,78,239,16,151')
          
     } else if(largura > 700 && largura < 850) {
          mapas[0].setAttribute('coords','284,207,187,269')
          mapas[1].setAttribute('coords','163,253,21')
          mapas[2].setAttribute('coords','82,53,21')
          mapas[3].setAttribute('coords','13,176,88,269,99,222,31,145')
          
     } else if(largura > 600 && largura < 700) {
          mapas[3].setAttribute('coords','27,126,82,202,82,254,19,158')
          mapas[1].setAttribute('coords','150,235,17')
          mapas[2].setAttribute('coords','72,51,17')
          mapas[0].setAttribute('coords','257,189,171,247')
          
     } else if(largura > 450 && largura <= 600) {
          mapas[3].setAttribute('coords','19,93,60,143,62,185,9,117')
          mapas[1].setAttribute('coords','109,172,12')
          mapas[2].setAttribute('coords','54,37,14')
          mapas[0].setAttribute('coords','123,189,191,137')
          
     } else {
          mapas[3].setAttribute('coords', '52,114,16,68,1,95,47,150')
          mapas[1].setAttribute('coords','84,133,13')
          mapas[2].setAttribute('coords','42,29,17')
          mapas[0].setAttribute('coords','97,148,150,102')
     }        
}
(function(){
     determineCoords(document.getElementsByTagName('map')[0].children, screen.width);
})(); 
