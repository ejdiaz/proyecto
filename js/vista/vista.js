function Vista() {
  console.log("Objeto vista creado");
}

Vista.prototype.mostrarGuardadoOk = function (cont) {
  $(cont).text("Registro agregado satisfactoriamente");
  $(cont).fadeIn();
};

Vista.prototype.ocultarContenedor = function (cont) {
  $(cont).fadeOut();
};

Vista.prototype.establecerInvisible = function (cont) {
  $(cont).css("display", "none");
};

Vista.prototype.mostrarRegistro = function (obj, cont) {
  var tabla = $("<table><th>Id</th><th>Nombre</th><th>Nota</th></table>");
  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");
  fila = $("<tr>"+
    "<td>" + obj.id + "</td>" +
    "<td>" + obj.nombre + "</td>"+
    "<td>" + obj.nota + "</td>"
    +"</tr>" );
    $(tabla).append(fila);
      $(cont).append(tabla);
};

Vista.prototype.mostrarArray = function (array, cont) {
  // Creación de objetos HTML
  var  limite = array.length, fila ="",
  tabla = $("<table> <tr>"+"<th>ID</th>" +"<th>Nombre</th>" +"<th>Nota</th>" +"</tr></table>");

  //Definición de las propiedades del objeto
  $(tabla).addClass("table table-striped");
  $(tabla).attr("id","tablaRegistros");

for (var i = 0; i < limite; i++) {
  //Creación de las filas de forma dinánmica
    fila = $("<tr>"+
      "<td>" + array[i].id + "</td>" +
      "<td>" + array[i].nombre + "</td>"+
      "<td>" + array[i].nota + "</td>"
      +"</tr>" );

     // Una vez creada la fila se agrega en la tabla
     $(tabla).append(fila);
};

  //Imprime en el HTML cada párrafo que contiene cada uno de los registros
  $(cont).append(tabla);

};

Vista.prototype.limpiarContModal = function (modal, cont) {
    $(modal).on('hidden.bs.modal', function (e) {
      // Limpia el contenedor
      $(cont).empty();
  })
};

Vista.prototype.limpiarCont = function (cont) {
        $(cont).empty();
};
