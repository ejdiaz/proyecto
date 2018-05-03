var inv = new Inventario,v = new Vista (), usuario = new User();


$(document).ready(function () {
  //Manejador de eventos
  $("#btnAgregar").click(guardar);
  $("#btnMostrar").click(mostrar);
  $("#btnBuscarId").click(buscarId);
  $("#btnPromedio").click(prome);
  $("#btnMayor").click(mostrarMayor);
  $("#btnMenor").click(mostrarMenor);

  function prome() {
    usuario.promedio();
  }


  //Se ocultan los alert
    v.establecerInvisible($("#contMensaje"));
})


function guardar() {
  var id = $("#txtId").val(),
  nombre = $("#txtNombre").val(),
  nota = $("#txtNota").val();
    if (usuario.validarVacios(id, nombre,nota) == false) {
      if (usuario.setUsr(id, nombre, nota)) {
          v.mostrarGuardadoOk($("#contMensaje"));
          $("#txtId").val("");
          $("#txtNombre").val("");
          $("#txtNota").val("");
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
  v.mostrarArray(usuario.getUsers(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}
function mostrarMayor() {
  v.mostrarArray(usuario.mayor(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}
function mostrarMenor() {
  v.mostrarArray(usuario.menor(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}


function buscarId() {
  v.limpiarCont($("#visorRegistro"));
  var obj = usuario.getUserById($("#txtIdB").val());
  if (obj != undefined) {
      v.mostrarRegistro (obj, $("#visorRegistro"));
  }else {
  console.log("Registro no encontrado");

  }


}
