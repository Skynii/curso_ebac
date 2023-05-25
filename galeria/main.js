$(document).ready(function(){
   $('header button').click(function(){
      $('form').slideDown(); //Função para aparecer o btn header
   });

   $('#btn-cancelar').click(function(){
      $('form').slideUp(); //Função para apagar o btn cancelar
   })

   $('form').on('submit', function(e) {
      e.preventDefault();
   })
});