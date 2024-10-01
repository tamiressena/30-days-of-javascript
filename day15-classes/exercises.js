// LEVEL1
// EX01

const { boolean } = require("mathjs");

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  }

  getPresentation() {
    const presentation =
      this.name +
      " is " +
      this.age +
      " years old. It's color is " +
      this.color +
      " and it has " +
      this.legs +
      " legs.";
    return presentation;
  }
}

// const dog = new Animal("Mel", 4, "caramel", 4);
// dog.setSkills = "Jump";
// dog.setSkills = "Sit";

// console.log(dog);
// console.log(dog.skills);

// EX02
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs, skills, gender) {
    super(name, age, color, legs);
    this.skills = skills;
    this.gender = gender;
  }

  get getSkills() {
    return this.skills;
  }

  set setSkills(skill) {
    this.skills.push(skill);
  }

  getFullDog() {
    let skills =
      this.skills.slice(0, this.skills.length - 1).join(", ") +
      ` and ${this.skills[this.skills.length - 1]}`;
    let pronoun = this.gender == "Male" ? "He" : "She";
    let fullDog = `${this.name} is a dog. ${pronoun} is ${this.age} years old and ${pronoun} knows how to ${skills}.`;
    return fullDog;
  }
}

const dog = new Dog("Mel", 4, "caramel", 4, ["Sit", "Jump"], "Female");
// dog.setGender = "Female";
// dog.setSkills = "Jump";
// dog.setSkills = "Sit";

// console.log(dog);
console.log(dog.getFullDog());

class Cat extends Animal {
  constructor(name, age, color, legs, temper, gender) {
    super(name, age, color, legs);
    this.temper = temper;
    this.gender = gender;
  }

  getFullCat() {
    let temper =
      this.temper.slice(0, this.temper.length - 1).join(" , ") +
      ` and ${this.temper[this.temper.length - 1]}`;
    let pronoun = this.gender == "Male" ? "He" : "She";
    let fullCat = `${this.name} is a ${this.color} cat. ${pronoun} is ${this.age} years old. ${pronoun} is ${temper}.`;
    return fullCat;
  }
}

const cat = new Cat(
  "Olívia",
  4,
  "gray",
  4,
  ["kind", "full of energy"],
  "Female"
);
console.log(cat.getFullCat());

// LEVEL2
// EX01
// Override the method you create in Animal class
// Already made it in the previous exercise

// LEVEL3
// EX01
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median) and measure of variability(range). In addition to those measures find the min, max and count. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    let array = Object.values(ages.ages);
    let length = array.length;
    console.log(array);
    return length;
  }

  sum() {
    let array = Object.values(ages.ages);
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }

  min() {
    let array = Object.values(ages.ages);
    let min = 100;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }

  max() {
    let array = Object.values(ages.ages);
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

  range() {
    let range = this.max() - this.min();
    return range;
  }

  mean() {
    let array = Object.values(ages.ages);
    let mean = Math.ceil(this.sum() / array.length);
    return mean;
  }

  median() {
    let array = Object.values(ages.ages);
    let sort = array.sort();

    let median;

    if (sort.length % 2 !== 0) {
      median = sort[(array.length - 1) / 2];
    } else {
      median = sort[array.length / 2];
    }
    return median;
  }
}

const ages = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);

console.log("Count: ", ages.count());
console.log("Sum: ", ages.sum());
console.log("Min: ", ages.min());
console.log("Max: ", ages.max());
console.log("Range: ", ages.range());
console.log("Mean: ", ages.mean());
console.log("Median: ", ages.median());
