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

class LearningPath {
  constructor({ id, name, courses = [] }) {
    this.id = id;
    this.name = name;
    this.courses = courses;
  }
}

class Course {
  constructor({ id, name, teacher, lessons = [] }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }
}

/*
  Agregamos nuevas rutas, pero como podemos observar se se puede repetir los cursos por cada ruta y lo que
  nosotros queremos es ahorrar codigo

  const escuelaWeb = new LearningPath({
  name: "Escuela de desarollo web",
  courses: ["Html y css", "JavaScript", "Node.js",'Programacion basica'],
});

const escuelaData = new LearningPath({
  name: "Escuela de data science",
  courses: ['DataBusincess', 'Dataviz','Programacion basica'],
});

const escuelaViedeojuegos = new LearningPath({
    name: "Escuela de videojuegos",
    courses: ['Unity', 'c++', 'Unreal','Programacion basica'],
  }); */

const cursoProgramacionBasica = new Course({
  name: "Programacion basica",
});
const cursoUnity = new Course({
  name: "Curso Unity",
});
const cursoHTMLyCSS = new Course({
  name: "Curso HTML y CSS",
});
const cursoNodeJS = new Course({
  name: "Programacion basica",
});
const cursoDataBusiness = new Course({
  name: "Programacion data business",
});

//Ahora si agregamos los cursos de una mejor manera

const escuelaWeb = new LearningPath({
  name: "Escuela de desarollo web",
  courses: [cursoProgramacionBasica, cursoHTMLyCSS],
});

const escuelaData = new LearningPath({
  name: "Escuela de data science",
  courses: [cursoProgramacionBasica, cursoDataBusiness],
});

const escuelaViedeojuegos = new LearningPath({
  name: "Escuela de videojuegos",
  courses: [cursoProgramacionBasica, cursoUnity],
});

/* 
RETO crear las clases: clase, comenatarios
*/
class Classes {
    constructor({ name, time, comentarios = [] }) {
      this.name = name;
      this.time = time;
      this.comentarios = comentarios;
    }
  }
  
class Comments {
  constructor({ user, comment }) {
    this.user = user;
    this.comment = comment;
  }
}
const primerComentario = new Comments({
  user: "Fernando",
  comment: "Este es el primer comentario",
});


const primeraClaseProgramacionBasica = new Classes({
  name: "Que es la programación",
  comentarios: [primerComentario],
});
