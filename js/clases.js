var Moto=function(km,matricula){
    this.matricula="",
    this.km=0,
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


