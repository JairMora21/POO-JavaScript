
//OBJETO LITERAL
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: ["Curso de HTML y CSS", "Curso Practivo de HTML y CSS"],
  //Creamos un metodo para añadir cursos
  aprobarCurso: function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

//Ambas manera son correctas para agregar un curso, pero es mejor la segunda ya que tiene un metodo asignado para dicha accion

natalia.cursosAprobados.push("Curso de JavaScript");

natalia.aprobarCurso("Curso de NODE.js")

console.log(natalia.cursosAprobados);
/* 
  'Curso de HTML y CSS',
  'Curso Practivo de HTML y CSS',
  'Curso de JavaScript'
*/

//PROTOTIPO
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
//Asi podemos crear metodos con prototipos
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student('Juanita', 17, ["Curso de Java", "Curso de Laravel"]);

juanita.aprobarCurso('Curso de Unreal Engine');

console.log(juanita); /* 
Student {
  name: 'Juanita',
  age: 17,
  cursosAprobados: [ 'Curso de Java', 'Curso de Laravel', 'Curso de Unreal Engine' ]
}
*/