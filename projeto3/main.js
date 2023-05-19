const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
   e.preventDefault();

   const inputNomeAtividade = document.getElementById('nomeDaAtividade');
   const inputNotaAtividade = document.getElementById('notaDaAtividade');

   alert(`Atividade ${inputNomeAtividade.value} - Nota ${inputNotaAtividade.value}`);
})