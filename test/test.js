var v = new Vista (), usuario = new User();

var arrayTest =[
	{"id" : "01" , "name" : "erick", "score" : "100"},
	{"id" : "02" , "name" : "gohn", "score" : "80"},
	{"id" : "03" , "name" : "marco", "score" : "90"},
	{"id" : "04" , "name" : "sofia", "score" : "40"},
	{"id" : "05" , "name" : "maria", "score" : "70"}
];
console.log(arrayTest);
QUnit.test( "test Módulo guardarDatos", function( assert ) {
	for (var i = 0; i < arrayTest.length; i++) {
			assert.ok( true == usuario.setUsr(arrayTest[i].id,arrayTest[i].name,arrayTest[i].score) );
	}

});

QUnit.test( "test Módulo borrar id", function( assert ) {
	assert.ok( true == usuario.delUser(arrayTest[0].id) );

});
