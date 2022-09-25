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
     const imgs = document.querySelectorAll('span.slide-img');

     if(larguraDispositivo < 450 ) {
          setTimeout(changeSpan(imgs), 4000);
     } else if (larguraDispositivo < 620 ) {

     } else if (larguraDispositivo < 700 ) {

     } else if (larguraDispositivo < 755 ) {

     } else if (larguraDispositivo < 900 ) {

     } else {

     }
}

function changeSpan(imagens) {
     console.log(imagens)

     imagens.forEach((el,index, array) => {
          if(index === 0) {
               el.classList.replace(el.classList[1],imagens[index+1].classList[1]);
          }
     });
     // sizeOfThings();
}
