        var ubigeo_reporte = '';

        var global = {};
        global.layers={};
        global.map='';
        global.layer={};
        global.consulta='';
        global.consultas={};
        global.consultaId=0;
        global.urlService= CI.base_url + 'ajax_controller/getMapData';
        global.urlServiceBuscador= CI.base_url + 'ajax_controller/ubigeo_autocomplete'; 
        global.cantConsultasMax=10;
        global.cantNiveles=5;
        global.streetView = false; 
        global.idCapaManzanas=13;
        global.idCapaManzanas2=12;
        
        global.rangos=[];
        global.idCapaJurisdiccion2017=5;
        //global.idCapaJurisdiccion2018=156;
        //global.idCapaJurisdiccion2018=172;
        global.idCapaJurisdiccion2018=195;

        global.idCapaZonasCocaleras=22;
        global.idGruposSelect2=[19];
        global.categoriasManzanas=[8,19];
      
      //global.listIdLayersManzanas=[9,10,11,12,13,14,15,16]; // 2020 06    
        global.listIdLayersManzanas=[9,10,11,12,13,14,15,16,17,18];
        
      //global.listCheckAll = [0,6,12,17,22,52,103,117,130,143];
      //global.listCheckAll = [0,6,12,17,25,47,98,112,125,138,151];
      //global.listCheckAll = [0,6,12,17,22,52,103,119,135,151];  // 2020 12
        global.listCheckAll = [0,6,12,17,22,27,32,37,/*92,*/102,108,110,126,142,158,174];



        global.groupLayers=[];
        global.idsActivosTodosPuntos=[];
        global.idLayersTematicosEstaticos=[6,7];
        global.ocultarCapa=[{'nomCapa':'capasLimites','valor':17}];
        //global.ocultarCapa=[];
        global.infoTemplate='';
        global.colores={
                'default':[              
                        '#FFF9D1',
                        '#FFF16E',
                        '#FAB700',
                        '#ED7203',
                        '#E20613',
                        ],

                '200006': [
                        '#DCF5E9',
                        '#A7CFB4',
                        '#73B273',
                        '#4A8758',
                        '#226633'
                        ]   

        };



        global.STATIC={
                'default':{
                    'colores':
                        [              
                        '#FFF9D1',
                        '#FFF16E',
                        '#FAB700',
                        '#ED7203',
                        '#E20613',

                        ],
                    'rangos':[],
                    'data':{'data':[]},
                    'fuente':'',        

                },


                
                '200006': {
                    'colores':
                        [
                        '#DCF5E9',
                        '#A7CFB4',
                        '#73B273',
                        '#4A8758',
                        '#226633'
                        ],

                    'rangos':[
                            {min:0.1 ,max: 30.0},
                            {min:30.0001 ,max: 84.5},
                            {min:84.6 ,max: 211.0},
                            {min:211.1 ,max: 438.0},
                            {min:438.1 ,max: 928.75},
                    ],
                    'data': {'data':[]},
                    'fuente':'DEVIDA 2017'       
                }



        }

    
        global.maxRadio=600;
        global.mouseOverActivado=true;
        global.clickLayer=false;
        global.dataLayers =[];       
        global.graphicSelect=undefined;
        global.editToolbar=undefined;
        global.editToolbarEstado=false;
      
        global.urlServiceMap = 'https://arcgis4.inei.gob.pe:6443/arcgis/rest/services/Datacrim/DATACRIM004_AGS_TEMATICOS/MapServer';
        //global.urlServiceMap = 'https://arcgis4.inei.gob.pe/arcgis/rest/services/Datacrim/DATACRIM004_AGS_TEMATICOS/MapServer';
        //global.urlServiceMap='http://arcgis2.inei.gob.pe:6080/arcgis/rest/services/CRIMINALIDAD/DATACRIM004_AGS_TEMATICOS/MapServer';
              
        global.urlServiceMapListLayer = 'https://arcgis4.inei.gob.pe:6443/arcgis/rest/services/Datacrim/DATACRIM002_AGS_PUNTOSDELITOS/MapServer';
        //global.urlServiceMapListLayer = 'https://arcgis4.inei.gob.pe/arcgis/rest/services/Datacrim/DATACRIM002_AGS_PUNTOSDELITOS/MapServer';
        //global.urlServiceMapListLayer='http://arcgis1.inei.gob.pe:6080/arcgis/rest/services/CRIMINALIDAD/DATACRIM002_AGS_PUNTOSDELITOS/MapServer';        
        
        global.layerMapaCalor = 'https://arcgis4.inei.gob.pe:6443/arcgis/rest/services/Datacrim/DATACRIM003_AGS_MAPA_CALOR/MapServer';
        //global.layerMapaCalor = 'https://arcgis4.inei.gob.pe/arcgis/rest/services/Datacrim/DATACRIM003_AGS_MAPA_CALOR/MapServer';
        //global.layerMapaCalor='http://arcgis2.inei.gob.pe:6080/arcgis/rest/services/CRIMINALIDAD/DATACRIM003_AGS_MAPA_CALOR/MapServer/0';
                
        global.urlServiceLimitesAdmin = 'https://arcgis4.inei.gob.pe:6443/arcgis/rest/services/Datacrim/DATACRIM001_AGS_LIMITESADMIN_TEMATICO/MapServer';
        //global.urlServiceLimitesAdmin = 'https://arcgis4.inei.gob.pe/arcgis/rest/services/Datacrim/DATACRIM001_AGS_LIMITESADMIN_TEMATICO/MapServer';
        //global.urlServiceLimitesAdmin = 'http://arcgis1.inei.gob.pe:6080/arcgis/rest/services/CRIMINALIDAD/DATACRIM001_AGS_LIMITESADMIN_TEMATICO/MapServer/';
                
        global.manzanasService = global.urlServiceLimitesAdmin+'/'+global.idCapaManzanas;

        global.layerIds = {
            listLayers: [],
            limitesAdmin: [2,3,4 ,12],
            //comisarias: [139,140,141],
            //comisarias: [153,154,155],
            //comisarias: [169,170,171],  // 2020 12
            comisarias: [190,196,199],

            // penales: [81], ** 2020 12
            penales: [92],
        };
        
        global.ids = {'capasPuntos': global.layerIds.listLayers ,'capasLimites':global.layerIds.limitesAdmin};

        global.layers[0]={
            id:0,
            service:global.urlServiceMap+'/0',
            layerFeature:'',
            field1:'CODIGO',
            label_field: 'nombdep',
            //minScale: 0,
            //maxScale: 4000000,
            minScale: 0,
            maxScale: 100000,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rdptos',
            zoomMinLabels:4,
            zoomMaxLabels:30
        };

        global.layers[1]={
            id:1,
            service:global.urlServiceMap+'/1',
            layerFeature:'',
            field1:'CODIGO',
            label_field: 'nombprov',
            //minScale: 4000000,
            //maxScale: 500000,
            minScale: 0,
            maxScale: 100000,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rprov',
            zoomMinLabels:8,
            zoomMaxLabels:30

        };        

        global.layers[2]={
            id:2,
            service:global.urlServiceMap+'/2',
            layerFeature:'',
            field1:'CODIGO',
            label_field: 'nombdist',
            //minScale: 500000,
            //maxScale: 100000,
            minScale: 0,
            maxScale: 100000,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rdist',
            zoomMinLabels:10,
            zoomMaxLabels:30
        };    


        global.layers[3]={
            id:3,
            service:global.urlServiceMap+'/3',
            layerFeature:'',
            field1:'id_dim1',
            label_field: 'nomb_ciudad',
            minScale: 0,
            maxScale: 100000,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rciudad',
            zoomMinLabels:4,
            zoomMaxLabels:30
        };            


        global.layers[4]={
            id:4,
            service:global.urlServiceMap+'/4',
            layerFeature:'',
            field1:'id_identid',
            label_field: 'nombre_dj',
            minScale: 0,
            maxScale: 0,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rdistj',
            zoomMinLabels:4,
            zoomMaxLabels:30
            
        };            



        global.layers[5]={
            id:5,
            service:global.urlServiceMap+'/5',
            layerFeature:'',
            field1:'id_identid',
            label_field: 'nombre_df',
            minScale: 0,
            maxScale: 0,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'rdistf',
            zoomMinLabels:4,
            zoomMaxLabels:30
        };            

        global.layers[6]={
            id:6,
            service:global.urlServiceMap+'/6',
            layerFeature:'',
            field1:'',
            label_field: 'nombre_df',
            minScale: 0,
            maxScale: 0,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'depCocalero',
            zoomMinLabels:30,
            zoomMaxLabels:30
        };          

        global.layers[7]={
            id:7,
            service:global.urlServiceMap+'/7',
            layerFeature:'',
            field1:'CODIGO',
            label_field: 'CODIGO',
            minScale: 0,
            maxScale:  100,
            //maxScale:  0,
            rangos:[],
            colores:[],
            visible:true,
            infoTemplate:'',
            defaultColor:"#f7f7f7",
            capa:'seacoca',
            zoomMinLabels:4,
            zoomMaxLabels:30
        };            

        global.listEsquemas=[];
        global.layerId=0;
        global.legend= undefined;
        global.idLegendDiv="lengedDiv";
        global.idLegend="legendTematico";
        global.idLegendBody="legendBody";
        global.idLegendTitulo="legendTitulo";
        global.idLegendFooter="legendFooter";
        global.layersFeatures=[];
        global.layer={};
        global.idLayerList="layerList";
        global.idLayerList2="layerList2";
        global.idLegendCapas="legendCapas";
        /*legendBody*/
        global.layerFeature;

        global.idBtnPeru="peru";
        global.idBtnZoomIn="zoom_in";
        global.idBtnZoomOut="zoom_out";
        global.idBtnReporte="reporte";
        global.idBtnCapas="capas";
        global.idBmt="baseMapToggle";

        //global.idCbxReporte="cbxReporte";        

        global.flagAmbitos=true;
        global.colorGris='#f7f7f7';
        global.idBuscador='buscador';
        //global.idBtnStreetMap='btnStreetMap';
        global.idBtnStreetMap= document.getElementById('btnStreetMap');
        global.puntoStreetMap= '';
        
        global.idDivStreetMap = document.getElementById('divStreetMap');
        //global.idDivStreetMap= 'divStreetMap';
        
        global.idCloseStreetMap= 'closeStreetMap';
        global.idStreetMap= 'streetMap';
        global.flagStreetMap= false;
        global.listaSeleccionFeatures=[];
        global.graphicDraw=undefined;
        global.centerPt;
        global.activeDrawCircle=false;
        global.divHerramientas = document.getElementById('divHerramientas');
        global.idCbxReporte = document.getElementById('cbxReporte'); 
        global.idCbxStreet= document.getElementById('cbxStreet');      
        global.activeDraw=false;

        global.featureManzanas=undefined;
        global.ambito=0;
        
        global.capas=[
            {id:'capasLimites',urlMap:global.urlServiceLimitesAdmin,idDefaultLayers:global.layerIds.limitesAdmin},
            {id:'capasPuntos',urlMap:global.urlServiceMapListLayer,idDefaultLayers:global.layerIds.listLayers }
        ];

        function redondear(x,decimals){
            return  Math.round(parseFloat(x)* Math.pow(10,decimals))/Math.pow(10,decimals);

        }

      
       $(document).on("click",function(e) {
     
            ($(e.target).attr('title')=='Cerrar')?global.clickLayer=false:true;

       });

        
        var iniciarMapa = function() {

            require([
                    "esri/map", "esri/geometry/Extent",
                    "esri/layers/FeatureLayer","esri/dijit/Legend",
                    "dojo/dom","dojo/dom-construct","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ImageParameters",
                    "esri/arcgis/utils",
                    "esri/dijit/LayerList",
                    "dojo/_base/array",
                    "esri/dijit/BasemapToggle",
                    "esri/InfoTemplate",
                    "esri/tasks/QueryTask",  
                    "esri/tasks/query",
                    "esri/geometry/Point",                     
                    "esri/SpatialReference",                    
                    "esri/renderers/HeatmapRenderer",
                    "esri/symbols/SimpleMarkerSymbol",
                    "esri/symbols/PictureMarkerSymbol",
                    "esri/graphic",
                    "esri/geometry/Point",             
                    "esri/dijit/BasemapGallery",
                    "esri/dijit/Basemap",
                    "esri/dijit/BasemapLayer",
                    "esri/toolbars/draw",
                    "esri/layers/LayerDrawingOptions",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "dojo/_base/Color",
                    "esri/toolbars/edit",
                    "esri/tasks/DistanceParameters", "esri/tasks/GeometryService","esri/renderers/SimpleRenderer",
                    "esri/tasks/IdentifyTask",
                    "esri/tasks/IdentifyParameters",
                    "esri/tasks/QueryTask",  
                    "esri/geometry/Circle",
                    "esri/toolbars/edit",
                    "dojo/_base/event",
                    "dojo/domReady!"
                ],
                function ( Map, Extent,
                           FeatureLayer,Legend,
                           dom,domConstruct,ArcGISDynamicMapServiceLayer,ImageParameters,
                           arcgisUtils,LayerList, arrayUtils,BasemapToggle,InfoTemplate,
                           SpatialReference, Point,
                           QueryTask,Query,HeatmapRenderer,SimpleMarkerSymbol,PictureMarkerSymbol,Graphic
                           ,Point,BasemapGallery,Basemap,BasemapLayer,Draw, LayerDrawingOptions
                           ,SimpleFillSymbol, SimpleLineSymbol,Color,Edit,DistanceParameters
                           ,GeometryService,SimpleRenderer,IdentifyTask,IdentifyParameters,QueryTask,Circle,Edit,event
                           ) 
                {
                    global.layerId=0;
                    var LAYER_INI=0;
                    var mapOptions={};
                    var url=global.layers[LAYER_INI].service;
                    var layer= global.layers[LAYER_INI].layer;
                    var idLayer= global.layers[LAYER_INI].id;
                    var outFields=['*'];

                    global.layersFeatures=[]

                    /**
                    *DEFINIENDO MAPA BASE
                    **/
                    mapOptions= {
                        //basemap: "streets",
                        showLabels : true,
                        center: [-74.999999999998751, -9.304902982781664], //[-75.000, -9.500],
                        zoom: 6,
                    };
                    global.map = new Map("mapDiv", mapOptions);



                    /**
                    **DEFIENDO CAPAS A NIVEL DE PROVINCIA Y DISTRITO
                    **/

                    


                    Object.keys(global.layers).forEach(function(key){
                        var layr=global.layers[key];
                        
                        var defaultSymbol = new SimpleFillSymbol(
                           "solid"
                           , new SimpleLineSymbol("solid", new Color("#6e6e6e"), 1)
                           , new Color(global.layers[key].defaultColor)
                           );

                        var layerRenderer = new SimpleRenderer(defaultSymbol);

                        

                        var newLayer= new FeatureLayer(layr.service,{
                            outFields:outFields,
                            opacity:1,
                            mode: FeatureLayer.MODE_ONDEMAND,
                            minScale: global.layers[key].minScale, 
                            maxScale: global.layers[key].maxScale,
                            renderer: layerRenderer,
                            visible:false,
                        });
                        global.layers[key].layerFeature=newLayer;
                        global.layers[key].layerFeature.setShowLabels(false);
                        
                        dojo.connect(newLayer,'onMouseMove',function(evt){
                            var g = evt.graphic;
                            if(!global.clickLayer){
                                global.map.infoWindow.setContent(g.getContent());
                                global.map.infoWindow.setTitle(g.getTitle());
                                (global.mouseOverActivado)?global.map.infoWindow.show(evt.screenPoint,global.map.getInfoWindowAnchor(evt.screenPoint)):global.map.infoWindow.hide();
                            }
                        });

                        dojo.connect(newLayer, "onMouseOut", function() {  (!global.clickLayer)?global.map.infoWindow.hide():true;} );
                        newLayer.on("click", function() {

                            global.clickLayer=true; console.log('click layer');


                        } );


                    });




                    /**DEFINIENDO CAPAS AUXILIARES**/                    
                    var imageParameters = new ImageParameters();
                    imageParameters.layerIds = [0];
                    imageParameters.layerOption = ImageParameters.LAYER_OPTION_SHOW;
                    var listLayers = new ArcGISDynamicMapServiceLayer(global.urlServiceMapListLayer,
                                        {"imageParameters": imageParameters});
                    listLayers.setVisibility(false);                    

                    var infoTemplates = {};


                    var template = {
                        infoTemplate: new InfoTemplate("Detalle", getPointTemplate ),
                        layerUrl: null
                    }

                    for (var i = 0; i < 200; i++) {
                        infoTemplates[i] = template;
                    }

                    listLayers.setInfoTemplates(infoTemplates);                    

                    var imageParameters2 = new ImageParameters();
                    
                    
                    imageParameters2.layerIds=global.layerIds.limitesAdmin;
                    imageParameters2.layerOption = ImageParameters.LAYER_OPTION_SHOW;
                    var limitesAdmin = new ArcGISDynamicMapServiceLayer(global.urlServiceLimitesAdmin,{"imageParameters": imageParameters2});
                    limitesAdmin.setVisibility(true);
                    
                    
                    /**DEFINIEDO MAPA DE CALOR**/
                    var heatmapFeatureLayerOptions = {
                        mode: FeatureLayer.MODE_ONDEMAND,
                    };

                    var heatmapFeatureLayer = new FeatureLayer(global.layerMapaCalor, heatmapFeatureLayerOptions);

                    var heatmapRenderer = new HeatmapRenderer({
                        colors: ["rgba(0, 209, 0,0)","rgb(255, 255, 0)","rgb(255,220, 46)","rgb(255,182, 18)", "rgb(255,151, 0)","rgb(255, 0, 0)"],
                        blurRadius: 5,
                        
                    });
                    
                     heatmapFeatureLayer.setRenderer(heatmapRenderer);
                     heatmapFeatureLayer.setOpacity(1);
                    

                    var layer = global.layers[0].layerFeature;


                    var basemapGallery = new BasemapGallery({
                        showArcGISBasemaps: true,
                        toggleReference: false,
                        map: global.map
                    }, "basemapGallery");

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

                    
                    basemapGallery.on("load", function(msg) {
                        document.getElementById("basemapGallery").style.visibility = "hidden";
                    });
                    
                    /**
                    Herramientas
                    **/
                    global.featureManzanas = new FeatureLayer(global.manzanasService,{
                            opacity:1,
                            outFields:['*'],
                            mode: FeatureLayer.MODE_ONDEMAND,
                              
                     });

                    /**
                    **
                    **/

                    /**identificador de capas**/
                    var identifyTask = new IdentifyTask(global.urlServiceLimitesAdmin);
                    var identifyTaskPuntos = new IdentifyTask(global.urlServiceMapListLayer);
                    var identifyTaskUbigeo = new IdentifyTask(global.urlServiceLimitesAdmin);



                    var identifyParams = new IdentifyParameters();
                    identifyParams.returnGeometry = true;
                    identifyParams.layerIds = [global.idCapaZonasCocaleras,global.idCapaManzanas2,global.idCapaJurisdiccion2018];
                    identifyParams.tolerance = 6;
                    identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;


                    var identifyParamsPuntos = new IdentifyParameters();
                    identifyParamsPuntos.returnGeometry = true;
                    identifyParamsPuntos.layerIds = global.layerIds.comisarias.concat(global.layerIds.penales);
                    identifyParamsPuntos.tolerance = 3;

                    

                    var identifyParamsUbigeo = new IdentifyParameters();
                    identifyParamsUbigeo.returnGeometry = true;
                    identifyParamsUbigeo.layerIds = [2,3,4];
                    identifyParamsUbigeo.tolerance = 1;       
                    identifyParamsUbigeo.layerOption = IdentifyParameters.LAYER_OPTION_ALL;


                    //identifyParamsManzanas.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
                    /**
                    symblologia de seleccion de manzanas
                    **/
                    var selectionSymbol =
                        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([255, 0, 0]), 2), new Color([0, 0, 0, 0]));
                    
                    var selectionSymbolGrafico =
                        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([0, 0, 0]), 2), new Color([0, 0, 0, 0.3]));

                    /*featureManzanas.setSelectionSymbol(selectionSymbol);*/


                    



                    global.map.on("load", function(response){                       
                        basemapGallery.select("gmapsat");



                        global.map.addLayer(heatmapFeatureLayer);
                        Object.keys(global.layers).forEach(function(key){

                            var feature=global.layers[key].layerFeature;
                            global.map.addLayer(feature);

                        });

                        global.map.addLayer(limitesAdmin); // 10
                        global.map.addLayer(listLayers);
                        
                        

                    
                    /**
                    *SETEANDO VARIABLES GLOBALES DE LAYERS
                    **/
                        global.layerFeature = global.layers[0];
                        global.listLayers = listLayers;
                        global.limitesAdmin = limitesAdmin;
                        global.heatmapFeatureLayer= heatmapFeatureLayer;
                        global.heatmapFeatureLayer.setVisibility(false);
                        
               
                    /**
                    *ACCION DE BOTON PERU
                    **/
                        var peru = document.getElementById(global.idBtnPeru);
                        peru.addEventListener("click",function (e) {                            
                            global.map.setExtent(layer.fullExtent);
                            mostrarLeyenda();
                        });

                        var zoomIn = document.getElementById(global.idBtnZoomIn);
                        zoomIn.addEventListener("click",function (e) {
                            global.map.setZoom(global.map.getZoom()+1);
                        });

                        var zoomOut = document.getElementById(global.idBtnZoomOut);
                        zoomOut.addEventListener("click",function (e) {
                            global.map.setZoom(global.map.getZoom()-1);
                        });
                        

                        global.selectionToolbar = new Draw(global.map);
                        //var selectQuery = new Query();
                        global.editToolbar = new Edit(global.map);

                        global.map.graphics.on("click", function(evt) {
                            console.log(evt);
                            if(evt.graphic==global.graphicSelect){
                                var tool=Edit.MOVE| Edit.SCALE;
                                event.stop(evt);
                                global.editToolbar.activate(tool,evt.graphic,{uniformScaling:true});
                                global.editToolbarEstado=true;
                                _borrarSeleccionFeatures();                                
                            }
                            //activateToolbar(evt.graphic);
                        });


                        //graphic-click
                  
                        /*global.map.on("click", function(evt){
                            global.editToolbar.deactivate();
                        });



                        /*global.editToolbar.on("graphic-click",function(evt){

                            event.stop(evt);
                            var tool=Edit.MOVE;
                            global.editToolbar.activate(tool,evt.graphic,{});
                            _borrarSeleccionFeatures();
                        })*/

                        global.editToolbar.on("graphic-move-start ",function(evt){
                            console.log('se mueve>>>',evt.graphic);
                        });
                        global.editToolbar.on("graphic-move-stop",function(evt){                            
                            finalizarDibujo(evt.graphic.geometry);
                            global.editToolbar.deactivate();
                            global.editToolbarEstado=false;
                        });

                        global.editToolbar.on("scale-stop",function(evt){                        
                            finalizarDibujo(evt.graphic.geometry);
                            global.editToolbar.deactivate();
                            global.editToolbarEstado=false;
                        });                        

                        global.selectionToolbar.on( "DrawEnd", function (geom) {
                            finalizarDibujo(geom);
                        });

                        $("#polygons").on("click", function() {
                          global.activeDraw=true;
                          global.selectionToolbar.activate(Draw.POLYGON);
                        });

                        $("#freehands").on("click", function() {
                           global.activeDraw=true; 
                           global.selectionToolbar.activate(Draw.FREEHAND_POLYGON);
                          
                        });

                        $("#circle").on("click", function() {
                            global.activeDraw=true;
                            global.selectionToolbar.activate(Draw.CIRCLE);
                            global.activeDrawCircle=true;
                        });

                        $("#clear").on("click", function() {
                            global.activeDraw=false;  
                            _borrarSeleccionFeatures();
                            global.map.graphics.remove(global.graphicSelect);
                            global.graphicSelect=undefined;
                            global.editToolbar.deactivate();
                            global.editToolbarEstado=false;
                            $('#distancia').val('');
                        });

                        $('#distancia').on('change',function(){

                        });
                       

                        /**traer escala**/
                        var scale=global.map.getScale();
                        

                        /**creando la leyenda de capas**/    
                        obtenerDataLegenda(global.capas,0);

                        //obtenerDataLegenda(global.urlServiceLimitesAdmin,global.layerIds.limitesAdmin,'capasLimites');         


                        //obtenerDataLegenda(global.urlServiceMapListLayer,[],'capasPuntos'); 
                        //iniciarLeyendaCapas();


                    });
                    
                    
                    //obtenerDataLegenda
                    
                    //global.capas
                

                    var finalizarDibujo= function (geom){

                            _borrarSeleccionFeatures();
                            var identifyParamsManzanas = new IdentifyParameters();
                            var identifyTaskManzanas = new IdentifyTask(global.urlServiceLimitesAdmin);

                            global.selectionToolbar.deactivate();
                            global.activeDraw=false;
                            global.activeDrawCircle=false;
                            global.geometry = geom;

                            identifyParamsManzanas.returnGeometry = true;
                            identifyParamsManzanas.layerIds = [global.idCapaManzanas,global.idCapaManzanas2];
                            identifyParamsManzanas.tolerance = 3;
                            identifyParamsManzanas.mapExtent = global.map.extent;
                            identifyParamsManzanas.geometry = geom;
                            identifyParamsManzanas.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
                            identifyParamsManzanas.returnFieldName = true;

                            var identifyTaskPuntos = new IdentifyTask(global.urlServiceMapListLayer);
                            var identifyParamsPuntos = new IdentifyParameters();

                            identifyParamsPuntos.returnGeometry = true;
                            identifyParamsPuntos.layerIds = global.ids.capasPuntos;
                            identifyParamsPuntos.tolerance = 1;
                            identifyParamsPuntos.mapExtent = global.map.extent;
                            identifyParamsPuntos.geometry = geom;
                            identifyParamsPuntos.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
                            identifyParamsPuntos.returnFieldName = true;


                            var options={};
                            
                            var codigosList=[];
                            _borrarSeleccionFeatures();
                            global.listaSeleccionFeatures=[];
                            //console.log('global.ids.capasPuntos>>>',global.ids.capasPuntos);

                            identifyTaskManzanas.execute(identifyParamsManzanas).addCallback(function(response){                                                                
                                
                                if(response!==undefined && response.length>0){
                                    
                                    response.forEach(function(feature){                                        
                                        //var feature = feature.feature;
                                        var feature_ = feature.feature;
                                        //var codigo=feature.attributes.LLAVE_IDMANZANA;                                        
                                        var codigo=feature_.attributes.idmanzana;
                                            
                                        var graphic = new Graphic(feature_.geometry, selectionSymbol);
                                        graphic.setAttributes(feature_.attributes);
                                            
                                        global.listaSeleccionFeatures.push(graphic);
                                        global.map.graphics.add(graphic);
                                        codigosList.push(codigo);
                                        
                                    });

                                    options["manzanas"]=codigosList;
                                    
                                    
                                    if (global.graphicSelect !==undefined) {
                                        global.map.graphics.remove(global.graphicSelect);
                                    }

                                    global.graphicSelect = new Graphic(geom, selectionSymbolGrafico);
                                    global.map.graphics.add(global.graphicSelect);
                                
                                    
                                    
                                }

                                //console.log("juant 3:",global.ids.capasPuntos.length);
                                if (global.ids.capasPuntos.length>0){                                    

                                    identifyTaskPuntos.execute(identifyParamsPuntos).addCallback(function(response){
                                     
                                     //console.log("juant response:", response);   
                                        if(response!==undefined && response.length>0){
                                            var delitos =[];
                                            var resumen_delitos = [];
                                            
                                            response.forEach(function(x){   
                                                var datos=x.feature.attributes;  
                                                var keys=Object.keys(datos); 
                                                var es_delito=false;
                                                var keys_delitos =['ID_DENUNCI' ,'ID_DENUNCIA']
                                                var keys_modalidad =['MODALIDAD' ,'MODALIDAD_OTIN','MODALIDAD_'];
                                                var modalidad = '' ;

                                                keys_delitos.forEach(function(key){
                                                    if (datos.hasOwnProperty(key)) es_delito=true;
                                                });

                                                if(es_delito){
                                                    var id_denuncia='';

                                                    keys_delitos.forEach(function(key){
                                                        if (datos.hasOwnProperty(key))
                                                            id_denuncia=datos[key];                                                    
                                                    });                                            

                                                    keys_modalidad.forEach(function(key){
                                                        if (datos.hasOwnProperty(key))
                                                            modalidad=datos[key]
                                                                
                                                    });

                                                    if(delitos.length>0){
                                                        ids_delitos = delitos.map(x=>x.id);
                                                        if(ids_delitos.indexOf(id_denuncia)<0)delitos.push({'id':id_denuncia,'modalidad':modalidad});
                                                    }
                                                    else{
                                                        delitos.push({'id':id_denuncia,'modalidad':modalidad});        
                                                    }


                                                }


                                            });

                                            
                                            resumen_delitos=DataGrouper.count(delitos,['modalidad']);
                                            
                                            options['delitos']=resumen_delitos;



                                        }




                                        //console.log("juant option", options);

                                        if(options.hasOwnProperty('manzanas') ||  options.hasOwnProperty('denuncias') )
                                            _abrirReporte2(options);
                                    });  
                                }

                                else{

                                    if(options.hasOwnProperty('manzanas') ||  options.hasOwnProperty('denuncias') )
                                        _abrirReporte2(options);
                                }

  
                            });

                       

                    }



                    function getDistance(ptB)
                    {  

                        var ptA=global.centerPt.mapPoint;    
                        if(global.centerPt==null|| global.centerPt.mapPoint==null)
                            {   
                                console.log("unexpected para,function getDistance()");      
                                return "";    
                            }

                        var distance=Math.sqrt(Math.pow(ptA.x-ptB.x,2)+Math.pow(ptA.y-ptB.y,2));
                        return redondear(distance,2);     
                    }  


                    dojo.connect(global.map,"onMouseDragStart",function(evt){               
                        global.centerPt=evt;  
                             
                    });        



                    dojo.connect(global.map,"onMouseDrag",function(evt){
                        var radius=0;
                        if(global.activeDrawCircle)
                            {
                                radius=getDistance(evt.mapPoint);
                                
                                if(radius>global.maxRadio) {
                                    radius=global.maxRadio;
                                    global.selectionToolbar.deactivate();
                                    var circle = new Circle({
                                        center: global.centerPt.mapPoint,
                                        geodesic: true,
                                        radius:600,
                                    });
                                    console.log('circle>>>',circle);

                                    finalizarDibujo(circle);
                                    $("#messages").text('El radio máximo de la seleccion es:'+global.maxRadio+' metros');
                                }

                                $('#distancia').val(radius);
                            }    
                    });

                    global.map.on("zoom-end", function(){
                        
                        var zoom = global.map.getZoom();   
                        var escala = global.map.getScale(); 
                         console.log('zoom>>>',zoom);
                         console.log('escala>>>',escala);
                        
                        $("#mapDiv_layer11").css('z-index',40);
                        $("#mapDiv_layer12").css('z-index',45);  

                        
                        var heatmapRenderer = new HeatmapRenderer({
                            colors: ["rgba(0, 209, 0,0)","rgb(255, 255, 0)","rgb(255,220, 46)","rgb(255,182, 18)", "rgb(255,151, 0)","rgb(255, 0, 0)"],
                            blurRadius: 5,
                        });
                        
                        var opacity=1;

                        
                        var chkMantener=document.getElementById('chkMantener').checked;

                        global.map.infoWindow.hide();
                        global.divHerramientas.style.display='none';
                        global.idBtnStreetMap.style.display='none';
                       
                        if(!chkMantener ) {
                           

                            if (zoom<8){
                                global.layerId=global.layersActivos[0];
                                $("#form-field-ambito").val('rdptos').change() ;

                            }

                            else if (zoom>=8 && zoom<=10){
                                (global.layersActivos.indexOf(1))>-1 ? global.layerId=1 : global.layerId=global.layerId;
                                $("#form-field-ambito").val('rprov').change();          

                            }
                            else if(zoom>10 && zoom<13){
                                (global.layersActivos.indexOf(2))>-1 ? global.layerId=2 : global.layerId = global.layerId;
                                $("#form-field-ambito").val('rdist').change();
                            }


                            else {

                                if(global.layersActivos.indexOf(7)>-1) {
                                    global.layerId=7;
                                    global.layerId = global.layerId;
                                    $("#form-field-ambito").val('seacoca').change();
                                } 
                            }
                            

                        
                        }

                        else{
                            /*Object.keys(global.layers).forEach(function(key){
                                (global.layers[key].zoomMaxLabels>=zoom && zoom>=global.layers[key].zoomMinLabels)?global.layers[key].layerFeature.setShowLabels(true):global.layers[key].layerFeature.setShowLabels(false);
                            });*/

                        }


                        if(zoom>=13){
                            (global.layersActivos.indexOf(7)<0)?ocultarLeyenda():true;
                            heatmapRenderer.blurRadius=10;
                            opacity=0.5;
                            $("#mapDiv_layer11").css('z-index',0);
                            $("#mapDiv_layer12").css('z-index',0);
                        }else{
                            mostrarLeyenda();
                        }

                        if(zoom>=16 ){
    
                                if(global.idCbxReporte.checked){
                                    global.divHerramientas.style.display='inline';
                                    //_borrarSeleccionFeatures();
                                }
                                global.idBtnStreetMap.style.display='inline';
                        }

                        //console.log('featureVisible',featureVisible);
                        
                        /*if(featureVisible){
                            console.log('cargar_leyenda');
                            crearLeyenda(global.layers[global.layerId].rangos,global.layers[global.layerId].colores,global.layerId,global.layers[global.layerId].fuente,global.layers[global.layerId].data);
                        } */  


                         heatmapFeatureLayer.setRenderer(heatmapRenderer);
                         heatmapFeatureLayer.setOpacity(opacity);
                            
                    });                     
                    
                    /**
                    En caso este activo
                    **/

                    var bodyLegend=$('#'+global.idLayerList);

                    /***activa o desactiva checkbox por scala***/
                    var actDesCapasEscala = function(escala){

                       $(".slider-down ul li").each(function(index,el){
                            var id=$(el).attr('id');
                            var maxScale=parseFloat($(el).attr('maxScale'));
                            var minScale=parseFloat($(el).attr('minScale'));

                            var idPadre=parseInt($(el).attr('id-padre'));
                            
                            
                            if(global.idGruposSelect2.indexOf(idPadre)==-1){
                                if(maxScale==0 && minScale==0)
                                    {$(el).css('display','block');}
                                else if (maxScale<=escala && minScale>=escala)
                                    {$(el).css('display','block');}
                                else{
                                    $(el).css('display','none');
                                    }
                            }
                        });


                    } 
                        
                    
                    var query = new Query();
                    var queryTask = new QueryTask(global.manzanasService);


                    global.map.on("click",_eventClick);


                    function _eventClick(evt){
                        if( global.idCbxReporte.checked &&  !(global.activeDraw))
                        {   
                            _eventReportes(evt);
                            global.idDivStreetMap.style.display='none';


                        }

                        else if(global.idCbxStreet.checked)
                        {
                            _eventVerStreetView(evt);
                            global.idDivStreetMap.style.display='inline';
                        }
                    }

                    function _eventReportes(evt){
                        
                            var currentLayers = [];                            
                            global.listManzanas = [];
                            currentLayers = currentLayers.concat(global.limitesAdmin.layerInfos.filter(layer => global.limitesAdmin.visibleLayers.includes(layer.id)).map(layer => layer.name));
                            currentLayers = currentLayers.concat(global.listLayers.layerInfos.filter(layer => global.listLayers.visibleLayers.includes(layer.id)).map(layer => layer.name));
                            var point = evt.mapPoint;
                            var source = new proj4('EPSG:3857');
                            var dest = new proj4('EPSG:4326');
                            var xy = proj4(source, dest).forward([point.x, point.y]);
                            var zoom = global.map.getZoom();

                            
                            var listManzanas={'ids':[],'tipoLayer':'',anio:''};
                            var listPuntos={'ids':[],'tipoLayer':'',anio:''};

                            identifyParams.geometry = evt.mapPoint;
                            identifyParams.mapExtent = global.map.extent;
                                           
                            identifyParamsPuntos.geometry = evt.mapPoint;
                            identifyParamsPuntos.mapExtent = global.map.extent;

                            //console.log('zoom1', global.map.getZoom());
                            //console.log('zoom2', zoom);
                            
                            
                            identifyParamsUbigeo.mapExtent = global.map.extent;
                            identifyParamsUbigeo.geometry = evt.mapPoint;


                            


                    /*var identifyParams = new IdentifyParameters();
                    identifyParams.returnGeometry = true;
                    identifyParams.layerIds = [global.idCapaManzanas2,global.idCapaJurisdiccion2018];
                    identifyParams.tolerance = 3;
                    identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;


                    var identifyParamsPuntos = new IdentifyParameters();
                    identifyParamsPuntos.returnGeometry = true;
                    identifyParamsPuntos.layerIds = global.layerIds.comisarias.concat(global.layerIds.penales);
                    identifyParamsPuntos.tolerance = 3;*/
                            var showZonasCocaleras = global.limitesAdmin.visibleLayers.includes(global.idCapaZonasCocaleras);

                            
                            if(showZonasCocaleras){

                                /*
                                identifyParams.layerIds = [global.idCapaZonasCocaleras,global.idCapaManzanas2,global.idCapaJurisdiccion2018];
                                identifyParams.tolerance = 6;
                                identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
                                */

                                identifyParams.layerIds = [global.idCapaZonasCocaleras];
                                identifyParams.tolerance = 8;
                                identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_TOP;


                                identifyTask.execute(identifyParams).addCallback(function(response){
                                    if(response.length>0){ 
                                        var feature=response[0].feature;
                                        var id =parseInt(feature.attributes.Id);
                                        console.log('feature>>>',feature) ;
                                        load_coca_report(id);
                                        
                                    }
                                    
                                });
                                
                            }else if(zoom>=6 && zoom<=15){
                                if(zoom>=6 &&zoom<8){ identifyParamsUbigeo.layerIds=[2];}
                                else if(zoom>=8 &&zoom<10){identifyParamsUbigeo.layerIds=[3];}
                                else if(zoom>=10 &&zoom<=15){identifyParamsUbigeo.layerIds=[4];}

                                if (global.listLayers.visibleLayers.includes(global.idCapaJurisdiccion2018) && (zoom>=10 && zoom<=15) ){
                                    console.log('zoom>>>',zoom,'reportes jurisdiccion');
                                    abrirReporte(xy[0],xy[1], zoom, ['Jurisdicción 2018']);             
                                }else{
                                    identifyTaskUbigeo.execute(identifyParamsUbigeo).addCallback(function (response) {
                                        console.log('zoom>>>',zoom,'reportes ubigeos');
                                        abrirReporteByUbigeo(response);
                                    });
                                }                                    
                            }

                            /*
                            else if(zoom>=13 && zoom<=15){
                                //identifyParams.layerIds = [global.idCapaJurisdiccion2018];
                                //identifyParams.tolerance = 6;
                                //identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_TOP;
                                //identifyTask.execute(identifyParams).addCallback(function (response) {
                                    currentLayers = currentLayers.concat(["Jurisdicción 2018"]);
                                    console.log('zoom>>>',zoom,'reportes jurisdiccion');
                                    console.log(xy,zoom,currentLayers);
                                    abrirReporte(xy[0],xy[1], zoom, currentLayers);              

                                //});
                            }
                            */
                            else if(zoom>15){
                                identifyTaskPuntos.execute(identifyParamsPuntos).addCallback(function (response) {
                                    var respuesta ={ 'ids':[],'tipoLayer':'',anio:''};
                                    var layerId = 0 ;
                                    var tipoLayer='';
                                    var feature;
                                    var id=0;
                                    if(response.length>0){
                                        feature=response[0].feature;    
                                        layerId = response[0].layerId;    

                                        if ( global.layerIds.comisarias.indexOf(layerId)>-1){
                                            tipoLayer='comisarias'
                                            id=feature.attributes.id_n;
                                        }
                                        else if( global.layerIds.penales.indexOf(layerId)>-1){
                                            tipoLayer='penales'
                                            id=feature.attributes.id_inpe;
                                        }

                                        respuesta.ids=[id];
                                        respuesta.tipoLayer=tipoLayer;
                                        respuesta.anio=getAnio_ARCGIS();

                                        //_abrirReporte2(respuesta) ; 

                                    } else {

                                        identifyParams.layerIds = [global.idCapaManzanas2];
                                        identifyParams.tolerance = 6;
                                        identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_TOP;

                                        identifyTask.execute(identifyParams).addCallback(function (response) {
                                            var respuesta ={ 'ids':[],'tipoLayer':'',anio:''};
                                            var layerId = 0 ;
                                            var feature;
                                            //var showJurisdiccion = false;
                                            
                                            var showJurisdiccion = global.listLayers.visibleLayers.includes(global.idCapaZonasCocaleras);

                                            //console.log(response);
                                            
                                            if(response.length>0){

                                               
                                                if(showJurisdiccion){
                                                    currentLayers = currentLayers.concat(['Jurisdicción 2017']);
                                                    console.log('zoom>>>',zoom,'reportes jurisdiccion');
                                                    abrirReporte(xy[0],xy[1], zoom, currentLayers);                                                 
                                                }else {
                                                    feature=response[0].feature;  
                                                    console.log("response: ",response);
                                                    //respuesta.ids=[feature.attributes.Mz];
                                                    //respuesta.ids=[feature.attributes.LLAVE_IDMANZANA.trim()];

                                                    //mzna = feature.attributes.LLAVE_IDMANZANA;
                                                    mzna = feature.attributes.idmanzana;                                                   

                                                    respuesta['manzanas']=[feature.attributes.idmanzana.trim()];

                                                    //console.log("juan 01", respuesta);
                                                    //respuesta.tipoLayer='manzanas';
                                                    //respuesta.anio=getAnio_ARCGIS();
                                                    
                                                    _abrirReporte2(respuesta) ;  
                                                }



                                            }else{
                                                //abrirReporte(xy[0],xy[1], zoom, currentLayers); 
                                                /*AQUI PONER NO SE ENCONTRÓ*/
                                            }
                                            
                                        });
                                    }
                                });    
                           
                            }

                            /* else {
                                abrirReporte(xy[0],xy[1], zoom, currentLayers);
                            }*/
                      
                    }

                    function _eventVerStreetView(evt){
                        var nuevoPunto ;
                        var latitude = evt.mapPoint.getLatitude();
                        var longitude = evt.mapPoint.getLongitude();
                        var angle=0;

                        global.idDivStreetMap.style.display='inline';
                        global.pano = new google.maps.StreetViewPanorama(
                        document.getElementById(global.idStreetMap), {
                            position: {lat: latitude, lng: longitude},
                        });


                        global.pano.addListener('position_changed',function(){
                            var x = global.pano.getPosition().lng();
                            var y = global.pano.getPosition().lat();
                            var source = new proj4('EPSG:3785');   //source coordinates will be in Longitude/Latitude, WGS84 arcgis
                            var dest = new proj4('EPSG:4326');    // cordenadas de google maps
                            var xy = proj4(source, dest).inverse([x, y]);
                            nuevoPunto = new Point(xy[0], xy[1], global.map.spatialReference);
                            pintarLocalizacion(nuevoPunto,angle);
                            global.map.centerAt(nuevoPunto);
                        });

                        global.pano.addListener('pov_changed', function() {

                            angle = global.pano.getPov().heading;
                            pintarLocalizacion(pt, angle);

                        });

                        pintarLocalizacion(evt.mapPoint,angle);
                        global.map.centerAt(evt.mapPoint);
                    }

                    var  pintarLocalizacion = function (position, angle){
                        if (global.graphic!==undefined){
                            global.map.graphics.remove(global.graphic);
                        }
                        var pointSymbol = new PictureMarkerSymbol({
                            "url":"../images/marker2.png",
                            "height":20,
                            "width":20,
                            "angle": -angle,
                         });
                        var graphic = new Graphic(position, pointSymbol);
                        global.map.graphics.add(graphic);
                        global.graphic = graphic;
                    }

                    $("#descarga").on('click',function(){
                        $("#listWidgest").hide();
                        $('#map-modal .modal-body').html("<p>Generando información por favor espere... <i class='fa fa-spin fa-refresh'></i> </p>");
                        $('#map-modal').modal('show');
                       html2canvas(document.getElementById("content"), {
                            onrendered: function (canvas) {
                                canvas.style.width = '100%';
                                canvas.style.height = '100%';
                                canvas.download = 'map.png';
                                canvas.id = "canvas_mapa";
                                canvas.setAttribute("crossorigin", "");
                                $('#map-modal .modal-body').html(canvas);
                                $('.tree-selectable').css('overflow-y', '');
                            },
                            allowTaint: true,
                            useCORS: false
                        });
                    });

                    $('#map-modal').on('hidden.bs.modal', function () {
                        $("#listWidgest").show();
                    }); 

                    $("body").on('change', '#elegir_categoria_cpv2017', function(e) {

                        var codigo = $(this).val();
                        var ubigeo = ubigeo_reporte;
                        var url = CI.api_url + "/indicadores/?ubigeo="+ubigeo+"&categoria="+codigo;
                        var tipo = $(this).attr("data-tipo");
                        if (tipo == "rango") { 
                            var query = JSON.parse(ubigeo);
                            query["categoria"]=codigo;

                            INDICADORES.init({}, function (obj) {

                            obj.getIndicadoresUnpivot(query, function (obj2) {
                                var datosManzanas = obj2.createTable({
                                    "table": {
                                        "id": "tblreport",
                                        "class": "table table-bordered table-hover"
                                    }
                                });
                                


                                var modal = $("#divModalReporte").find('.modal-body');

                                /**
                                modal.html(data);
                                $("#hdata").val(data);
                                modal.find('#elegir_categoria_cpv2017 option[value="'+codigo+'"]').attr('selected', 'selected');
                                **/

                                $("#datosManzanas").html(datosManzanas);
                                $("#hdata").val(datosManzanas);
                                //$("#hdata").val();
                                modal.find('#elegir_categoria_cpv2017 option[value="'+codigo+'"]').attr('selected', 'selected');


                            });


/*

                           


                            $("#datosManzanas").html(datosManzanas);
                            
                            $("#reportito").css("max-height",(altoTot-472)+"px");
                            $("#reportito").css("overflow","auto");
                            $("#tabManzanas").css("display","block");
                            $("#datosManzanas").css("display","block");
                            
                            tableheadfixed("#reportito");
*/

                        });
                        
                        }else {
                            if (ubigeo.length > 6) {
                                url = CI.api_url + "/indicadores/manzana/?u="+ubigeo+"&categoria="+codigo;
                                console.log('URL MANZANA', url);
                            }
                            var categorias = {
                                "01": "P010100",
                                "02": "P020100",
                                "03": "P030100",
                                "05": "P050100",
                                "06": "P060100"
                            };

                            var juris = $(this).attr('data-juris');
                            if(juris){
                                url = CI.api_url + "indicadores/jurisdiccion/?u="+juris+"&categoria="+codigo;
                            }

                            $.ajax({
                                url: url,
                                type: "GET",
                                dataType: "JSON",
                                success : function(datos) {
                                    var html = '';
                                    $.each(datos, function(i,indicador){
                                        html += '<tr data-codigo="'+indicador.cod_tematico+'">';
                                        if (indicador.cod_nivel_tematico == 1) {
                                                html += '<th colspan="3" class="th_categoria">'+indicador.cod_tematico__titulo+'</th>';
                                        }else {
                                            if (indicador.cod_nivel_tematico == 2) {
                                                html += '<th class="th_subcategoria item_indicador" data-codigo="'+indicador.cod_tematico+'">'+indicador.cod_tematico__titulo+'</th>';
                                            }else {
                                                html += '<td class="td_indicador item_indicador" data-codigo="'+indicador.cod_tematico+'">'+indicador.cod_tematico__titulo+'</td>';
                                            }
                                            html += '<td style="text-align: right;" nowrap>'+ (indicador.absoluto == null ? '' : formatNumber(indicador.absoluto))+'</td>';
                                            html += '<td style="text-align: right;">'+ (indicador.porcentaje == null ? '' : formatNumber(indicador.porcentaje)) +'</td>';
                                        }
                                        html += '</tr>';
                                    });

                                    $("#tblreport tbody").html(html);
                                    $("#hdata").val(html);
                                },
                                error: function(obj, status, othobj) {

                                }
                            });
                        }
                        

                    });


                    $("body").on('change', '#elegir_categoria_cpv2017_2', function(e){
                       var categoria = $(this).val();
                       var tabla = $("body").find("#tblreport");
                       $(tabla).find(".trtabla").hide();
                       $(tabla).find(".categoria_"+categoria).show();
                    });


                    $("body").on('click', '.item_indicador', function(e) {
                        var codigo = $(this).attr('data-codigo');
                        var uiDocuments = {
                            "metadato_titulo": $("#metadato_titulo"),
                            clases: {
                                "meta_def": $(".contenedorMetadatos .meta_def"),
                                "meta_alg": $(".contenedorMetadatos .meta_alg"),
                                "meta_var": $(".contenedorMetadatos .meta_var"),
                                "meta_um": $(".contenedorMetadatos .meta_um"),
                                "meta_cg": $(".contenedorMetadatos .meta_cg"),
                                "meta_pt": $(".contenedorMetadatos .meta_pt")
                            }
                        };
                        $.ajax({
                            url: CI.api_url + "dimensiones/tematico/"+codigo+"/",
                            type: "GET",
                            dataType: "JSON",
                            success : function(data) {
                                var metadata = data;
                                uiDocuments.metadato_titulo.html(metadata.titulo);
                                uiDocuments.clases.meta_def.children('p').html(metadata.definicion);
                                uiDocuments.clases.meta_alg.children('.eq-c').html(metadata.algoritmo);
                                uiDocuments.clases.meta_var.children('p').html(metadata.variables);
                                uiDocuments.clases.meta_um.children('p').html(metadata.unidad_medida);
                                uiDocuments.clases.meta_cg.children('p').html(metadata.cobertura_geografica);
                                uiDocuments.clases.meta_pt.children('p').html(metadata.presiciones_tecnicas);
                            },
                            error: function(obj, status, othobj) {

                            }
                        });
                    });

                    global.idCbxStreet.addEventListener('change',function(){
                        var checked=global.idCbxStreet.checked;
                        _eventChangeCbxStreet(checked);
                    });

                     global.idCbxReporte.addEventListener('change',function(){
                        var checked=global.idCbxReporte.checked;
                        _eventChangeCbxReporte(checked);

                    });

                    var destruirTodosInfoTemplates = function () {
                        global.map.infoWindow.hide();
                        global.mouseOverActivado=false;
                        var dynamicMapServiceLayer=global.listLayers;
                        var infoTemplates = {};
                        for (var i = 0; i < 200; i++) {
                            infoTemplates[i] = '';
                        }
                        dynamicMapServiceLayer.setInfoTemplates(infoTemplates);
                        Object.keys(global.layers).forEach(function(key){
                            global.layers[key].layerFeature.setInfoTemplate('');
                        });
                        
                    }


                    var activarTodosInfoTemplates = function () {
                        var dynamicMapServiceLayer=global.listLayers;
                        var infoTemplates = {};
                        var template = {
                            infoTemplate: new InfoTemplate("Detalle", getPointTemplate ),
                            layerUrl: null
                        }

                        for (var i = 0; i < 200; i++) {
                            infoTemplates[i] = template;
                        }
                        
                        
                        dynamicMapServiceLayer.setInfoTemplates(infoTemplates);
                        Object.keys(global.layers).forEach(function(key){
                            info=global.layers[key].infoTemplate;
                            global.layers[key].layerFeature.setInfoTemplate(info);
                        });
                        
                        if(global.ambito!=6)global.mouseOverActivado=true;
                    }





                    var _eventChangeCbxReporte = function(op){

                        var info ='';
                        var zoom = global.map.getZoom();
                        global.divHerramientas.style.display='none';
                        
                        if(op){
                            destruirTodosInfoTemplates();
                            global.clickLayer=true;
                        }

                        else{

                            activarTodosInfoTemplates();
                            global.clickLayer=false;
                        }
                        
                                   
                        if(zoom>=16 && op){
                            global.divHerramientas.style.display='inline';    
                            global.idCbxStreet.checked=false;
                            _eventChangeCbxStreet(false);

                        }

                        if(!op){
                            //console.log("option>>>",op);    
                            global.editToolbar.deactivate();
                            global.editToolbarEstado=false;
                            _borrarSeleccionFeatures();
                             global.map.graphics.remove(global.graphic);
                            finalizarDibujo();
                            $("#clear").trigger("click");
                        }

            
                    }

                    var _eventChangeCbxStreet = function (checked){
                        if (checked){
                            global.idCbxReporte.checked=false;
                            _eventChangeCbxReporte(false);     
                        }

                        else
                        {   
                            global.idDivStreetMap.style.display='none';
                            if(global.graphic!==undefined) global.map.graphics.remove(global.graphic);
                        }
                    }


                    var _pintarNuevaSeleccionFeatures= function(features){
                        

                        features.forEach(function(feature){
                            var feature = feature.feature;
                            var codigo=feature.attributes.LLAVE_IDMANZANA;
                            
                            var graphic = new Graphic(feature.geometry, selectionSymbol);
                            graphic.setAttributes(feature.attributes);
                            
                            //global.listaSeleccionFeatures.push(graphic);
                            global.map.graphics.add(graphic);
                            codigosList.push(codigo);

                        });

                        /*

                        features.forEach(function(feature){
                            var feature = feature.feature;
                            var codigo=feature.attributes.LLAVE_IDMANZANA;
                            
                            var graphic = new Graphic(feature.geometry, selectionSymbol);
                            graphic.setAttributes(feature.attributes);
                            
                            global.listaSeleccionFeatures.push(graphic);
                            global.map.graphics.add(graphic);
                            codigosList.push(codigo);
                            
                        });
                        
                        options.ids=codigosList;
                        options.tipoLayer='manzanas';
                        _abrirReporte2(options);

                        */

                    }


                    loadIndicador();
                });

            //loadIndicador();
        };
		
        /** indicadores */

        

        $(".close").on("click",function(){console.log('cerrar')});

        var _abrirReporte2 = function(options){
                $("#divModalReporte").find('.modal-body').html("Cargando...");
                $('#divModalReporte').modal('show');

                var separator = '';
                var url = BASE_URL + 'map/getInfoManzana2';
                var codigo="";
                var array=[];
                    
                var query = {};

                var datosDelitos='';
                var datosManzanas='';

                /**Formulario inicial***/

                var layout = '<style>';
                            layout += 'thead tr th{';
                            layout += '    background-color: #F5F5F5 !important;';
                            layout += '    padding:1px 8px !important;';
                            layout += '}';
                            layout += 'tbody tr td,th{';
                            layout += '    border-color: #aaa !important;';
                            layout += '    padding:1px 8px !important;';
                            layout += '}';
                            layout += '.th-cabecera {';
                            layout += '    color:#4285f4';
                            layout += '}';
                            layout += '</style>';
                            layout += '<div class="row-fluid">';
                            layout += '   <div class="span12">';
                            layout += '    <div class="tabbable">';
                            layout += '    <ul class="nav nav-tabs" id="tabManzana">';
                            layout += '   <li class="active">';
                            
                            
                            layout += '   <a  id="tabManzanas" data-toggle="tab" href="#datosManzanas" style="display:none">';
                            layout += '    Manzana';
                            layout += '    </a>';
                            layout += '    </li>';
                            layout += '   <li  >';
                            layout += '   <a id="tabDelitos" data-toggle="tab" href="#datosDelitos"  style="display:none">';
                            layout += '   Delitos';
                            layout += '   </a>';
                            layout += '    </li>';


                            layout += '    </ul>';
                            layout += '    <div class="tab-content">';
                            layout += '    <div id="datosManzanas" class="tab-pane"  >';
                            //layout += tableManzanas;
                            layout += '</div>';
                            layout += '    <div id="datosDelitos" class="tab-pane"  >';
                            
                            layout += '</div>';                            
                            layout += '</div>';
                            layout += '</div>';
                            layout += '</div>';
                            layout += '</div>';

                        
                $("#divModalReporte").find('.modal-body').html(layout);
                

                if(options.hasOwnProperty('manzanas')){

                    var ids= options['manzanas'];

                    $.each(options['manzanas'], function(i,v){
                        v = (v === undefined) ? '' : v;
                        array.push(v);
                    });

                    query["u"]=array
                    query["categoria"]="01";

                    if (options['manzanas'].length>1){
                        codigo=query  
                    }

                    else{
                        codigo=options['manzanas'][0];  
                    }

                    //console.log("JUANT QUERY", query);

                    INDICADORES.init({}, function (obj) {
                        obj.getIndicadoresUnpivot(query, function (obj2) {

                            var altoTot = $(window).height();
                            datosManzanas = obj2.createTable({
                                "table": {
                                    "id": "tblreport",
                                    "class": "table table-bordered table-hover"
                                },
                                "codigo": codigo
                            });

                            $("#datosManzanas").html(datosManzanas);
                            $("#hdata").val(datosManzanas);

                            $("#reportito").css("max-height",(altoTot-472)+"px");
                            $("#reportito").css("overflow","auto");
                            $("#tabManzanas").css("display","block");
                            $("#datosManzanas").addClass("active");
                            tableheadfixed("#reportito");

                        }, function(obj, err, otherr){
                            $("#divModalReporte").find('.modal-body').html('No se encontró manzana');
                            console.log('error:' + err);
                        });
                    });

                }

                else{
                    $("#tabManzanas").css("display","none");
                    $("#datosManzanas").removeClass( "active");
                }


                if(options.hasOwnProperty('delitos')){
                    var total =0;
                    datosDelitos = '<table id="tblreport" class="table table-bordered table-hover" style="padding-top: 2px">';
                            datosDelitos += '    <thead>';
                            datosDelitos += '    <tr style="height: 35px">';
                            datosDelitos += '    <th>DESCRIPCION DEL DELITO POR MODALIDAD</th>';
                            datosDelitos += '<th style="text-align: center">CANTIDAD</th>';
                            datosDelitos += '    </tr>';
                            datosDelitos += '    </thead>';
                            datosDelitos += '    <tbody>';
                            
                            $.each(options['delitos'], function (k,v) {
                                total += _round(v.Value, 1);
                                datosDelitos += '<tr>';
                                datosDelitos += '<td class="td_indicador item_indicador subniveli3">'+v.modalidad+'</td>';
                                datosDelitos += '<td style="text-align: right;">'+formatNumber(_round(v.Value, 1))+'</td>';
                                datosDelitos += '</tr>';
                            });

                            datosDelitos += '<tr>';
                            datosDelitos += '<td class="td_indicador item_indicador subniveli3">TOTAL DE DELITOS</td>';
                            datosDelitos += '<td style="text-align: right;">'+total+'</td>';
                            datosDelitos += '</tr>';

                            datosDelitos += '</tbody>';
                            datosDelitos += '</table>';
                    $("#datosDelitos").html(datosDelitos);
                    $("#hdata").val(datosDelitos);
                    $("#tabDelitos").css("display","block");
                    $("#datosDelitos").addClass("active");
                }

                else{
                    $("#datosDelitos").css("display","none");
                    $("#datosDelitos").removeClass( "active");
                }


                $("#tabManzana > li").click(function(e){
                    var id_tab=$(this).find("a").attr('id');
                    if(id_tab=='tabManzanas'){
                        $("#hdata").val(datosManzanas);
                    }
                    else if(id_tab=='tabDelitos'){
                        $("#hdata").val(datosDelitos);
                    }


                });
                /*
        var report = $("#tabManzana > li.active").data().report;
        if(report){
            var codigo = $("#reporte_codigo").val(); 
            var anio = $("#reporte_anio").val(); 
            var url = BASE_URL + 'reporte_controller/export/'+report+'/'+anio+'/'+codigo; 
            console.log(url);
            var link = document.createElement("a");
            link.download = 'Reporte';
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
        }else{
            console.log('otra exportacion');
            $("#FormularioExportacion").submit();
        }    



                */





        }

        var _borrarSeleccionFeatures= function(){
            if(global.graphicDraw!==undefined){
                global.map.graphics.remove(global.graphicDraw);
            }
            
            global.listaSeleccionFeatures.forEach(function(graphic){
                global.map.graphics.remove(graphic);
            });
            global.listaSeleccionFeatures=[];
        }

        var cambiarLayer = function(id){
            var id=parseInt(id);
            Object.keys(global.layers).forEach(function(index){

                 global.layers[index].layerFeature.setVisibility(false);
                
            });
            global.layers[id].layerFeature.setVisibility(true);
            global.layerFeature=global.layers[id].layerFeature;
        };

        var actualizarMapa;

        actualizarMapa = function (options) {
                require([
                        "esri/map", "esri/geometry/Extent",
                        "esri/layers/FeatureLayer", "esri/InfoTemplate", "esri/dijit/Legend",
                        "esri/renderers/SimpleRenderer", "esri/Color",
                        "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",
                        "esri/renderers/UniqueValueRenderer","esri/renderers/HeatmapRenderer",
                        "dojo/domReady!"
                    ],

                    function (Map, Extent, FeatureLayer, InfoTemplate, Legend,
                              SimpleRenderer, Color, SimpleFillSymbol, SimpleLineSymbol, UniqueValueRenderer,HeatmapRenderer) {


                        var idLayer = options.idLayer;
                        
                        if(options.data!==undefined && options.data.data.length>0){
                            //console.log('options.data.length>>>',options.data);
                            var uniqueValuesInfos;
                            var data = options.data;
                            var layerRenderer;
                            var layer = options.layer.layerFeature;
                            var variable = options.variable;

                            uniqueValuesInfos = obtenerValoresPintadoRangosVar(data.data, global.rangos, data.max, global.rangos.length, options.colores);
                            
                            var defaultSymbol =  new SimpleFillSymbol(
                                    "solid"
                                    //, new SimpleLineSymbol("solid", new Color("#656565"), 1)
                                    , null
                                    , new Color([global.colorGris])
                                );

                            layerRenderer = new UniqueValueRenderer({
                                "type": "uniqueValue",
                                "field1": global.layers[idLayer].field1,
                                "uniqueValueInfos": uniqueValuesInfos, 
                                "defaultSymbol":defaultSymbol
                            });
                            
                            global.layers[idLayer].rangos=options.rangos;
                            global.layers[idLayer].colores=options.colores;
                            global.layers[idLayer].uniqueValuesInfos= uniqueValuesInfos;
                            global.layers[idLayer].fuente= data.fuente;
                            global.layers[idLayer].data= data.data;
                            
                            if(idLayer==global.layerId){

                                crearLeyenda(global.layers[idLayer].rangos,options.colores,idLayer,data.fuente,data.data);    
                            }

                            
                            var infoTemplate = new InfoTemplate();

                            infoTemplate.setTitle(function(target){
                                return target.attributes[global.layers[idLayer].label_field];
                            });

                            var addRow = function(label, field){
                            return field ? ( (''+field).trim() != '' ? '<b>' + label + ': </b>'+ (''+field).toUpperCase() + '<br>' : '' ) : '';
                            };

                            infoTemplate.setContent(function(target){
                                var layer =  data.data.find(x => x.codigo == target.attributes[global.layers[idLayer].field1] );
                                var html = '';
                                html +=addRow('Variable',data.titulo);
                                html +=addRow('Valor', layer.valor);
                                return html;                            
                            });

                            global.layers[idLayer].infoTemplate = infoTemplate;
                            global.layers[idLayer].layerFeature.setRenderer(layerRenderer);
                            global.layers[idLayer].layerFeature.redraw();
                            global.layers[idLayer].layerFeature.setInfoTemplate(infoTemplate);

                            global.mouseOverActivado=true;
                        }

                        else if(options.data!==undefined && options.data.data.length==0) {
                            global.layers[idLayer].rangos=options.rangos;
                            global.layers[idLayer].colores=options.colores;
                            global.layers[idLayer].fuente= options.fuente;
                            global.layers[idLayer].data= options.data;
                            global.map.infoWindow.hide();
                            global.layers[idLayer].layerFeature.setInfoTemplate('');
                            global.mouseOverActivado=false;                           
                        }
                        else{
                           global.map.infoWindow.hide();
                           global.layers[idLayer].layerFeature.setInfoTemplate('');
                           global.mouseOverActivado=false; 
                        }
                    


                        
                        function crearSimbolo(color, borderLine) {
                            return new SimpleFillSymbol(
                                "solid"
                                , new SimpleLineSymbol("solid", new Color("#656565"), borderLine)
                                , new Color(color)
                            )
                        }                      



                        function obtenerValoresPintadoRangosVar(arrayData, rangos, max, cantNiveles,colores) {
                            var uniqueValuesInfos = [];
                            var j = 0;
                            var valor = undefined;
                            var codigo = '';
                            var valueInfo = {};
                            var color = '';
                            /**excepcion lima**/

                            var tieneLima=arrayData.filter(el=>parseInt(el.codigo)==15).length;
                            
                            if(tieneLima>0){

                                for (var i=26;i<28;i++){
                                    valueInfo = {
                                        "value": String(i),
                                        "symbol": crearSimbolo([0,0,0,0], 1)
                                    };    
                                    uniqueValuesInfos.push(valueInfo);
                                }
                                

                            }

                            else{

                                 valueInfo = {
                                        "value": String(15),
                                        "symbol": crearSimbolo([0,0,0,0], 1)
                                 };    
                                 uniqueValuesInfos.push(valueInfo);
                                

                            }

                          

                            arrayData.forEach(function (el) {
                                codigo = el.codigo;
                                //valor = parseFloat(el.valor);
                                //valor = Math.round(el.valor*10)/10;
                                valor = el.valor;

                                if (max === valor) {
                                    color =  colores[cantNiveles - 1];
                                    el['estrato'] = cantNiveles - 1;
                                    el['color'] = color;
                                    valueInfo = {
                                        "value": codigo,
                                        "symbol": crearSimbolo(color, 1)
                                    };
                                    uniqueValuesInfos.push(valueInfo);
                                }

                                else if (!(valor==null || valor==undefined)) {
                                    for (j = 0; j < cantNiveles; j++) {
                                        if(rangos[j].max==undefined ){

                                            if (rangos[j].min == valor) {
                                                color = colores[j];
                                                el['estrato'] = j;
                                                el['color'] = color;

                                                valueInfo = {
                                                    "value": codigo,
                                                    "symbol": crearSimbolo(color, 1)
                                                };
                                                uniqueValuesInfos.push(valueInfo);
                                                break;
                                            }
                                        }
                                        else{
                                            if (rangos[j].min <= valor && rangos[j].max >= valor) {
                                                color = rangos[j].fixed ? rangos[j].color : colores[j];
                                                el['estrato'] = j;
                                                el['color'] = color;

                                                valueInfo = {
                                                    "value": codigo,
                                                    "symbol": crearSimbolo(color, 1)
                                                };
                                                uniqueValuesInfos.push(valueInfo);
                                                break;
                                            }
                                        }

                                        
                                    }
                                }
                                else{
                                    el['estrato'] = -1;
                                    el['color'] = global.colorGris;
                                    valueInfo = {
                                                "value": codigo,
                                                "symbol": crearSimbolo(global.colorGris, 1)
                                            };
                                    uniqueValuesInfos.push(valueInfo);   
                                }


                            });
                            return uniqueValuesInfos;
                        
                        }

                        
                      
                    });
        };

        var resetMapa;

        resetMapa = function (options) {
                require([
                        "esri/map",                        
                        "esri/renderers/SimpleRenderer", "esri/Color",
                        "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",                        
                        "dojo/domReady!"
                    ],

                    function (Map, SimpleRenderer, Color, SimpleFillSymbol, SimpleLineSymbol) {
                        
                        global.map.infoWindow.hide();
                        Object.keys(global.layers).forEach(function(index){
                            

                            var defaultSymbol = new SimpleFillSymbol(
                                "solid"
                                , new SimpleLineSymbol("solid", new Color("#6e6e6e"), 1)
                                , new Color(global.layers[index].defaultColor)
                            )

                            layerRenderer = new SimpleRenderer(defaultSymbol);
                            global.layers[index].layerFeature.setRenderer(layerRenderer);
                            global.layers[index].layerFeature.redraw();                  
                            global.layers[index].layerFeature.setInfoTemplate("");

                        });

                        ocultarLeyenda();
                        global.mouseOverActivado=false;

                    });
         };



        var crearRangos;
        crearRangos = function(arrayData,cant,max,cantNiveles){
                var rangos=[];
                var i=0;
                var el= {};
                var index_acu=0;
                var index_min=0;
                var index_max=0;
                var coeficiente=parseInt(Math.trunc(parseInt(cant)/parseInt(cantNiveles)));
                var modulo=parseInt(cant)%parseInt(cantNiveles);

                for (i=0;i<cantNiveles;i++){
                    el= {};
                    index_min=index_acu;
                    if(modulo>0) {
                        index_acu=index_acu+(coeficiente+1);
                        modulo--;
                    }
                    else{
                        index_acu=index_acu+coeficiente;
                    }

                    index_max=index_acu;
                    el.min=arrayData[index_min];
                    if(!(i==(cantNiveles-1)))
                        el.max=arrayData[index_max];
                    else
                        el.max=max;
                    rangos.push(el);
                }
                return rangos;
        };
		

        var  getTituloLegenda;
        getTituloLegenda = function(showAmbito=true, showAnio=true) {

            
            var indicador=($("#form-field-indicador :selected").val())?$("#form-field-indicador :selected").html():'' ;
            var ambito =($('#form-field-ambito :selected').val())?$('#form-field-ambito :selected').html():'';
            var anio =($('#spinner1 :selected').val())?$('#spinner1 :selected').html():'';

            var titulo = indicador + (showAmbito ? (' '+ambito) : '') + (showAmbito ? (' '+anio) : '');

            return titulo;

        }



        var crearLeyenda;
        crearLeyenda=function(rangos,colores,idLayer,fuente,data) {
            console.log('rangos', rangos);
            console.log('colores', colores);
            console.log('idLayer', idLayer);
            console.log('fuente', fuente);
            console.log('data', data);
            var sinDatos=0;
            var cantDatos=0;
            var html='';
            var bodyLegendaVar2=document.getElementById(global.idLegendBody);

            var fixed = rangos.some(x=>x.fixed);

            if( !($("#form-field-indicador").val()) || global.map.getZoom() > 12 ) {
                return;
            }

            document.getElementById("legendTitulo").innerHTML=getTituloLegenda(!fixed, !fixed);
            
            if(data!=undefined){
                html='<table><tbody>';
                
                document.getElementById(global.idLegend).style.visibility = "visible";
                $("#"+global.idLegendDiv).show();

                bodyLegendaVar2.classList.add("esriLegendLayer");
                bodyLegendaVar2.innerHTML = "";
                for (var x=(rangos.length-1);x>=0;x--){
                
                    var el=rangos[x];
                    var label="";
                   
                    label = (el.max == undefined) ? formatNumber(el.min, el.decimals) : "De " + formatNumber(el.min, el.decimals) + " a " + formatNumber(el.max, el.decimals);
                    //html+='<tr> <td style="width:20%; opacity: 1; background-color:'+colores[x]+';  width:20px;height:20px" ></td>';
                    html+='<tr> <td style="width:20%; opacity: 1; background-color:'+ (el.fixed ? el.color : colores[x]) +';  width:20px;height:20px" ></td>';
                    html+='<td style="width:80% ">'+label+'</td></tr>';

                }

                
                (data!==undefined & data.length>0)?sinDatos=data.filter(x=>x.valor==null).length:sinDatos=0;
                (data!==undefined & data.length>0)?cantDatos=data.length:canDatos=0;

                if(idLayer>0 || (idLayer==0 && sinDatos>0)  || (idLayer==0 && cantDatos<25) ) {
                    html+='<tr><td style="width:20% opacity: 1; background-color:'+global.colorGris+';  width:20px;height:20px" ></td>';
                    html+='<td style="width:80% ">' + (fixed ? 'No aplica' : 'Sin datos') + '</td></tr>';
                }

                html+='</tbody></table>';
                html+='<div class="fuenteLeyenda">';
                html+=(fuente ? '<strong>Fuente: </strong>' + fuente : '');
                html+='</div>';
            }

            
           
            bodyLegendaVar2.innerHTML =html;   
            
            return bodyLegendaVar2;
        }

        var limpiarNulls=function(array_data){
            var resp=[];
            array_data.forEach(function(el){
                if (!(el==null || el==undefined)){
                    resp.push(el);
                }
            });
            return resp;
        }

        var obtenerDataVariable;
        obtenerDataVariable = function (anio,idLayer, variable, callback) {
            $.ajax({
                    url: global.urlService.concat(  '/',anio,'/',idLayer , '/', variable , '/'),
                    success: function (data) {
                        callback(data);
                    }
            });
        };

        var eventCambioVariable=function(anio,variable,layersActivos,capas,titulo){
            var keysColores=Object.keys(global.colores);
            var colores=[];
            
            global.layersActivos=layersActivos;

            
            if(keysColores.indexOf(String(variable))>-1) { 
                //colores=global.colores[String(variable)];
                colores=global.STATIC[String(variable)].colores;
            }
            else{
                //colores=global.colores['default'];
                colores=global.STATIC['default'].colores;
            }


            Object.keys(global.layers).forEach(function(key){
                
                var layer =global.layers[key].layerFeature;
                var idLayer=parseInt(key);
                var options = {};
                var checkMantener= $('#chkMantener').prop('checked');

                if (layersActivos.indexOf(idLayer)>-1 && 
                    global.idLayersTematicosEstaticos.indexOf(idLayer)<0

                    ){
                    obtenerDataVariable(anio,idLayer,variable,function(data){ 
                            console.log("data     >>>",data);
                            options = {};
                            var array_data=limpiarNulls(data.array_data);
                            var cant = array_data.length;
                        
                            setLegend(global.layers[key].capa,function(rangos){
                                options.colores= colores;
                                options.rangos=rangos;   
                                options.data = data;
                                options.cantNiveles=global.cantNiveles;
                                options.layer=global.layers[idLayer].layerFeature;
                                options.variable= variable;
                                options.idLayer=idLayer;
                                actualizarMapa(options);

                                /*console.log('global.ambito>>>',global.ambito);
                                console.log('chkMantener>>>',chkMantener);
                                if (chkMantener)
                                {
                                    if( parseInt(global.ambito)==idLayer){
                                    global.layers[idLayer].layerFeature.setVisibility(true);    
                                    global.layers[idLayer].visible=true;    
                                }

                                else{
                                    global.layers[idLayer].layerFeature.setVisibility(false);    
                                    global.layers[idLayer].visible=false;       
                                    }    
                                }*/


                            });


                    });
                }

                else if(global.idLayersTematicosEstaticos.indexOf(idLayer)>=0 && layersActivos.indexOf(idLayer)>-1 ){
                    options.idLayer = idLayer;

                    if(idLayer==7 && Object.keys(global.STATIC).indexOf(String(variable))>-1){
                        console.log('holass');
                        options.colores= colores;
                        options.rangos= global.STATIC[String(variable)].rangos;   
                        options.fuente= global.STATIC[String(variable)].fuente;
                        options.data = global.STATIC[String(variable)].data;

                    }
                    actualizarMapa(options);
                 }


                else{

                    layer.setVisibility(false);
                }
            });
            
        }



        var eventCambioAmbito = function(ambito,variable) {
            console.log('ambito>>>',ambito);
            var i= parseInt(ambito);
            global.ambito=i;
     

            var zoom= (global.map.getZoom()>-1)?global.map.getZoom():6;
            global.layerId=i;            
            
            var checkMantener= $('#chkMantener').prop('checked');


            /*activar y desactivar layer  */
            Object.keys(global.layers).forEach(function(index){
                
                if (chkMantener)
                {
                    if( parseInt(index)==i){
                    global.layers[index].layerFeature.setVisibility(true);    
                    global.layers[index].visible=true;    
                    }

                    else{
                    global.layers[index].layerFeature.setVisibility(false);    
                    global.layers[index].visible=false;       
                    }    
                }


                else{
                    global.layers[index].layerFeature.setVisibility(true);    
                    global.layers[index].visible=true;    

                }
                
                global.layers[index].layerFeature.setMaxScale(global.layers[index].maxScale);
                global.layers[index].layerFeature.setMinScale(global.layers[index].minScale);    
            });
            
            /*global.layers[i].layerFeature.setMaxScale(100000);
            global.layers[i].layerFeature.setMinScale(0);
*/

            
            /*(global.layers[i].zoomMaxLabels>=zoom && zoom>=global.layers[i].zoomMinLabels && [0,1,2].indexOf(i)==-1)?global.layers[i].layerFeature.setShowLabels(true):global.layers[i].layerFeature.setShowLabels(false);
            */
                
            ([0,1,2].indexOf(i)<0)?global.layers[i].layerFeature.setShowLabels(true):global.layers[i].layerFeature.setShowLabels(false);


            crearLeyenda(global.layers[i].rangos,global.layers[i].colores,i,global.layers[i].fuente,global.layers[i].data);


            var layersInclude={ "0":[2,3,4,12],"1":[2,3,4,12],"2":[2,3,4,12],"3":[2,3,4,12],"4":[3,4,12] ,"5":[3,4,12], "6":[22,23] ,"7":[2,3,4]};
            var layersVariables={"200015":[22,28], "200008":[25,28],"200009":[24,28],"200016":[26,28] };

            global.ids.capasLimites=[];

            
            $('#contenedorOptiones').find("input[layer='capasLimites']").map(function(index,el){ $(el).prop('checked',false)});


            if(Object.keys(layersInclude).includes(String(i)) ){
                var layersCapas=[];
                if(i==6){
                    layersCapas= layersVariables[String(variable)];
                }
                else{
                    layersCapas= layersInclude[String(i)];
                }

                
                
                layersCapas.forEach(function (layer){
                    global.ids.capasLimites.push(layer);
                    $('#contenedorOptiones').find("input[layer='capasLimites'][layerId='"+layer+"']").prop('checked',true);

                    if(layer==28)
                    {   
                        var anioInicialZonaCocalera=2003;
                        var anioFinalZonaCocalera=2017;
                        var layerDefinitions = [];

                        layerDefinitions[28] = "anio="+anioInicialZonaCocalera;
                        global.limitesAdmin.setLayerDefinitions(layerDefinitions);

                        for(var anio=anioInicialZonaCocalera;anio<=anioFinalZonaCocalera;anio++){
                            $('#spinner1').append($("<option></option>").attr("value", anio).text(anio));    
                        }
                        crearLeyenda();
                        
                    }

/*


    if (getIndicador_ARCGIS() && getLayer_ARCGIS()) {
        var posting = $.ajax(oOptions);
        posting.done(function (response, textStatus, jqXHR) {
            if (!response) {
                return;
            }                        
            var range = $.parseJSON(response);
            for (anio = parseInt(range.max_anio); anio >= parseInt(range.min_anio); anio--) {
                select.append($("<option></option>").attr("value", anio).text(anio));
            }
            $('#legend').html('');            
            arcgismap_update_datos();
        }).fail(function (response, textStatus, jqXHR) {
        });
    } else {
        $('#legend').html('');
    }


*/



                });
            }

            console.log('capasLimites:' + global.ids.capasLimites);

            
            (global.limitesAdmin!==undefined)?global.limitesAdmin.setVisibleLayers(global.ids.capasLimites):true;
            (global.map!==undefined)?global.map.infoWindow.hide():true;
            
            (global.idLayersTematicosEstaticos.indexOf(i)>-1)?global.mouseOverActivado=false:global.mouseOverActivado=true;

            $('#legendaCapas').html('');
            iniciarLeyendaCapas('capasLimites');
            iniciarLeyendaCapas('capasPuntos');

        }


        var buscarFeature = function(queryText,urlService){
            
            require([
                    "esri/map", "esri/geometry/Extent",
                    "esri/layers/FeatureLayer","esri/dijit/Legend",
                    "dojo/dom","dojo/dom-construct","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/ImageParameters",
                    "esri/arcgis/utils",
                    "esri/dijit/LayerList",
                    "dojo/_base/array",
                    "esri/dijit/BasemapToggle",
                     "esri/InfoTemplate",
                    "esri/tasks/QueryTask",  
                    "esri/tasks/query",  
                    "dojo/domReady!",

                ],
                function ( Map, Extent,
                           FeatureLayer,Legend,
                           dom,domConstruct,ArcGISDynamicMapServiceLayer,ImageParameters,
                           arcgisUtils,LayerList, arrayUtils,BasemapToggle,InfoTemplate,
                           QueryTask,Query
                           ) 

                {

                    var queryTask = new QueryTask(urlService);  
                    var query = new Query();  
                    query.returnGeometry = true;  
                    query.outFields = ["*"]; 
                    query.where = queryText;
                    //QUERY='CCDD ='15'
                    //query='CODIGO=150101'
                    queryTask.execute(query, function (featureSet){
                        var resultFeature= featureSet.features[0];
                        if(resultFeature){
                        global.map.setExtent(resultFeature.geometry.getExtent());}
                        else{
                            
                        }

                    });  
                });

        }


        var iniciarBuscador;
        iniciarBuscador= function(){
            
            $('#'+global.idBuscador).autocomplete({
                    serviceUrl: global.urlServiceBuscador,
                    onSelect: function (Response) {
                        var ubigeo=Response.data;
                        var query='CODIGO='+ubigeo;
                        var index=parseInt(Response.index)-2;
                        var urlService= global.layers[index].service;
                        buscarFeature(query,urlService);    
            
                    },
            });
        }


        var activarMapaCalor=function(anio,activar){
            var expression="anio ="+anio;
            
            

            
            if(activar && anio!==undefined)
            {   global.heatmapFeatureLayer.setDefinitionExpression(expression);
                global.heatmapFeatureLayer.setVisibility(true);
                
            }
            else
                global.heatmapFeatureLayer.setVisibility(false);

        }



        var obtenerDataLegenda;

        obtenerDataLegenda= function (capas,i) {            
            $.ajax({  
                    url: capas[i].urlMap+'/legend?f=json',  
                    //url: url+'/legend?f=json',  
                    success: function (data1) {
                        //var dataJsonLengend=JSON.parse(data1).layers;
                        var dataJsonLengend=data1.layers;

                        $.ajax({
                            url : capas[i].urlMap+'/?f=pjson',

                            success: function(data2) {
                                var subGroupLayers = JSON.parse(data2).layers.filter(x=>x.subLayerIds!=undefined);
                                global.groupLayers.push(subGroupLayers);
                                
                                global.dataLayers.push(dataJsonLengend);                                  

                                crearLegendaCapas(subGroupLayers,capas[i].idDefaultLayers,capas[i].id);
                                
                                //(i<capas.length)?obtenerDataLegenda(capas,i+1):true;
                                (i<capas.length-1)?obtenerDataLegenda(capas,i+1):true;
                            }

                        });  
                        
                    }
            });
        };



        var crearLegendaCapas = function(data,list,nomCapa){
            var bodyLegend=$('#'+global.idLayerList);
            var selectCategoria = $('#selectCategoria');
            var html='';
            var padres =data.filter(x=>x.parentLayerId==-1);
            var ids;


            padres.forEach(function(data2){
                var valor=data2.id;
                var text=data2.name;
                /*global.ocultarCapa.find(function(capa){
                     console.log(capa);
                });*/
                var o=global.ocultarCapa.find(x=>(x.valor===data2.id && x.nomCapa===nomCapa));
                //console.log('o>>>',o);
                if(o==undefined)
                    html+='<option value="'+nomCapa+String(valor)+'" valor='+valor+'  nomCapa="'+nomCapa+'" class="selectCategoriaClass">'+text+'</option>';

            });
            selectCategoria.append(html);

            (nomCapa=='capasLimites')?iniciarLeyendaCapas(nomCapa):true;
        }


        $('#selectCategoria').on('change',function(){
                var idCategoria=parseInt($('#selectCategoria option:selected').attr('valor'));
                var nomCapa=$('#selectCategoria option:selected').attr('nomCapa');
                var contenedorOptiones=$('#contenedorOptiones');
                var subLayers;
                var dataLayers;
                var escala = global.map.getScale();
                var html='<input type="text" placeholder="Escriba su filtro" id="filtroCapas">';
                html+='<ul>';

                if(nomCapa=='capasPuntos'){
                   groupLayers=global.groupLayers[1];
                   dataLayers=global.dataLayers[1];
                   idsActivos = global.ids.capasPuntos;
                }
                else{
                   groupLayers=global.groupLayers[0];
                   dataLayers=global.dataLayers[0];                    
                   idsActivos = global.ids.capasLimites;
                }

                //console.log(global.groupLayers);
                //console.log(groupLayers);
                // Ocultar CAPA por VALOR                
                /*
                groupLayers[2].subLayerIds.forEach( function(valor, indice, array) {
                    if (valor == 15){
                        groupLayers[2].subLayerIds.splice(indice,1);
                        //console.log("BORRADO 15");
                    }                    
                });
                */

                var crearContenedor = function(idCategoria,groupLayers,dataLayers,idsActivos){
                    var checked='';
                    var groupLayer=groupLayers.find(x => x.id==idCategoria);
                    
                    idSublayers = groupLayer.subLayerIds;
                    (global.idsActivosTodosPuntos.indexOf(idCategoria)>-1) ?checked ='checked':true; 


                    if(global.listCheckAll.indexOf(idCategoria)>-1 && nomCapa=='capasPuntos'){
                        html+='<label class="containercbxCapas"> <input class="checkAll"  layer="'+nomCapa+'"   layer="'+nomCapa+'"  type="checkbox" layerId="'+idCategoria+'" '+checked+' > <span class="checkmark"></span> </label>';
                        html+='<span>Todos</span>';
                    }

                    //console.log('idSublayers',idSublayers);

                    idSublayers.forEach(function(idSublayer){  
                        var dataLayer=dataLayers.find(x=> x.layerId==idSublayer);
                        var groupLayer=groupLayers.find(x=> x.id==idSublayer);

                        if (dataLayer!==undefined){
                            var urlLegendLayer ='data:image/png;base64,'+dataLayer.legend[0].imageData;
                            var layerName = dataLayer.layerName;
                            var id=dataLayer.layerId;
                            var checked ='';
                            var maxScale=parseFloat(dataLayer.maxScale);
                            var minScale=parseFloat(dataLayer.minScale);
                            var display ='block'; 

                            (idsActivos.indexOf(id)>-1) ?checked ='checked':true; 
                            
                            if (!(id==global.idCapaManzanas && nomCapa=='capasLimites')){
                                    
                                
                                    if(dataLayer.legend.length<=1){
                                        html+='<li data-name="'+layerName.split(' ').join('').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")+'" class="item" id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'" id-padre="'+idCategoria+'">'; 
                                        html+='<label class="containercbxCapas"> <input class="checkList" layer="'+nomCapa+'" type="checkbox" layerId="'+id+'" '+checked+' > <span class="checkmark"></span> </label>';
                                        html+='<div class="capaLeyenda">';
                                        html+='<img src='+urlLegendLayer+' border="0" style="opacity:1">';
                                        html+='<span>'+layerName+'</span>';
                                        html+='</div>';
                                        html+='</li>';    
                                    }

                                    else{                      
                                        html+='<li data-name="'+layerName.split(' ').join('').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")+'" class="item" id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'" id-padre="'+idCategoria+'">'; 
                                        html+='<label class="containercbxCapas"> <input class="checkList" layer="'+nomCapa+'" type="checkbox" layerId="'+id+'" '+checked+' > <span class="checkmark"></span> </label>';
                                        html+='<div class="capaLeyenda">';
                                        html+='<td style="width:80%">';
                                        html+='<span>'+layerName+'</span>';
                                        html+='</td>';
                                        html+='</div>';
                                        html+='</li>';    

                                        html+='<table><tboby>';       
                                        dataLayer.legend.forEach(function(el){
                                            var urlImage ='data:image/png;base64,'+el.imageData;
                                            html+='<tr><td style="width:20% opacity: 1;" ><img src='+urlImage+' border="0" style="opacity:1"></td>';
                                            html+='<td style="width:80%">'+el.label+'</td></tr>';           
                                        });                           
                                        html+='</tbody></table></li>';                    
                                    }
                            }
                        }

                        else if(groupLayer!==undefined){
                            var layerName = groupLayer.name;
                            html+='<li style:"color:#1b3c71">'+layerName;
                            html+='</li>';
                            crearContenedor(idSublayer,groupLayers,dataLayers,idsActivos);
                        }


                    });



                }

                crearContenedor(idCategoria,groupLayers,dataLayers,idsActivos);
                
                html+='<ul>';

                $('#contenedorOptiones').html('');
                $('#contenedorOptiones').append(html);

                $('#contenedorOptiones').find('.checkAll').map(function(ind,el){                    
                    $(el).on('change',function(){
                        var nomCapa = $(el).attr('layer');
                        console.log("nomCapa",nomCapa);
                        var id = parseInt($(el).attr('layerId'));
                        var checked = $(el).prop('checked');
                        var groupLayer=groupLayers.find(x => x.id==id);
                        
                        var html='';

                        html+='<li  layer="'+nomCapa+'"  layerId="'+id+'"><label>  <td style="width:20% opacity: 1;" ><button class="removerCapa" onclick="removerCapa('+id+',\''+nomCapa+'\')"><i class="fa fa-trash" aria-hidden="true"></i></button> </td>';
                        html+='<td style="width:80%">'+groupLayer.name+' (Todos)</td></label> </li>'; 
                        subLayerIds=groupLayer.subLayerIds;
                        if (checked){
                            subLayerIds.forEach(function(i){
                                global.ids.capasPuntos.push(i);
                                $("input[layer='"+nomCapa+"'][layerId='"+i+"']").prop('checked',true);
                            });
                            $('#legendaCapas').append(html);
                            global.idsActivosTodosPuntos.push(id);
                        }
                        else{
                            subLayerIds.forEach(function(i){
                                var index=global.ids.capasPuntos.indexOf(i);
                                (index>-1)? global.ids.capasPuntos.splice(index,1):true;
                                $("input[layer='"+nomCapa+"'][layerId='"+i+"']").prop('checked',false);
                            });
                            $('#legendaCapas').find("li[layer='"+nomCapa+"'][layerId='"+id+"']").remove();

                            var indexGroup=global.idsActivosTodosPuntos.indexOf(id);
                            global.idsActivosTodosPuntos.splice(indexGroup);
                        }

                        global.listLayers.setVisibility(true);
                        global.listLayers.setVisibleLayers(global.ids.capasPuntos);
                        

                    });
                });

                
                //*evento cuando da click a un checklist
                //

                $('#contenedorOptiones').find('.checkList').map(function(ind,el){
                    $(el).on('change',function(){
                        var nomCapa = $(el).attr('layer');
                        var id = parseInt($(el).attr('layerId'));
                        var checked = $(el).prop('checked');
                        var idCategoria =parseInt($(el).closest('li').attr('id-padre'));
                        var html ='';
                        var legendSublayer;
                        
                        if(nomCapa=='capasPuntos'){
                            dataLayers=global.dataLayers[1];
                        }
                        else{
                            dataLayers=global.dataLayers[0];
                        }
                        var dataLayer=dataLayers.find(x=> x.layerId==id);
                        
                        if(dataLayer!==undefined){
                            var urlLegendLayer ='data:image/png;base64,'+dataLayer.legend[0].imageData;
                            var layerName = dataLayer.layerName;
                            var id=dataLayer.layerId;
                            var maxScale=parseFloat(dataLayer.maxScale);
                            var minScale=parseFloat(dataLayer.minScale);
                            var display ='block';
                            if(maxScale==0 && minScale==0)
                                display='block';
                            else if (maxScale<=escala && minScale>=escala)
                                display='block';
                            else                        
                                display='none';
                            if(dataLayer.legend.length<=1){
                                html+='<li  layer="'+nomCapa+'"  layerId="'+id+'"  id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'><label>  <td style="width:20% opacity: 1;" ><button class="removerCapa" onclick="removerCapa('+id+',\''+nomCapa+'\')"><i class="fa fa-trash" aria-hidden="true"></i></button> <img src='+urlLegendLayer+' border="0" style="opacity:1"></td>';
                                html+='<td style="width:80%">'+layerName+'</td></label> </li>';    
                            }
                            else{
                                html+='<li layer="'+nomCapa+'"  layerId="'+id+'"   id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'><td style="width:80%"><button class="removerCapa" onclick="removerCapa('+id+',\''+nomCapa+'\')"><i class="fa fa-trash" aria-hidden="true"></i></button> '+layerName+'</td>';       
                                html+='<table><tboby>';       
                                dataLayer.legend.forEach(function(el){
                                    var urlImage ='data:image/png;base64,'+el.imageData;
                                    html+='<tr><td style="width:20% opacity: 1;" ><img src='+urlImage+' border="0" style="opacity:1"></td>';
                                    html+='<td style="width:80%">'+el.label+'</td></tr>';           
                                });                           
                                html+='</tbody></table></li>';                    
                            }
                        }


                        if(checked){
                            
                            if((global.categoriasManzanas.indexOf(idCategoria)>-1 ) && nomCapa=="capasLimites"){
                                global.listIdLayersManzanas.forEach(function(x){
                                       
                                $('#legendaCapas').find("li[layer='"+nomCapa+"'][layerId='"+x+"']").remove();    
                                if(id!=x)$('#contenedorOptiones').find("input[layer='"+nomCapa+"'][layerId='"+x+"']").prop('checked',false);
                                (global.ids.capasLimites.indexOf(x)>-1)?global.ids.capasLimites.splice( global.ids.capasLimites.indexOf(x),1):true;    
                            });}
                         
                            $('#legendaCapas').append(html);
                        }

                        else{
                            $('#legendaCapas').find("li[layer='"+nomCapa+"'][layerId='"+id+"']").remove();
                        }
                    
                        activarCapa(id,nomCapa,checked);

                    });
                });

                $('#contenedorOptiones').find('#filtroCapas').map(function(ind,el){
                    var $items = $(".item");
                    $(el).on('input',function(){
                        var val = this.value.split(' ').join('').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                        $items.hide().filter(function() {
                            return new RegExp(val).test($(this).data('name'));
                        }).show(); 
                    });
                });
        });


        function removerCapa(id,nomCapa){
            activarCapa(id,nomCapa,false);
            $('#contenedorOptiones').find("input[layer='"+nomCapa+"'][layerId='"+id+"']").prop('checked',false);
            $('#legendaCapas').find("li[layer='"+nomCapa+"'][layerId='"+id+"']").remove();
        }

        $('.boton-limpiar2').on('click',function(){
            limpiarCapas();
        });


        var limpiarCapas = function(){
            global.ids.capasPuntos=[];
            global.ids.capasLimites=[2,3,4];
            global.limitesAdmin.setVisibleLayers(global.ids.capasLimites);
            global.listLayers.setVisibility(false);
            global.idsActivosTodosPuntos=[];

            $('#contenedorOptiones').find('.checkList').map(function(index,el){
                var id=parseInt($(el).attr('layerId'));
                var nomCapa=$(el).attr('layer');
                if (nomCapa=='capasLimites' && global.ids.capasLimites.indexOf(id)>-1)
                    $(el).prop('checked',true);
                else
                    $(el).prop('checked',false);
            });

            global.listCheckAll.forEach(function(id){
                $('#contenedorOptiones').find("input[layer='capasPuntos'][layerId='"+id+"']").prop('checked',false);
            });

            $('#legendaCapas').html('');
            iniciarLeyendaCapas('capasLimites');
            iniciarLeyendaCapas('capasPuntos');
        }


        function iniciarLeyendaCapas(nomCapa){
            html='';
            var dataLayers=[];
            var ids=[];
            if(nomCapa=='capasPuntos'){
                dataLayers=global.dataLayers[1];
                //ids=global.layerIds.listLayers;
                ids=global.ids.capasPuntos;
            }
            else{
                dataLayers=global.dataLayers[0];
                ids=global.ids.capasLimites;
            }
                        

            ids.forEach(function(layerId){
                var dataLayer=undefined;
                (dataLayers!==undefined)?dataLayer=dataLayers.find(x=> x.layerId==layerId):true;
                if(dataLayer!==undefined){
                            var urlLegendLayer ='data:image/png;base64,'+dataLayer.legend[0].imageData;
                            var layerName = dataLayer.layerName;
                            var id=dataLayer.layerId;
                            var maxScale=parseFloat(dataLayer.maxScale);
                            var minScale=parseFloat(dataLayer.minScale);
                            var display ='block';
                            if(dataLayer.legend.length<=1){
                                html+='<li  layer="'+nomCapa+'"  layerId="'+id+'"  id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'><label>  <td style="width:20% opacity: 1;" ><button class="removerCapa" onclick="removerCapa('+id+',\''+nomCapa+'\')"><i class="fa fa-trash" aria-hidden="true"></i></button> <img src='+urlLegendLayer+' border="0" style="opacity:1"></td>';
                                html+='<td style="width:80%">'+layerName+'</td></label> </li>';    
                            }
                            else{
                                html+='<li layer="'+nomCapa+'"  layerId="'+id+'"   id="'+nomCapa+String(id)+'" minScale='+minScale+' maxScale='+maxScale+'  style="display:'+display+'><td style="width:80%"><button class="removerCapa" onclick="removerCapa('+id+',\''+nomCapa+'\')"><i class="fa fa-trash" aria-hidden="true"></i></button> '+layerName+'</td>';       
                                html+='<table><tboby>';       
                                dataLayer.legend.forEach(function(el){
                                    var urlImage ='data:image/png;base64,'+el.imageData;
                                    html+='<tr><td style="width:20% opacity: 1;" ><img src='+urlImage+' border="0" style="opacity:1"></td>';
                                    html+='<td style="width:80%">'+el.label+'</td></tr>';           
                                });                           
                                html+='</tbody></table></li>';                    
                            }
                }
                
            });



            $('#legendaCapas').append(html);
        }

        
        function activarCapa(id,nomCapa,checked) {
            var indexGroup=global.idsActivosTodosPuntos.indexOf(id);
            if (checked && nomCapa=='capasPuntos'){
                if (global.listCheckAll.indexOf(id)>-1){
                    var sublayers1=global.groupLayers[1].find(x => x.id === (id)).subLayerIds;
                    sublayers1.forEach(function(i){
                        global.ids.capasPuntos.push(i);
                        $("input[layer='"+nomCapa+"'][layerId='"+i+"']").prop('checked',true);
                    });
                    (!(indexGroup>-1))?global.idsActivosTodosPuntos.push(i):true;

                }

                else{
                    global.ids.capasPuntos.push(id);
                }                    
            }

            else if( !(checked) && nomCapa=='capasPuntos') {
                
                if (global.listCheckAll.indexOf(id)>-1){
                    var sublayers1=global.groupLayers[1].find(x => x.id === (id)).subLayerIds;
                    sublayers1.forEach(function(i){
                        var index=global.ids.capasPuntos.indexOf(i);
                        (index>-1)? global.ids.capasPuntos.splice(index,1):true;
                        $("input[layer='"+nomCapa+"'][layerId='"+i+"']").prop('checked',false);
                    });
                    (indexGroup>-1)?global.idsActivosTodosPuntos.splice(indexGroup,1):true;
                }

                global.ids.capasPuntos.splice( global.ids.capasPuntos.indexOf(id), 1 );
            }

            if (checked && nomCapa=='capasLimites'){
                global.ids.capasLimites.push(id);
            }

            else if( !(checked) && nomCapa=='capasLimites') {
                global.ids.capasLimites.splice( global.ids.capasLimites.indexOf(id), 1 );
            }


            if(global.ids.capasPuntos.length>0){
                global.listLayers.setVisibility(true);
                global.listLayers.setVisibleLayers(global.ids.capasPuntos);    
            } else {
                global.listLayers.setVisibility(false);
            }
            
            if(global.ids.capasLimites.length>0){
                global.limitesAdmin.setVisibility(true);
                global.limitesAdmin.setVisibleLayers(global.ids.capasLimites);
            } else {
                global.limitesAdmin.setVisibleLayers(global.ids.capasLimites);
            }
            
        };


        var getPointTemplate = function(target) {
            var data = target.attributes;
            console.log('target>>>',target);

            
            var html = '';



            var addRow = function(label, field){
                return field ? '<tr><td><b>' + label + ': </b></td><td>'+ (''+field).toUpperCase() + '</td></tr>' : '';
            }
            html += '<table class="infoTable table table-bordered table-hover">';
                        
            //html += addRow('Ubigeo',data.UBIGEO);
            //html += addRow('Ubigeo',data.ubigeo);
            //html += addRow('Departamento',data.DEPARTAMEN);
            //html += addRow('Departamento',data.depatamen);
            //html += addRow('Provincia',data.PROVINCIA);
            //html += addRow('Provincia',data.provincia);
            //html += addRow('Distrito',data.DISTRITO);
            //html += addRow('Distrito',data.distrito);
            html += addRow('Nombre',data.lugar_nomb); 
            html += addRow('Nombre',data.nombre_est); 
            html += addRow('Nombre',data.direc_regi);
            html += addRow('Nombre',data.DESCRIP);
            html += addRow('Nombre Comisaria',data.nombre_com); 
            html += addRow('Clase Comisaria',data.CLASE_COMI);

            if(data.nom_entida){
                html += '<thead>'
                    + ' <tr class="table-header">'
                    + '     <th colspan="2" style="background-color: inherit !important;">Información de la Dependencia Policial: ' + data.nom_entida + '</td>'
                    + ' </tr>'
                    + '</thead>';
            }else{
                html += '<tbody>';
            }
            //html += addRow('Nombre de Comisaria',data.nom_entida); //COMISARIA 1

            html += addRow('Cantidad',data.totestab);
            html += addRow('Región',data.region);
            html += addRow('Genérico',data.GENERICO);
            html += addRow('Genérico',data.IH208_GENE);

            html += addRow('Específico',data.ESPECIFICO);
            html += addRow('Específico',data.IH208_ESPE);
            html += addRow('Modalidad',data.MODALIDAD);
            html += addRow('Específico',data.IH208_MODA);
            html += addRow('Modalidad',data.MODALIDAD_);
            html += addRow('Modalidad',data.MODALIDAD_OTIN);


            //html += addRow('Dirección',data.UBICACION);
            //html += addRow('Dirección',data.direccion);

            html += addRow('Dirección',data.I11_2); //COMISARIA 2
            html += addRow('Referencia',data.I11_3); //COMISARIA 3
            html += addRow('Tipo de dependencia policial',data.TIPO_DEP_P); //COMISARIA 4
            html += addRow('Clase de comisaria',data.II4_II4_A); //COMISARIA 5
            html += addRow('Tipo de comisaria',data.II5); //COMISARIA 6
            html += addRow('Número de teléfono',data.num_telef); //COMISARIA 7

            if(data.nom_entida){
                html += '<tr class="titulo"><td colspan="2">Servicios Básicos</td></tr>';
            }
            html += addRow('El abastecimiento de agua proviene de',data.INF225); //COMISARIA 8
            html += addRow('Tiene agua potable todos los días a la semana',data.INF226); //COMISARIA 9
            html += addRow('Tiene acceso al servicio eléctrico todos los días de la semana',data.INF227); //COMISARIA 10
            html += addRow('Los baños que tiene el local están conectados a',data.INF230); //COMISARIA 11

            if(data.nom_entida){
                html += '<tr class="titulo"><td colspan="2">Acceso a Información</td></tr>';
            }
            html += addRow('Cuenta con SIDPOL',data.INF334); //COMISARIA 12
            html += addRow('Cuentan con Mapa de Delito',data.INF336); //COMISARIA 13
            html += addRow('Tiene acceso a la información de datos de la RENIEC',data.INF332_1); //COMISARIA 14
            html += addRow('Tiene acceso a la información de datos de la REQUISITORIAS POLICIALES',data.INF332_2); //COMISARIA 15
            html += addRow('Tiene conexión al servicio de Internet',data.INF329); //COMISARIA 16
            html += addRow('El acceso a Internet es por',data.INF330); //COMISARIA 17
            //html += addRow('Fecha',data.fecha);
            //html += addRow('Fuente',data.FUENTE);
            html += addRow('Código CIUU',data.P36);
            html += addRow('Descripción',data.P36_O);
            html += '</tbody></table>';
           
            return html;
        }

        $(document).ready(function () {
            iniciarMapa();
            iniciarBuscador();         
        });

function formatNumber(n, decimals=1) {
    var parts=(decimals == 1 ? n : n.toFixed(decimals)).toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (parts[1] ? "," + parts[1].substr(0,decimals) : "");
}