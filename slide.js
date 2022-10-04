function iniciar() {
     sizeOfThings();
}
function mostrarLegenda(span) {
     const spanLeg = document.styleSheets[1].cssRules[3]
     if(spanLeg.style.opacity != 1) {
          spanLeg.style.opacity = 1
     } else {
          spanLeg.style.opacity = 0
     }
}
 function sizeOfThings() {
     let larguraDispositivo = window.innerWidth;
     let cont = 2;
     const imagens = document.querySelectorAll('span.slide-img');
     
     if(larguraDispositivo < 450 ) {
          changeSpan();
          function changeSpan() {
          
               window.setTimeout(slideImg, 3500);;
               function slideImg() {
                    if(cont > 6) cont = 1;
                    imagens[0].classList.replace(imagens[0].classList[1], `img${cont}`)
                    imagens[0].classList.add('muda1');
                    window.setTimeout(changeSpan, 100);
                    cont++;
               }
          }
     } else if (larguraDispositivo < 620 ) {
          
     } else if (larguraDispositivo < 700 ) {

     } else if (larguraDispositivo < 755 ) {
          
     } else if (larguraDispositivo < 900 ) {

     } else {

     }
}
