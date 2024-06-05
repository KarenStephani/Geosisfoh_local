var global = {};
global.idBtnPeru="peru";
global.idBtnZoomIn="zoom_in";
global.idBtnZoomOut="zoom_out";
global.idBtnclear="clear_map";
global.idBtnpoint="point";
global.idBtnpolyline="polyline";
global.idBtnfreehandpolygon_nu="freehandpolygon_nu";
global.idBtnfreehandpolygon_sector="freehandpolygon_sector";
global.idBtnfreehandpolygon_mzna="freehandpolygon_mzna";
global.idBtnpolygon_nu="polygon_nu";
global.idBtnpolygon_sector="polygon_sector";
global.idBtnpolygon_mzna="polygon_mzna";
global.mapExtentChange="";
global.myUnload_connect ="";
global.mapOnClick_connect_z= null;
global.mapdata_load="";
global.selectionToolbar65;
global.selectionToolbar_estrs;
global.selectionToolbar_ag;
 
 /***************Servicios***********************/

 global.layer_map="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/INEI_Cartografia_Base/MapServer";
 global.url_service_PGH ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/MIDIS_PGH_Georreferenciado/MapServer/0";
 global.url_estratos_inei ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_INEI_Planos_Estratificados/MapServer"; 
 global.url_ze_urbana ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_1806_DGFIS_DU/MapServer/1";
 global.url_agsisfoh ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_1806_DGFIS_BARRIDO/MapServer/1";
 global.url_agsisfoh_2023 ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_DGFIS_AGSISFOH/MapServer";
 global.service_ccpp="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/INEI_Cartografia_Base/MapServer/1";
 global.url_P65 = "https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_1608_PROGRAMAS_SOCIALES/MapServer/0";
 global.url_h_juntos="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_1608_PROGRAMAS_SOCIALES/MapServer/1";
 global.url_h_cunamas ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/CUNA_MAS_LOCALES_SCD/MapServer/0";
 global.url_cenepred ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_CENEPRED_001_INUND_MMASA/MapServer";
 global.url_report_du ="https://geosisfoh.midis.gob.pe/server/rest/services/Geosisfoh/PERU_MIDIS_1806_DGFIS_BARRIDO/MapServer";


