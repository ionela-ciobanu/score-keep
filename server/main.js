import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

//runs when the server process is finished started
Meteor.startup(() => {
















//Object Spread Operator
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia',
//   age: 0
// };
//
// let person = {
//     age: 25,
//   ...user
// }
// console.log(person);


//Object Property Shorthand
// let bike = 'Scott';
// let stuff = {
//   bike,
//   laptop: 'Mac'
// };
// console.log(stuff);

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
//
// let yearBuilt = 1995;
//
// let myHouse = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// }
//
// console.log(myHouse);












/*  class Person {
    constructor(name = 'Anonymous', age = 18) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      //return 'Hi! I am ' + this.name + '.';
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting() {
      if(this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }
    hasJob() {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
      return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
    }
  }

  let me = new Person('Mike', 24);
  console.log(me.getPersonDescription());

  let you = new Employee('George', 25, 'db admin');
  console.log(you.getPersonDescription());
  console.log(you.getGreeting());

  let him = new Programmer();
  console.log(him.getGreeting());

*/























  /*let square = function(x) {
    return x*x;
  };*/

  //let square = (x) => x*x;

  //console.log(square(5));

  /*let user = {
    name: 'Ionela',
    sayHi () {
      setTimeout(() => {
        console.log(this.name);
      }, 1000);
    }
  };
  user.sayHi(1, 2);*/

  //let numbers = [9, 99, 4, 56];

  //statements syntax - arrow function
  /*let newNumbers = numbers.map((number) => {
    return number + 1;
  });*/

  //expression syntax - arrow function
  //let newNumbers = numbers.map(number => number+1);
  //console.log(newNumbers);
});
