//Iniciar Jquery/

$(document).ready(function() {
   $('#telefone').mask('(00) 00000-0000')

   $('#cpf').mask('000.000.000-00')

   $('#cep').mask('00000-000')

   $('#nascimento').mask('00/00/0000')

   //Validando o formulário//
   $('form').validate({
      rules: {
         nome: {
            required: true
         },
         cpf:{
            required: true
         },
         nascimento:{
            required: true
         },
         email:{
            required: true,
            email: true
         }
      },
      messages: {
         nome:'Por favor coloque seu nome.',
         email:'Por favor, verifique o campo e-mail'
      },
      submitHandler: function(form) {
         console.log(form)
      },
      invalidHandler: function(evento, validador) {
         let camposIncorretos =validador.numberOfInvalids()
         console.log(camposIncorretos)
      }
   })
})