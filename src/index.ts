console.log('hello');

const name = 'jgam',
  age = 24,
  gender = 'male';

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jgam = new Human('jgam', 18, 'male');

const person = {
  name: 'jimmy',
  gender: 'male',
  age: 22,
};
//what to do when you want to pass in object?

const sayHi = (person: Human): void => {
  console.log(
    `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}.`
  );
};

//ts wouldn't let me compile if there are not enough number of arguments
sayHi(jgam);

//this is typescript thing
export {};
