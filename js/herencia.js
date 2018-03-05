var Animal=function(edad=0){
    this.edad=edad;
};
var animalico= new Animal();
    console.log(animalico.edad);
    animalico.edad=3;
    console.log(animalico.edad);
var Gato= function(){
    Animal.call(this);
};
var animalico2=new Animal(2);
console.log(animalico2.edad)

Gato= function(edad,nombre=""){
   Animal.call(this,edad);
    this.nombre=nombre;
};
console.log(Gato);

var gatete= new Gato(edad=1);
    console.log(gatete.edad);

var gatete2= new Gato(edad=0, nombre="Nyska2");
    console.log(gatete2);
