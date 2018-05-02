var inv = new Inventario,
v = new Vista ();


$(document).ready(function () {
  //Manejador de eventos
  $("#btnAgregar").click(guardar);
  $("#btnMostrar").click(mostrar);
  $("#btnBuscarId").click(buscarId);


  //Se ocultan los alert
    v.establecerInvisible($("#contMensaje"));
})


function guardar() {
  var id = $("#txtId").val(),
  nombre = $("#txtNombre").val();
    if (inv.validarVacios(id, nombre) == false) {
      if (inv.guardar(id, nombre)) {
          v.mostrarGuardadoOk($("#contMensaje"));
          $("#txtId").val("");
          $("#txtNombre").val("");
          setTimeout(function () {
              v.ocultarContenedor("#contMensaje");
          }, 1000);
      }
    } else {
      console.log("Debe completar todos los campos"); 
	  window.alert ("Debe completar todos los campos");
    }
}

function mostrar() {
  v.mostrarArray(inv.obtInventario(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}


function buscarId() {
  v.limpiarCont($("#visorRegistro"));
  var obj = inv.obtenerPorId($("#txtIdB").val());
  if (obj != undefined) {
      v.mostrarRegistro (obj, $("#visorRegistro"));
  }else {
  console.log("Registro no encontrado");

  }


}
