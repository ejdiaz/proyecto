
"use strict";

function User() {	//Constructor de la clase
  this.usr={};
  console.log("objeto usuario creado");
}

User.prototype.setUsr = function (id, name, score) {
	//establece  usuario y lo almacena en localstorage si no existe.
  var max = localStorage.length, saved=false, done=false;
  console.log(max);
  //objeto usuario:
  this.usr = {
    id : id,
	  name : name,
    score : score
  };
  //Si localStorage está vacío almacena el registro de una vez.
    if (max==0) {
      try {
		  //Conversión del objeto a cadena de texto para ser almacenado en local storage:
        localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
        done=true;
      } catch (e) {
        alert ("Error " + e);
      };
      } else {
          for (var i = 0; i < max; i++) {
			// Si el localstorage tiene al menos un registro
			// realiza una búsqueda para determinar si el registro ya existe
            var k = localStorage.key(i);
            if (k==this.usr.id) {
			// Si el registro ya existe retorna "salvado" como verdadero
          saved=true;
        }
      };
      };
    if (saved==false) {
        try {
			//Conversión del objeto a cadena de texto para ser almacenado en local storage:
          localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
		  // Si el registro no existe en el localStorage se guarda y retorna un "done" verdadero
          done=true;
        } catch (e) {
              alert ("Error " + e);
        };
    };
    return done;
};

User.prototype.getUsers = function () {
	//Se obtiene lista de usuarios almacenados en local storage
  var max = localStorage.length, users=[], user={};
  for (var i = 0; i < max; i++) {
    var k = localStorage.key(i);
      user = $.parseJSON(localStorage.getItem(k))
      users.push(user);
  };
  //Retorna todos los usuarios almacenados del local storage
  return users;
};

User.prototype.getUserById = function (id) {
    //retorna los datos si el id solicitado es el mismo
	  var user = $.parseJSON(localStorage.getItem(id));
	  return user;
}

User.prototype.updateUser = function (id, name, score) {
	// Actualización de usuario (sobreescribe el registro en el local storage)
var updated = false;
  this.usr={
    id : id,
	  name : name,
    score : score
  };
  try {
    localStorage.setItem(this.usr.id, JSON.stringify(this.usr));
    updated = true;
  } catch (e) {

  };
  return updated;
};

User.prototype.delUser = function (id) {
	//Elimina el usuario por nombre del local storage
	var deleted = false;
  try {
    localStorage.removeItem(id);
	deleted=true;
  } catch (e) {
      alert("Error " + e );
  }
	return deleted;
};

User.prototype.isEmpty = function () {
	// Verifica si el local storage está vacío:
	var emp = null;
	if (localStorage.length==0) {
		emp = true;
	} else {
		emp = false;
	}
	return emp
};

User.prototype.validarVacios = function (id, name,score) {
  //valida si los imput tipo text estan vacios
      var vacio = true;
        if (id != "" && name != "" && score != "") {
          vacio=false;
        }
        return vacio;
};
User.prototype.promedio = function () {

  	  var tamano = localStorage.length
      var suma=0,temporal=[];
      temporal=this.getUsers();
      //suma todas las notas del local storage
      for (var i = 0; i < tamano; i++) {

        suma=suma+parseInt(temporal[i].score);
      }
      //calcula el promedio de las notas del local storage
      suma=suma/tamano
      window.alert ("El promedio de las notas es: "+suma);
};

User.prototype.mayor = function () {//devuelve el item con la nota mayor
  	  var tamano = localStorage.length
      var temporal=[],id,mayor;
      temporal=this.getUsers();
      for (var i = 0; i < tamano; i++) {

        if (i==0) {
          mayor = parseInt(temporal[i].score);
          id=temporal[i].id;
        }
        else {
          if (mayor < parseInt(temporal[i].score)) {//valida cual nota es mayor
            mayor = parseInt(temporal[i].score)
            id=temporal[i].id;
          }
        }
      }
      var user = $.parseJSON(localStorage.getItem(id));
  	  return user;
};
User.prototype.menor = function () {//devuelve el item con la nota menor
  	  var tamano = localStorage.length
      var temporal=[],id,mayor;
      temporal=this.getUsers();
      for (var i = 0; i < tamano; i++) {

        if (i==0) {
          mayor = parseInt(temporal[i].score);
          id=temporal[i].id;
        }
        else {
          if (mayor > parseInt(temporal[i].score)) {//valida cual nota es mayor
            mayor = parseInt(temporal[i].score)
            id=temporal[i].id;
          }
        }
      }
      var user = $.parseJSON(localStorage.getItem(id));
  	  return user;
};
