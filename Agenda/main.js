
const form = document.querySelector('#form-agenda');

let linhas = '';  

form.addEventListener('submit', function(e) {
   e.preventDefault();
   adicionarContato();
   
});  

function adicionarContato(){
   const nome= document.getElementById('nome');
   const tel= document.getElementById('tel');
   const email= document.getElementById('email');
   const categoria= document.getElementById('categoria');

   let linha = '<tr>';

   linha += `<td>${nome.value}</td>`;
   linha += `<td>${tel.value}</td>`;
   linha += `<td>${categoria.value}</td>`;
   linha += `<td>${email.value}</td>`;
   linha += `</td>`

   linhas += linha;

   [nome.value, tel.value, email.value, categoria.value] =['','','',''];
}