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
     // const imagens1 = document.getElementsByClassName('slide-img')[0]

     // await window.setTimeout(slideImg, 3000);
     // function sayHello() {console.log('HELLO!')}

     slideImg()
     function slideImg() {
          // imagens.forEach(async (el, index, array) => {
          //      if(index === 0) {
          //           // el.classList.add('muda1');
          //           for(let cont = 1; cont <= imagens; cont++) {
          //                await window.setTimeout(sayHello, 3000);
          //                if(cont < imagens.length) {
          //                     // el.classList.replace(el.classList[1],imagens[cont ].classList[1]); 
          //                     el.classList.add(imagens[cont].classList[1]); 
          //                } else {
          //                     el.classList.replace(el.classList[1],imagens[0].classList[1]); 
          //                }
          //           }
          //      }
          // });
          imagens.forEach((elPai, indexPai, arrayPai) => {
               if(indexPai == 0 ) {
                    imagens.forEach(async (el, index, array) => {
                         const test = () => {
                              imagens[indexPai].classList.add(`img${index+1}`);
                         }
                         window.setTimeout(await test, 3000);
                    })
                    imagens[indexPai].classList.add('muda1');
               }
          });
     }
     // changeSpan(imagens);
}
