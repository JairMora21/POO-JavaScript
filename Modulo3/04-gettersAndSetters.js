/* 
Los atributos y metodos que no queremos que se llamen fuera de nuestro prototipo 
*/
class Course {
  constructor({ id, name, teacher, lessons = [] }) {
    this.id = id;
    this._name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }

  //Asi se crea un getter and setter
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

const cursoProgramacionBasica = new Course({
  name: "Programacion basica",
});
// asi los podemos mandar a llamar

//seter
cursoProgramacionBasica.name = 'Hola';
//geter
console.log(cursoProgramacionBasica.name);
