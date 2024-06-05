<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>MIDIS | Iniciar sesión</title>
        
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/login-new.css" />
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />

         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
         <link rel="shortcut icon" href="<?=base_url()?>media/static_base/img/favicon.png">

    </head>
 
  <body>
    <section class="back">
     <div class="container div-center">
          <div class="row">
            <div class="col-md-4 login-sec">
                <h2 class="text-center"><img src="<?= base_url() ?>media/static_base/img/logo-midis.png" style="width: 100%; max-width: 310px;" alt="Ministerio de Desarrollo e Inclusión Social" /></h2>
                <?php $action_url = site_url('AppLogin/index');  $encrypted_url = base64_encode($action_url);  ?>
                <form class="sign-in-form" id="frm_login" name="frm_login" data-action="<?= $encrypted_url ?>" method="post" autocomplete="off">
                  <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-login">Usuario:</label>
                    <input type="text" class="form-control" name="user_name" id="user_name" required="" placeholder="">
                    
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" class="text-login">Contraseña:</label>
                    <input type="password" class="form-control" name="user_clave" id="user_clave" required="" placeholder="">
                  </div>
                  
                  
                    <div class="form-check">                   
                    <button type="submit" class="btn btn-login float-right">INGRESAR</button>
                  </div>
          
                </form>
                <div class="copy-text">© 2023 Derechos Reservados. DDM-DGFIS Version 1.0.0</div>
            </div>
        <div class="col-md-8 banner-sec" id="responsiveImage">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                         <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            
                          </ol>
                    <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" >
              <img class="d-block img-fluid" src="<?=base_url()?>media/static_base/img/login/imagen_post_35.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                    <h2>GEOSISFOH</h2>
                    <p> Herramienta de consulta de información cartográfica referente a los hogares del PGH Georreferenciado y usuarios de los programas sociales y/o otras capas de interés como planos estratificados, centros poblados, zonas censales, manzanas censales, vías y sitios de interés.</p>
                </div>  
             </div>
            </div>
              
             </div>     
                
            </div>
          </div>
        </div>
    </section>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    
    <script type="text/javascript">
        // Obtener la referencia a la imagen
  const responsiveImage = document.getElementById('responsiveImage');

  // Función para ocultar la imagen en pantallas más pequeñas
  function toggleImageVisibility() {
    if (window.innerWidth <= 500) {
      responsiveImage.style.display = 'none';
    } else {
      responsiveImage.style.display = 'block';
    }
  }

  // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
  window.onload = toggleImageVisibility;
  window.onresize = toggleImageVisibility;
    </script>   

  </body>   
</html>
