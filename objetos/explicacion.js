const persona = {
    //clave t valor
    name: "Abril",
    lastName: "Mosquera",
    isWorking: true,
    age:27,
    cats:["inglaterra"],
    walk: () => {
        return "no estoy caminando";
    },
};

console.log(persona.age);//accede a la propiedad
console.log(persona["name"]);//accede a la propiedad
persona.pepito = "pepito";//agregamos una nueva propiedad
delete persona.age;//borra la propiedad deseada

console.log(persona);