# ¿Que es un objeto en JavaScript?
## **Objeto literal**
Los *objetos literales* se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador.

Este es un ejemplo de objetos literales

```javascript
const student_platzi {
    'Juan': 20,
    'Pedro': 22,
    'Jose': 24,
}
```
## **Prototipo**
Objetos en programacion orientada a objetos
Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.
```javascript
function Student() {
this.name = 'Nombre';
this.age = 18;
this.points = 750;

const juanita = new Student();
```

## Objeto

Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.

## Atributo

Dentro de los objetos se pueden guardar atributos para guardar en ellos la información la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.

## Métodos

Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura