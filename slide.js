
function mostrarLegenda(span) {
     const spanLeg = document.styleSheets[1].cssRules[3]
     // spanLeg.style.visibility = 'visible';
     span.classList.toggle(spanLeg);
     
}
