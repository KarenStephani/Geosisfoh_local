function set_provincias(dpto_select, prov_select, dist_select, ccpp_select) {
    $(dpto_select).change(function() {
      var dpto = $(dpto_select).val();
      if (Number.isInteger(Math.floor(dpto))) {
        var prov_url = "provincias/" + dpto;
        $.getJSON(prov_url, function(data) {
          $(dist_select).find("option").remove();
           $(ccpp_select).find("option").remove();
           var items = "<option>Seleccione</option>";
           $(dist_select).append("<option>Seleccione</option>");
           $(ccpp_select).append("<option>Seleccione</option>");
           $.each(data, function(key, val) {
            items = items + "<option value='" + val.codprov + "'>" + val.nom_prov + "</option>";
          });
          $(prov_select).find("option").remove();
          $(prov_select).append(items);
        });
      }
    });
  }

  function set_distritos(dpto_select, prov_select, dist_select, ccpp_select) {
    $(prov_select).change(function() {
      var dpto = $(dpto_select).val();
      var prov = $(prov_select).val();
      if (Number.isInteger(Math.floor(dpto)) && Number.isInteger(Math.floor(prov))) {
        var dist_url = "distritos/" + dpto + "/" + prov;
        $.getJSON(dist_url, function(data) {
          $(dist_select).find("option").remove();
          $(ccpp_select).find("option").remove();
          var items = "<option>Seleccione</option>";
          $(ccpp_select).append("<option>Seleccione</option>");
          $.each(data, function(key, val) {
            items = items + "<option value='" + val.iddist + "'>" + val.nombre_dist + "</option>";
          });
          $(dist_select).find("option").remove();
          $(dist_select).append(items);
        });
      }
    });
  }

  function set_centro_poblados(dpto_select, prov_select, dist_select, ccpp_select) {
    $(dist_select).change(function() {
      var dist = $(dist_select).val();
      if (Number.isInteger(Math.floor(dist))) {
        var ccpp_url = "centro_pob/" + dist;
        $.getJSON(ccpp_url, function(data) {
          $(ccpp_select).find("option").remove();
          var items = "<option>Seleccione</option>";
          $.each(data, function(key, val) {
            items = items + "<option value='" + val.codccpp + "'>" + val.centropoblado + "</option>";
          });
          $(ccpp_select).append(items);
        });
      }

    });
  }

  set_provincias("#ccdep", "#ccprov", "#ccdist", "#ccpoblado");
  set_distritos("#ccdep", "#ccprov", "#ccdist", "#ccpoblado");
  set_centro_poblados("#ccdep", "#ccprov","#ccdist","#ccpoblado");


  function showAndDismissAlert(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    $(".alert-messages-map").prepend(htmlAlert);

    $(".alert-messages-map .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
  }
  



          


     
