$(function(){
  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

  $( "#cfp-form" ).validate({
    rules: {
      "paper[topic]": {
        required: true
      },
      "paper[name]": {
        required: true
      },
      "paper[email]": {
        required: true
      },
      "paper[description]": {
        required: true
      }
    },
     messages : {
        "paper[topic]": {
          required : "Debe ingresar el nombre de la platica"
        },
        "paper[name]": {
          required : "Debe ingresar su nombre"
        },
        "paper[email]": {
          required : "Debe ingresar el email",
          email    : "Debe ingresar un email valido"
        },
        "paper[description]": {
          required : "Debe ingresar una descripcion"
        }
      }
  });

});
