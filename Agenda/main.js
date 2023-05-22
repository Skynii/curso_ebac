
const form = document.querySelector('#form-agenda');

form.addEventListener('submit', function(e) {
   e.preventDefault();

   const nome= document.getElementById('nome');
   const tel= document.getElementById('tel');
   const email= document.getElementById('email');
   const categoria= document.getElementById('categoria');

   console.log(nome.value)
});   