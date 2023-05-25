$(document).ready(function(){
   console.log(document.querySelectorAll('header button'));
   console.log($('header button'));

   document.querySelector('header button').addEventListener('click', function(){


   });
   $('header button').click(function(){
      alert("Expandir formulário")
   })
})