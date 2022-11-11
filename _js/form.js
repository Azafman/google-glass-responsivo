const startedValidaty = function(e) {
     e.preventDefault();
     let allVallid = true;

     allVallid = emptyFields(document.querySelectorAll('.required-input'))
     allVallid = fieldNotVerbal(
          document.querySelector(`input[type="checkbox"`)
     ); 

     // if(allVallid) e.target.submit();
}
const reportError = (element, msg) => {
     const div = document.createElement('div');
     div.innerText = msg;
     div.classList.add('caixa-vazia');
     element.insertAdjacentElement('beforeend', div);
}
const fieldNotVerbal = (inputChecked) => {
     if(inputChecked.checked) return true;
     inputChecked.setCustomValidity("Se você deseja realizar a compra, este campo é obrigatório!");
     return false;
}
window.addEventListener('load', e => {
     const form = document.querySelector("#dados-do-usuario");

     form.addEventListener('submit', startedValidaty);

})
function emptyFields(inputsRequireds) {
     const generatorPhrase = (el, anotherFieldExists, num1, num2) => {
          let nameField = el.previousElementSibling.innerText.toLowerCase();
          if(nameField.indexOf('*') !== -1) {
               nameField = nameField.replace(':*', '');
          }
          if(!anotherFieldExists) {
               return `${nameField} não pode ficar em branco`;
          } else {
               return `${nameField} deve conter entre ${num1} à ${num2} caracteres.`;
          }
     }
     let validOrNot = true;
     inputsRequireds.forEach((el) => {
          if(el.nextElementSibling) el.nextElementSibling.remove();

          if(el.classList.contains('txt')) {
               if(!el.value) {
                    validOrNot = false;    
                    reportError(el.parentElement, generatorPhrase(el));
               }
               if(el.getAttribute("type") == 'password' && el.value.length > 0) {
                    if(el.value.length < 6 || el.value.length > 15) {
                         validOrNot = false;    
                         reportError(el.parentElement, generatorPhrase(el, 'passWord', 6, 15));
                    }
               }
               if(el.classList.contains('nome') && el.value.length > 0) {
                    if(el.value.length < 10 || el.value.length > 35) {
                         validOrNot = false;    
                         reportError(el.parentElement, generatorPhrase(el, 'nameUser', 10, 35));
                    }
               }
               if(el.getAttribute("type") == 'number' && el.value.length > 0) {
                    if(el.value <  1) {
                         validOrNot = false;    
                         reportError(el.parentElement, generatorPhrase(el, 'quantidadeGlass', 1, 50));
                    }

               }
          } 
     })
     return validOrNot;
}
function startingPrice() {

}
function calculatePrice() {
     const valueField = document.querySelector('.calcValue');
     if(valueField.value) {
          document.querySelector('#tot-Glass').value = `R$ ${valueField * 647,99}`;
     }
     valueField.value = 1;
     return valueField;
}