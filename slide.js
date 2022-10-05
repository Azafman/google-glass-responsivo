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
          changeSpan(0);
     } else if (larguraDispositivo < 620 ) {
          changeSpan(0);
          changeSpan(1);
     } else if (larguraDispositivo < 700 ) {
          changeSpan(0);
          changeSpan(1);
          changeSpan(2);
          
     } else if (larguraDispositivo < 755 ) {
          changeSpan(0);
          changeSpan(1);
          changeSpan(2);
          changeSpan(3);
          
     } else if (larguraDispositivo < 900 ) {
          changeSpan(0);
          changeSpan(1);
          changeSpan(2);
          changeSpan(3);
          changeSpan(4);
     } else {
          changeSpan(0);
          changeSpan(1);
          changeSpan(2);
          changeSpan(3);
          changeSpan(4);
          changeSpan(5);
     }
     function changeSpan(num) {
          
          window.setTimeout(slideImg, 3500);;
          function slideImg() {
               if(cont > 6) cont = 1;
               imagens[num].classList.replace(imagens[num].classList[1], `img${cont}`)
               imagens[num].classList.add('muda1');
               window.setTimeout(() => {changeSpan(num)}, 600);
               cont++;
          }
     }
}
