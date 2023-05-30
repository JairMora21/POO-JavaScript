//FORMA DE CREAE ESTUDIANTES CON OBJETOS LITERALES
const jair = {
  name: "Jair Antonio",
  username: "JairMora21",
  points: 100,
  socialMedia: {
    twitter: "JairMora21",
    instagram: "JairMartinDelCampo",
    facebook: undefined,
  },
  cursosAprobados: [
    "Curso de Git y GitHub",
    "Curso basico de JavaScript",
    "Curso de HTML y CSS",
  ],
  RutasAprendizaje: [
    {
      name: "Desarollo Web",
      courses: [
        "Curso de Git y GitHub",
        "Curso basico de JavaScript",
        "Curso de HTML y CSS",
      ],
    },
    {
      name: "Escuela de videojuegos",
      courses: ["Unity", "Diseño de juegos", "Unreal"],
    },
  ],
};

const miguel = {
  name: "Miguel",
  username: "Miguel01",
  points: 120,
  socialMedia: {
    twitter: "Miguel01",
    instagram: "Miguel01",
    facebook: undefined,
  },
  cursosAprobados: [
    "Curso de node.js",
    "Curso basico de JavaScript",
    "Curso de HTML y CSS",
  ],
  RutasAprendizaje: [
    {
      name: "Desarollo Web",
      courses: [
        "Curso de node.js",
        "Curso basico de JavaScript",
        "Curso de HTML y CSS",
      ],
    },
    {
      name: "Data science",
      courses: ["Manejo de datos", "MySQL", "Tablean"],
    },
  ],
};

//Esta no es la mejor manera de hacerlo vamos a hacerlo con POO

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    cursosAprobados = [],
    RutasAprendizaje = []
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
    this.RutasAprendizaje = RutasAprendizaje  }
}

//Ahora es mas facil crear estudiantes 
const jair2 = new Student({
    name: "Jair",
    username: "JairMora21",
    email: "jairantonio21@hotmail,com",
    twitter: "JairMora21"
});

console.log(jair2);


//PODEMOS agregar mas opciones para que sea algo mas facil de hacer, como hacer una clase de cursos, rutas aprendizaje etc

class Course {
  constructor({
    id,
    name,
    teacher,
    lessons = [],
  }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }
}

class LearningPath {
  constructor({
    id,
    name,
    courses = [],
  }) {
    this.id = id;
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  //Metodo extra para remplazar cursos
  replaceCourse(oldCourse, newCourse) {
    const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

    if (oldCourseIndex !== -1) {
      this.courses[oldCourseIndex] = newCourse;
    }

    return this.courses;
  }

  //Metodo extra para eliminar cursos
  deleteCourse(oldCourse) {
    const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
    this.courses.splice(courseIndex, 1);

    return this.courses;
  }
}
