<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>MIDIS | Bienvenido al sistema</title>
        <link rel="shortcut icon" href="<?=base_url()?>media/static_base/img/favicon.png">
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/font.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/vendors.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/github.min.css" />
        <link rel="stylesheet" href="<?=base_url()?>media/static_base/css/main.min.css" />        
        <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="https://js.arcgis.com/3.44/dijit/themes/claro/claro.css">
        <link rel="stylesheet" href="https://js.arcgis.com/3.44/esri/css/esri.css">
        <link rel="stylesheet" href="<?=base_url()?>media/intro_loader/intro_loader.css" />       
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
        

        <!-- iconoces menu-->
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-straight/css/uicons-thin-straight.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-regular-straight/css/uicons-regular-straight.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
      </head>

    <body>
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
        <div class="app-admin-wrap-layout-1 sidebar-full sidebar-theme-slate">
            <div class="sidebar-panel" >
               <!-- <div class="brand">
                    <a href="<?= site_url('App/index') ?>"><img src="<?=base_url()?>media/static_base/img/favicon.png"/> <img src="<?=base_url()?>media/static_base/img/logow-map.png"/><span class="app-logo-text ml-2 text-20">SISFOH</span></a>
                </div>

                <div class="sidebar-compact-switch"><span></span> <div></div><span></span> </div>
                <div class="text-center">
                    <a href="<?= base_url() ?>media/manuales/Manual_Usuario_Geosisfoh.pdf" download class="btn btn-info btn-sm"><i class="fas fa-question-circle"></i> Manual</a>

                    <button type="button" id="clear_map" class="btn btn-success btn-sm"><i class="fas fa-broom"></i> Limpiar</button>
                </div>
-->
                <div class="new-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                </div>
                <!-- nuevo menu -->
                <div class="side-nav">
                    <div class="main-menu">
                        <nav class="sidebar-nav">
                        <ul class="sidebar-nav" id="sidebar-nav">
                          <li class="nav-item" >
                            <a class="nav-link collapsed" data-toggle="tooltip" title="Búsqueda por filtros" href="#">
                              
                              <i class="fi fi-rs-search-location fa-2x"></i>
                            </a>
                          </li><!-- End Busqueda Filtros -->
                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Búsqueda por filtros" href="#">
                              
                            <i class="fi fi-sr-land-layers fa-2x"></i> 
                            </a>
                          </li><!-- End Capas-->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Búsqueda por filtros" href="#">
                              
                            <i class="fi fi-rr-info fa-2x"></i>
                            </a>
                          </li><!-- End Información -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Elevación" href="#">
                              <i class="fi fi-rs-mountain fa-2x"></i>
                            </a>
                          </li><!-- End Elevación -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Herramientas de Medir" href="#">
                            <i class="fi fi-rs-ruler-triangle fa-2x"></i>
                            </a>
                          </li><!-- End Herramientas de medir -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Herramientas de Selección" href="#">
                            <i class="fi fi-rs-vector-polygon fa-2x"></i>
                            </a>
                          </li><!-- End Herramientas de Selección -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Descargar Mapa" href="#">
                            <i class="fi fi-rs-download fa-2x"></i>
                            </a>
                          </li><!-- Descarga -->

                          
                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Mapas Base" href="#">
                            <i class="fi fi-rr-world fa-2x"></i>
                            </a>
                          </li><!-- Mapas Base -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Imprimir" href="#">
                            <i class="fi fi-rr-print  fa-2x" ></i>
                            </a>
                          </li><!-- Impresora -->

                          <li class="nav-item">
                            <a class="nav-link collapsed"  data-toggle="tooltip" title="Descargar Manual" href="#">
                            <i class="fi fi-rr-book-bookmark fa-2x"></i>
                            </a>
                          </li><!-- Manual -->

                          </ul>
                        </nav>
                    </div>
                </div>


                <div class="side-nav" style="display:none" >
                    <div class="main-menu">
                        <nav class="sidebar-nav">
                            <ul class="show-on-load" id="ul-menu">
                                <span class="main-menu-title">Opciones del sistema</span>

                                <ul class="nav nav-tabs" role="tablist">
                                    
                                    <li class="nav-item midis-tab">
                                        <a class="nav-link active bg-warning" id="filter-tab" data-toggle="tab" href="#filter" role="tab">
                                            <i class="fas fa-filter"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item midis-tab">
                                        <a class="nav-link  bg-primary" id="layer-tab" data-toggle="tab" href="#layer" role="tab">
                                            <i class="fas fa-layer-group"></i>
                                        </a>
                                    </li>

                                   <?php if($user["es_municipal"] == true){ ?> 

                                    <li class="nav-item midis-tab">
                                        <a class="nav-link bg-danger" id="download-tab" data-toggle="tab" href="#download" role="tab">
                                            <i class="fas fa-download"></i>
                                        </a>
                                    </li>
                                  <?php } ?>
                                  
                                </ul>

                        <div class="tab-content p-16 scroll-midis">

                        <div class="tab-pane fade show active" id="filter" role="tabpanel" aria-labelledby="filter-tab">
                                <p class="title-one w-100">Filtro Límites Censales</p>
                                       
                                            <div class="form-group">
                                                <h6 class="text-white">Departamento</h6>

                                                <?php if($user["es_municipal"] == true){ ?>

                                                <input class="form-control form-line" value="<?= $user['ubigeos']['nom_dpto'] ?>" readonly>
                                                <input id="ccdep" type="hidden" value="<?= $user['ubigeos']['coddpto'] ?>" name="code" readonly/>

                                                     <?php } else{?>
                                                
                                                <select id="ccdep" class="form-control form-line">
                                                    <option>Seleccione . . .</option>
                                                     <?php foreach ($departamentos as $deps) { ?>
                                                    <option value="<?php echo $deps['coddpto']; ?>"><?php echo strtoupper($deps['nom_dpto']); ?></option>
                                                    <?php  } ?>
                                                </select>

                                                <?php  } ?>

                                            </div>
                                            <div class="form-group">
                                                <h6 class="text-white">Provincia</h6>
                                                 <?php if($user["es_municipal"] == true){ ?>
                                                  <input class="form-control form-line" value="<?= $user['ubigeos']['nom_prov'] ?>" readonly>
                                                  <input id="ccprov" type="hidden" value="<?= $user['ubigeos']['codprov'] ?>" name="code" readonly/>
                                                 <?php }else{ ?>
                                                <select id="ccprov" class="form-control form-line">
                                                    <option>Seleccione . . .</option>               
                                                </select>
                                                <?php }?>
                                            </div>
                                            <div class="form-group">
                                                <h6 class="text-white">Distrito</h6>
                                                <?php if($user["es_municipal"] == true){ ?>
                                                 <input class="form-control form-line" value="<?= $user['ubigeos']['nombre_dist'] ?>" readonly>
                                                 <input type="hidden" id="ccdist" value="<?= $user['ubigeos']['iddist'] ?>" name="code" readonly/>
                                                 <?php }else{ ?>
                                                <select id="ccdist" class="form-control form-line">
                                                    <option>Seleccione . . .</option>
                                                </select>
                                                 <?php }?>
                                            </div>
                                            <div class="form-group">
                                                <h6 class="text-white">Centro Poblado</h6>
                                                <select id="ccpoblado" class="form-control form-line">
                                                    <option>Seleccione . . .</option>
                                                    <?php if (isset($centros_poblado)) { ?>
                                                    <?php foreach ($centros_poblado as $ccpp) { ?>
                                                        <option value="<?php echo $ccpp['codccpp']; ?>"><?php echo strtoupper($ccpp['centropoblado']); ?></option>
                                                     <?php  } }?>
                                          
                                                </select>
                                            </div>                                           
                                        
                                    </div> 
                              
                              <div class="tab-pane fade" id="layer" role="tabpanel" aria-labelledby="layer-tab">

                                <p class="title-two w-100">Programas Sociales</p>
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> <span>Programa Pensión 65</span></a>
                                            <input type="checkbox" name="P65" value="P65">
                                            <div id="opciones_datos_p65" class="opciones_datos_p65" style="display:none;">
                                                 <span style="display:none" id="datos_load_p65"><button type="button" id="cargar_datos_load"  class="btn btn-secondary-sup btn-icon"><i class="fas fa-spinner fa-pulse"></i></button></span>
                                                  <span id="botonesHerram" style="display: none;">

                                                    <button type="button" id="polygons"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Polygono"><i class="fas fa-crop"></i></button>
                                                    <button type="button" id="freehands"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Libre Dibujo"><i class="fas fa-draw-polygon"></i></button>
                                                    <button type="button" id="circle"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Circulo"><i class="fas fa-circle"></i></button>
                                                    <button type="button" id="clear"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Borrar"><i class="fas fa-trash"></i></button>
       
                                                   </span>
                                                  <span id="messages" style="display: none;"></span>
                                            </div>                                          
                                            
                                        </li>
                                       
                                        <li>
                                            <a href="#"><i class="fa fa-users"></i> <span> Programa Juntos</span></a>
                                            <input type="checkbox" name="PJuntos" value="PJuntos">
                                            <div style="display: none;" id="leyen_PJuntos" class="PJuntos"><img src="<?=base_url()?>media/static_base/img/avatars/ylw-circle.png"/><span>Programa Juntos</span> </div>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fas fa-baby"></i> <span> Programa Cuna Más</span></a>
                                            <input type="checkbox" name="PCM" value="PCM">
                                            <div style="display: none;" id="leyen_cuna_mas" class="cunamas">
                                            <img src="<?=base_url()?>media/static_base/img/avatars/markercuna.png"/><span>Locales CIAI</span><br> 
                                            <img src="<?=base_url()?>media/static_base/img/avatars/wht-circle.png"/><span>Locales SA</span>
                                           </div>                                            
                                        </li>
                                     </ul>                                       
                                        
                                    </div>

                                    <!---*****************-->

                                    <?php if($user["es_municipal"] == true){ ?>

                                     <div class="tab-pane fade" id="download" role="tabpanel" aria-labelledby="download-tab">
                                     <p class="title-for w-100">Descargar </p>
                                        <form class="form-menu"> <br>
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5>Descargar Mapas</h5> 
                                                    <!--<button type="button" id="dow_map_distrito" class="btn btn-info btn-sm"><i class="fas fa-download"></i>Descargar Mapa</button>-->
                                                    <a href="<?= base_url() ?>media/Mapas/<?= $user['ubigeos']['iddist'] ?>.zip" download class="boton-descarga">Descargar Mapa</a>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                  <?php } ?>

                                  <br>

                                  <div class="alert-info-data">La información disponible en esta Plataforma, no poseen el carácter oficial de conformidad con la quinta Disposición Transitoria y Final de la ley N°27795, Ley de Demarcación y Organización Territorial que establece que las delimitaciones censales son de carácter referencial en tanto se determina el saneamiento de los límites territoriales conforme a la referida ley.</div>
                               
                                </div>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="main-content-wrap">
                <div class="ul-mobile-top-header bg-slate">
                  <img class="ul-brand-mobile" src="<?=base_url()?>media/static_base/img/logo.png"/>
                    <div class="flex-grow-1"></div>
                    <button class="sidebar-full-toggle btn btn-icon btn-primary rounded-circle text-white">
                        <i class="fas fa-align-justify"></i>
                    </button>
                    <button class="btn btn-icon ul-mobile-header-toggle-men btn-icon btn-warning rounded-circle text-white">
                        <i class="fa fa-map-marker"></i>
                    </button>
                    <button class="btn btn-icon ul-mobile-header-toggle btn-icon btn-success rounded-circle text-white">
                        <i class="fa fa-user-circle"></i>
                    </button>
                </div>

             <header class="main-header bg-card d-flex flex-row justify-content-between align-items-center px-lg">
                    <div>
                    <a href="<?= site_url('App/index') ?>"><img src="<?=base_url()?>media/static_base/assets/logo-xs.png"/></a>
                    </div>
                    <div class="ul-header-topbar-men midis-opcions">
                    <span class="m-0" id="responsivebuscar">
                     <div class="input-group input-group-sm">
                      
                    
                     <div class="search-input position-relative">
                     <input class="search_query form-control" type="text" name="key_search" id="key_search" placeholder=" Buscar ...">
                     <!--<i class="bi bi-search"></i>-->
                     <svg xmlns="http://www.w3.org/2000/svg" class="position-absolute top-50 translate-middle-y search-icon" width="25" height="25" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <!-- <span class="input-group-btn">
                      <div id="idbttom_geo" name="idbttom_geo"  class="btn btn-flat"><i class="fa fa-search icon-a"></i><i style="display: none;" class="fas fa-spinner fa-pulse icon-b"></i></div>
                     </span>-->
                     </div>                   
                    <div id="suggestions"></div>
                    </span>
                    <button type="button" id="plus" class="btn btn-secondary-sup btn-icon btn-dist custom-tooltip" data-tooltip="Zoom Más"><i class="fa fa-plus"></i></button>
                        <button type="button" id="minus" class="btn btn-secondary-sup btn-icon custom-tooltip" data-tooltip="Zoom Menos"><i class="fa fa-minus"></i></button>
                        <button type="button" id="zoom_in" class="btn btn-secondary-sup btn-icon custom-tooltip" data-tooltip="Zoom Más"><i class="fa fa-search-plus"></i></button>
                        <button type="button" id="zoom_out" class="btn btn-secondary-sup btn-icon custom-tooltip" data-tooltip="Zoom Menos"><i class="fa fa-search-minus"></i></button>
                        <button type="button" id="peru" class="btn btn-secondary-sup btn-icon custom-tooltip" data-tooltip="Extensión Predeterminada"></button>
                       <!-- <button type="button" id="btn-indentity" class="btn btn-secondary-sup btn-icon custom-tooltip" data-tooltip="Info de Zona y Mzna"><i class="fa fa-info"></i></button>
                        <button type="button" id="btn-mapas-base" class="btn btn-secondary-sup btn-icon custom-tooltip" data-sidebar-panel="asideNotification_gallery" data-tooltip="Galería de Mapas"></button>
                        <button type="button" id="btn-capas-base" class="btn btn-secondary-sup btn-icon custom-tooltip" data-sidebar-panel="asideNotification_capas" data-tooltip="Capas"></button>
                        <button type="button" id="btn-report" class="btn btn-secondary-sup btn-icon custom-tooltip" data-sidebar-panel="asideNotification_report" data-tooltip="Avance Barrido 2024"><i class="fa fa-chart-bar"></i></button>                       
                                    -->
                      </div>
                    <div class="ul-header-topbar text-white">
                      <div class="flex-grow-1">

                        <i class="fi fi-rs-chart-pie-alt fa-2x"></i>
                        &nbsp;&nbsp;
                        <i class="fi fi-rs-map-marker fa-2x"></i>

                    &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <?php
                            if (empty($user["ubigeos"]['nombre_dist'])) {
                              echo "Nacional";
                            }else{ echo $user["ubigeos"]['nombre_dist'];}
                            ?>
                        &nbsp;&nbsp;
                        </div>
                        <div class="dropdown">
                            <div class="header-btn-group">
                                <button class="btn btn-opacity-default rounded-circle btn-icon" type="button" data-toggle="dropdown">
                                    <img class="avatar-xs rounded-circle" src="<?=base_url()?>media/static_base/img/avatar.png" alt="" />
                                </button>
                                <div class="dropdown-menu">
                                    <div class="text-center">
                                        <img src="<?=base_url()?>media/static_base/img/avatar.png" height="40px"> <br> <br>
                                        <h4><?= ucfirst($user['nombreUsuario']) ?></h4>
                                        <p><?= ucfirst($user['paternoUsuario']) ?></p>
                                        <p><?= ucfirst($user['maternoUsuario']) ?></p>
                                    </div>
                     
                                <a class="dropdown-item" href="<?= site_url('AppLogin/logout') ?>"><i class="fas fa-lock"></i> &nbsp; Cerrar sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </header>

        <div class="main-content-body" id="MapaDiv">
        <div id="ReporteInfortabla_AGsisfoh" style="display:none" data-dojo-type="dijit/TitlePane" data-dojo-props="title:'Lista de Georreferenciados', closable:false">
                <div id="Tabla" class="tabcontent">
                   <div class="card">
                    <div class="d-flex justify-content-between align-items-center">
                       <input class="form-control form-control-sm cls-ocultar" id="dniJefe" name="dniJefe" type="text"  maxlength="50" placeholder="Ingresar DNI" autocomplete="off">
                       <select class="form-control form-line" id="id_tipo_fill">
                           <option value="2">Por DNI Empadronador</option>
                           <option value="3">Por S100 del Hogar</option>
                            
                        </select>
                       <a class="btn btn-primary btn-sm cls-ocultar" id="btnBuscarJefe" href="#" role="button"><i class="fa fa-search"></i><span id="btnText"></span></a>
                       <a class="btn btn-primary btn-sm cls-ocultar" onclick="exportarExcel()" role="button"  title="Exportar a Excel"><i class="fa fa-download" aria-hidden="true"></i></a>
                       <p>Total Hogares</p><p class="dato-df" id="dato-cantidad-selec"></p>
                      <i class="fas fa-times-circle icon icon-sm hover-gray close-table-ag"></i>
                    </div>
                  </div>
                <div   id="idcontainer"  style="min-width: 30%; height: 375px; margin: 0" class="scroll-tab">
                 <table id="datatable_AGSisfoh" class="table dt-responsive nowrap w-100 styled-table" role="grid" aria-describedby="dt-responsive_info">
                       <thead>
                        <tr>
                          <th> Item </th>
                          <th> Ver </th>
                          <th> DNI_EMP </th>                        
                          <th> S100 </th>
                          <th> FECHA_EMP </th>
                          <th> FECHA_SINC </th>                                                  
                        </tr>
                      </thead>
                       <tbody >                            
                       </tbody>
                     </table>

                   </div>
                 </div>
               </div>

        <div id="ReporteInfortabla_p65" style="display:none" data-dojo-type="dijit/TitlePane" data-dojo-props="title:'Lista de Usurios P65', closable:false">
                <div id="Tabla" class="tabcontent">
                   <div class="card">
                    <div class="d-flex justify-content-between align-items-center">
                       <input class="form-control form-control-sm cls-ocultar" id="dniP65" name="dniP65" type="text"  maxlength="50" placeholder="Ingresar DNI" autocomplete="off">
                       <a class="btn btn-primary btn-sm cls-ocultar" id="btnBuscarP65" href="#" role="button"><i class="fa fa-search"></i><span id="btnText">Buscar</span></a>
                      <i class="fas fa-times-circle icon icon-sm hover-gray close-table-p65"></i>
                    </div>
                  </div>
                <div   id="idcontainer"  style="min-width: 30%; height: 375px; margin: 0" class="scroll-tab">
                 <table id="datatable_p65" class="table dt-responsive nowrap w-100 styled-table" role="grid" aria-describedby="dt-responsive_info">
                       <thead>
                        <tr>
                          <th> Item </th>
                          <th> Ver </th>
                          <th> DNI </th>                        
                          <th> Nombre </th>
                          <th> Ape Paterno </th>
                          <th> Ape Materno </th>                                                  
                        </tr>
                      </thead>
                       <tbody >                            
                       </tbody>
                     </table>

                    </div>
                </div>
               </div>

              <!-- <span class="text-danger align-middle" id="Msg"></span> -->  

                 <div id="bottomPanel" style="display: none;">
                    <div id="timeInfo">
                      <div><span id="botoncerrar_day" style="display: none;"><i class="fas fa-times-circle icon icon-sm hover-gray close-panel-dias left-icon-dias"></i></span></div>
                       <!--<div id="timeSliderDiv"></div>-->
                        <div id="timeInfos" class="labelText"></div><p class="dato-df-rs" id="dato-valor-dia"></p>
                        <!--<div id="timeSliderDiv" ></div>-->
                    </div>
                  </div>


            </div>
           <div class="alert-messages-map text-center"></div>
            <div class="narrow-opciones hidden-xs" id="narrow-opciones-op">
                <button type="button" class="btn btn-secondary btn-sm sidebar-compact-normal">
                    <i class="fas fa-list"></i> Opciones
                </button>
            </div>
            
        </div>

        <div class="ul-sidebar-panel" id="asideNotification_capas" data-position="right">
            <div class="pt-lg pb-md">
                <div class="ul-sidebar-panel-top pb-lg px-lg">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="heading-label p-0">Lista de Capas Base</div>
                        <i class="fas fa-times-circle icon icon-sm hover-gray ul-sidebar-panel-close"></i>
                    </div>
                </div>
                <div class="sidebar-body" data-suppress-scroll-x="true">
                    <div id="layerListPane" data-dojo-type="dijit/layout/ContentPane" data-dojo-props="region:'right'"> 
                    <div id="layerList"></div>

                  </div>  

                <div id="herramientas_estratos">                       
                        <ul class="li-clas-list">
                        <li class="inp-position">
                        <p class="title-two-report w-100">Herramientas de Análisis</p>
                        <div class="sidebar-box">
                        <select class="styled-select" id="filtrocapas">
                            <option value="99">Seleccione Capa</option>
                        </select>                                        

                       </div>  
                       
                          <div class="button-container-herramientas" id="herramientasselec" style="display: none;">
                            <button type="button" id="btn_polygons"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Polygono"><i class="fas fa-crop"></i></button>
                            <button type="button" id="btn_freehands"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Libre Dibujo"><i class="fas fa-draw-polygon"></i></button>
                            <button type="button" id="btn_circle"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Circulo"><i class="fas fa-circle"></i></button>
                            <button type="button" id="btn_clear"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Borrar"><i class="fas fa-trash"></i></button>
                            <span id="messages_datos" style="display: none;"></span>

                             <div class="sel-center">
                                <div class="custom-select-fill" tabindex="0">
                                  <div class="selected-options">Filtrar</div>
                                   <div class="checkbox-list">
                                    <label><input type="checkbox" value="1">Bajo</label>
                                    <label><input type="checkbox" value="2">Medio Bajo</label>
                                    <label><input type="checkbox" value="3">Medio</label>
                                    <label><input type="checkbox" value="4">Medio Alto</label>
                                    <label><input type="checkbox" value="5">Alto</label>
                                  </div>
                                </div>
                              </div>

                            </div>
                            <div class="button-container-herramientas" id="herramientas_selec" style="display: none;">
                            <button type="button" id="btns_polygons"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Polygono"><i class="fas fa-crop"></i></button>
                            <button type="button" id="btns_freehands"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Libre Dibujo"><i class="fas fa-draw-polygon"></i></button>
                            <button type="button" id="btns_circle"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Circulo"><i class="fas fa-circle"></i></button>
                            <button type="button" id="btns_clear"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Borrar"><i class="fas fa-trash"></i></button>
                            <span id="mess_datos" style="display: none;"></span>                            
                             <div class="sel-center">
                                <div class="custom-select-fill-pgh" tabindex="0">
                                  <div class="selected-options-pgh">Seleccionar</div>
                                  <div class="checkbox-list-pgh">
                                    <label><input type="checkbox" value="1">Pobre Extremo</label>
                                    <label><input type="checkbox" value="2">Pobre</label>
                                    <label><input type="checkbox" value="3">No Pobre</label>                                 
                                  </div>
                                </div>
                              </div>
                               <div class="sel-center">
                                <div class="custom-select-fill-vcto" tabindex="0">
                                  <div class="selected-options-vcto">Vencimientos</div>
                                  <div class="checkbox-list-vcto">
                                    <label><input type="checkbox" value="1">Menor a 6 Meses</label>
                                    <label><input type="checkbox" value="2">De 7 a 12 Meses</label>
                                    <label><input type="checkbox" value="3">Mayor a 12 Meses</label>                                 
                                  </div>
                                </div>
                              </div>

                            </div>

                        </li>                                          

                      </ul>

                       <div id="ReporteInfortabla_estratos" style="display:none ;overflow: auto;"> 
                        <br>
                        <span style="text-align: center;">Reporte de Poblacion por Manzana</span>

                        <table id="datatable_estratos" class="table dt-responsive nowrap w-100" role="grid">
                               <thead>
                                <tr>
                                  <th> Estrato</th>                                                     
                                  <th> Personas </th>
                                  <th> Hogares</th>
                                  <th> Mzna</th>                                                          
                                  </tr>
                                </thead>
                                 <tbody >

                                </tbody>
                             </table>
                        </div>

                        <div id="ReporteInfortabla_pgh_geo" style="display:none ;overflow: auto;"> 
                        <br>
                        <span style="text-align: center;">Reporte de PGH Georreferenciado</span>

                        <table id="datatable_pgh_geo" class="table dt-responsive nowrap w-100" role="grid">
                               <thead>
                                <tr>
                                  <th>Total</th>
                                   <th> No Pobre</th>                                                     
                                   <th> Pobre </th>                                 
                                   <th> Pobre Extremo </th>                                                         
                                  </tr>
                                </thead>
                                 <tbody >

                                </tbody>
                             </table>
                        </div>

                  </div>                   
                </div>
            </div>
        </div>

        <div class="ul-sidebar-panel" id="asideNotification_gallery" data-position="right">
            <div class="pt-lg pb-md">
                <div class="ul-sidebar-panel-top pb-lg px-lg">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="heading-label p-0">Mapas Base</div>
                        <i class="fas fa-times-circle icon icon-sm hover-gray ul-sidebar-panel-close"></i>
                    </div>
                </div>
                <div class="sidebar-body" data-suppress-scroll-x="true">

                <div data-dojo-type="dijit/layout/ContentPane" class="scroll-mapas">
                        <div id="basemapGallery"></div>
                    </div>
                   
                </div>

                <!--<div class="px-xl py-md">
                    <a class="btn btn-opacity btn-primary w-full">Boton para funcionalidad</a>
                </div>-->
            </div>
        </div>

         <div class="ul-sidebar-panel" id="asideNotification_report" data-position="right">
            <div class="pt-lg pb-md">
                <div class="ul-sidebar-panel-top pb-lg px-lg">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="heading-label p-0">Barrido 2024</div>
                        <i class="fas fa-times-circle icon icon-sm hover-gray ul-sidebar-panel-close"></i>
                    </div>
                </div>
                <div class="titulo-report">Avance de Georreferenciación del Barrido Focalizado 2024</div>

                <div class="sidebar-body" data-suppress-scroll-x="true">
                      <p class="title-two-stadistica w-100"><i class="fa fa-chart-line"></i>&nbsp Estadistica</p>
                      <div class="titulo-one">Meta Empadronamiento</div>
                      <div class="contenedor-reporty">
                          <div class="icono">
                            <img src="<?=base_url()?>media/static_base/img/geo.jpg" alt="" />
                          </div>
                          <div class="dato-estadistico">
                            <p class="titulo">Meta de Hogares</p>
                            <p class="dato" id="dato-meta"><?php echo $data_meta[0]['meta']; ?> </p>
                        <input type="hidden" name="bk_meta_total" id="id_bk_meta" value="<?php echo $data_meta[0]['meta']; ?>">
                          </div>
                        </div>
                        <div class="titulo-one">Avance Georreferenciación</div>
                        <div class="contenedor-reporty">
                          <div class="icono">
                            <img src="<?=base_url()?>media/static_base/img/georref.png" alt="" />
                          </div>
                          <div class="dato-estadistico">
                            <p class="titulo">Cobertura de Hogares </p>
                            <p class="dato" id="dato-avance"></p>
                          </div>
                        </div>
                         <div class="titulo-one">% de Georreferenciación</div>
                        <div class="contenedor-reporty">
                          <div class="icono">
                            <img src="<?=base_url()?>media/static_base/img/porct.png" alt="" />
                          </div>
                          <div class="dato-estadistico">
                            <p class="dato" id="dato-porcentaje"></p>
                          </div>
                        </div>

                      
                      <p class="title-two-report w-100"><i class="fas fa-map-marker-alt"></i>&nbsp Georreferenciación AGSisfoh</p>
                     
                        <ul class="li-clas-list">
                        <li class="inp-position">
                          <label>                           
                          </label>
                          <div class="button-container-herramientas">
                           <button type="button" id="ag_polygons"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Polygono"><i class="fas fa-crop"></i></button>
                            <button type="button" id="ag_freehands"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Libre Dibujo"><i class="fas fa-draw-polygon"></i></button>
                            <button type="button" id="ag_circle"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Circulo"><i class="fas fa-circle"></i></button>
                            <button type="button" id="ag_clear"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="Borrar"><i class="fas fa-trash"></i></button>
                            <button type="button" id="ag_dias"  class="btn btn-secondary-sup btn-icon" data-toggle="tooltip" data-placement="top" title="dias"><i class="fas fa-calendar"></i></button>
                             <span id="messages" style="display: none;"></span>
                             </div>

                        </li>
                        <div class="sidebar-box">
                            <select class="styled-select" id="filtroGeo">
                            <option value="0">Todos los Georref...</option>
                        </select>
                       </div>
                          <div style="text-align: center;">
                            <p class="titulo-df" id="dato-titulo">Total Hogares Georreferenciados</p>
                            <p class="dato-df" id="dato-valor"></p><br>
                            <p class="titulo-df" id="dato-titulo">Fecha de Actualización</p>
                            <p class="titulo-df" id="dato-fecha"></p>
                          </div>

                      </ul>
                    </div>


                <!--<div class="px-xl py-md">
                    <a class="btn btn-opacity btn-primary w-full">Clic para más detalles</a>
                </div>-->
            </div>
        </div>

    </div>

    <script src="<?=base_url()?>media/static_base/js/xlsx.full.min.js"></script>
    <script>
  
        function exportarExcel() {
            const tabla = document.getElementById('datatable_AGSisfoh');
            const fechaHora = obtenerFechaHora(); // Obtener la fecha y hora actual
            const nombreArchivo = 'TablaReporte_' + fechaHora + '.xlsx'; // Concatenar la fecha y hora al nombre del archivo
            const tipoArchivo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const datosTabla = XLSX.utils.table_to_book(tabla, {sheet: "Tabla"});
            XLSX.writeFile(datosTabla, nombreArchivo);
        }

        function obtenerFechaHora() {
            const fechaHoraActual = new Date();
            const dia = fechaHoraActual.getDate();
            const mes = fechaHoraActual.getMonth() + 1;
            const año = fechaHoraActual.getFullYear();
            const hora = fechaHoraActual.getHours();
            const minutos = fechaHoraActual.getMinutes();
            const segundos = fechaHoraActual.getSeconds();
            const fechaHoraFormateada = dia+"/"+mes+"/"+año+"_"+hora+":"+minutos+":"+segundos;
            return fechaHoraFormateada;
        }

      </script>


     <script type="text/javascript">
        
         var base_url="<?= base_url() ?>";

        window.dojoConfig = {
            async: true,
            packages: [
            {
                name: 'app',
                location: base_url + "media/static_map/src"
            }
        ]};
      </script>
        <script src="<?=base_url()?>media/static_base/js/vendors.min.js"></script>
        <script src="<?=base_url()?>media/static_base/js/main.min.js"></script>
        <script src="<?=base_url()?>media/static_base/js/highlight.min.js"> </script>
        <script src="<?=base_url()?>media/static_base/js/script.min.js"></script>
        <script src="<?= base_url() ?>media/static_admin/assets/vendor/bootbox.min.js"></script>  
        <script src="<?= base_url() ?>media/static_admin/assets/vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="https://js.arcgis.com/3.44/"></script>
        <script src="<?=base_url()?>media/static_map/app.js"></script>   
        

        <script type="text/javascript">
            window.addEventListener('load',()=>{
                const contenedor= document.querySelector('.loader-wrapper');
                contenedor.style.opacity = 0;             
                contenedor.style.visibility = "hidden";
            });      

              const responsiveseach = document.getElementById('responsivebuscar');
              const zoomInButton = document.getElementById('zoom_in');
              const zoomOutButton = document.getElementById('zoom_out');
                const opcionesop = document.getElementById('narrow-opciones-op');

              // Función para ocultar los botones en pantallas más pequeñas
              function toggleButtonVisibility() {
                if (window.innerWidth <= 1215) {
                  zoomInButton.style.display = 'none';
                  zoomOutButton.style.display = 'none';
                  responsiveseach.style.display = 'none';

                } else {
                  zoomInButton.style.display = 'inline-block'; // O el estilo que corresponda a su diseño original
                  zoomOutButton.style.display = 'inline-block'; // O el estilo que corresponda a su diseño original
                  responsiveseach.style.display = 'block';
                }
              }

              // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
              window.onload = toggleButtonVisibility;
              window.onresize = toggleButtonVisibility;

                let tiempoInactivo = 30 * 60 * 1000; // 15 minutos en milisegundos
                let tiempoActualizacion = null;

                function reiniciarTemporizador() {
                  if (tiempoActualizacion) {
                    clearTimeout(tiempoActualizacion);
                  }
                  tiempoActualizacion = setTimeout(actualizarPagina, tiempoInactivo);
                }

                function actualizarPagina() {
                  // Aquí colocarías el código para recargar o actualizar la página
                  location.reload(); // Esto recarga la página
                }

                // Evento de inactividad
                document.addEventListener("mousemove", reiniciarTemporizador);
                document.addEventListener("keypress", reiniciarTemporizador);

                // Iniciar el temporizador cuando la página se cargue
                reiniciarTemporizador();



        </script>
        <script type="text/javascript">

          $(document).on('click', '#peru', function (e) {
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');
                });
           $(document).on('click', '#zoom_in', function (e) {
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');
                });
            $(document).on('click', '#zoom_out', function (e) {
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');                     
                });
            $(document).on('click', '#btn-mapas-base', function (e) {
                if ($("#btn-capas-base").hasClass("active-btn")){
                    $(".active-btn").removeClass('active-btn');}
                    else{                        
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');

                    } 
                });

            $(document).on('click', '#btn-capas-base', function (e) {

                if ($("#btn-capas-base").hasClass("active-btn")){
                    $(".active-btn").removeClass('active-btn');
                       }
                    else{                        
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');

                    } 
                });

             $(document).on('click', '#btn-report', function (e) {

                if ($("#btn-report").hasClass("active-btn")){
                    $(".active-btn").removeClass('active-btn');
                       }
                    else{                        
                    $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');

                    } 
                });


             $(".ul-sidebar-panel-close").on("click", function () {

                $(".active-btn").removeClass('active-btn');                            

              });


            

    /**************** P65*******************/
      
     $(".close-table-p65").click(function (e) {
          e.preventDefault();
          var table; 
          table=$('#datatable_p65').DataTable();
           $('#dniP65').val("");
           table.destroy();
           //$('#table_id_p65').attr("disabled", false);
           $("#ReporteInfortabla_p65").hide();           
                     
       });

     $(document).ready(function() {
        // Handler para el botón de búsqueda
        $('#btnBuscarP65').on('click', function() {
            var valorFiltro = $('#dniP65').val().trim();
            $('#datatable_p65 tbody tr').hide(); // Oculta todas las filas
            // Filtra y muestra solo las filas que coincidan con el valor del filtro
            $('#datatable_AGSisfoh tbody tr').each(function() {
                var dniP65 = $(this).find('td:eq(2)').text().trim(); // Obtén el valor de DNI_JEFE_HOG
                if (dniP65.trim() === valorFiltro.trim()) {
                    $(this).show(); // Muestra la fila si coincide con el filtro
                }
            });
        });

     $('#dniP65').on('keyup', function() {
        var valorFiltro = $(this).val().trim().toLowerCase();
        $('#datatable_p65 tbody tr').hide(); // Oculta todas las filas
        if (valorFiltro === '') {
            $('#datatable_p65 tbody tr').show(); // Si el filtro está vacío, mostrar todas las filas
        }

        $('#datatable_p65 tbody tr').each(function() {
            var dniP65 = $(this).find('td:eq(2)').text().trim().toLowerCase();
            if (dniP65.includes(valorFiltro)) {
                $(this).show();
            }
          });
        });
      });


     $(".close-table-ag").click(function (e) {
          e.preventDefault();
          var table; 
          table=$('#datatable_AGSisfoh').DataTable();
           $('#dniJefe').val("");
           table.destroy();
           $("#ReporteInfortabla_AGsisfoh").hide();
           $("#ReporteInfortabla_AGsisfoh").css("display", "none");
        
                     
       });

     $(document).ready(function() {
        // Handler para el botón de búsqueda
        $('#btnBuscarJefe').on('click', function() {
            var valorFiltro = $('#dniJefe').val().trim();
            $('#datatable_AGSisfoh tbody tr').hide(); // Oculta todas las filas
            // Filtra y muestra solo las filas que coincidan con el valor del filtro
            $('#datatable_AGSisfoh tbody tr').each(function() {
                var selectElement = document.getElementById('id_tipo_fill').value;
                var dniJefeHogar = $(this).find('td:eq('+selectElement+')').text().trim(); // Obtén el valor de DNI_JEFE_HOG
                if (dniJefeHogar.trim() === valorFiltro.trim()) {
                    $(this).show(); // Muestra la fila si coincide con el filtro
                }
            });
        });

     $('#dniJefe').on('keyup', function() {
        var valorFiltro = $(this).val().trim().toLowerCase();
        $('#datatable_AGSisfoh tbody tr').hide(); // Oculta todas las filas
        if (valorFiltro === '') {
            $('#datatable_AGSisfoh tbody tr').show(); // Si el filtro está vacío, mostrar todas las filas
        }

        $('#datatable_AGSisfoh tbody tr').each(function() {
            var selectElement = document.getElementById('id_tipo_fill').value;
            var dniJefeHogar = $(this).find('td:eq('+selectElement+')').text().trim().toLowerCase();
            if (dniJefeHogar.includes(valorFiltro)) {
                $(this).show();
            }
          });
        });
      });
       
    
    </script>


