 var global = {
        ui: {
            cursor: $("#cursor_info")
        }
      };
var graphics;
var clusterLayer;
var preClustered = true;
var displaySingleFlaresAtCount = 4;
var areaDisplayMode = "";


require([
        "esri/map",
        "esri/dijit/Scalebar",
        "esri/dijit/LocateButton",
        "esri/SnappingManager",
        "esri/dijit/Search", /* buscar*/
        "esri/layers/FeatureLayer",
        "esri/InfoTemplate",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/ImageParameters",
        "esri/dijit/Legend",
        "fcl/FlareClusterLayer_v3",
        "esri/renderers/ClassBreaksRenderer",
        "dojo/parser",
        "esri/dijit/FeatureTable",
        "esri/dijit/HomeButton",
        "esri/dijit/Print",
        "esri/tasks/PrintTemplate",
        "esri/dijit/PopupTemplate",
        "esri/dijit/Measurement",
        "esri/request",
        "dojo/json",
        "esri/config",
        "esri/tasks/QueryTask",
        "esri/tasks/query",
        "esri/renderers/smartMapping",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/tasks/IdentifyTask",
        "esri/tasks/IdentifyParameters",
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
        "esri/graphic",
        "esri/SpatialReference",
        "esri/geometry/webMercatorUtils",
        "esri/tasks/GeometryService",
        "esri/tasks/ProjectParameters",
        "esri/dijit/LayerList",
        "esri/toolbars/draw",
        "esri/dijit/BasemapToggle",
        "esri/tasks/IdentifyTask",
        "esri/tasks/IdentifyParameters",
        "esri/renderers/UniqueValueRenderer",
        "dojo/_base/array",
        "dojo/dom-construct",
        "esri/dijit/LocateButton",
        "esri/lang",
        "esri/dijit/Print",
        "esri/tasks/PrintTemplate",
        "dojo/dom-class",
        "dojo/dom-style",
        "dijit/form/Button",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dijit/TitlePane",
        "dojo/domReady!"


    ],
    function(
            Map, Scalebar, LocateButton, SnappingManager, Search, FeatureLayer, InfoTemplate, ArcGISDynamicMapServiceLayer, ImageParameters,
            Legend,FlareClusterLayer, ClassBreaksRenderer, parser,FeatureTable, HomeButton, Print, PrintTemplate, PopupTemplate, Measurement, esriRequest,JSON, esriConfig, QueryTask, Query,smartMapping, PictureMarkerSymbol,
            SimpleMarkerSymbol, IdentifyTask, IdentifyParameters, Point, Popup, Color, dom, on, query, JSON, domConstruct, BasemapGallery,Basemap,BasemapLayer, arcgisUtils, SimpleFillSymbol,
            SimpleLineSymbol, Graphic, SpatialReference, webMercatorUtils, GeometryService, ProjectParameters, LayerList, Draw, BasemapToggle, IdentifyTask, IdentifyParameters, UniqueValueRenderer, arrayUtil, domConstruct, LocateButton, lang, Print, PrintTemplate, domClass, domStyle, Button, BorderContainer, ContentPane

    ) {


      var extent = new esri.geometry.Extent({
           "xmin":ubigeo_X_MIN,"ymin":ubigeo_Y_MIN,"xmax":ubigeo_X_MAX,"ymax":ubigeo_Y_MAX,
          "spatialReference":{"wkid":4326}
        });
       var map = new Map("MapaDiv", {
            basemap: "topo",
            extent : extent,
            minZoom:9,
            maxZoom:19
            //zoom: 12
        });



       map.on("load", initSelectToolbar);

         layer_base = new ArcGISDynamicMapServiceLayer("http://geoservicios.midis.gob.pe:6080/arcgis/rest/services/PILOTOCOV19/Tematica_Personas/MapServer");
         var layerDefinitions = [];
          layerDefinitions[0] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[1] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[2] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[3] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[4] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[5] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[6] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[7] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[8] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[9] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[10] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[11] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[12] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[13] = "IDPROV='"+ubigeo_IDPROV+"'";
          layerDefinitions[14] = "IDPROV='"+ubigeo_IDPROV+"'";
          var visibleLayerIds = [1,10,11,12,13,14];

          layer_base.setLayerDefinitions(layerDefinitions);
          layer_base.setVisibleLayers(visibleLayerIds);

          map.addLayers([layer_base]);

          var legend = new Legend({
              map: map,
              layerInfos: [{
                layer: layer_base
              }]
            }, "legendDiv");
            legend.startup();

    /---------buscar por ninño---------------/

       var  symbolR = new PictureMarkerSymbol({
                            "url":base_url+"/media/assets/images/avatars/red-circle.png",
                            "height":30,
                            "width":30,
                    });

      // var nrodocuments=0;

   function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
          if (width <= length) {
              if (number < 0) {
                   return ("-" + numberOutput.toString()); 
              } else {
                   return numberOutput.toString(); 
              }
          } else {
              if (number < 0) {
                  return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
              } else {
                  return ((zero.repeat(width - length)) + numberOutput.toString()); 
              }
          }
      }

       $(document).ready(function() {
          $("#badultos").click(function() {
              
               var tipoN = $("#tipoN").val();
               var datoN = $("#idadultos").val();

               separador = " ", // un espacio en blanco
               datoconcat = datoN.split(separador);

               if ($('#tipoN').val().trim() ==="") {
                    $("#tipoN").focus();

                } else if (($('#idadultos').val().trim()) ==="" || datoN.length<3) {
                    $("#idadultos").focus();

                }else {

             $("#idtab_nino").find("tbody tr").remove();
               
               var get_url_nino = base_url + "index.php/App/getadulto/"+tipoN+"/"+datoconcat;

                $.getJSON(get_url_nino, function(data) {

                  if (data.length>0) {

                    $.each(data, function(key, val) {
                                     
                    $("#idtab_nino tbody").append("<tr><td width='50%'>"+val.nom_completos+"</td><td width='50%'>"+val.ccpp_1+"</td><td width='50%'>"+val.direc_1+"</td><td><input class='chckadultos' name='chckadultos' type='radio' value='"+val.id+"'/></td></tr>");
                    })

                    }else{

                    $("#idtab_nino tbody").append("<tr><td colspan='3' style='color:#FF0000;'>no existe información</td></tr>");
                   }

                 });

           window.setTimeout(function(){

            $(".chckadultos").on("click", function(e) {

             $("#ninioNewModal").modal("hide");

               var nrodocuments=$(this).val();
               var docuemnt_url_xy = base_url + "index.php/App/getxy/"+nrodocuments;

                    $.getJSON(docuemnt_url_xy, function(data) {

                      var x=data[0].x;
                      var y=data[0].y;
                      var nro_doc=data[0].nro_doc;
                      var tipo_doc=data[0].tipo_doc;
                      var prenom_inscrito=data[0].nombres;
                      var Cnombres=data[0].nom_completos;
                      var ap_pat=data[0].ap_pat;
                      var ap_mat=data[0].ap_mat;
                      var apellidos=data[0].apellidos;
                      var edadd=data[0].edad;
                      var genero2=data[0].genero2;
                      var nomccpp=data[0].ccpp_1;
                      var fecha_nac=data[0].fe_nac;
                      var direc=data[0].direc_1;
                      var des_discapacidad=data[0].des_discapacidad;
                      var ppss=data[0].ppss;
                      var telefono=data[0].telefono;
                      var ten_comorb=data[0].ten_comorb;
                      var direc_2=data[0].direc_2;

                      graphic_referenc_point(x,y,nro_doc,tipo_doc,prenom_inscrito,Cnombres,ap_pat,ap_mat,apellidos,edadd,nomccpp,fecha_nac,genero2,direc,des_discapacidad,ppss,telefono,ten_comorb,direc_2);

                    });
                 });
        
                }, 500);

              }

           function graphic_referenc_point(x,y,nro_doc,tipo_doc,prenom_inscrito,Cnombres,ap_pat,ap_mat,apellidos,edadd,nomccpp,fecha_nac,genero2,direc,des_discapacidad,ppss,telefono,ten_comorb,direc_2){
             var contex='';
             var tel;
             if(telefono=="" || telefono === null){ tel="-";}else{ tel=telefono};
             if(direc_2 === null || direc_2 === ''){ dir="-";}else{ dir=direc_2};
             var location = new Point([x,y],new esri.SpatialReference({ "wkid": 4326 }));
             var infoTemplate = new InfoTemplate();

                  infoTemplate.setTitle("Detalle");
                  contex += '<b>Tipo Doc:</b>'+tipo_doc+'<br/>';
                  contex += '<b>Nro Doc:</b>'+zfill(nro_doc, 8)+'<br/>';
                  contex += '<b>Nombres:</b>'+prenom_inscrito+'<br/>';
                  contex += '<b>Ap. Paterno: </b>'+ap_pat+'<br/>';
                  contex += '<b>Ap. Materno: </b>'+ap_mat+'<br/>';
                  contex += '<b>Edad: </b>'+edadd+" Años"+'<br/>';
                  contex += '<b>Teléfono: </b>'+tel+'<br/>';
                  contex += '<b>IPFs: </b>'+ppss+'<br/>';
                  contex += '<b>Discapacidad: </b>'+des_discapacidad+'<br/>';
                  contex += '<b>Morbilidad: </b>'+ten_comorb+'<br/>';
                  contex += '<b>Dirección priorizada: </b>'+direc+'<br/>'; 
                  contex += '<b>Dirección alternativa: </b>'+dir+'<br/>';
                
                  contex += '</div>';

                  infoTemplate.setContent(contex);

                   var graphic = new Graphic(location, symbolR, infoTemplate);
                    graphic.setInfoTemplate(infoTemplate);
                    map.graphics.add(graphic);
                    map.centerAndZoom(location, 18).then(function(){
                    map.infoWindow.setContent(graphic.getContent());
                    map.infoWindow.setTitle(graphic.getTitle());
                    map.infoWindow.show(location);

                   });

             }

          $("#editar").click(function (e) {
             e.preventDefault();
            $("#ninioNewModal").modal("hide");
              var nrodocuments=$('input:radio[name=chcknino]:checked').val();
               document.getElementById("dni_ninio").value=nrodocuments;
                 
              });
         
          
          });
      });


      $("#idbuscar").click(function (e) {
          e.preventDefault();
            map.infoWindow.hide();
            map.infoWindow.clearFeatures();
            map.graphics.clear();
       });

         $("#cerrarventana").click(function (e) {
          e.preventDefault();
           $("#ReporteInfor").hide();
           
       });

     var selectionToolbar, featureLayer;
     var fieldsSelectionSymbol =
          new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
          new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.5]));
       

       var url_h ="http://geoservicios.midis.gob.pe:6080/arcgis/rest/services/PILOTOCOV19/Tematica_Personas/MapServer/12";
         
       featureLayer = new FeatureLayer(url_h,
              {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["*"],
                opacity:0.4
              });

       //featureLayer.setDefinitionExpression("UBIGEO='"+ubigeo_IDDIST+"'");
        featureLayer.setSelectionSymbol(fieldsSelectionSymbol);
        featureLayer.on("selection-complete", Sumdatos);
        featureLayer.on("selection-clear", function () {
          dom.byId('messages').innerHTML = "<i>No Selected Fields</i>";
        });
        map.addLayer(featureLayer);

        on(dom.byId("polygons"), "click", function () {
          selectionToolbar.activate(Draw.POLYGON);
          $("#ReporteInfor").hide();
           featureLayer.clearSelection();
        });

         on(dom.byId("freehands"), "click", function () {
          selectionToolbar.activate(Draw.FREEHAND_POLYGON);
           $("#ReporteInfor").hide();
           featureLayer.clearSelection();
        });

         on(dom.byId("circle"), "click", function () {
          selectionToolbar.activate(Draw.CIRCLE);
          $("#ReporteInfor").hide();
           featureLayer.clearSelection();
        });

        on(dom.byId("clear"), "click", function () {

          $("#ReporteInfor").hide();
           featureLayer.clearSelection();

        });

        function initSelectToolbar (event) {
          selectionToolbar = new Draw(event.map);
          var selectQuery = new Query();

          on(selectionToolbar, "DrawEnd", function (geometry) {
            selectionToolbar.deactivate();
            selectQuery.geometry = geometry;
            featureLayer.selectFeatures(selectQuery,
              FeatureLayer.SELECTION_NEW);
          });
        }

       function Sumdatos(event) {
         var idmanzas="";
         arrayUtil.forEach(event.features, function (feature) {
             llave_id=feature.attributes.LLAVE_MZS;

              idmanzanas=llave_id;
             idmanzas=idmanzas+","+idmanzanas.trim();
          });

          var caddat=idmanzas.substr(1);

         $("#ReporteInfor").show();
          $("#ttable").find("tbody tr").remove();

          if(caddat === ""){

            $("#ttable tbody").append("<tr><td colspan='11' style='color:#FF0000;'>No hay información</td></tr>");
              
              }
              else{

              var get_url_lista = base_url + "index.php/App/getlistaadultos/"+caddat;

                $.getJSON(get_url_lista, function(data) {

                  if (data.length>0) {

                    var i=0;

                   $.each(data, function(key, val) {
                    
                     i=i+1;

                     var fecha=val.fe_nac;
                     var day =fecha.slice(8,10);
                     var month=fecha.slice(5,7);
                     var year=fecha.slice(0,4);

                     var shortStartDate =  day+ "/" + month + "/" + year;

                     if(val.telefono === null){ tel="-";}else{ tel=val.telefono};
                     if(val.direc_2 === null){ direc_2="-";}else{ direc_2=val.direc_2};
                     if(val.ccpp_1 === null){ ccpp_1="-";}else{ ccpp_1=val.ccpp_1};
     
                    $("#ttable tbody").append("<tr><td>"+i+"</td><td>"+val.tipo_doc+"</td><td class='.xl65'>"+zfill(val.nro_doc, 8)+"</td><td>"+val.genero2+"</td><td>"+ shortStartDate +"</td><td>"+val.edad+"</td><td>"+val.nom_completos+"</td><td>"+val.nro_doc_padre+"</td><td>"+val.ap_nom_padre+"</td><td>"+val.nro_doc_madre+"</td><td>"+val.ap_nom_madre+"</td><td>"+tel+"</td><td>"+val.correo+"</td><td>"+val.ppss+"</td><td>"+val.des_discapacidad+"</td><td>"+val.ten_comorb+"</td><td>"+val.cant_morbilidades+"</td><td>"+val.seguro_salud+"</td><td>"+val.atencion_domiciliaria+"</td><td>"+val.vneumococo+"</td><td>"+val.ubigeo_1+"</td><td>"+val.departamento_1+"</td><td>"+val.provincia_1+"</td><td>"+val.distrito_1+"</td><td>"+ccpp_1+"</td><td>"+val.direc_1+"</td><td>"+direc_2+"</td></tr>");

                    })

                    }else{

                    $("#ttable tbody").append("<tr><td colspan='11' style='color:#FF0000;'>No hay información</td></tr>");
                   }

                 });

             }
          
        }


     /------------------cluster niños-----------------------/

     initdata(Grafico_data);

     function initdata(Grafico_data){

       var allData = JSON.parse(Grafico_data);
          
            DataManager.setData(allData);
     
             map.on("load", function () {
               var symb=0;
              initLayer(symb);
                });

                map.on("pan-start", function () {
                    if (preClustered) {
                        clusterLayer.clear();
                    }
                });

                map.on("pan-end", function () {
                    if (preClustered) {
                        getPreClusteredGraphics();
                    }
                });

                map.on("zoom-end", function () {
                    if (preClustered) {
                         clusterLayer.clear();
                        getPreClusteredGraphics();
                    }
                });

           }

        function initLayer(symb) {

                    clusterLayer = new FlareClusterLayer({
                    id: "flare-cluster-layer",
                    spatialReference: new esri.SpatialReference({ "wkid": 4326 }),
                    subTypeFlareProperty: "ccpp_1",
                    singleFlareTooltipProperty: "apellidos",
                    displaySubTypeFlares: false,
                    displaySingleFlaresAtCount: displaySingleFlaresAtCount,
                    flareShowMode: "mouse",
                    preClustered: preClustered,
                    clusterRatio: 100,
                    clusterAreaDisplay: areaDisplayMode,
                    clusteringBegin: function () {
                        console.log("clustering begin");
                    },
                    clusteringComplete: function () {
                        console.log("clustering complete");
                    }
                });

             initaddcluster(clusterLayer,preClustered,symb);

            }


    function initaddcluster(clusterLayer,preClustered,symb){

 
              if (symb=='0' || symb=='00') {
                   var  symbolM = new PictureMarkerSymbol({
                            "url":base_url+"/media/assets/images/avatars/Marker1.png",
                            "height":40,
                            "width":40,
                    });
                   var getSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 50, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new dojo.Color([82, 163, 204, 0.8]), 1), new dojo.Color([102, 204, 255, 0.9]));

                }
              

                var renderer = new ClassBreaksRenderer(symbolM, "clusterCount");

                 renderer.addBreak(0, Infinity, getSymbol);

                clusterLayer.setRenderer(renderer); 
              /*  var template = new PopupTemplate({
                    title: "Detalle",
                    fieldInfos: [
                       { fieldName: "tipo_doc", label: "Tipo Doc: ", visible: true },
                       { fieldName: "nro_doc", label: "Nro Doc: ", visible: true },
                       { fieldName: "nombres", label: "Nombres: ", visible: true },
                       { fieldName: "ap_pat", label: "Ap. Paterno: ", visible: true },
                       { fieldName: "ap_mat", label: "Ap. Materno: ", visible: true },
                       { fieldName: "edad", label: "Edad: ", visible: true },
                       { fieldName: "telefono", label: "Teléfono: ", visible: true },
                       { fieldName: "ppss", label: "IPFs: ", visible: true },
                       { fieldName: "des_discapacidad", label: "Discapacidad: ", visible: true },
                       { fieldName: "ten_comorb", label: "Morbilidad: ", visible: true },
                       { fieldName: "direc_1", label: "Dirección priorizada: ", visible: true },
                       { fieldName: "direc_2", label: "Dirección alternativa: ", visible: true },                    
                     
                   
                    ]
                });*/
                compare_nrodoc = function (value, key, data) {
                  var nrodni=zfill(value,8);
                  return nrodni

                  }
                verifica_fono = function (value, key, data) {

                  if(value === null || value === ''){ fono="-";}else{ fono=value}
                  return fono

                  }
                verifica_direc = function (value, key, data) {
                  if(value === null || value === ''){ direcc2="-";}else{ direcc2=value}
                  return direcc2

                  }

                  var contex='';
                  var infoTemplate = new InfoTemplate();
                  infoTemplate.setTitle("Detalle");
                  contex += '<b>Tipo Doc: </b>${tipo_doc}<br/>';
                  contex += '<b>Nro Doc: </b>${nro_doc:compare_nrodoc}<br/>';
                  contex += '<b>Nombres: </b>${nombres}<br/>';
                  contex += '<b>Ap. Paterno: </b>${ap_pat}<br/>';
                  contex += '<b>Ap. Materno: </b>${ap_mat}<br/>';
                  contex += '<b>Edad: </b>${edad} Años<br/>';
                  contex += '<b>Teléfono: </b>${telefono:verifica_fono}<br/>';
                  contex += '<b>IPFs: </b>${ppss}<br/>';
                  contex += '<b>Discapacidad: </b>${des_discapacidad}<br/>';
                  contex += '<b>Morbilidad: </b>${ten_comorb}<br/>';
                  contex += '<b>Dirección priorizada: </b>${direc_1}<br/>'; 
                  contex += '<b>Dirección alternativa: </b>${direc_2:verifica_direc}<br/>';                
                  contex += '</div>';

                infoTemplate.setContent(contex);

                clusterLayer.infoTemplate = infoTemplate;
                map.infoWindow.titleInBody = false;

                map.addLayer(clusterLayer);
                if (preClustered) {
                    getPreClusteredGraphics();
                }
                else {
                     var data = DataManager.getData();
                     clusterLayer.addData(data);
                }
            }

          function clearLayer() {
                map.removeLayer(clusterLayer);
                clusterLayer = null;
            }

          function getPreClusteredGraphics() {

               var maxSingleFlareCount = displaySingleFlaresAtCount;
               var clusterRatio = 100;
               var clusteredData = DataManager.fakeServerSideClustering(clusterRatio, maxSingleFlareCount, areaDisplayMode, map);
                clusterLayer.addPreClusteredData(clusteredData);

          }





    /------------funciones generales -------------/


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
                                  new Color([0,255,254]), 3),new Color([255,255,255,0.25])
                                );
                              var graphic = new Graphic(geometry, symbol, result.attributes, infoTemplate);
                              map.centerAndZoom(center, params.zoom).then(function(){
                                map.infoWindow.setContent(graphic.getContent());
                                map.infoWindow.setTitle(graphic.getTitle());
                                map.infoWindow.show(center);
                              });
                              //map.graphics.add(graphic);
                            });
                          } else {
                                    var infoTemplate = new InfoTemplate(params.template_title, params.template_body);
                            switch (geometry.type) {
                              case "polygon":
                                  var center = geometry.getCentroid();
                                  symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                      new Color([0,255,254]), 3),new Color([255,255,255,0.25])
                                    );
                                  break;
                              case "point":
                                  var center = geometry;
                                  symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,0,0]), 1), new Color([0,255,0,0.25]));
                                  break;
                            }
                            var graphic = new Graphic(geometry, symbol, result.attributes, infoTemplate);
                            //map.graphics.add(graphic);
                            map.centerAndZoom(center, params.zoom).then(function(){
                             // map.infoWindow.setContent(graphic.getContent());
                             // map.infoWindow.setTitle(graphic.getTitle());
                             // map.infoWindow.show(center);
                            });
                          }
                      }
                  });

                };

      $("#codccpp").change(function() {

       var idccpp=$(this).val();

             set_graphic({
                  service: "http://geoservicios.midis.gob.pe:6080/arcgis/rest/services/PILOTOCOV19/Tematica_Personas/MapServer/5",
                  where: "LLAVE_CCPP = '" + idccpp + "'",
                  template_title: "${LLAVE_CCPP}",
                  template_body: "<div style='font: 14px Segoe UI'><b>CENTRO POBLADO:</b> ${NOM_CCPP}</div>",
                  zoom: 17
                  });
            });
 

  

    var basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
      }, "basemapGallery");
      basemapGallery.startup();


        var offLayers = [1,81,33,40];
        var textoff="";

        offLayers.forEach( function (offLayer,i){
            if( (offLayers.length-1) >i){
                textoff+='s.t:'+offLayer+'|p.v:off,';
            }
            else {
                textoff+='s.t:'+offLayer+'|p.v:off';
            }

        } );

        var mapGMapSat = new Basemap({
            layers: [new BasemapLayer({
                type: "WebTiledLayer",
                url : "https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x={col}&y={row}&z={level}&s=Galile&apistyle="+textoff,
                copyright: "Google Maps"
            })],
            id: "gmapsat",
            thumbnailUrl: "https://maps.ngdc.noaa.gov/viewers/dijits/agsjs/xbuild/agsjs/dijit/images/googleroad.png",
            title: "Google Imagery"
        });

        basemapGallery.add(mapGMapSat);

        basemapGallery.startup();

        map.on("load", function(response){

            basemapGallery.select("gmapsat");


        });


             
    
      $(".esriControlsBR").hide();

       $(".notices-close").click(function(){
            $(".notices").removeClass('hidden');
            $(".notices-wrapper").animate({
              "bottom":"-300px"
            },1000, function() {
              $(".notices").animate({
                "bottom":"15px"
              },1000, function() {
                $(".notices-wrapper").addClass('hidden');
              });
            });
          });

          $(".notices").click(function(){
            $(".notices-wrapper").removeClass('hidden');
            $(this).animate({
              "bottom":"-60px"
            },1000, function() {
              $(".notices-wrapper").animate({
                "bottom":"15px"
              },1000, function() {
                $(".notices").addClass('hidden');
              });
            });
          });

    
    });



