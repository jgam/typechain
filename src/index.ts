console.log('hello');

const name = 'jgam',
  age = 24,
  gender = 'male';

interface Human {
  name: string;
  age: number;
  gender: string;
}

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
sayHi(person);

//this is typescript thing
export {};
