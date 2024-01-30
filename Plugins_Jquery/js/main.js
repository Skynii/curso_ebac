$(document).ready(function () {
  $("#carrosel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(DD) 00000-0000",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $('.lista-veiculos button').click(function() {
   const destino = $('#contato');
   const nomeVeiculo =$(this).parent().find('h3').text();

      $('#veiculoInteresse').val(nomeVeiculo);

      $('html').animate({
      scrollTop: destino.offset().top
      }, 1000)
  })
});
