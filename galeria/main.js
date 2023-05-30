$(document).ready(function(){
   $('header button').click(function(){
      $('form').slideDown(); //Função para aparecer o btn header
   });

   $('#btn-cancelar').click(function(){
      $('form').slideUp(); //Função para apagar o btn cancelar
   })

   $('form').on('submit', function(e) {
      e.preventDefault();
      const enderecoNovaImagem = $('#endereco-img-nova').val();
      const novoItem =$(`<li style="display: none"></li>`);
      $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
      $(`
         <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho">
               Ver imagem em tamanho real
            </a>
         </div>
         `).appendTo(novoItem);
         $(novoItem).appendTo('ul');
         $(novoItem).fadeIn(2000);
         $('#endereco-img-nova').val('');
   })
});