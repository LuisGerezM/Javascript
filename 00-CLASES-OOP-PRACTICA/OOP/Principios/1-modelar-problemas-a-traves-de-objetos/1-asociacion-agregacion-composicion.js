// ---------------- ASOCIACION   -----------------------

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const luis = new Person("Luis", "Gerez");
const francesca = new Person("Francesca", "Hernandez");

// asociacion: Define que dos objetos pueden estar relacionados
// Si yo quiero decir que Luis es padre de Francesca puedo relacionarlos a traves de una propiedad, pero si quito la relacion puede seguir funcionando sin ningun problema, es decir, tienen un proposito
// ej:
// relacion; si la quito, los objetos siguen funcionando correctamente
francesca.parent = luis;

console.log(francesca);
console.log(luis);

// ---------------- FIN ASOCIACION  -----------------------

// ---------------- AGREGACION -----------------------
// Es una forma de asociacion  en la que relacion dos objetos o mas y algun objeto tiene un rol mayor a otro. El de mayor rol determina el "contenedor" de los demas obj y las relaciones que tienen estos. El que tiene el rol mayor (el obj que contiene a otros) se llama Aggregate y los objetos que están dentro de este objeto mucho mas grande se lo conoce como componente.

const company = {
  name: "Gerez Tech",
  employees: [],
};

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const fernando = new Person("Fernando", "Gerez");
const francesca = new Person("Francesca", "Hernandez");

company.employees.push(fernando);
company.employees.push(francesca);

console.log(company);

// ---------------- FIN AGREGACION -----------------------

// ---------------- COMPOSICION -----------------------
// Se refiere a un tipo fuerte de agregacion donde muchos objetos pueden pertenecer a uno mayor, pero NIGNUNO tiene una vida independiente

const person = {
  name: "Luis",
  lastname: "Gerez",
  address: {
    street: "123 some street",
    city: "some city",
    country: "united kingdom",
  },
};

/**
  address: {
    street: "123 some street",
    city: "some city",
    country: "united kingdom",
  }
  Este objeto address eswtá fuertemente acoplado a person, por tanto no tiene vida de manera independientemente.
 */

// ---------------- FIN COMPOSICION -----------------------
