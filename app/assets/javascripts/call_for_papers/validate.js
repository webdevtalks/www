$(function(){
  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#cfp-form" ).validate({
    rules: {
      "call_for_papers[topic]": {
        required: true
      },
      "call_for_papers[name]": {
        required: true
      },
      "call_for_papers[email]": {
        required: true
      },
      "call_for_papers[description]": {
        required: true
      }
    },
     messages : {
        "call_for_papers[topic]": {
          required : "Debe ingresar el nombre de la platica"
        },
        "call_for_papers[name]": {
          required : "Debe ingresar su nombre"
        },
        "call_for_papers[email]": {
          required : "Debe ingresar el email",
          email    : "Debe ingresar un email valido"
        },
        "call_for_papers[description]": {
          required : "Debe ingresar una descripcion"
        }
      }
  });

});
