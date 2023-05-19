const form = document.getElementById('form-atividade');
let linhas = '';
form.addEventListener('submit', function(e) {
   e.preventDefault();

   const inputNomeAtividade = document.getElementById('nomeDaAtividade');
   const inputNotaAtividade = document.getElementById('notaDaAtividade');

   
   let linha = '<tr>';
   linha += `<td>${inputNomeAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value}</td>`;
   linha += `<td>${inputNotaAtividade.value >=7 ? 'Aprovado' : 'Reprovado'}</td>`;
   linha += `</tr>`;

   linhas += linha;

   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas;
   
   inputNomeAtividade ='';
   inputNotaAtividade ='';
});


