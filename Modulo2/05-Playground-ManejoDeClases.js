/* 
Dadas la siguientes clases:

Clase Banda con las propiedades:

nombre - string
generos - Array
integrantes - Array
Crea una clase llamada "Integrante" con las propiedades:

nombre - string
instrumento - string
Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no 
debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con 
instrumento "Bateria".
*/


class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    //delcaramos un metodo some para verificar si hay algun baterista actualmente en a banda
    const baterista = this.integrantes.some(integrante => integrante.instrumento.includes('Bateria'));

    //Si el nuevo registro es baterista y ya hay un baterista, no se agregara
    if(integranteNuevo.instrumento === 'Bateria' && baterista){
        console.log('Ya existe un baterista en la banda');
    } else {
        //se agrega el baterista
        this.integrantes.push(integranteNuevo)
    }

}
}

//Crear clase Integrante
class Integrante {
    constructor({nombre, instrumento}){
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}


const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Sco", instrumento: "Bateria" }));
  banda.agregarIntegrante(new Integrante({ nombre: "Tatis", instrumento: "Bateria" })); // no se agrega
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }));
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" })); // no se agrega


  console.log(banda);