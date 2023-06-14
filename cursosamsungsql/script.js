document.getElementById('validationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;

  // Realizar la validación de los campos aquí (puedes utilizar JavaScript o librerías externas)

  // Enviar los datos al script PHP mediante AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'procesar_formulario.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Realizar acciones después de recibir la respuesta del script PHP
      console.log(xhr.responseText);
    }
  };
  xhr.send('nombre=' + encodeURIComponent(nombre) +
           '&apellido=' + encodeURIComponent(apellido) +
           '&email=' + encodeURIComponent(email));
});
