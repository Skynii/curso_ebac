$(document).ready(function() {
   $('#btn-add').click(function() {
      console.log('botãoclicado')
   })
})

$('form').on('submit', function(e) {
   e.preventDefault();

   const tarefaNova = $('#todo').val();
   console.log(tarefaNova)
})