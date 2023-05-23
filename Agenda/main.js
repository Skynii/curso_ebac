const form = document.querySelector('#form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';  

form.addEventListener('submit', function(e) {
   e.preventDefault();
   adicionarContato();
   incluirDados();
   
});  

function adicionarContato(){
   const nome= document.getElementById('nome');
   const tel= document.getElementById('tel');
   const email= document.getElementById('email');
   const categoria= document.getElementById('categoria');

   if (nomes.includes(nome.value) ){
      alert(`Contato já adicionado anteriormente!`)
   }else if(telefones.includes(tel.value)){
      alert(`Telefone adicionado anteriormente!`)
   }else{
      nomes.push(nome.value);
      telefones.push(tel.value);
      let linha = '<tr>';
      linha += `<td>${nome.value}</td>`;
      linha += `<td>${tel.value}</td>`;
      linha += `<td>${categoria.value}</td>`;
      linha += `<td>${email.value}</td>`;
      linha += `</tr>`

      linhas += linha;}
      
      [nome.value, tel.value, email.value, categoria.value] =['','','',''];
}

function incluirDados(){
   const corpoAgenda = document.querySelector('tbody');

   corpoAgenda.innerHTML = linhas;
}