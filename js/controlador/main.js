var v = new Vista (), usuario = new User();


$(document).ready(function () {
  //Manejador de eventos
  $("#btnAgregar").click(guardar);
  $("#btnMostrar").click(mostrar);
  $("#btnBuscarId").click(buscarId);
  $("#btnPromedio").click(prome);
  $("#btnMayor").click(mostrarMayor);
  $("#btnMenor").click(mostrarMenor);
  $("#btnEliminar").click(eliminarId);

  //$(".btn-outline-danger").click(btn);

  //Se ocultan los alert
    v.establecerInvisible($("#contMensaje"));
})
function btn() {//prueba con btn danger-----NO
  console.log("hola")
}

function prome() {//llama el la funcion promedio
  usuario.promedio();
}

function guardar() {
  var id = $("#txtId").val(),//valores de las cajas de texto
  nombre = $("#txtNombre").val(),//--
  nota = $("#txtNota").val();//--
    if (usuario.validarVacios(id, nombre,nota) == false) {//valida campos vacios
      if (usuario.setUsr(id, nombre, nota)) {//envia los datos para guardar en el localStorage
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
	    window.alert ("Debe completar todos los campos");//ventana de alerta - faltan datos
    }
}

function mostrar() {//muestra todos los datos en el modal
  v.mostrarArray(usuario.getUsers(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}
function mostrarMayor() {//muestra la nota mayor en el modal
  v.mostrarArray(usuario.mayor(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}
function mostrarMenor() {// muestra la nota menor en el modal
  v.mostrarArray(usuario.menor(), $("#visor"))
  $("#modalRegistros").modal();
  v.limpiarContModal($("#modalRegistros"), $("#visor"));
}


function buscarId() {//busca por id el campo especifico en el local storage
  v.limpiarCont($("#visorRegistro"));
  var obj = usuario.getUserById($("#txtIdB").val());
  if (obj != undefined) {
      v.mostrarRegistro (obj, $("#visorRegistro"));
  }else {
  console.log("Registro no encontrado");
  }
}
function eliminarId() {//busca por id el campo especifico y lo elimina en el local storage
  var obj = usuario.getUserById($("#txtIdB").val());
  console.log(obj);
  if (obj != undefined) {
      var x = usuario.delUser($("#txtIdB").val());//alert exitoso
      window.alert ("Se elimino el campo con el id: "+$("#txtIdB").val());
  }else {//alert fallido, no se encontro el dato
  window.alert ("No se encontro el registro con el id: "+$("#txtIdB").val());
  }
}
