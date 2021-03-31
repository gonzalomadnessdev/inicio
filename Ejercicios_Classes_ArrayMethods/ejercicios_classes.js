/*

Implementar localmente la clase Person y Teacher, con la herencia correspondiente tal cual 
el material de MDN mencionado, usando ECMAScript 2015 

    Crear una nueva clase Student que herede de Person con las mismas características que Teacher

    Además de compartir características con Teacher, vamos a agregar las siguientes propiedades a la clase Student: homework y exams
    Implementar getters y setters para homework y exams
    Construir objetos nuevos para cada clase (student, teacher y person por separado)

Modificar la clase Person con dos métodos nuevos: eating() y sleeping() con sus respectivas variables de clase (eat y sleep).
    Construir objetos nuevos de teacher y de student usando los métodos nuevos agregados en Person: eating() y sleeping()

*/



class Person {
    constructor(firstname, lastname, age, gender, interests, eat, sleep){
        this.name = {firstname , lastname};
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.eat = eat;
        this.sleep = sleep;
        
    }

    eating(){
        console.log(`I'm eating ${this.eat}`);
    }

    sleeping(){
        console.log(`I'm sleeping ${this.sleep}`);
    }
}

class Teacher extends Person {
    constructor(firstname, lastname, age, gender, interests, eat, sleep, subject, grade){
        super(firstname, lastname, age, gender, interests, eat, sleep);
        this.subject = subject;
        this.grade = grade;
    }
}

class Student extends Person {
    constructor(firstname, lastname, age, gender, interests, eat, sleep, homework, exams){
        super(firstname, lastname, age, gender, interests, eat, sleep);
        this._homework = homework;
        this._exams = exams;
    }

    get homework(){
        return this._homework;
    }

    get exams(){
        return this._exams;
    }

    set homework(newHomework){
        this._homework=newHomework;
    }

    set exams(newExams){
        this._exams=newExams;
    }
}

const student = new Student('Juan','Perez',22,'male','sports','pizza','a lot','','');

console.log(student.name);
student.homework = 'done';
student.exams = 'passed';
console.log(`Homework: ${student.homework}`);
console.log(`Exams: ${student.exams}`);
student.eating();
student.sleeping();
console.log(student);