require([
        "esri/map",
        "esri/dijit/Scalebar",
        "esri/dijit/LocateButton",
        "esri/SnappingManager",
        "esri/dijit/Search",
        "esri/layers/FeatureLayer",
        "esri/InfoTemplate",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/ImageParameters",
        "esri/dijit/Legend",
        "esri/renderers/ClassBreaksRenderer",
        "esri/renderers/HeatmapRenderer",
        "dojo/parser",
        "esri/dijit/FeatureTable",
        "esri/dijit/HomeButton",
        "esri/dijit/Print",
        "esri/tasks/PrintTemplate",
        "esri/dijit/PopupTemplate",
        "esri/dijit/InfoWindow",
        "esri/dijit/Measurement",
        "esri/request",
        "dojo/json",
        "esri/config",
        "esri/tasks/QueryTask",
        "esri/tasks/query",
        "esri/TimeExtent",
        "dojo/date",
        "esri/renderers/smartMapping",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/tasks/IdentifyTask",
        "esri/tasks/IdentifyParameters",
        "esri/tasks/StatisticDefinition",
        "esri/geometry/Point",
        "esri/dijit/Popup",
        "dojo/_base/Color",
        "dojo/dom",
        "dojo/on",
        "dojo/query",
        "dojo/json",
        "dojo/dom-construct",
        "esri/dijit/BasemapGallery",
        "esri/dijit/Basemap",
        "esri/dijit/BasemapLayer",
        "esri/arcgis/utils",
        "esri/symbols/SimpleFillSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/Font",
        "esri/symbols/TextSymbol",
        "esri/graphic",
        "esri/geometry/Polygon",
        "esri/geometry/Polyline",
        "esri/SpatialReference",
        "esri/geometry/webMercatorUtils",
        "esri/tasks/GeometryService",
        "esri/tasks/ProjectParameters",
        "esri/dijit/LayerList",
        "esri/toolbars/draw",
        "esri/dijit/BasemapToggle",
        "esri/renderers/UniqueValueRenderer",
        "dojo/_base/array",
        "dojo/_base/array",
        "dojo/dom-construct",
        "esri/geometry/screenUtils",
        "esri/toolbars/edit",
        "app/clusterfeaturelayer",
        "esri/lang",
        "dojo/_base/lang",
        "dojo/_base/fx",
        "dojo/fx/easing",
        "dojo/dom-class",
        "dojo/dom-style",
        "dijit/form/Button",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dijit/TitlePane",
        "dojo/_base/event",
        "dojo/_base/connect",
        "dojo/domReady!",
        "esri/dijit/TimeSlider"
    ],

    function(

            Map, Scalebar, LocateButton, SnappingManager, Search, FeatureLayer, InfoTemplate, ArcGISDynamicMapServiceLayer, ImageParameters,
            Legend, ClassBreaksRenderer, HeatmapRenderer, parser,FeatureTable, HomeButton, Print, PrintTemplate, PopupTemplate, InfoWindow, Measurement, esriRequest,JSON, esriConfig, QueryTask, Query, TimeExtent, date, smartMapping, PictureMarkerSymbol,
            SimpleMarkerSymbol, IdentifyTask, IdentifyParameters, StatisticDefinition, Point, Popup, Color, dom, on, query, JSON, domConstruct, BasemapGallery,Basemap,BasemapLayer, arcgisUtils, SimpleFillSymbol,
            SimpleLineSymbol,Font, TextSymbol, Graphic, Polygon, Polyline, SpatialReference, webMercatorUtils, GeometryService, ProjectParameters, LayerList, Draw, BasemapToggle, UniqueValueRenderer, arrayUtil, arrayUtils, domConstruct, screenUtils, Edit, ClusterFeatureLayer, lang, lang, fx, easing, domClass, domStyle, Button, BorderContainer, ContentPane, event, connect

       ) {   

      parser.parse();
      var tb;
      var extent = new esri.geometry.Extent({
          "xmin":ubigeo_X_MIN,"ymin":ubigeo_Y_MIN,"xmax":ubigeo_X_MAX,"ymax":ubigeo_Y_MAX,
          "spatialReference":{"wkid":4326}
        });

        var map = new Map("MapaDiv", {
            basemap: "satellite",
            extent : extent,
            minZoom:4,
            maxZoom:20
            //zoom: 12

        });

       $('#key_search').on('keyup', function() {
            var key = $(this).val().toUpperCase();;
            var url_geo_via = base_url + "index.php/App/get_vias_wiguet_ccpp";    
            if(key.length>3)  
              { $.ajax({
                type: "POST",
                url: url_geo_via,
                data: {query:key},
                success: function(data) {
                  $('#suggestions').fadeIn(1000).html(data);
                    //Al hacer click en  las sugerencias
                    $('.suggest-element').on('click', function(){
                            var id = $(this).attr('id');
                            var direccion = $(this).attr('data');
                            var lat = $(this).attr('lat');
                            var long = $(this).attr('long');

                            document.getElementById("key_search").value=direccion;
                            _geolocaliza_xy_(id,lat,long,direccion);
                            $('#suggestions').fadeOut(1000);

                    });
                }
            });
           }else{
            $('#suggestions').fadeOut(1000);            
           }
        });

        var _graphics_goeloc;

      function _geolocaliza_xy_(id,lat,long,direccion){

           if(_graphics_goeloc){
              map.graphics.remove(_graphics_goeloc);
              map.infoWindow.hide(); 
             }
            var contex='';
            var _cord_geoloc =[parseFloat(long),parseFloat(lat)];
            var infoTemplate = new InfoTemplate();
             contex += "<b>Direccion:</b>"+direccion+"<br/>";
             var  _symbol_geo = new PictureMarkerSymbol({
                                        "url":base_url+"/media/static_base/img/avatars/red-circle.png",
                                        "height":25,
                                        "width":25,
                                           });

              var _geolocaliza_ = new Point(_cord_geoloc,new SpatialReference({ wkid:4326 }));

                      _graphics_goeloc =new Graphic(_geolocaliza_, _symbol_geo);
                      map.infoWindow.setTitle("Ubicación");
                      map.infoWindow.setContent(contex);
                      map.infoWindow.show(_geolocaliza_,InfoWindow.ANCHOR_LOWERRIGHT);
                      map.centerAndZoom(_geolocaliza_,15);
                      map.graphics.add(_graphics_goeloc);


                }


       var config_ubi=0;
       cargar_data();
       function cargar_data(){
        const serviceURL =global.url_report_du+"/5";
        const url = serviceURL + '/query?f=json&where=1=1&outFields=ubigeo,co_indicador,indicador,cantidad&returnGeometry=false';
        $.ajax({
          url: url,
          method: 'GET',
          success: function(data) {
            const atributosJSON = [];
            let sumaTotal = 0;
            let sumaSinIndicador9 = 0;

            const datosAgrupados = {};
           data.features.forEach(feature => {
            const atributos = feature.attributes;
            // Verificar si existe la clave en el objeto, si no existe, se crea
            if (!datosAgrupados[atributos.co_indicador]) {
              datosAgrupados[atributos.co_indicador] = {
                co_indicador: atributos.co_indicador,
                indicador: atributos.indicador,
                cantidadTotal: 0
              };
            }
            datosAgrupados[atributos.co_indicador].cantidadTotal += atributos.cantidad;
          });

            data.features.forEach(feature => {
              const atributos = feature.attributes;
              atributosJSON.push(atributos);
              sumaTotal += atributos.cantidad;
               if (atributos.co_indicador !== 9) {
                sumaSinIndicador9 += atributos.cantidad;
              }
            });

            $('#dato-valor').text(sumaTotal);
            $('#dato-avance').text(sumaSinIndicador9);

            let dato_porct=sumaSinIndicador9/meta;
            let res_porct = (dato_porct * 100).toFixed(2);            

            $('#dato-porcentaje').text(res_porct + '%');

            const select = $('#filtroGeo');

          for (const key in datosAgrupados) {
            if (Object.hasOwnProperty.call(datosAgrupados, key)) {
              const item = datosAgrupados[key];
              const textoRecortado = item.indicador.length > 15 ? item.indicador.substring(0, 15) + '...' : item.indicador;
              select.append($('<option>', {
                value: item.co_indicador,
                text: textoRecortado + " -> " + item.cantidadTotal
              }));
            }
          }             

          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error en la solicitud:', textStatus, errorThrown);
          }
        });

        var query = new Query();
        query.where = "1=1"; // Esto recuperará todos los registros, puedes cambiarlo según tus necesidades
        query.returnGeometry = false;
        query.outFields = ["*"];

        // Crear una instancia de QueryTask
        var queryTask = new QueryTask(global.url_agsisfoh);

        // Ejecutar la consulta
        queryTask.execute(query, function(result) {
          if (result.features.length > 0) {
            // Si hay al menos un resultado, imprimir el primer registro
            // console.log(result.features[0]);
            $('#dato-fecha').text(result.features[0].attributes.fec_hor_proceso);

          } else {
            console.log("No se encontraron registros.");
          }
        }, function(error) {
          console.error("Error al ejecutar la consulta:", error);
        });

       }

       function cargar_data_total(ubi){
        var url="";
        document.getElementById("dato-titulo").textContent="";
        const serviceURL =global.url_report_du+"/5";
        if(ubi=='0'){
           url= serviceURL + '/query?f=json&where=1=1&outFields=ubigeo,co_indicador,indicador,cantidad&returnGeometry=false';
        }else{
           url= serviceURL + '/query?f=json&where=ubigeo=\'' +ubi+ '\'&outFields=ubigeo,co_indicador,indicador,cantidad&returnGeometry=false';
        } 

        
        $.ajax({
          url: url,
          method: 'GET',
          success: function(data) {
            const atributosJSON = [];
            let sumaTotal = 0;
            let sumaSinIndicador9 = 0;
            data.features.forEach(feature => {
              const atributos = feature.attributes;
              atributosJSON.push(atributos);
              sumaTotal += atributos.cantidad;
               if (atributos.co_indicador !== 9) {
                sumaSinIndicador9 += atributos.cantidad;
              }
            });

             document.getElementById("dato-titulo").textContent = 'Todos Los Georreferenciados';
            $('#dato-valor').text(sumaTotal);
        },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error en la solicitud:', textStatus, errorThrown);
          }
        });
       }


    function cargar_data_config(ccdist){

        var dato_meta=0;
        var ubigeo_meta = "_"+ccdist;        
        document.getElementById("dato-valor").textContent="";
        document.getElementById("dato-avance").textContent="";
        document.getElementById("dato-meta").textContent="";

        var get_url_dato_meta = base_url + "index.php/App/get_dato_meta/"+ubigeo_meta;
        $.getJSON(get_url_dato_meta, function(data) {

             dato_meta=data.data_meta[0].meta;

        const serviceURL =global.url_report_du+"/5"; 
        const url = serviceURL + '/query?f=json&where=ubigeo=\'' + ccdist + '\'&outFields=ubigeo,co_indicador,indicador,cantidad&returnGeometry=false';
        $.ajax({
          url: url,
          method: 'GET',
          success: function(data) {
            const atributosJSON = [];
            let sumaTotal = 0;
            let sumaSinIndicador9 = 0;
            data.features.forEach(feature => {
              const atributos = feature.attributes;
              atributosJSON.push(atributos);
              sumaTotal += atributos.cantidad;
               if (atributos.co_indicador !== 9) {
                sumaSinIndicador9 += atributos.cantidad;
              }
            });

            $('#dato-meta').text(dato_meta);
            $('#dato-valor').text(sumaTotal);
            $('#dato-avance').text(sumaSinIndicador9);

            let dato_porct=sumaSinIndicador9/dato_meta;
            let res_porct = (dato_porct * 100).toFixed(2);            

            $('#dato-porcentaje').text(res_porct + '%');

            const select = $('#filtroGeo');
             $(select).find("option").remove();
              select.append("<option value='0' dato='"+sumaTotal+"'>Todos los Georref...</option>");
              atributosJSON.forEach(item => {
                const textoRecortado = item.indicador.length > 15 ? item.indicador.substring(0, 15) + '...' : item.indicador;                
                select.append($('<option>', {
                  value: item.co_indicador,
                  dato: item.cantidad,
                  text: textoRecortado +" -> "+item.cantidad
                }));
              });

          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error en la solicitud:', textStatus, errorThrown);
          }

         });

        });

       }

       function reset_datos(){

        document.getElementById("dato-valor").textContent="";
        document.getElementById("dato-avance").textContent="";
        document.getElementById("dato-meta").textContent="";
        document.getElementById("dato-porcentaje").textContent="";


       }
     

        var peru = document.getElementById(global.idBtnPeru);
                        peru.addEventListener("click",function (e) {                            
                            map.setExtent(extent);
                           $(".active-btn").removeClass('active-btn');
                            removeFilterAndReload();
                            cargar_data();
                            cargar_data_total(0);
                            deleteagsisfoh();  
                                                          
                            $('#ccdep').prop('selectedIndex', 0);
                            $("#ccprov").find("option").remove();
                            $("#ccprov").append("<option>Seleccione</option>");
                            $("#ccdist").find("option").remove();
                            $("#ccdist").append("<option>Seleccione</option>");
                            $("#ccpoblado").find("option").remove();
                            $("#ccpoblado").append("<option>Seleccione</option>");
                            
                            $('#filtroGeo').find("option").remove();
                            $('#filtroGeo').append("<option value='0'>Todos los Georref...</option>");
                            $('#filtroGeo').prop('selectedIndex', 0);

                            document.getElementById("dato-meta").textContent="";
                            const valorImeta = $('#id_bk_meta').val();
                            $('#dato-meta').text(valorImeta);

                             map.infoWindow.clearFeatures();
                             map.graphics.clear();
                             if (global.mapOnClick_connect_z!==null) {
                              global.mapOnClick_connect_z.remove();
                              }

                        });

          var zoomIn = document.getElementById(global.idBtnZoomIn);
                        zoomIn.addEventListener("click",function (e) {
                            map.setZoom(map.getZoom()+1);
                        });

          var zoomOut = document.getElementById(global.idBtnZoomOut);
                        zoomOut.addEventListener("click",function (e) {
                            map.setZoom(map.getZoom()-1);
                        });

          var clearmap = document.getElementById(global.idBtnclear);
                        clearmap.addEventListener("click",function (e) {
                           map.infoWindow.clearFeatures();
                           map.graphics.clear();
                        });


          var geo_zoom;
          map.on("extent-change", function (evt) {
                        global.geo_zoom = map.getZoom();                        
                       
                        if (global.mapOnClick_connect_z!==null) {
                            global.mapOnClick_connect_z.remove();
                                                    
                          }                      

                   if ($("#btn-indentity").hasClass("active-btn") && global.geo_zoom>13 && global.geo_zoom <= 18) {                               
                            global.mapOnClick_connect_z = map.on("click", executeIdentifyTask_z);

                            }

                          else{

                             if (global.mapOnClick_connect_z!==null) {
                                  map.infoWindow.hide();
                                  global.mapOnClick_connect_z.remove();                                  
                            } 

                      }
                   
              });     

          
    /***************************************/
       var infoTemplate_PGH = new InfoTemplate();
       var contex_PGH="";
                infoTemplate_PGH.setTitle("Cod Hogar: ${co_hogar}");
                contex_PGH += '<b>CSE:</b>${des_cse}<br/>';
                contex_PGH += '<b>Direccion:</b>${de_direccion}<br/>';
                infoTemplate_PGH.setContent(contex_PGH);


       var infoTemplate_b2023 = new InfoTemplate();
       var contex_b2023="";
                infoTemplate_b2023.setTitle("Empadronador: ${empadronador}");
                contex_b2023 += "<b>Nro doc Jefe_Hogar:</b>${nro_doc_jefe_hogar}<br/>";
                contex_b2023 += "<b>Fecha Empadronamiento:</b>${fecha_empadronamiento:DateFormat(selector: 'date', fullYear: true)}<br/>";
                infoTemplate_b2023.setContent(contex_b2023);

     var infoTemplate_ccpp = new InfoTemplate();
     var contex_ccpp="";
                infoTemplate_ccpp.setTitle("CCPP:${NOMBCCPP}");
                contex_ccpp += '<b>Ubigeo:</b>${UBIGEO}<br/>';
                contex_ccpp += '<b>Departamento:</b>${NOMBDEP}<br/>';
                contex_ccpp += '<b>Provincia:</b>${NOMBPROV}<br/>';
                contex_ccpp += '<b>Distrito:</b>${NOMBDIST}<br/>';
                contex_ccpp += '<b>Centro Poblado:</b>${NOMBCCPP}<br/>';
                contex_ccpp += '<b><span class="title-two-inei"> Información INEI Censo 2017</span><br/>';
                contex_ccpp += '<b>Población :</b> <span class="titulo-inei"> ${pob_total_inei:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Hombres </b><i class="fa fa-male fa-2x" aria-hidden="true"></i><span class="titulo-inei">  ${pob_hombre_inei:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Mujeres </b><i class="fa fa-female fa-2x" aria-hidden="true"></i><span class="titulo-inei"> ${pob_mujer_inei:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Hogares </b><i class="fa fa-home fa-2x" aria-hidden="true"></i><span class="titulo-inei"> ${total_hogares_inei:NumberFormat} </span><br/>';
                contex_ccpp += '<b><span class="title-two-pgh"> Información PGH Actual</span><br/>';
                contex_ccpp += '<b>Población : </b><span class="titulo-pgh"> ${pob_total_pgh:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Hombres </b><i class="fa fa-male fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${pob_hombre_pgh:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Mujeres </b><i class="fa fa-female fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${pob_mujer_pgh:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Hogares </b><i class="fa fa-home fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${total_hogares_pgh:NumberFormat} </span><br/>';
                contex_ccpp += '<b>Pob. Mayor a 18 años:</b><span class="titulo-pgh"> ${pob_mayor_18:NumberFormat} </span><br/>';

                infoTemplate_ccpp.setContent(contex_ccpp);     



var layer_cenepred, layer_base, layer_estrato,featureLayer_ze, featureLayer_PGH,featureLayer_ccpp,layer_ag_sisfoh2023;
var initialLayersLoaded = false;
var llWidget = null;

function addInitialLayers(map) {
    layer_cenepred = new ArcGISDynamicMapServiceLayer(global.url_cenepred);
    layer_base = new ArcGISDynamicMapServiceLayer(global.layer_map);
    layer_estrato = new ArcGISDynamicMapServiceLayer(global.url_estratos_inei);
    featureLayer_ze = new FeatureLayer(global.url_ze_urbana);
    featureLayer_ccpp = new FeatureLayer(global.service_ccpp);
    layer_ag_sisfoh2023 = new ArcGISDynamicMapServiceLayer(global.url_agsisfoh_2023);

    layer_ag_sisfoh2023.setInfoTemplates({
      0: {infoTemplate: infoTemplate_b2023},
      1: {infoTemplate: infoTemplate_b2023},
      4: {infoTemplate: infoTemplate_b2023},
      5: {infoTemplate: infoTemplate_b2023},
      6: {infoTemplate: infoTemplate_b2023},
      7: {infoTemplate: infoTemplate_b2023}
    });

    featureLayer_PGH = new FeatureLayer(global.url_service_PGH, {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: infoTemplate_PGH,
        visible: false
    });

    featureLayer_ccpp = new FeatureLayer(global.service_ccpp, {
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ["*"],
        infoTemplate: infoTemplate_ccpp,
        opacity:0.9,
        visible: true
    });

    var visibleLayerIds = [0, 1, 2, 7, 8];
    layer_base.setVisibleLayers(visibleLayerIds);

    map.addLayers([layer_cenepred, layer_estrato, layer_base, featureLayer_PGH,featureLayer_ze,layer_ag_sisfoh2023,featureLayer_ccpp]);
}

function addFilteredLayers(nivel, query_nivel, ubigeo_IDDIST) {
    var layerDefinitions = [];
    var layerDefinitions_ag = [];
    layerDefinitions[0] = query_nivel;
    layerDefinitions[1] = query_nivel;
    layerDefinitions[2] = query_nivel;
    layerDefinitions[3] = query_nivel;
    layerDefinitions[4] = query_nivel;

    layerDefinitions_ag[0] = query_nivel;
    layerDefinitions_ag[1] = query_nivel;
    layerDefinitions_ag[4] = query_nivel;
    layerDefinitions_ag[5] = query_nivel;
    layerDefinitions_ag[6] = query_nivel;
    layerDefinitions_ag[7] = query_nivel;

    var layerDefinitions_E = [];
    layerDefinitions_E[0] = query_nivel;

    var visibleLayerIds = [0, 1, 2];
    layer_base.setLayerDefinitions(layerDefinitions);
    layer_base.setVisibleLayers(visibleLayerIds);
    layer_estrato.setLayerDefinitions(layerDefinitions_E);
    layer_ag_sisfoh2023.setLayerDefinitions(layerDefinitions_ag);

    featureLayer_ze.setDefinitionExpression("UBIGEO='"+ubigeo_IDDIST+"'");
    featureLayer_ccpp.setDefinitionExpression("UBIGEO='"+ubigeo_IDDIST+"'");

    if (nivel == '3') {
        featureLayer_PGH.setDefinitionExpression("co_departamento='" + ubigeo_IDDIST.substr(0, 2) + "' AND co_provincia='" + ubigeo_IDDIST.substr(2, 2) + "' AND co_distrito='" + ubigeo_IDDIST.substr(4, 2) + "'");
    }

    initialLayersLoaded = true;
}

function removeFilterAndReload() {
    if (initialLayersLoaded) {
        map.removeLayer(layer_cenepred);
        map.removeLayer(layer_base);
        map.removeLayer(layer_estrato);
        map.removeLayer(featureLayer_PGH);
        map.removeLayer(featureLayer_ze);
        map.removeLayer(featureLayer_ccpp);
        map.removeLayer(layer_ag_sisfoh2023);

        addInitialLayers(map);
        initialLayersLoaded = false;
        setupLayerList(map);
    }
}

function setupLayerList(map) {
    var layerListContainer = document.createElement('div');
    var parentContainer = document.getElementById('layerList');
        parentContainer.appendChild(layerListContainer);

    if (llWidget) {
        llWidget.destroy();
    }

    layerListContainer.innerHTML = "";
    llWidget = new LayerList({
        map: map,
        showLegend: true,
        showSubLayers: true,
        showOpacitySlider: false,
        layers: [
            {
                  layer: layer_ag_sisfoh2023,
                  id: "MIDIS-BARRIDO-DU029-2023",
                  subLayers: true
            },
            {
                  layer: featureLayer_ze,
                  id: "MIDIS Zonas Expansion",
                  subLayers: true
                 },
            {
                layer: featureLayer_PGH,
                id: "MIDIS PGH Georreferenciado",                
                subLayers: true
            },
            {
                layer: layer_cenepred,
                id: "CENEPRED",
                showOpacitySlider: true,
                subLayers: true
            },
            {
                layer: layer_estrato,
                id: "INEI Estratos",
                showOpacitySlider: true,
                subLayers: true
            },
            {
                layer: layer_base,
                id: "INEI Cartografía Base",
                subLayers: true
            }
        ]
    }, layerListContainer);

    llWidget.startup();
  }

  // Llamadas iniciales
  addInitialLayers(map);
  setupLayerList(map);


  /*******************filtro estratos*******************************/

      var selectMultiple = document.querySelector('.custom-select-fill');
      var selectedOptions = selectMultiple.querySelector('.selected-options');
      var optionsList = selectMultiple.querySelector('.checkbox-list');

      selectMultiple.addEventListener('click', function () {
        selectMultiple.classList.toggle('active');
        optionsList.style.display = (optionsList.style.display === 'block') ? 'none' : 'block';
      });

      // Cierra la lista desplegable si se hace clic fuera de ella
      document.addEventListener('click', function (event) {
        if (!selectMultiple.contains(event.target)) {
          selectMultiple.classList.remove('active');
          optionsList.style.display = 'none';
        }
      });

      // Manejar clic en las opciones de la lista desplegable
      optionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
          // Actualizar el texto de las opciones seleccionadas
          var selectedOptionsArray = Array.from(optionsList.querySelectorAll('input:checked')).map(function (input) {
            return input.parentElement.textContent.trim(); // Obtener el texto del label
          });
          selectedOptions.textContent = selectedOptionsArray.length > 0 ? selectedOptionsArray.join(', ') : 'Filtrar';

          // Mostrar en la consola los valores seleccionados (value)
          var valselect=selectedOptionsArray.map(function (label) {
            return Array.from(optionsList.querySelectorAll('label')).find(function (el) {
              return el.textContent.trim() === label;
            }).querySelector('input').value;
          });

            const valorVacio = $('#ccdist option:first').val();

	        if ($('#ccdist').val() === valorVacio) {
	           var ubig=0;
	           fil_estratos(valselect,ubig);
	        }
	        else{
	           var ubig=$('#ccdist').val();
	           fil_estratos(valselect,ubig);
	        }

          $("#ReporteInfortabla_estratos").hide();
          // Ocultar la lista desplegable
          selectMultiple.classList.remove('active');
          optionsList.style.display = 'none';
        }
      });


  var layerEstratoExpres;

  function fil_estratos(valselect,ubig){

  	var layerDefinitions_Est = [];
     if(ubig!==0){     
       layerEstratoExpres = valselect.length > 0
      ? "UBIGEO='"+ubig+"' AND estrato IN (" + valselect + ")"
      : "UBIGEO='"+ubig+"'";

     }else{

      layerEstratoExpres = valselect.length > 0
      ? "estrato IN (" + valselect + ")"
      : "1=1";

     }  	
    
    layerDefinitions_Est[0] = layerEstratoExpres;
    layer_estrato.setLayerDefinitions(layerDefinitions_Est);
    featureLayer_estratos.setDefinitionExpression(layerEstratoExpres);
    map.graphics.clear();

  }

   /*******************filtro pgh*******************************/

      var selectMultiplepgh = document.querySelector('.custom-select-fill-pgh');
      var selectedOptionspgh = selectMultiplepgh.querySelector('.selected-options-pgh');
      var optionsListpgh = selectMultiplepgh.querySelector('.checkbox-list-pgh');

      selectMultiplepgh.addEventListener('click', function () {
        selectMultiplepgh.classList.toggle('active');
        optionsListpgh.style.display = (optionsListpgh.style.display === 'block') ? 'none' : 'block';
      });

      // Cierra la lista desplegable si se hace clic fuera de ella
      document.addEventListener('click', function (event) {
        if (!selectMultiplepgh.contains(event.target)) {
          selectMultiplepgh.classList.remove('active');
          optionsListpgh.style.display = 'none';
        }
      });

      // Manejar clic en las opciones de la lista desplegable
      optionsListpgh.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
          // Actualizar el texto de las opciones seleccionadas
          var selectedOptionsArray = Array.from(optionsListpgh.querySelectorAll('input:checked')).map(function (input) {
            return input.parentElement.textContent.trim(); // Obtener el texto del label
          });
          selectedOptionspgh.textContent = selectedOptionsArray.length > 0 ? selectedOptionsArray.join(', ') : 'Seleccionar';

          // Mostrar en la consola los valores seleccionados (value)
          var valselectpgh=selectedOptionsArray.map(function (label) {
            return Array.from(optionsListpgh.querySelectorAll('label')).find(function (el) {
              return el.textContent.trim() === label;
            }).querySelector('input').value;
          });

          //fil_pgh_cse(valselectpgh);

           const valorVacio_fil = $('#ccdist option:first').val();

	        if ($('#ccdist').val() === valorVacio_fil) {
	           var ubig=0;
	           fil_pgh_cse(valselectpgh,ubig);
	        }
	        else{
	           var ubig=$('#ccdist').val();
	           fil_pgh_cse(valselectpgh,ubig);
	        }

          $("#ReporteInfortabla_pgh_geo").hide();
          // Ocultar la lista desplegable
          selectMultiplepgh.classList.remove('active');
          optionsListpgh.style.display = 'none';
        }
      });

     var layerDefinitions_pgh;

  function fil_pgh_cse(valselectpgh,ubige){

     if(ubige!==0){     
       layerDefinitions_pgh = valselectpgh.length > 0
      ? " co_departamento='"+ ubige.substr(0,2)+"' AND co_provincia='"+ubige.substr(2,2)+"' AND co_distrito='"+ubige.substr(4,2)+"' AND cse IN (" + valselectpgh + ")"
      : "co_departamento='"+ ubige.substr(0,2)+"' AND co_provincia='"+ubige.substr(2,2)+"' AND co_distrito='"+ubige.substr(4,2)+"'";

     }else{

      layerDefinitions_pgh = valselectpgh.length > 0
      ? "cse IN (" + valselect + ")"
      : "1=1"; 

     }   

    featureLayer_PGH.setDefinitionExpression(layerDefinitions_pgh);
    map.graphics.clear();

     // Redraw la capa
    map.removeLayer(featureLayer_PGH);
    map.addLayer(featureLayer_PGH);


  }


  /*******************FILL VENCIMEINOS*////////////////////*/

      var selectMultiplevcto = document.querySelector('.custom-select-fill-vcto');
      var selectedOptionsvcto = selectMultiplevcto.querySelector('.selected-options-vcto');
      var optionsListvcto = selectMultiplevcto.querySelector('.checkbox-list-vcto');

      selectMultiplevcto.addEventListener('click', function () {
        selectMultiplevcto.classList.toggle('active');
        optionsListvcto.style.display = (optionsListvcto.style.display === 'block') ? 'none' : 'block';
      });

      // Cierra la lista desplegable si se hace clic fuera de ella
      document.addEventListener('click', function (event) {
        if (!selectMultiplevcto.contains(event.target)) {
          selectMultiplevcto.classList.remove('active');
          optionsListvcto.style.display = 'none';
        }
      });

      // Manejar clic en las opciones de la lista desplegable
      optionsListvcto.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
          // Actualizar el texto de las opciones seleccionadas
          var selectedOptionsArray = Array.from(optionsListvcto.querySelectorAll('input:checked')).map(function (input) {
            return input.parentElement.textContent.trim(); // Obtener el texto del label
          });
          selectedOptionsvcto.textContent = selectedOptionsArray.length > 0 ? selectedOptionsArray.join(', ') : 'Vencimientos';

          // Mostrar en la consola los valores seleccionados (value)
          var valselectvcto=selectedOptionsArray.map(function (label) {
            return Array.from(optionsListvcto.querySelectorAll('label')).find(function (el) {
              return el.textContent.trim() === label;
            }).querySelector('input').value;
          });

          //fil_vencimientos(valselectvcto);

          const valorVacio_fi = $('#ccdist option:first').val();

	        if ($('#ccdist').val() === valorVacio_fi) {
	           var ubig=0;
	           fil_vencimientos(valselectvcto,ubig);
	        }
	        else{
	           var ubig=$('#ccdist').val();
	           fil_vencimientos(valselectvcto,ubig);
	        }

          $("#ReporteInfortabla_pgh_geo").hide();
          // Ocultar la lista desplegable
          selectMultiplevcto.classList.remove('active');
          optionsListvcto.style.display = 'none';
        }
      });

   var layerDefinitions_pgh_cto;

  function fil_vencimientos(valselectvcto,ubigeo){

    if(ubigeo!==0){     
       layerDefinitions_pgh_cto = valselectvcto.length > 0
      ? " co_departamento='"+ ubigeo.substr(0,2)+"' AND co_provincia='"+ubigeo.substr(2,2)+"' AND co_distrito='"+ubigeo.substr(4,2)+"' AND cod_vcmto IN (" + valselectvcto + ")"
      : "co_departamento='"+ ubigeo.substr(0,2)+"' AND co_provincia='"+ubigeo.substr(2,2)+"' AND co_distrito='"+ubigeo.substr(4,2)+"'";

     }else{

      layerDefinitions_pgh_cto = valselectvcto.length > 0
      ? "cod_vcmto IN (" + valselectvcto + ")"
      : "1=1"; 

     } 
   
    featureLayer_PGH.setDefinitionExpression(layerDefinitions_pgh_cto);
    map.graphics.clear();
  
     // Redraw la capa
    //map.removeLayer(featureLayer_PGH);
   // map.addLayer(featureLayer_PGH);


  }

 /******************transparency********************/

  $('#filtrocapas').change(function() {
        var selectedValue = $(this).val();
      
      if (selectedValue === "2") {
              $("#herramientas_selec").show();
              $("#herramientasselec").hide();
              $("#ReporteInfortabla_estratos").hide();
               map.graphics.clear();          

        } else if(selectedValue === "4"){
           $("#herramientasselec").show();
           $("#herramientas_selec").hide();
           $("#ReporteInfortabla_pgh_geo").hide();
              map.graphics.clear();           
        }
        else {
             $("#herramientasselec").hide();
             $("#herramientas_selec").hide();           
             $("#ReporteInfortabla_estratos").hide();
             $("#ReporteInfortabla_pgh_geo").hide();
             map.graphics.clear();
        }
    });

    /************************************************/
    
 const selectcapas = $('#filtrocapas');
 on(llWidget, 'toggle', function(evt){

     //console.log(evt.layerIndex);

    if(evt.layerIndex==2 && evt.visible==true){
      selectcapas.append("<option value='2'>PGH Georreferenciado</option>");
    }
    else if(evt.layerIndex==2 && evt.visible==false){       
      $('#filtrocapas option[value="2"]').remove();
      $('#filtrocapas').prop('selectedIndex', 0);
      $("#ReporteInfortabla_estratos").hide();
      $("#ReporteInfortabla_pgh_geo").hide();
      $("#herramientas_selec").hide();
      $("#herramientasselec").hide();
       map.graphics.clear();
    }
    else if(evt.layerIndex==4 && evt.subLayerIndex==0 && evt.visible==true){
      const valorAInsertar = '4'; // Valor a insertar en el nuevo option
      const textoAInsertar = 'INEI Estratos'; // Texto a insertar en el nuevo option
    // Verificar si ya existe una opción con el mismo valor
      if ($('#filtrocapas option[value="' + valorAInsertar + '"]').length === 0) {
          // Si no existe, agregamos la nueva opción
          selectcapas.append('<option value="' + valorAInsertar + '">' + textoAInsertar + '</option>');
      }
      //selectcapas.append("<option value='2'>INEI Estratos</option>");
    }
    else if(evt.layerIndex==4 && evt.visible==false){
      $('#filtrocapas option[value="4"]').remove();
      $('#filtrocapas').prop('selectedIndex', 0);
      $("#ReporteInfortabla_estratos").hide();
      $("#ReporteInfortabla_pgh_geo").hide();
      $("#herramientas_selec").hide();
      $("#herramientasselec").hide();
       map.graphics.clear();
    }       

  });

  /*******************************************/       

    var set_graphic = function(params) {

    var layer = new FeatureLayer(params.service, {
                        mode: FeatureLayer.MODE_ONDEMAND,
                        outFields: ["*"]
                      });

                    var query = new Query();
                    query.where = params.where;
                    layer.selectFeatures(query, FeatureLayer.SELECTION_NEW, function(results){
                      if (results.length) {
                          map.infoWindow.hide();
                          map.infoWindow.clearFeatures();
                          map.graphics.clear();
                          var result = results[0]
                          var geometry = results[0].geometry;
                          var wkid = geometry.spatialReference.wkid;
                          var SRtype = "";
                          if (wkid != 4326) {
                            var outSR = new SpatialReference(4326);
                            var geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
                            geometryService.project([geometry], outSR, function (projectedPoints) {
                              var infoTemplate = new InfoTemplate(params.template_title, params.template_body);
                              geometry = projectedPoints[0];
                              if (geometry.type == "polyline") {
                                var center = geometry.getExtent().getCenter();
                              } else {
                                var center = geometry.getCentroid();
                              }
                              symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                  new Color([0,255,254]), 3),new Color([255,255,255,0.1])
                                );
                              var graphic = new Graphic(geometry, symbol, result.attributes, infoTemplate);
                              map.centerAndZoom(center, params.zoom).then(function(){
                                map.infoWindow.setContent(graphic.getContent());
                                map.infoWindow.setTitle(graphic.getTitle());
                                map.infoWindow.show(center);
                              });
                              map.graphics.add(graphic);
                            });
                          } else {
                            
                            var infoTemplate = new InfoTemplate(params.template_title, params.template_body);

                            switch (geometry.type) {
                              case "polygon":
                                  var center = geometry.getCentroid();
                                  symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                      new Color([0,255,254]), 3),new Color([255,255,255,0.1])
                                    );
                                  break;
                              case "point":
                                  var center = geometry;
                                 // symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,0,0]), 1), new Color([0,255,0,0.25]));
                                  var  symbol = new PictureMarkerSymbol({
                                        "url":base_url+"/media/static_base/img/avatars/red-circle.png",
                                        "height":20,
                                        "width":22,
                                           });
                                  break;
                            }
                            var graphic = new Graphic(geometry, symbol, result.attributes, infoTemplate);
                            map.graphics.add(graphic);

                            if(geometry.type==="point"){

                              map.centerAndZoom(center, params.zoom).then(function(){
                              map.infoWindow.setContent(graphic.getContent());
                              map.infoWindow.setTitle(graphic.getTitle());
                              map.infoWindow.show(center);

                            });

                            }else{
                              map.centerAndZoom(center, params.zoom).then(function(){
                               // map.infoWindow.setContent(graphic.getContent());
                              // map.infoWindow.setTitle(graphic.getTitle());
                             // map.infoWindow.show(center);
                              map.infoWindow.clearFeatures();
                              map.graphics.clear();
                            });

                            }                           


                          }
                      }
                  });

                };


   $("#ccdep").change(function() {
       var ccdep=$(this).val();  
             set_graphic({
                    service: global.layer_map+"/7",
                    where: "iddpto = '" + ccdep + "'",
                    template_title: "Ubicación Geográfica",
                    template_body: "<div style='font: 14px Segoe UI'><b>Código :</b> ${iddpto}<br><b>Departamento :</b> ${nombdep}</div>",
                    zoom: 8
                });

                deleteagsisfoh();
                removeFilterAndReload();
                $('#filtroGeo').prop('selectedIndex', 0);
                reset_datos();
                 var filtroGeoSelect = document.getElementById('filtroGeo');
                filtroGeoSelect.disabled = true; 

            });

   $("#ccprov").change(function() {
       var ccprov=$(this).val();
            set_graphic({
                    service: global.layer_map+"/8",
                    where: "idprov = '" + $("#ccdep").val() + ccprov + "'",
                    template_title: "Ubicación Geográfica",
                    template_body: "<div style='font: 14px Segoe UI'><b>Departamento :</b> ${nombdep}<br><b>Código :</b> ${idprov}<br><b>Provincia:</b> ${nombprov}</div>",
                    zoom: 10
                });

            deleteagsisfoh();
            removeFilterAndReload();
            $('#filtroGeo').prop('selectedIndex', 0);
            reset_datos();
            var filtroGeoSelect = document.getElementById('filtroGeo');
                filtroGeoSelect.disabled = true; 
            });
   

    $("#ccdist").change(function() {

      deleteagsisfoh();
       var ccdist=$(this).val();
             set_graphic({
                    service: global.layer_map+"/0",
                    where: "ubigeo = '" + ccdist + "'",
                    template_title: "Ubicación Geográfica",
                    template_body: "<div style='font: 14px Segoe UI'><b>Ubigeo :</b> ${ubigeo}<br><b>Departamento :</b> ${nombdep}<br><b>Provincia :</b> ${nombprov}<br><b>Distrito :</b> ${nombdist}</div>",
                    zoom: 13
                });

            cargar_data_config(ccdist);
            $('#filtroGeo').prop('selectedIndex', 0);

             var query_nivel="UBIGEO='" + ccdist + "'";
             var nivel='3';

             addFilteredLayers(nivel,query_nivel,ccdist);

             var filtroGeoSelect = document.getElementById('filtroGeo');
                filtroGeoSelect.disabled = false; 

            });

     var contex_ccpp_fill="";
                contex_ccpp_fill += '<b>Ubigeo:</b>${ubigeo}<br/>';
                contex_ccpp_fill += '<b>Departamento:</b>${nombdep}<br/>';
                contex_ccpp_fill += '<b>Provincia:</b>${nombprov}<br/>';
                contex_ccpp_fill += '<b>Distrito:</b>${nombdist}<br/>';
                contex_ccpp_fill += '<b>Centro Poblado:</b>${nombccpp}<br/>';
                contex_ccpp_fill += '<b><span class="title-two-inei"> Información INEI Censo 2017</span><br/>';
                contex_ccpp_fill += '<b>Población :</b> <span class="titulo-inei"> ${pob_total_inei:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Hombres </b><i class="fa fa-male fa-2x" aria-hidden="true"></i><span class="titulo-inei">  ${pob_hombre_inei:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Mujeres </b><i class="fa fa-female fa-2x" aria-hidden="true"></i><span class="titulo-inei"> ${pob_mujer_inei:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Hogares </b><i class="fa fa-home fa-2x" aria-hidden="true"></i><span class="titulo-inei"> ${total_hogares_inei:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b><span class="title-two-pgh"> Información PGH Actual</span><br/>';
                contex_ccpp_fill += '<b>Población : </b><span class="titulo-pgh"> ${pob_total_pgh:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Hombres </b><i class="fa fa-male fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${pob_hombre_pgh:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Mujeres </b><i class="fa fa-female fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${pob_mujer_pgh:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Hogares </b><i class="fa fa-home fa-2x" aria-hidden="true"></i><span class="titulo-pgh"> ${total_hogares_pgh:NumberFormat} </span><br/>';
                contex_ccpp_fill += '<b>Pob. Mayor a 18 años:</b><span class="titulo-pgh"> ${pob_mayor_18:NumberFormat} </span><br/>';


     $("#ccpoblado").change(function() {
       var ccpoblado=$(this).val();
             set_graphic({
                    service: global.service_ccpp,
                    where: "idccpp = '" + ccpoblado + "'",
                    template_title: "CCPP:${nombccpp}",                   
                    template_body: contex_ccpp_fill,
                    zoom: 16
                });
            });


     $(document).on("click", ".chck_usser_65", function () {
         var dni = $('input[name=chck_usser_65]:checked').val();  

          set_graphic({
                    service: global.url_P65,
                    where: "num_doi = '" + dni + "'",
                    template_title: "Ubicación Usuario",
                    template_body: "<div style='font: 14px Segoe UI'><b>DNI :</b> ${num_doi}<br><b>NOMBRES:</b> ${nomb}<br><b>APELLIDOS :</b> ${ap_pat}<br></div>",
                    zoom: 18
                });
         
        });

      $(document).on("click", ".chck_usser_ag", function () {
         var id_geo = $('input[name=chck_usser_ag]:checked').val();  

          set_graphic({
                    service: global.url_agsisfoh,
                    where: "id_geo = " + id_geo + "",
                    template_title: "Ubicación ",
                    template_body: "<div style='font: 14px Segoe UI'><b>S100 :</b> ${s100}<br><b>FECHA_EMP:</b>${fecha_empadronamiento:DateFormat(selector: 'date', fullYear: true)}<br></div>",
                    zoom: 18
                });
         
        });

     

     on(dom.byId("btn-indentity"), 'click', function(evt){  
          evt.preventDefault();

                if ($("#btn-indentity").hasClass("active-btn")){

                    $(".active-btn").removeClass('active-btn');

                       map.infoWindow.hide();                       
                   
                     if (global.mapOnClick_connect_z!==null) {

                         global.mapOnClick_connect_z.remove(); 

                         }

                       }
                    else{    

                          $(".active-btn").not($(this).addClass('active-btn')).removeClass('active-btn');
                      
                         if ($("#btn-indentity").hasClass("active-btn") && global.geo_zoom>13 && global.geo_zoom <= 18) {

                          
                            global.mapOnClick_connect_z = map.on("click", executeIdentifyTask_z);

                          }
                         

                    }                
                
           });

      function executeIdentifyTask_z (event) {

          identifyTask = new IdentifyTask(global.layer_map);
          identifyParams = new IdentifyParameters();
          identifyParams.tolerance = 1;
          identifyParams.returnGeometry = true;
          identifyParams.layerIds = [2];
          identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_VISIBLE;
          identifyParams.width = map.width;
          identifyParams.height = map.height; 
          identifyParams.geometry = event.mapPoint;
          identifyParams.mapExtent = map.extent;

          var deferred = identifyTask
            .execute(identifyParams)
            .addCallback(function (response) {
              return arrayUtils.map(response, function (result) {
                    var feature = result.feature;
                     var codsufzonas = feature.attributes.SUFZONA;
                     var cadena_ccpp = feature.attributes.CODCCPP;
                     var ubigeo = feature.attributes.UBIGEO;

                     const valorVacio = $('#ccdist option:first').val();
                     
                    if ($('#ccdist').val() === ubigeo) {

                     var cod_zona = feature.attributes.COD_ZONA;
                     var result_cod_suf_zona=feature.attributes.SUFIJO_Z;                     
                     var codccpp = cadena_ccpp.substr(-4);
                     var url_download= base_url+"media/Mapas/"+ubigeo+"/Mapas/Zona_Censal_"+cod_zona+".pdf";

                    var taxParcelTemplate = new InfoTemplate("IDENTIFICACIÓN DE ZONA", "<table width='100%' height='100%' border='0'><tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>DEPARTAMENTO</td></tr><tr><td align='left' width='20%'><input name='textfield' type='text'   value='${CCDD}' size='2' maxlength='2' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_DEP}' readonly='readonly'/></td></tr><tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>PROVINCIA</td></tr><tr><td align='left' width='20%'><input name='textfield' type='text'   value='${CCPP}'  size='2' maxlength='2' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_PROV}' readonly='readonly'/></td></tr>\
                    <tr><td align='left' width='20%'>COD</td><td colspan='2' align='left' width='80%'>DISTRITO</td></tr>\
                    <tr><td align='left' width='20%'><input name='textfield' type='text' size='2' maxlength='2'  value='${CCDI}' readonly='readonly' /></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_DIS}' readonly='readonly' /></td></tr>  <tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>CENTRO POBLADO</td></tr> <tr><td align='left' width='20%'><input name='textfield' type='text'  size='2' value='" + codccpp + "' maxlength='4' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_CCPP}' readonly='readonly' /></td></tr> <tr><td align='left' width='33%'>ZONA</td><td align='left' width='33%'>SUFZONA</td></tr>\
                    <tr><td align='left' width='33%'><input name='textfield' type='text'  size='4' value='${CODZONA}' maxlength='4' readonly='readonly'/></td><td align='left' width='33%'><input name='textfield' type='text'  size='4' value='" + result_cod_suf_zona + "' maxlength='4' readonly='readonly'/></td></tr>\
                    <tr><td align='left' width='33%'></td><td align='left' width='34%'>Descargar Mapa</td></tr><tr><td align='left' width='33%'></td>\
                    <td align='left' width='34%'><a download='Zona_Censal_"+cod_zona+".pdf' href='"+url_download+"'>DESCARGAR ZONA</a></td></tr> \
                    <tr></tr></table>");
                     feature.setInfoTemplate(taxParcelTemplate);
                        }
                      else if ($('#ccdist').val() === valorVacio) {

                     var cod_zona = feature.attributes.COD_ZONA;
                     var result_cod_suf_zona=feature.attributes.SUFIJO_Z;                     
                     var codccpp = cadena_ccpp.substr(-4);
                     var url_download= base_url+"media/Mapas/"+ubigeo+"/Mapas/Zona_Censal_"+cod_zona+".pdf";

                    var taxParcelTemplate = new InfoTemplate("IDENTIFICACIÓN DE ZONA", "<table width='100%' height='100%' border='0'><tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>DEPARTAMENTO</td></tr><tr><td align='left' width='20%'><input name='textfield' type='text'   value='${CCDD}' size='2' maxlength='2' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_DEP}' readonly='readonly'/></td></tr><tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>PROVINCIA</td></tr><tr><td align='left' width='20%'><input name='textfield' type='text'   value='${CCPP}'  size='2' maxlength='2' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_PROV}' readonly='readonly'/></td></tr>\
                    <tr><td align='left' width='20%'>COD</td><td colspan='2' align='left' width='80%'>DISTRITO</td></tr>\
                    <tr><td align='left' width='20%'><input name='textfield' type='text' size='2' maxlength='2'  value='${CCDI}' readonly='readonly' /></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_DIS}' readonly='readonly' /></td></tr>  <tr><td align='left' width='20%'>COD</td>\
                    <td colspan='2' align='left' width='80%'>CENTRO POBLADO</td></tr> <tr><td align='left' width='20%'><input name='textfield' type='text'  size='2' value='" + codccpp + "' maxlength='4' readonly='readonly'/></td>\
                    <td colspan='2' align='left' width='80%'><input name='textfield' type='text'   value='${NOM_CCPP}' readonly='readonly' /></td></tr> <tr><td align='left' width='33%'>ZONA</td><td align='left' width='33%'>SUFZONA</td></tr>\
                    <tr><td align='left' width='33%'><input name='textfield' type='text'  size='4' value='${CODZONA}' maxlength='4' readonly='readonly'/></td><td align='left' width='33%'><input name='textfield' type='text'  size='4' value='" + result_cod_suf_zona + "' maxlength='4' readonly='readonly'/></td></tr>\
                    <tr><td align='left' width='33%'></td><td align='left' width='34%'>Descargar Mapa</td></tr><tr><td align='left' width='33%'></td>\
                    <td align='left' width='34%'><a download='Zona_Censal_"+cod_zona+".pdf' href='"+url_download+"'>DESCARGAR ZONA</a></td></tr> \
                    <tr></tr></table>");
                     feature.setInfoTemplate(taxParcelTemplate);
                        }
                        else{
                       var taxParcelTemplate = new InfoTemplate("IDENTIFICACIÓN DE ZONA","Sin Información");
                       feature.setInfoTemplate(taxParcelTemplate);
                       map.infoWindow.hide();
                       map.graphics.clear();
                       map.infoWindow.clearFeatures();

                        }  

                    return feature;
              });
            });

          map.infoWindow.setFeatures([deferred]);
          map.infoWindow.show(event.mapPoint);
    }

    /********************************************************/

      function clear_map(){

                      //map.graphics.remove(graphic);
                       map.infoWindow.hide();
                       map.graphics.clear();
                       map.infoWindow.clearFeatures();
                       
                  }


       /*================ Activar Servicios ===================*/
    
     $('input[type="checkbox"]').on('change', function() {
      var cargar_capa = $(this).val();
      var selec='0';    
      const valorVacio = $('#ccdist option:first').val();
        // Verificar si el valor vacío está seleccionado
        if ($('#ccdist').val() === valorVacio) {
           var ubig=0;
        }
        else{
           var ubig=$('#ccdist').val();
        }

      if ($(this).prop("checked")) {
        switch (cargar_capa) {
          case "P65":
            $('#opciones_datos_p65').show();
            activarcluster(ubig);
            break;
          case "PCM":
            $('#leyen_cuna_mas').show();
            cargarcunamas(ubig);
            break;
          case "PJuntos":
            $('#leyen_PJuntos').show();
            cargarjuntos(ubig);
            break;
         
        }
      } else {
        switch (cargar_capa) {
          case "P65":
            $('#opciones_datos_p65').hide();
            $('#botonesHerram').hide();
             desactivar_capa_p65();
             clearLayer();
            break;
          case "PCM":
            $('#leyen_cuna_mas').hide();
            deletecunamas();
            break;
          case "PJuntos":
            $('#leyen_PJuntos').hide();
            deletejuntos();
            break;
          
        }
      }
    });

    


     function cargarcunamas(ubigs){

       var infoTemplate = new InfoTemplate("CODIGO LOCAL: ${CODIGO_LOCAL}", "<b>Nombre Local:</b>${NOMBRE_LOCAL}<br/><b>Tipo LOCAL:</b>${TIPO_LOCAL}<br/><b>Direccion:</b>${DIRECCION_LOCAL}<br/><b>Usuarios:</b>${USUARIOS}<br/>");          
       featureLayer_cunamas = new FeatureLayer(global.url_h_cunamas,
              {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"],
                infoTemplate: infoTemplate
                //opacity:0.1
              });
        if (ubigs!==0) {
          featureLayer_cunamas.setDefinitionExpression("UBIGEO='"+ubigs+"'");
        }

         map.addLayer(featureLayer_cunamas);
     }

     function deletecunamas(){

      map.removeLayer(featureLayer_cunamas);
     }

    function cargarjuntos(ubigs){

       var infoTemplate = new InfoTemplate("DNI: ${num_doi}", "<b>Apellido Paterno:</b>${ap_pat}<br/><b>Apellido Materno:</b>${ap_mat}<br/><b>Nombres:</b>${nomb}<br/>");          
       featureLayer_juntos = new FeatureLayer(global.url_h_juntos,
              {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"],
                infoTemplate: infoTemplate
                //opacity:0.1
              });
       if (ubigs!==0) {
        featureLayer_juntos.setDefinitionExpression("UBIGEO='"+ubigs+"'");
       }

        map.addLayer(featureLayer_juntos);

     }
    function deletejuntos(){

       map.removeLayer(featureLayer_juntos);

    }
   


      function formatDatef(timestamp) {
        var date = new Date(timestamp);
        var mm = date.getMonth() + 1; // Mes (0-11)
        var dd = date.getDate(); // Día del mes
        var yyyy = date.getFullYear(); // Año
        // Asegurarse de que mm y dd tengan siempre dos dígitos
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        return mm + '/' + dd + '/' + yyyy;
        }


      var markerSymbol_ag = new esri.symbol.SimpleMarkerSymbol(
              esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE,  // Establece el estilo como cuadrado
              20,  // Establece el tamaño en 20
              new esri.symbol.SimpleLineSymbol(
                esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([0, 255, 255]), 1),  // Establece el color del borde en turquesa
              new esri.Color([0, 0, 255, 0])  // Establece el color del fondo como azul con una opacidad de 0 (transparente)
            );

    
    var featureLayer_agsisfoh;

    function cargaragsisfoh(sele,ubig,selectedDato){ 

      var definid_query="";
      var text="";
      document.getElementById("dato-valor").textContent ="";      
     
         featureLayer_agsisfoh = new FeatureLayer(global.url_agsisfoh,
              {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"]
                //infoTemplate: infoTemplate_agsis
                //opacity:0.55
              });

              if(ubig){
                definid_query = "UBIGEO='" + ubig + "' ";
              }
              else {
                 definid_query = " ";
              }             
            
            if (sele !== '0') {
              definid_query += " AND  CO_INDICADOR = " + sele + "";
            } else {
              definid_query += " ";
            }

         var seleText = {
                  '0': 'Todos',// ----
                  '1': 'Hogares en PGH',// fucsia 
                  '2': 'CPP',//-----
                  '3': 'INDOCUMENTADOS',//---
                  '4': 'RV200 Georreferenciados',// Verde Brillante
                  '5': 'HOG CSE Menor A 6 Meses',// Azul como esta 
                  '9': 'Solo Georreferenciados'// Rojo
                };
          text = seleText[sele] || 'Valor no definido';

          featureLayer_agsisfoh.setDefinitionExpression(definid_query);
          document.getElementById("dato-titulo").textContent = text;
          document.getElementById("dato-valor").textContent = selectedDato;

          // Agrega un evento click al featureLayer
          featureLayer_agsisfoh.on("click", function (event) {

            _generate_info_template(event);
          
          });

           //console.log(color)

          var colorPorValor = {
            '0': new dojo.Color([49, 1, 162, 0.9]),  // fucsia
            '1': new dojo.Color([247, 0, 252, 0.9]),  // fucsia
            '2': new dojo.Color([13, 22, 107, 0.9]),  // azul brillante
            '3': new dojo.Color([0, 247, 247, 0.9]),  // turquesa
            '4': new dojo.Color([0, 255, 0, 0.9]),  // Verde
            '5': new dojo.Color([19, 77, 114, 0.9]),   // Azul
            '9': new dojo.Color([247, 0, 22, 0.9])   // Rojo
          };

           color = colorPorValor[sele] || new dojo.Color([255, 255, 255, 0.5]);

         // var color = new dojo.Color([247, 0, 252, 0.9]);

          var symbol = new esri.symbol.SimpleMarkerSymbol();
          symbol.style = esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE;
          symbol.setSize(8); symbol.setColor(color);
          var renderer = new esri.renderer.SimpleRenderer(symbol);

          featureLayer_agsisfoh.setRenderer(renderer);

          map.addLayer(featureLayer_agsisfoh);        
          map.reorderLayer(featureLayer_agsisfoh, 2);

      
     }

     

    
    function _generate_info_template(event){

            map.infoWindow.clearFeatures();
            map.graphics.clear();
            map.graphics.remove();
            map.infoWindow.hide();
            //var geometry = event.graphic.geometry;
            // Obtén la información del atributo del elemento gráfico seleccionado
            var attributes = event.graphic.attributes;
            var graphics_ag = new Graphic(event.graphic.geometry,markerSymbol_ag);
               map.graphics.add(graphics_ag);

            var EMPADRONADOR = attributes.empadronador;
            var s100 = attributes.s100;

              let texto_recort = attributes.s100;
              let extraido_rec = ""; 
              let resultado_recort = texto_recort.match(/^(.*?)\s-\s/);
              if (resultado_recort && resultado_recort.length > 1) {
                  extraido_rec = resultado_recort[1]; 
              } else {
                  extraido_rec = ""; 
              }

            var ubigeo_img = "_"+attributes.ubigeo;
            var FECHA_EMPAD = formatDatef(attributes.fecha_empadronamiento);

            // Verifica si el atributo 'FOTO_1' existe en los atributos
            if (attributes && attributes.foto_1) {

               var foto_1 = attributes.foto_1;
               var url_get_fotod = base_url + "index.php/App/get_fotos_du/"+foto_1+"/"+ubigeo_img;

             $.getJSON(url_get_fotod, function(data) {

                 imagenElement = 'data:image/png;base64,' + data.imagen; 

                 map.infoWindow.setTitle('<b>S100:</b> ' + extraido_rec);
                  map.infoWindow.setContent(
                  '<b>Empadronador:</b> ' + EMPADRONADOR +'<br/>'+
                  '<b>Fecha :</b> ' + FECHA_EMPAD +'<br/>'+
                  '<div class="imges" id="idimages">' +
                  '<span><img width="98%" height="98%" src="' + imagenElement + '"  /></span>' +
                  '</div>'
                   );
                  map.infoWindow.show(event.mapPoint);
              });

              var closeButton = document.querySelector(".titleButton.close");
              if (closeButton) {
                closeButton.addEventListener("click", function () {
                   map.infoWindow.clearFeatures();
                   map.graphics.clear();
                   map.graphics.remove();
                   map.infoWindow.hide();
                });
              }
              
            } else {
              console.log("El campo foto_1 no existe en los atributos.");
            }

     }


    
    function deleteagsisfoh(){
      if(featureLayer_agsisfoh){
        map.removeLayer(featureLayer_agsisfoh);
        }  
     }

   

        var selectElement = document.getElementById("filtroGeo");
        // Agrega un evento 'change' al elemento select
        selectElement.addEventListener("change", function() {
            var selectedValue = selectElement.value;
            var selectedDato = selectElement.dato;

            var selectedOption = selectElement.options[selectElement.selectedIndex];
            var datoValue = selectedOption.getAttribute("dato");
            
            deleteagsisfoh();
            const valorVacio = $('#ccdist option:first').val();
            if ($('#ccdist').val() !== valorVacio) {
              var ubig=$('#ccdist').val();
              cargaragsisfoh(selectedValue, ubig ,datoValue);
            }
           
         });

      

     ////////////////////// AGSisfoh Geo Report///////////////////////////////

      // Inicialización de la barra de herramientas de selección

      var graphics_selc_ag;

        var my_load_ag = map.on("load", function () {
            _initSelectToolbar_ag(featureLayer_ag, Draw.POLYGON);
          });

          var fieldsSelectionSymbol_ag = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([0,255,254]), 3),
            new Color([255, 255, 0, 0.1])
          );

          featureLayer_ag = new FeatureLayer(global.url_agsisfoh, {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"],
            opacity: 0.5,
          });
          featureLayer_ag.setSelectionSymbol(fieldsSelectionSymbol_ag);
          featureLayer_ag.on("selection-complete", resul_list_ag);
          featureLayer_ag.on("selection-clear", function () {
            dom.byId('messages').innerHTML = "<i>No Selected Fields</i>";
          });

          function _initSelectToolbar_ag(layer, selectionType) {
            global.selectionToolbar_ag = new Draw(map);
            var selectQuery = new Query();
 
          on(global.selectionToolbar_ag, "DrawEnd", function (geometry) {
              global.selectionToolbar_ag.deactivate();
              selectQuery.geometry = geometry;
              featureLayer_ag.selectFeatures(selectQuery, FeatureLayer.SELECTION_NEW);

               graphics_selc_ag = new Graphic(geometry,fieldsSelectionSymbol_ag);
               map.graphics.add(graphics_selc_ag);
            });

            on(dom.byId("ag_polygons"), "click", function () {
              setDefinitionAndActivateSelection(Draw.POLYGON);
              if(graphics_selc_ag){
                map.graphics.remove(graphics_selc_ag);
              }       
            });

            on(dom.byId("ag_freehands"), "click", function () {
              setDefinitionAndActivateSelection(Draw.FREEHAND_POLYGON);
              if(graphics_selc_ag){
                map.graphics.remove(graphics_selc_ag);
              }       
            });

            on(dom.byId("ag_circle"), "click", function () {

              setDefinitionAndActivateSelection(Draw.CIRCLE);
              if(graphics_selc_ag){
                map.graphics.remove(graphics_selc_ag);
              }       
            });

           on(dom.byId("ag_clear"), "click", function () {
              $("#datatable_AGSisfoh").hide();
              featureLayer_ag.clearSelection();
              deleteagsisfoh();
              $('#filtroGeo').prop('selectedIndex', 0);
              /*var valor = $('#dataTodoInput').val();
              document.getElementById("dato-valor").textContent = valor;*/

              const valorVacio = $('#ccdist option:first').val();
              if ($('#ccdist').val() !== valorVacio) {
               var ubig=$('#ccdist').val();
              cargar_data_total(ubig);
              }else{
                cargar_data_total(0);
              }              

            });

            
            function desactivar_capa_ag(){
              global.selectionToolbar_ag.deactivate();
              //featureLayer.setVisibility(false);
            }

            function setDefinitionAndActivateSelection(selectionType) {

              var selectElem = document.getElementById("filtroGeo").value;  
              var valorVa = $('#ccdist option:first').val();

              if ($('#ccdist').val() !== valorVa) {
               var ubig=$('#ccdist').val();
                 def_query = "UBIGEO='" + ubig + "' ";
              }else{
                def_query = " ";
              }     

              if (selectElem !== '0') {
                def_query += " AND CO_INDICADOR = " + selectElem + "";
              } else {
                def_query += " ";
              }

              featureLayer_ag.setDefinitionExpression(def_query);
              global.selectionToolbar_ag.activate(selectionType);
              $("#datatable_AGSisfoh").hide();
              featureLayer_ag.clearSelection();
            }
          }

          function resul_list_ag(event) {

            $("#ReporteInfortabla_AGsisfoh").show();
            $("#datatable_AGSisfoh").find("tbody tr").remove();
            $("#datatable_AGSisfoh").show();

            var i = 0;
            const opcionesDeFormato = {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            };

            let contador_re = 0;
             event.features.forEach(function (feature) { 

              contador_re++;

              let texto_recort = feature.attributes.s100;
              let extraido_rec = ""; 
              let resultado_recort = texto_recort.match(/^(.*?)\s-\s/);
              if (resultado_recort && resultado_recort.length > 1) {
                  extraido_rec = resultado_recort[1]; 
              } else {
                  extraido_rec = ""; 
              }
              const fechaCreada1 = new Date(feature.attributes.fecha_empadronamiento);
              const fechaCreada2 = new Date(feature.attributes.fecha_sincronizacion);
              const fechaFormateada1 = fechaCreada1.toLocaleDateString('es-PE', opcionesDeFormato);
              const fechaFormateada2 = fechaCreada2.toLocaleDateString('es-PE', opcionesDeFormato);

              i++;
              var row = '<tr role="row" class="odd">' +
                        '<td>' + i + '</td>' +
                        '<td class="sorting_1"><input type="radio" class="chck_usser_ag" name="chck_usser_ag" value=' + feature.attributes.id_geo + '></td>' +
                        '<td>' + feature.attributes.empadronador + '</td>' +
                        '<td>' + feature.attributes.s100 + '</td>' +
                        '<td>' + fechaFormateada1 + '</td>' +
                        '<td>' + fechaFormateada2 + '</td>' +
                        '</tr>';
              
              $("#datatable_AGSisfoh").append(row);
            });

            document.getElementById("dato-cantidad-selec").textContent = contador_re;
  
          }

        $(".close-table-ag").click(function (e) {
          e.preventDefault();
          var table; 
          table=$('#datatable_AGSisfoh').DataTable();
           $('#dniJefe').val("");
           table.destroy();
           $("#ReporteInfortabla_AGsisfoh").hide();
           $("#ReporteInfortabla_AGsisfoh").css("display", "none");

           if(graphics_selc_ag){
                map.graphics.remove(graphics_selc_ag);
            } 
                     
       });



        ///////////////////////Reporte Estratos ///////////////////////////////////
       
        var my_load_estratos = map.on("load", function () {
          _initSelectToolbar_st(featureLayer_estratos, Draw.POLYGON);
        });

        var fieldsSelectionSymbol_e = new SimpleFillSymbol(
          SimpleFillSymbol.STYLE_SOLID,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([15, 215, 255]), 2),
          new Color([125, 12, 125, 0.35])
        );

        var url_h_estratos = global.url_estratos_inei + "/0";

        featureLayer_estratos = new FeatureLayer(url_h_estratos, {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          opacity: 0.1
        });

        featureLayer_estratos.on("selection-complete", resul_list_estratos);
        featureLayer_estratos.on("selection-clear", function () {
          dom.byId('messages_datos').innerHTML = "<i>No Selected Fields</i>";
        });


          function _initSelectToolbar_st(layer, selectionType) {
            global.selectionToolbar_estrs = new Draw(map);
            var selectQuery = new Query();
 
          on(global.selectionToolbar_estrs, "DrawEnd", function (geometry) {
              global.selectionToolbar_estrs.deactivate();
              selectQuery.geometry = geometry;
              featureLayer_estratos.selectFeatures(selectQuery, FeatureLayer.SELECTION_NEW);

            });

            on(dom.byId("btn_polygons"), "click", function () {
                setDefinitionAndActivateSelection_st(Draw.POLYGON);
                $("#datatable_estratos").hide();
                map.graphics.clear();    
            });

            on(dom.byId("btn_freehands"), "click", function () {
                setDefinitionAndActivateSelection_st(Draw.FREEHAND_POLYGON);
               $("#datatable_estratos").hide();
                map.graphics.clear();     
            });

            on(dom.byId("btn_circle"), "click", function () {
                setDefinitionAndActivateSelection_st(Draw.CIRCLE);
                $("#datatable_estratos").hide();
                map.graphics.clear();  
            });

           on(dom.byId("btn_clear"), "click", function () {
               $("#datatable_estratos").hide();
               $("#messages_datos").hide();
               $("#ReporteInfortabla_estratos").hide();
               map.graphics.clear();

            });
                       
            function setDefinitionAndActivateSelection_st(selectionType) {

              var valorV = $('#ccdist option:first').val();
              if ($('#ccdist').val() !== valorV) {
               var ubig=$('#ccdist').val();
                 defin_query = "UBIGEO='" + ubig + "' ";
              }else{
                defin_query = " ";
              }              

              featureLayer_estratos.setDefinitionExpression(defin_query);
              global.selectionToolbar_estrs.activate(selectionType);
               $("#ReporteInfortabla_estratos").hide();
              featureLayer_estratos.clearSelection();
            }
          }       

        // Función para mostrar los resultados en la tabla
        function resul_list_estratos(event) {

           $("#ReporteInfortabla_estratos").show();
           $("#datatable_estratos").find("tbody tr").remove();
           $("#datatable_estratos").show();
           var table = $("#datatable_estratos");
           var totals = {
            1: { pers: 0, hogar: 0, mznas: 0 },
            2: { pers: 0, hogar: 0, mznas: 0 },
            3: { pers: 0, hogar: 0, mznas: 0 },
            4: { pers: 0, hogar: 0, mznas: 0 },
            5: { pers: 0, hogar: 0, mznas: 0 },
          };

          event.features.forEach(function (feature) {
            var estrato = feature.attributes.ESTRATO;
            totals[estrato].pers += feature.attributes.POBLACION;
            totals[estrato].hogar += feature.attributes.HOGAR;
            totals[estrato].mznas += 1;

            var graphics_mzna_estrat = new Graphic(feature.geometry, fieldsSelectionSymbol_e);
            map.graphics.add(graphics_mzna_estrat);
          });

          var total_pers = 0;
          var total_hogars = 0;
          var total_mznas = 0;

          for (var i = 1; i <= 5; i++) {
            var estratoTotals = totals[i];
            table.append(
              "<tr><td><div class='cuadrado" + i + "'></div></td><td>" + estratoTotals.pers + "</td><td>" + estratoTotals.hogar + "</td><td>" +
                estratoTotals.mznas + "</td></tr>"
            );

            total_pers += estratoTotals.pers;
            total_hogars += estratoTotals.hogar;
            total_mznas += estratoTotals.mznas;
          }

          table.append(
            "<tr><td>Total</td><td>" + total_pers + "</td><td>" + total_hogars + "</td><td>" + total_mznas + "</td></tr>"
          );
        }

    ///////////////////////Reporte pgh georreferenciado ///////////////////////////////////

       var fieldsSelectionSymbol_pgh_geo = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([0,255,254]), 3),
            new Color([255, 255, 0, 0.1])
          );
       var graphics_selc_pgh_geo;

        var my_load_pgh_geo = map.on("load", function () {
          _initSelectToolbar_pgh_geo(featureLayer_PGH, Draw.POLYGON);
        });

        featureLayer_PGH.on("selection-complete", resul_list_pgh_geo);
        featureLayer_PGH.on("selection-clear", function () {
          dom.byId('messages_datos').innerHTML = "<i>No Selected Fields</i>";
        });

        // Función para inicializar la barra de herramientas de selección
        function _initSelectToolbar_pgh_geo(layer, selectionType) {
          global.selectionToolbar_pgh_geo = new Draw(map);
          var selectQuery = new Query();

          on(global.selectionToolbar_pgh_geo, "DrawEnd", function (geometry) {
            global.selectionToolbar_pgh_geo.deactivate();
            selectQuery.geometry = geometry;
            layer.selectFeatures(selectQuery, FeatureLayer.SELECTION_NEW);

             graphics_selc_pgh_geo = new Graphic(geometry,fieldsSelectionSymbol_pgh_geo);
             map.graphics.add(graphics_selc_pgh_geo);

          });

          // Manejadores de eventos para los botones
          on(dom.byId("btns_polygons"), "click", function () {
            global.selectionToolbar_pgh_geo.activate(Draw.POLYGON);
            $("#datatable_pgh_geo").hide();
            map.graphics.clear();
          });

          on(dom.byId("btns_freehands"), "click", function () {
            global.selectionToolbar_pgh_geo.activate(Draw.FREEHAND_POLYGON);
            $("#datatable_pgh_geo").hide();
            map.graphics.clear();
          });

          on(dom.byId("btns_circle"), "click", function () {
            global.selectionToolbar_pgh_geo.activate(Draw.CIRCLE);
            $("#datatable_pgh_geo").hide();
            map.graphics.clear();
          });

          on(dom.byId("btns_clear"), "click", function () {
            $("#datatable_pgh_geo").hide();
            $("#mess_datos").hide();
            $("#ReporteInfortabla_pgh_geo").hide();
            map.graphics.clear();

          });
        }

        // Función para mostrar los resultados en la tabla
        function resul_list_pgh_geo(event) {

        $("#ReporteInfortabla_pgh_geo, #datatable_pgh_geo").show();
        $("#datatable_pgh_geo tbody tr").remove();
        var table = $("#datatable_pgh_geo");

        // Variables para el recuento
        var total_nopobre = 0;
        var total_pobre = 0;
        var total_pobreextremo = 0;

        // Iterar sobre las características (features)
        event.features.forEach(function (feature) {
          var cse = feature.attributes.cse;
          // Incrementar los contadores según el valor de cse
          if (cse == 1) {
            total_pobreextremo++;
          } else if (cse == 2) {
            total_pobre++;
          } else if (cse == 3) {
            total_nopobre++;
          }
        });

        // Calcular el total
        var total_todos = total_pobre + total_nopobre + total_pobreextremo;

        table.append(
            "<tr><td>" + total_todos + "</td><td>" +  total_nopobre+ " <div class='circle3'></div></td><td>" + total_pobre + " <div class='circle2'></div></td><td>" + total_pobreextremo + " <div class='circle1'></div></td></tr>"
          );        

      }

      //////////////////////// pension 65///////////////////////////////////


      //////////////////////// pension 65///////////////////////////////////

       /*================ cluster ==================*/

