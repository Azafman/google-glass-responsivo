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
     const imagens = document.querySelectorAll('span.slide-img');
     
     if(larguraDispositivo < 450 ) {
          changeSpan(imagens);
     } else if (larguraDispositivo < 620 ) {
          
     } else if (larguraDispositivo < 700 ) {

     } else if (larguraDispositivo < 755 ) {
          
     } else if (larguraDispositivo < 900 ) {

     } else {

     }
     // sizeOfThings();
}
function changeSpan(imagens) {

     slideImg()
     function slideImg() {
          imagens.forEach((elPai, indexPai, arrayPai) => {
               if(indexPai == 0 ) {
                    imagens.forEach(async (el, index, array) => {
                         const test = (ms) => {
                              imagens[indexPai].classList.add(`img${index+1}`);
                              return new Promise(async (resolve) => {
                                   window.setTimeout(await resolve('Hello'), ms);
                              })
                         }
                         // window.setTimeout(await test, 3000);
                         (async function(){
                              await test(3000).then(console.log);
                         })();
                    })
                    imagens[indexPai].classList.add('muda1');
               }
          });
     }
     // (changeSpan(imagens));
}
