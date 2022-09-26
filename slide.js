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
     
     if(larguraDispositivo < 450 ) {
          window.setTimeout(changeSpan, 5000);
     } else if (larguraDispositivo < 620 ) {
          
     } else if (larguraDispositivo < 700 ) {

     } else if (larguraDispositivo < 755 ) {
          
     } else if (larguraDispositivo < 900 ) {

     } else {

     }
     sizeOfThings();
}

function changeSpa() {
     const imagens = document.querySelectorAll('span.slide-img');

     imagens.forEach((el,index, array) => {
          el.classList.add(imagens[index+1].classList[1]); 


          if(index === imagens.length-1) {
               el.classList.replace(imagens[index+1].classList[1])
          }
          if(index === 0) {
               el.classList.add('muda1');
          }
               // el.classList.replace(el.classList[1],imagens[index+1].classList[1]);
     });
     sizeOfThings();
}