var contex='';
var infoTemplate_cluster = new InfoTemplate();

                  infoTemplate_cluster.setTitle("DNI: ${num_doi}");
                  contex += '<div><b>Nombres y Apellidos:</b>${nomb} ${ap_pat} ${ap_mat}<br/>';           
                  contex += '</div>';

                  infoTemplate_cluster.setContent(contex);

  var  defaultSym = new PictureMarkerSymbol({
                                        "url":base_url+"/media/static_base/img/avatars/xda.png",
                                        "height":30,
                                        "width":30,
                                           });

 var  selectedSym = new PictureMarkerSymbol({
                                        "url":base_url+"/media/static_base/img/avatars/xda.png",
                                        "height":30,
                                        "width":30,
                                           });

 function activarcluster(ubig){

   addClusterLayer(ubig);
   addClusterLayerEvents();

  $('#datos_load_p65').show();
  function addClusterLayer(ubig) {
            var renderer,
                small,
                medium,
                large,
                xlarge;

                if (ubig!==0) {
                 quer="ubigeo='"+ubig+"'";
                }
                else{
                  quer="1=1";

                }

            // Add cluster renderer
           clusterLayer = new ClusterFeatureLayer({
                "url": global.url_P65,
                "distance": 150,
                "id": "clusters",
                "labelColor": "#fff",
                "resolution": map.extent.getWidth() / map.width,
                "singleSymbol": defaultSym,
                "singleTemplate": infoTemplate_cluster,
                "useDefaultSymbol": false,
                "zoomOnClick": true,
                "showSingles": true,
                "objectIdField": "ESRI_OID",
                where:quer,
                outFields: ["*"]
            });

            renderer = new ClassBreaksRenderer(defaultSym, "clusterCount");

            // Red Clusters
            small = new SimpleMarkerSymbol("circle", 25,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([40, 116, 166,0.5]), 15),
                        new Color([40, 116, 166,0.75]));
            medium = new SimpleMarkerSymbol("circle", 50,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([46, 134, 193,0.5]), 15),
                        new Color([46, 134, 193,0.75]));
            large = new SimpleMarkerSymbol("circle", 75,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([52, 152, 219,0.5]), 15),
                        new Color([52, 152, 219,0.75]));
            xlarge = new SimpleMarkerSymbol("circle", 100,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([93, 173, 226,0.5]), 15),
                        new Color([93, 173, 226,0.75]));

            // Break values - can adjust easily
            renderer.addBreak(2, 50, small);
            renderer.addBreak(50, 250, medium);
            renderer.addBreak(250, 1000, large);
            renderer.addBreak(1000, 50000, xlarge);

            // Providing a ClassBreakRenderer is also optional
            clusterLayer.setRenderer(renderer);
            map.addLayer(clusterLayer);
        }


         function addSelectedFeature() {
            var selIndex = map.infoWindow.selectedIndex,
                selFeature;
            if (selIndex !== -1) {
                selFeature = map.infoWindow.features[selIndex];
                // Remove old feature first
                removeSelectedFeature();
                // Add new graphic
                map.infoWindow._lastSelected = new Graphic(selFeature.toJson());
                //map.infoWindow._lastSelected.setSymbol(selectedSym);
                map.graphics.add(map.infoWindow._lastSelected);
            }
        }
         function removeSelectedFeature() {
            if (map.infoWindow._lastSelected) {
                map.graphics.remove(map.infoWindow._lastSelected);
                map.infoWindow._lastSelected = null;
            }
        }

         function setActiveClusterOpacity(elem, fillOpacity, strokeOpacity) {
            var textElm;
            if (elem) {
                elem.setAttribute("fill-opacity", fillOpacity);
                elem.setAttribute("stroke-opacity", strokeOpacity);
                // Overide inherited properties for the text in the circle
                textElm = elem.nextElementSibling;
                if (textElm && textElm.nodeName === "text") {
                    textElm.setAttribute("fill-opacity", 1);
                }
            }
        }

        function onClustersShown(clusters) {
            var  i = 0,
                extent;
            if (map.infoWindow.isShowing && map.infoWindow._lastSelected) {
                for (i; i < clusters.length; i++) {
                    if (clusters[i].attributes.clusterCount > 1) {
                        extent = clusterLayer._getClusterExtent(clusters[i]);
                        if (extent.contains(map.infoWindow._lastSelected.geometry)) {
                            map.infoWindow.hide();
                            break;
                        }
                    }
                }
            }

            $('#datos_load_p65').hide();
            $('#botonesHerram').show(); 
        }

         function addClusterLayerEvents() {
            // Mouse over events
            clusterLayer.on("mouse-over", onMouseOverCluster);
            clusterLayer.on("mouse-out", onMouseOutCluster);
            // Clusters drawn
            clusterLayer.on("clusters-shown", onClustersShown);
        }

        // Save the last selected graphic so we can highlight it
        map.infoWindow.on("selection-change", function () {
            addSelectedFeature();
            animateInfoWindow();
        });

        // Clear selected graphic when infoWindow is hidden
        map.infoWindow.on("hide", function () {
            // re-activate cluster
            setActiveClusterOpacity(activeClusterElement, 0.75, 0.5);
            removeSelectedFeature();
        });

        function onMouseOverCluster(e) {
            if (e.graphic.attributes.clusterCount === 1) {
                e.graphic._graphicsLayer.onClick(e);
            } else {
                if (e.target.nodeName === "circle") {
                    activeClusterElement = e.target;
                    setActiveClusterOpacity(activeClusterElement, 1, 1);
                } else {
                    setActiveClusterOpacity(activeClusterElement, 1, 1);
                }
            }
        }

        function onMouseOutCluster(e) {
            if (e.graphic.attributes.clusterCount > 1) {
                if (e.target.nodeName === "circle" || e.target.nodeName === "text") {
                    setActiveClusterOpacity(activeClusterElement, 0.75, 0.5);
                    setActiveClusterOpacity(e.target, 0.75, 0.5);
                }
            }
        }

        function animateInfoWindow() {
            domStyle.set(map.infoWindow.domNode, "opacity", 0);
            fx.fadeIn({node: map.infoWindow.domNode,
                duration: 150,
                easing: easing.quadIn}).play();
        }

        clusterLayer.on('click', function () {
            if (map.infoWindow.isShowing) {
                map.infoWindow.hide();
            }
        });

        // ESC is pressed
        map.on('key-down', function (e) {
            if (e.keyCode === 27) {
                map.infoWindow.hide();
            }
        });

        // Dynamically reposition popups when map moves
        map.on('extent-change', function () {
            if (map.infoWindow.isShowing) {
                map.infoWindow.reposition();
            }
        });

        // Auto recenter map - optional
        autoRecenter(map);

        function autoRecenter(map) {
          on(map, 'load', function (map) {
            on(window, 'resize', map, map.resize);
          });
          on(map, 'resize',  function(extent, width, height) { 
            map.__resizeCenter = map.extent.getCenter();
            setTimeout(function() {
                map.centerAt(map.__resizeCenter);
            }, 100);
          });
        }

    }


    function clearLayer() {
                map.removeLayer(clusterLayer);
                map.infoWindow.clearFeatures();
                //map.infoWindow.hide();
                map.graphics.clear();
                clusterLayer = null;
      }

       
       // Inicialización de la barra de herramientas de selección

         var my_load_p65 = map.on("load", function () {
            _initSelectToolbarP65(featureLayer, Draw.POLYGON);
          });

          // Símbolo de selección
          var fieldsSelectionSymbol = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 0, 0]), 2),
            new Color([255, 255, 0, 0.5])
          );

          // URL del servicio de capa
         // Crear la capa de entidades (FeatureLayer)
          var featureLayer = new FeatureLayer(global.url_P65, {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"],
            opacity: 0.5
          });

          //featureLayer.setDefinitionExpression("ubigeo='" + ubigeo_IDDIST + "'");
          featureLayer.setSelectionSymbol(fieldsSelectionSymbol);
          featureLayer.on("selection-complete", resul_list);
          featureLayer.on("selection-clear", function () {
            dom.byId('messages').innerHTML = "<i>No Selected Fields</i>";
          });

          // Función para inicializar la barra de herramientas de selección
          function _initSelectToolbarP65(layer, selectionType) {
            global.selectionToolbar65 = new Draw(map);
            var selectQuery = new Query();

            on(global.selectionToolbar65, "DrawEnd", function (geometry) {
              global.selectionToolbar65.deactivate();
              selectQuery.geometry = geometry;
              layer.selectFeatures(selectQuery, FeatureLayer.SELECTION_NEW);
            });

            // Manejadores de eventos para los botones
            on(dom.byId("polygons"), "click", function () {
              global.selectionToolbar65.activate(Draw.POLYGON);
              $("#datatable_p65").hide();
              featureLayer.clearSelection();
            });

            on(dom.byId("freehands"), "click", function () {
              global.selectionToolbar65.activate(Draw.FREEHAND_POLYGON);
              $("#datatable_p65").hide();
              featureLayer.clearSelection();
            });

            on(dom.byId("circle"), "click", function () {
              global.selectionToolbar65.activate(Draw.CIRCLE);
              $("#datatable_p65").hide();
              featureLayer.clearSelection();
            });

            on(dom.byId("clear"), "click", function () {
              $("#datatable_p65").hide();
              featureLayer.clearSelection();
            });
          }

        function desactivar_capa_p65(){
          global.selectionToolbar65.deactivate();
          //featureLayer.setVisibility(false);
        }

          // Función para mostrar los resultados en la tabla
          function resul_list(event) {
            var resul = "";
            $("#ReporteInfortabla_p65").show();
            //$('#table_id_p65').attr("disabled", true);
            $("#datatable_p65 tbody tr").remove();
            $("#datatable_p65").show();

            var i=0;

            event.features.forEach(function (feature) {
               i++;
              resul += '<tr role="row" class="odd">' +
                '<td>' + i + '</td>' +
                '<td class="sorting_1"><input type="radio" class="chck_usser_65" name="chck_usser_65" value=' + feature.attributes.num_doi + '></td>' +
                '<td>' + feature.attributes.num_doi + '</td>' +
                '<td>' + feature.attributes.nomb + '</td>' +
                '<td>' + feature.attributes.ap_pat + '</td>' +
                '<td>' + feature.attributes.ap_mat + '</td>' +
                '</tr>';
            });

            $("#datatable_p65").append(resul);
          }


 /*================ base gallery =========================*/
   

 var basemapGallery = new BasemapGallery({
    showArcGISBasemaps: false,
    map: map,
    basemaps: [
     
      { id: "satellite", title: "Satellite", thumbnailUrl: base_url+"/media/path/to/satellite-thumbnail.png",layers: [new BasemapLayer({
                url : "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
            })]},
       { id: "gmapsat", title: "Google", thumbnailUrl: base_url+"/media/static_base/img/google_maps.png", layers: [new BasemapLayer({
                type: "WebTiledLayer",
                url : "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
            })]},
      { id: "hybrid", title: "Hybrid", thumbnailUrl: base_url+"/media/path/to/hybrid-thumbnail.png", layers: [new BasemapLayer({
                url : "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
            })]},     
      { id: "streets", title: "Streets", thumbnailUrl: base_url+"/media/path/to/streets-thumbnail.png",layers: [new BasemapLayer({
                url : "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
            })]},
      { id: "gray", title: "gray", thumbnailUrl: base_url+"/media/path/to/gray.jpg", layers: [new BasemapLayer({
                url : "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer"
            })]},
      { id: "topo", title: "Topographic", thumbnailUrl: base_url+"/media/path/to/topo-thumbnail.png",layers: [new BasemapLayer({
                url : "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
            })] }
     ]
     }, "basemapGallery");

    basemapGallery.startup();



    });



