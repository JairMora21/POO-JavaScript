
class Student {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguel = new Student("Miguel", 23, [
  "Analisis de negocios",
  "Negocios internacionales",
]);

miguel.aprobarCurso("Curso de excel");

console.log(miguel.cursosAprobados); /* 
[
  'Analisis de negocios',
  'Negocios internacionales',
  'Curso de excel'
] */


/* Forma un poco mas practica al crear objetos 
En los parametros de nuestro constructor podemos tener muchos atributos, pueden ser demasiados
y podemos llegar a confundirnos, lo mejor es crear un objeto dentro del constructor
*/

class Student2 {
  //dejamos un valor por default de cursos aprobados nulo en caso de que no tenga
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const pedro = new Student2({
  //no importa el orden en el que lo agregemos
  email: "pedro@gmail.com",
  name: "Pedro",
  age: 23,
});

console.log(pedro); /* 
Student2 {
  name: 'Pedro',
  age: 23,
  email: 'pedro@gmail.com',
  cursosAprobados: []
} */
