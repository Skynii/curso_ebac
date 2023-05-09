const numInput1 = document.getElementById('num1');
const numInput2= document.getElementById('num2');
const btnValidar = document.getElementById('btn');
const result = document.getElementById('msg');

function verificarNumeros() {
   let num1 = parseInt(numInput1.value);
   let num2 = parseInt(numInput2.value);
  
   if (num1 > num2) {
      btnValidar.disabled =false;
      result.textContent="O botão foi habilitado";
   } else {
      btnValidar.disabled =true;
      result.textContent="O botão não foi habilitado";
   }
};

numInput1.addEventListener('input', verificarNumeros);
numInput2.addEventListener('input', verificarNumeros);