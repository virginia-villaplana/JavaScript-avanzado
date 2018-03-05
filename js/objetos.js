var cliente={
nombre: "Juan Dordio",
direccion_fisica:"Marqués de Ahumada",
email:"juan@soyyo.com",
tlf:638569801,
persona_contacto:"Enrique García",
direccionFiscal:{
    calle: "cartagena,8",
    ciudad: "madrid",
    piso: "2",
    puerta: "B",
    CP: "28040",
},
    setCP: function (n){
    this.direccionFiscal.CP=n;
    },
    setNombre: function (n){
    this.nombre=n;
    },
    toString: function(){
        return "[nombre:"+this.nombre+",Dirección física:"+this.direccion_fisica
        +",email:"+this.email+",tlf:"+this.tlf+",Persona de contacto:"+this.persona_contacto+"]";
    },
    setDireccion: function (n){
    this.direccion_fisica=n;
    },
    setEmail: function (n){
    this.email=n;
    },
    setTlf: function (n){
    this.tlf=n;
    },
    setContacto: function (n){
    this.persona_contacto=n;
    },
    getNombre:function(){
       return this.nombre;
    },
    getNombre:function(){
       return this.email;
    },
    getNombre:function(){
       return this.direccion_fisica;
    },
    getNombre:function(){
       return this.tlf;
    },
    getNombre:function(){
       return this.persona_contacto;
    },
facturacion:[4,25],
    addFactura: function (n){
        this.facturacion.push(n);

    },
    totalFacturacion: function(){
        var suma=0;
        for ( i in this.facturacion){
        suma+=this.facturacion[i];
    }
        return suma;
    },

};

var segundoCliente={
nombre: "Alba Rodríguez",
direccion_fisica:"Tremp",
email:"alba@soyyo.com",
tlf:645645856,
persona_contacto:"Beatriz Estévez",
    setEmail: function (n){
    this.email=n;
    },
    toString: function(){
        return "[nombre:"+this.nombre+",Dirección física:"+this.direccion_fisica
        +",email:"+this.email+",tlf:"+this.tlf+",Persona de contacto:"+this.persona_contacto+"]";
    },
   

};
    
console.log(cliente["nombre"]);
console.log(segundoCliente["email"]);


cliente.setNombre("Maderas Peralta");
console.log(cliente["nombre"]);
    
segundoCliente.setEmail("info@micasuci.com");
console.log(segundoCliente["email"]);

console.log(cliente.toString());
console.log(segundoCliente.toString());

console.log(cliente.facturacion);
cliente.addFactura(90);
console.log(cliente.facturacion);
console.log(cliente.totalFacturacion());

console.log(cliente.direccionFiscal.ciudad);

cliente.setCP("28090");
console.log(cliente.direccionFiscal.CP)

