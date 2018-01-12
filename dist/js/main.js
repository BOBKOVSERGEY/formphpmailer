$(function () {
  /*validate contacts-form__form*/
  $('.contacts-form__form').validate({
    submitHandler: function(form){
      var form = document.forms.sendformpopup,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "sendmail.php");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 2) {
          if(xhr.status == 200) {
            $(".contacts-form__form").html('<div class="modal-form__form-tanks" style="text-align: center; color: #2C909A;">Заявка успешно отправлена!<div>');
          }
        }
      };
      xhr.send(formData);
    },
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }

    },
    messages: {
      name: {
        required: "Введите Ваше имя"
      },
      email: {
        required: "Введите адрес электронной почты",
        email: "Не корректный адрес"
      }
    }
  });
  /*** policy ***/
  $('.js-policy').on('click', function($el){
    checkPolicy();
  });
  /*** end policy ***/
  function checkPolicy () {
    if ($(".js-policy").is(':checked')) {
      $("[type=submit]").prop('disabled', false);
    } else {
      $("[type=submit]").prop('disabled', true);
    }
  };

  /*******inputfile******/

  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
    var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });

  /*******end inputfile******/
})