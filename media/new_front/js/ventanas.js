
  function cerrarModal(id) {
    console.log(id);
    if(id!='null'){
      if(id=="btn-indentity"){
        $("#btn-indentity").removeClass('active-btn');
      }else{
        $("#"+id).removeClass('li_active');
      }
    }
  }

  function cerrarModalCondiciones() {
    $('#ModalCondiciones').modal("hide")
  }

  function abrirlModalCapas() {
    cerrarOtrosModales("btnCerrarCapas");
    $("#iCapas").addClass("li_active");
    //open modal
    $('#modalCapas').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogCapas').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogCapas').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalInformacion() {
    cerrarOtrosModales("btnCerrarInformacion");
    //open modal
    $('#modalInformacion').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogInformacion').css({
        top: 65,
        left: 65
      });
    }

    $('#dialogInformacion').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalMedicion() {
    cerrarOtrosModales("btnCerrarMedicion");
    $("#iMedicion").addClass("li_active");
    //open modal
    $('#modalMedicion').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogMedir').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogMedir').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalElevacion() {
    cerrarOtrosModales("btnCerrarElevacion");
    $("#iElevacion").addClass("li_active");
    //open modal
    $('#modalElevacion').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogElevacion').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogElevacion').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalSeleccionar() {
    cerrarOtrosModales("btnCerrarSeleccionar");
    $("#iSeleccion").addClass("li_active");
    //open modal
    $('#modalSeleccionar').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogSeleccionar').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogSeleccionar').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalDescargar() {
    cerrarOtrosModales("btnCerrarDescargar");
    $("#iDescarga").addClass("li_active");
    //open modal
    $('#modalDescargar').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogDescargar').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogDescargar').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalImprimir() {
    cerrarOtrosModales("btnCerrarImprimir");
    $("#iImprimir").addClass("li_active");
    //open modal
    $('#modalImprimir').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogImprimir').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogImprimir').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }
  
  function abrirModalMapaBase() {
    cerrarOtrosModales("btnCerrarMapas");
    //open modal
    $('#modalMapaBase').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogMapa').css({
        top: 65,
        left: screen.width - 350,

      });
    }

    $('#dialogMapa').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirlModalBusqueda() {
  
 //   $("#btnCerrarCapas").trigger("click");
      cerrarOtrosModales("btnCerrarFiltros");

    $("#liFiltros").addClass("li_active");
      //open modal
    $('#modalFiltros').modal({
      backdrop: false,
      show: true,
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogFiltros').css({
        top: 65,
        left: 70
      });
    }

    $('#dialogFiltros').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }
  
  function abrirModalSeguimientoBarrido() {
    cerrarOtrosModales("btnCerrarBarridos");
    $('#modalSeguimientoBarrido').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#documentoBarridos').css({
        top: 65,
        left: screen.width - 300
      });
    }

    $('#documentoBarridos').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }

  function abrirModalEstadistica() {
    cerrarOtrosModales("btnCerrarEstadistica");
    //open modal
    $('#modalEstadistica').modal({
      backdrop: false,
      show: true
    });
    // reset modal if it isn't visible
    if (!($('.modal.in').length)) {
      $('#dialogEstadistica').css({
        top: 65,
        left: screen.width - 300
      });
    }

    $('#dialogEstadistica').draggable({
      cursor: "move",
      handle: ".dragable_touch",
      containment: "#MapaDiv"
    });
  }


  function cerrarOtrosModales(btnExcluido){
    console.log("excluido"+btnExcluido);
    var botones = ["btnCerrarFiltros", "btnCerrarCapas", "btnCerrarMedicion", "btnCerrarElevacion", "btnCerrarSeleccionar","btnCerrarDescargar","btnCerrarImprimir","btnCerrarBarridos","btnCerrarEstadistica","btnCerrarMapas","btnCerrarInformacion"];
    for(var i=0;i<botones.length;i++){
      if(botones[i]!=btnExcluido){
        $("#"+botones[i]).trigger("click");
      }
    }
  }
