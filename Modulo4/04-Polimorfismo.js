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
  
    publicarComentario(commetContent) {
      const comment = new Comments({
        content: commetContent,
        studentName: this.name,
      });
      comment.publicar();
    }
  }
  
  class freeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    aprobarCurso(newCourse) {
      if (newCourse.isFree) {
        this.cursosAprobados.push(newCourse);
      } else {
        console.log(
          "Lo sentimos " + this.name + " solo puedes tomar cursos gratuitos"
        );
      }
    }
  }
  
  class teacherStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    aprobarCurso(newCourse) {}
  
    publicarComentario(commetContent) {
      const comment = new Comments({
        content: commetContent,
        studentName: this.name,
        studentRole: "Profesor",
      });
      comment.publicar();
    }
  }
  
  class Comments {
    constructor({ content, studentName, studentRole }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole || 'Estudiante';
      this.likes = 0;
    }
  
    publicar() {
      console.log(this.studentName + " (" + this.studentRole + ")");
      console.log(this.likes + " Likes");
      console.log();
    }
  }
  
  const jair = new freeStudent({
    name: "Jair",
    username: "JairMora21",
    email: "jairantonio21@hotmail,com",
    twitter: "JairMora21",
  });
  
  const freddy = new teacherStudent({
    name: "Freddy",
    username: "FreddyVega",
    email: "Freddy@example.com",
    twitter: "Freddy",
  });
  
  jair.publicarComentario("Me encantó el curso"); // Jair (Estudiante) 0 likes 
  freddy.publicarComentario('Te alta hacer esto...'); // Freddy (Profesor) 0 likes
 