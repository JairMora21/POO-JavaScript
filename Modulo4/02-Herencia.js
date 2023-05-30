/* 
Creamos una clase madre
Definimos todos sus atributos y metodos sin importar que subscriptcion tiene, vamos a hacer una clase
Student muy general 
*/
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    cursosAprobados = [],
    RutasAprendizaje = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.cursosAprobados = cursosAprobados;
    this.RutasAprendizaje = RutasAprendizaje;
  }
}

class Course {
  constructor({ id, name, isFree = false }) {
    this.id = id;
    this.name = name;
    this.isFree = isFree;
  }
}

//Creamos nuestras clases hijas de Student
class freeStudent extends Student {
  //Utilizamos la palabra reservada 'super' para heredar los atributos de Student, y le mandamos un parametro
  constructor(props) {
    super(props);
  }
  aprobarCurso(newCourse) {
    //Como es una subcripcion gratuita solo puedes aprobar cursos gratuitos, hacemos esa validacion
    if (newCourse.isFree) {
      this.cursosAprobados.push(newCourse);
    } else {
      console.log(
        "Lo sentimos " + this.name + " solo puedes tomar cursos gratuitos"
      );
    }
  }
}

//Otro ejemplo
class expertStudent extends Student {
  constructor(props) {
    super(props);
  }

  //No ocupa validacion porque esta subscripcion es valida para todo
  aprobarCurso (newCourse) {
    this.cursosAprobados.push(newCourse);
    console.log(
        "Felicidades " + this.name + " Aprobaste el curso"
      );  }
}
//creamnos cursos y usuarios
const cursoProgramacionBasica = new Course({
  name: "Programacion basica",
  isFree: false,
});

const jair = new expertStudent({
  name: "Jair",
  username: "JairMora21",
  email: "jairantonio21@hotmail,com",
  twitter: "JairMora21",
});

const alfredo = new freeStudent({
    name: "Alfredo",
    username: "Alfredo123",
    email: "alfredo@example.com",
    twitter: "Alfredo123",
  });

jair.aprobarCurso(cursoProgramacionBasica); // Felicidades Jair Aprobaste el curso
alfredo.aprobarCurso(cursoProgramacionBasica); // Lo sentimos Alfredo solo puedes tomar cursos gratuitos
