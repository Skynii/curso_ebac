$(document).ready(function() {
   $('#btn-add').click(function(e) {
      e.preventDefault();

      const tarefaNova = $('#todo').val();
      console.log(tarefaNova);
      
      const novoItem = $('<li></li>'); // Cria um novo elemento <li>
      const checkbox = $('<input type="checkbox" class="check">'); // Cria um novo elemento <input>
      const label = $('<label></label>').text(tarefaNova); // Cria um novo elemento <label> e define o texto
      
      novoItem.append(checkbox); // Adiciona o elemento <input> ao elemento <li>
      novoItem.append(label); // Adiciona o elemento <label> ao elemento <li>
      
      $('.lista').append(novoItem); // Adiciona o novo item à lista de tarefas
   });
});
