<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>MIDIS | Opciones sistema</title>
        <link rel="shortcut icon" href="<?=base_url()?>media/static_base/img/favicon.png">
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/font.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/login.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/main.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/intro_loader/intro_loader.css" />
    </head>

    <body>
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
        <header class="main-header bg-card d-flex flex-row justify-content-between header-login">
            <div class="menu-midis">
                <h3><img src="<?=base_url()?>media/static_base/img/favicon.png" height="50px"> MIDIS <img src="<?=base_url()?>media/static_base/img/logo-geofoh.png" height="50px"></h3>
            </div>
            <div class="ul-header-topbar menu-midis">
                <div class="dropdown">
                    <div class="header-btn-group">
                        <button class="btn btn-opacity-default rounded-circle btn-icon" type="button" data-toggle="dropdown">
                            <img class="avatar-xs rounded-circle" src="<?=base_url()?>media/static_base/img/avatar.png" alt="" />
                        </button>
                        <div class="dropdown-menu">
                            <div class="text-center">
                                <img src="<?=base_url()?>media/static_base/img/avatar.png" height="40px"> <br> <br>
                                <h4><?= ucfirst($user['nombres']) ?></h4>
                                <p><?= ucfirst($user['apellidos']) ?></p>
                            </div>
                            <a class="dropdown-item" href="<?= site_url('AppLogin/config') ?>"><i class="fas fa-cog"></i> &nbsp; Configuraciones</a>
                            <a class="dropdown-item" href="<?= site_url('AppLogin/perfil') ?>"><i class="fas fa-user"></i> &nbsp; Mi perfil</a>
                            <a class="dropdown-item" href="<?= site_url('AppLogin/logout') ?>"><i class="fas fa-lock"></i> &nbsp; Cerrar sesión</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="bg-secondary line-midis"> </div>

        <div class="container">
            <div class="options-title">
                <h1 class="text-center text-primary">¡Bienvenido!</h1>
                <h3>¿Qué desea hacer?</h3>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <a href="<?=site_url('AppAdmin/index')?>" class="card opcion-card">
                        <img src="<?=base_url()?>media/static_base/img/opciones/op-1.png" class="bg-info">
                        <h4 class="text-primary">Administrador</h4>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="<?=site_url('App/mapa')?>" class="card opcion-card">
                        <img src="<?=base_url()?>media/static_base/img/opciones/op-2.png" class="bg-warning">
                        <h4 class="text-primary">Mapas</h4>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="#" class="card opcion-card">
                        <img src="<?=base_url()?>media/static_base/img/opciones/op-3.png" class="bg-primary">
                        <h4 class="text-primary">Geoprocesos</h4>
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="#" class="card opcion-card">
                        <img src="<?=base_url()?>media/static_base/img/opciones/op-4.png" class="bg-success">
                        <h4 class="text-primary">Reportes</h4>
                    </a>
                </div>
            </div>
        </div> <br>
        <div class="bg-footer px-lg py-md d-flex justify-content-between fixed-bottom flex-wrap">
            <b class="text1">© 2021 Derechos Reservados. DDM Version 1.0</b>
        </div>

        <script src="<?=base_url()?>media/static_base/js/vendors.min.js"></script>
        <script src="<?=base_url()?>media/static_base/js/main.min.js"></script>
        
         <script type="text/javascript">
            window.addEventListener('load',()=>{
                const contenedor= document.querySelector('.loader-wrapper');
                contenedor.style.opacity = 0;             
                contenedor.style.visibility = "hidden";
            })          
        </script>
    </body>
</html>
