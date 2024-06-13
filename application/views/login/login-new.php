<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>MIDIS - GEOSISFOH - Iniciar Sesión</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="media/new_front/assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" />
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="media/new_front/css/styles.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <div class="col-3">
                    <img class="img-fluid" src="<?= base_url() ?>media/new_front/img/logo-midis.png"  style="max-width: 50%; height: auto;" alt="..." />
                </div>
                <div class="col-3">
                    <img class="img-fluid" src="media/new_front/assets/punche_peru.png"  style="max-width: 50%; height: auto;"  alt="..." />
                </div>
                <div class="col-3">
                    <img class="img-fluid" src="media/new_front/assets/Bicentenario_2024.png"  style="max-width: 50%; height: auto;" alt="..." />
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <!-- Page heading-->
                            <img class="img-fluid rounded-circle mb-3" src="media/new_front/assets/logo.png" alt="..." />
                            <!-- Signup form-->
                            <?php $action_url = site_url('AppLogin/index');  $encrypted_url = base64_encode($action_url);  ?>
                            <form class="sign-in-form" id="frm_login" name="frm_login" data-action="<?= $encrypted_url ?>" method="post" autocomplete="off">
                                <input type="hidden" name="token" value="<?php echo htmlspecialchars($token); ?>">    
                                <div class="mb-3">
                                        <input class="form-control form-control-lg" type="text"  name="user_name" id="user_name"  placeholder="usuario" data-sb-validations="required" />
                                        <div class="invalid-feedback text-white" data-sb-feedback="txtUsuario:required">Usuario es requerido.</div>
                                </div>
                                <div class="mb-3">
                                        <input class="form-control form-control-lg" id="txtPassword" type="password" name="user_clave" id="user_clave" required="" placeholder="contraseña" data-sb-validations="required" />
                                        <div class="invalid-feedback text-white" data-sb-feedback="txtUsuario:required">Contraseña es requerida.</div>
                                </div>
                                <div class="mb-3">
                                        <div class="col-auto"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Ingresar</button></div>
                            </div>
    
                                <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted-->
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form-->
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <!-- Image Showcases-->
            <section class="showcase">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('media/new_front/assets/busqueda.png')"></div>
                        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>GEOSISFOH</h2>
                            <p class="lead mb-0">Bienvenidos al Geo portal con información cartográfica de hogares integrados por
                                usuarias y usuarios de los programas sociales, además de planos estratificados,
                                centros poblados, zonas, manzanas, vías, entre otros sitios de interés.</p>
                        </div>
                    </div>
                </div>
            </section>
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-search m-auto text-primary"></i></div>
                            <h3>Búsqueda Avanzada</h3>
                            <p class="lead mb-0">Este es un texto de ejemplo</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-map m-auto text-primary"></i></div>
                            <h3>Recorridos</h3>
                            <p class="lead mb-0">Este es un texto de ejemplo!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-graph-up m-auto text-primary"></i></div>
                            <h3>Gráficos</h3>
                            <p class="lead mb-0">Este es un texto de ejemplo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to Action-->
        <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Experimenta ...</h2>
                       
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="#!">Sobre nosotros</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Contact</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Terminos de Uso</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Políticas de Privacidad</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; 2023 Derechos Reservados. DDM-DGFIS Version 1.0.0.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="media/new_front/js/scripts.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        
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