<script type="text/javascript">

     let meta="<?= $data_meta[0]['meta']; ?>";            
    
      <?php if($user["es_municipal"] == true){ ?>

         var ubigeo_X_MAX = "<?= $user['ubigeos']['x_max'] ?>";
         var ubigeo_X_MIN = "<?= $user['ubigeos']['x_min'] ?>";
         var ubigeo_Y_MAX = "<?= $user['ubigeos']['y_max'] ?>";
         var ubigeo_Y_MIN = "<?= $user['ubigeos']['y_min'] ?>"; 
         var ubigeo_IDDIST ="<?= $user['ubigeos']['iddist'] ?>"; 

         var inputElement = document.getElementById("key_search");
        inputElement.placeholder = " Buscar por nombre de Dirección...";

      <?php }else{ ?>

         var ubigeo_X_MAX = -68.483306;
         var ubigeo_X_MIN = -80.524322;
         var ubigeo_Y_MAX = 0.798059;
         var ubigeo_Y_MIN = -19.221502;

          var inputElement = document.getElementById("key_search");
        inputElement.placeholder = " Buscar por nombre de Centro Poblado ...  ";
   

      <?php } ?>

        </script>
        
        <?php if($user["es_municipal"] == true) {?>
          <script src="<?=base_url()?>media/static_map/map_municipal.js"></script>
        <?php } else {?>
         <script src="<?=base_url()?>media/static_map/app_map.js"></script>

        <?php }?>
    
       
    </body>
</html>
