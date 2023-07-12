var mapaVisible = false; // Por defecto, el mapa está oculto

      function iniciarMap() {
        var coord = {lat: -33.511581, lng: -70.752578};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: coord
        });
        var marker = new google.maps.Marker({
          position: coord,
          map: map
        });
      }

      function mostrarMapa() {
        if (mapaVisible) {
          document.getElementById('map').style.display = 'none';
          mapaVisible = false;
        } else {
          document.getElementById('map').style.display = 'block';
          mapaVisible = true;
          iniciarMap();
        }
      }

      function cargarMapa() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap";
        document.body.appendChild(script);
      }

      window.onload = cargarMapa; // Carga el script de Google Maps al cargar la página

      function mostrarFeriados(data) {
        var feriados = data.map(function(feriado) {
            return "<li>" + feriado.nombre + " - " + feriado.fecha + "</li>";
        });
        document.getElementById("feriados").innerHTML = feriados.join("");
    }

    var script = document.createElement("script");
    script.src = "https://apis.digital.gob.cl/fl/feriados?callback=mostrarFeriados";
    document.head.appendChild(script);
    