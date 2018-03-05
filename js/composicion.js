var Alumno=function(nombre="",dni="",tlf=0,email="",notas=[]){
    this.nombre=nombre;
    this.dni=dni;
    this.tlf=tlf;
    this.email=email;
    this.notas=notas;
    this.setNombre=function(nombre){
        this.nombre=nombre;
    },
    this.getNombre=function(){
        return this.nombre;
    },
    this.setDni=function(dni){
        this.dni=dni;
    },
    this.getMatricula=function(){
        return this.dni;
    },
    this.setTlf=function(tlf){
        this.tlf=tlf;
    },
    this.getTlf=function(){
        return this.tlf;
    },
    this.setEmail=function(email){
        this.email=email;
    },
    this.getEmail=function(){
        return this.email;
    },
    this.setNotas=function(notas){
        this.notas=notas;
    },
    this.getNotas=function(){
        return this.notas;
    },
    this.addNota=function(notas){
    this.notas.push(notas)};
    this.mediaNotas=function(){
        var media=0;
        var suma=0;
        var numElementos=this.notas.length;
        for (let nota of this.notas){
        suma+=nota.valor;
    };
        media=suma/numElementos;
    return media;
};
}
    
console.log(Alumno.getNotas);

var alumno1= new Alumno();
var alumno2= new Alumno("Laura","51465717C",638569801,"laura.ber.car@gmail.com");


 var Nota=function(valor=0,asignatura=""){
     this.valor=valor,
     this.asignatura=asignatura,
     this.setValor=function(valor){
        this.valor=valor};
     this.getValor=function(){
         return this.valor
     };
    this.setAsignatura=function(asig){
        this.asignatura=asig};
     this.getAsignatura=function(){
         return this.asignatura
     };

    }
var nota1= new Nota(7,"Filosofía");
var nota2= new Nota(9,"Lengua y Literatura");

alumno2.addNota(nota1);
alumno2.addNota(nota2);
console.log(alumno2);

console.log(alumno2.notas);

console.log(alumno2.mediaNotas());