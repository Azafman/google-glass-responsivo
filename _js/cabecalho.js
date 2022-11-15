window.addEventListener('load', start);

function appearItem(itens) {
     itens.forEach(el => {
          el.classList.replace('scroll', 'event-start');
     });
}
function toggleClass(itens) {
     itens[0].parentElement.classList.toggle("nav1");
     itens.forEach(el => el.classList.toggle('item-menu1'));
     document.querySelector('.nav').classList.toggle("nav1");
}
document.addEventListener('click', (e) => {
     if(e.target.classList.contains('container-menu') || e.target.classList.contains('container-menu')) {
          toggleClass(document.querySelectorAll(".item-menu"));
     }

})
function navegationForPages() {
     const pagsSite = document.querySelectorAll('.link');
     const imageMenu = document.querySelector('.img-menu');
     
     const imageChange = image => {
          imageMenu.setAttribute('src',`_imagens/${image}`);
     }
     
     pagsSite.forEach( el => {
          el.addEventListener('mouseenter', e => {
               const imageToChange = e.target.getAttribute('href').replace('html','png');
               imageChange(imageToChange);
          })
     })

}
function start() {
     appearItem(document.querySelectorAll(".scroll"));
     navegationForPages()
     if(window.innerWidth > 850) {

     } 
}
