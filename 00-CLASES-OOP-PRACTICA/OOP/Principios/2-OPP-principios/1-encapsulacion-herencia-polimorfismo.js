// ---------------- ENCAPSULACION -----------------------
// objetivo, simplificar el uso de un objeto, un usuario no debe saber como está compuesto internamente, sólo debe saber como funciona.

class Company {
  #employees = [];

  constructor(name) {
    this.name = name;
  }

  getEmployees() {
    return this.#employees;
  }

  addEmployees(employee) {
    this.#employees.push(employee);
  }
}
const company = new Company("coca cola");
const company2 = new Company("pepsi");

console.log(company);
console.log(company2);

company.addEmployees({ name: "juan" });
company2.addEmployees({ name: "felipe" });

console.log(company.getEmployees());
console.log(company2.getEmployees());

// ---------------- FIN ENCAPSULACION -----------------------

// ---------------- HERENCIA -----------------------
// se refiere a un principio que permite crear objetos especializados a partir de uno más generico. Por ej User y Programmer; Heredamos metodos y/o atributos.

class Person {
  constructor(name = "", lastname = "") {
    this.name = name;
    this.lastname = lastname;
    this.age = null;
  }

  getSay = () => `hola soy ${this.name}`;
}

class Programmer extends Person {
  constructor(language = "", name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

const persona = new Person("Luis", "Gerez");
console.log(persona);

const programador = new Programmer("Javascript", "Fernando", "Martinez");
console.log(programador);

console.log(persona.getSay());

// ---------------- FIN HERENCIA -----------------------

// ---------------- POLIMORFISMO -----------------------
// Capacidad de algunos objetos para poder manipular distintos tipos de datos de manera uniforme.
// Cuando hablamos de polimorfismo, hablamos de una forma de poder reducir el acoplamiento en nuestra aplicación, es decir, cuando nosotros ejecutamos un metodo de un obj, este puede depender de otros metodos que vienen de otros objetos heredados, para poder reducir esta complejidad de que un metodo llame a tantos metodos para poder devolver una respuesta, podemos utilizar el polimorfismo.
// Otras veces nos permite reducir codigo u obtener codigo mas compacto, e incluso mas entendible ya que estaremos usando una misma funcion o un mismo metodo para hacer distintas cosas.
// Caracteristicas del POLIMORFISMO:
//  * Overloading (sobrecarga): La sobrecarga habla de algunos metodos que pueden tomar distintos parametros con distintos tipos de datos y poder procesarlos de distintas maneras.
//  * Parametric polymorphism (polimorfismo parametrico): permite manejar distintos tipos de datos genericos sin ningun tipo de dato especifico, es decir, puedo pasarle cualquier objeto con cualquier estructura, sin conocerla en detalle, yu aun asi el metodo puede procesarlo.
//  * Subtype Polymorphism or inclusion polymorphism (subtipo de polimorfismo, o inclusion de polimorfismo): permite tomar representada una clase que viene derivada de otra y aun asi poder procesarlo.

// ------->> * Overloading (SOBRECARGA): <<-------

// como js es un lenguaje dinamico puede recibir cualqier tipo de parametros

class ProbandoOverloading {
  /**
    En C# seria:
    public int CountItems(int x){
      return x.ToString().Length;
    }

    public int CountItems(String x){
      return x.Length;
    }

    En cambio en JS:
   */
  countitems(x) {
    return x.toString().length;
  }

  /**
    En C# la sobrecarga de metodo seria:
    public int Sum(int x, int y){
      return Sum(x , y , 0)
    }

    public int Sum(int x, int y, int z){
      return x + y + z
    }

    En cambio en JS:
   */
  sum(x = 0, y = 0, z = 0) {
    return x + y + z;
  }
}

const countIt = new ProbandoOverloading();
const countIt2 = new ProbandoOverloading();

console.log(countIt.countitems("hola mundo"));
console.log(countIt2.countitems(3000));

const sum1 = new ProbandoOverloading();
const sum2 = new ProbandoOverloading();

console.log(sum1.sum(10, 20));
console.log(sum2.sum(10, 20, 30));

// ------->> FIN Overloading (SOBRECARGA) <<-------

// ------->> * Parametric polymorphism (polimorfismo parametrico): <<-------
// Capacidad de un metodo que puede funcionar con parametros de CUALQUIER TIPO (conocidos como generics)

/**
 Ej en C# sería:
 <T> --> Indica que va a recibir un tipo de dato per NO SÉ cuál ES el que elijirá pasarle el programados
 public class Stack<T> {
  private T[] items;
  public void Push(){}
 }

 --> en main: 
     var stackString = new Stack<String>{} // le especificamos que lo que va a recibir es un tipo string
     var stackInt = new Stack<int>{} // le especificamos que lo que va a recibir es un tipo entero
     // con esto definimos que se pueden aceptar distintos tipos de datos que no se asigna a mano y se va a asignar en el T...

     En JS sería:
 */

// en JS como no hay restricciones de tipos de datos, y como es interpretado lo va a recibir sin problema

console.log(stack);
console.log(stack2);

class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
  }
}

const stack = new Stack();
stack.push("añadi esto");

const stack2 = new Stack();
stack2.push(1000);

console.log(stack);
console.log(stack2);

// ------->> FIN Parametric polymorphism (polimorfismo parametrico) <<-------

// ------->> * Subtype Polymorphism or inclusion polymorphism (subtipo de polimorfismo, o inclusion de polimorfismo): <<-------
// Permite a los objetos con diferentes tipos de datos y ademas con una relacion que vienen a partir de una herencia ser procesados.

/**
 Ej en C# sería:
 public class Person{
  public String Name {get; set;}
  public String Lasname {get; set;}
}

public Class Programmer: Person{
  public String Language{get; set;}
}

 --> en main: 
    var person1 = new Person();
    person1.Name= "Luis";
    person1.Lastname = "Gerez" 
    program.WriteFullName(person1)

    var person2 = new Programmer();
    person2.Name= "Fer";
    person2.Lastname = "Martinez"
    person2.language = "C#"

    program.WriteFullName(person2)

      -->> Luego creo otro metodo, en donde pro agrumento va a recibir un obj que viene a partir de la instancia persona ;; Este metodo está definido en una clase MAS GRANDe, en la clase principal en este caso, y puede entender lo que se require mostrar sin importar la clase de la que se lo llame, en este caso Person
     public void WriteFullName(Person p){
      Console.WriteLine(p.Name + " " + p.Lastname)
     }
 

     En JS sería:
 */

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

const person1 = new Person();
person1.name = "Luis";
person1.lastname = "Gerez";

console.log(person1);

const person2 = new Programmer();
person2.language = "Javascript";
person2.name = "Fernando";
person2.lastname = "Martinez";

console.log(person2);

// procesandolo como subtipo de polimorfismo
// vamos a simular que esta clase es una CLASE MAYOR ...
class Main {
  writeFullName(p) {
    console.log(p.name + " " + p.lastname);
  }
}

const main = new Main();
main.writeFullName(person1);
main.writeFullName(person2);
// ------->> FIN Parametric polymorphism (polimorfismo parametrico) <<-------

// ---------------- FIN POLIMORFISMO -----------------------
