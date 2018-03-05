/*
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
*//*

12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*/

class Moto { 
constructor(matricula="", km=0) { 
           this.matricula = matricula; 
           this.km = km;
        this.setKm=function(km){
        this.km=km;
        };
        this.getKm=function(){
        return this.km;
        };
        this.setMatricula=function(m){
        this.matricula=m;
        };
        this.getMatricula=function(){
        return this.matricula
        };
    
};
}
    var miburra= new Moto();
    miburra.matricula="SA1234H";
    console.log(miburra.matricula);

    var motoraton=new Moto();
    var soa=new Moto();

    var Animal=function(){
    this.edad=0
    };
    var animalico=new Animal();
    animalico.edad=3;
    console.log(animalico.edad);

