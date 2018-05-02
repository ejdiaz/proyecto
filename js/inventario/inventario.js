function Inventario() {
  this.articulos =  [];
  console.log("objeto inventario creado");
}

Inventario.prototype.guardar = function (id, nombre, nota) {
  var guardado = false;

      try {
        var articulo = {
          id : id,
          nombre : nombre,
          nota : nota
        }
        this.articulos.push(articulo);
        guardado = true;
      } catch (e) {
          console.log(e);
      }
      return guardado;

};

Inventario.prototype.obtenerPorId = function (id) {
  var limite = this.articulos.length,
  objArtic;
  try {
      for (var i = 0; i < limite; i++) {
        this.articulos[i].id;
        if (this.articulos[i].id == id) {
            objArtic = this.articulos[i];
        }
      }
  } catch (e) {
    console.log(e);
  }
  return objArtic;
};

Inventario.prototype.obtInventario = function () {
  return this.articulos;
};



Inventario.prototype.validarVacios = function (id, nombre, nota) {
      var vacio = true;
        if (id != "" && nombre != "" && nota != "") {
          vacio=false;
        }
        return vacio;
};
