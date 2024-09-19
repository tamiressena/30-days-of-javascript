// LEVEL 1
// EX01, 02 and 03
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
  name: "Mel",
  legs: 4,
  color: "caramel",
  age: 5,
  bark: function () {
    return "woof woof";
  },
};

console.log(dog);

// EX04
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// EX05
// Set new properties the dog object: breed, getDogInfo
dog.breed = "RND";
dog.getDogInfo = function () {
  let statement = `The dog's name is ${this.name}, it is ${this.age} years old and its colour is ${this.color}.`;
  return statement;
};

console.log(dog);
console.log(dog.getDogInfo());

// LEVEL 2
// EX01
// Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let skillsAlex = users.Alex.skills.length;
let skillsAsab = users.Asab.skills.length;
let skillsBrook = users.Brook.skills.length;
let skillsDaniel = users.Daniel.skills.length;
let skillsJohn = users.John.skills.length;
let skillsThomas = users.Thomas.skills.length;
let skillsPaul = users.Paul.skills.length;

const array = [
  skillsAlex,
  skillsAsab,
  skillsBrook,
  skillsDaniel,
  skillsJohn,
  skillsPaul,
  skillsThomas,
];

let max = 0;
for (let i = 0; i < array.length; i++) {
  const current = array[i];

  if (current > array[max]) {
    max = i;
  }
}

if (array[max] === skillsAlex) {
  console.log("Alex tem mais habilidades");
} else if (array[max] === skillsAsab) {
  console.log("Asab tem mais habilidades");
} else if (array[max] === skillsBrook) {
  console.log("Brook tem mais habilidades");
} else if (array[max] === skillsDaniel) {
  console.log("Daniel tem mais habilidades");
} else if (array[max] === skillsJohn) {
  console.log("John tem mais habilidades");
} else if (array[max] === skillsPaul) {
  console.log("Paul tem mais habilidades");
} else if (array[max] === skillsThomas) {
  console.log("Thomas tem mais habilidades");
}

// EX02
// Count logged in users, count users having greater than equal to 50 points from the following object.
const arr = [
  users.Alex.isLoggedIn,
  users.Asab.isLoggedIn,
  users.Brook.isLoggedIn,
  users.Daniel.isLoggedIn,
  users.John.isLoggedIn,
  users.Paul.isLoggedIn,
  users.Thomas.isLoggedIn,
];

let loggedIn = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] == true) {
    loggedIn += 1;
  }
}
console.log(`Logged in users: ${loggedIn}.`);

const arr2 = [
  users.Alex.points,
  users.Asab.points,
  users.Brook.points,
  users.Daniel.points,
  users.John.points,
  users.Paul.points,
  users.Thomas.points,
];

let hasMoreThan49Points = 0;

for (i = 0; i < arr2.length; i++) {
  if (arr2[i] >= 50) {
    hasMoreThan49Points += 1;
  }
}

console.log(`${hasMoreThan49Points} users has 50 points or more.`);

// EX03
// Find people who are MERN stack developer from the users object
const arr3 = [
  users.Alex.skills,
  users.Asab.skills,
  users.Brook.skills,
  users.Daniel.skills,
  users.John.skills,
  users.Paul.skills,
  users.Thomas.skills,
];

console.log(arr3);

// if (arr3[0].includes("HTML")) {
//   console.log("Deu bom");
// }

for (i = 0; i < arr3.length; i++) {
  if (arr3[i].includes("MERN")) {
    if (arr3[i] === arr3[0]) {
      console.log("Alex desenvolve em MERN");
    } else if (arr3[i] === arr3[1]) {
      console.log("Asab desenvolve em MERN");
    } else if (arr3[i] === arr3[2]) {
      console.log("Brook desenvolve em MERN");
    } else if (arr3[i] === arr3[3]) {
      console.log("Daniel desenvolve em MERN");
    } else if (arr3[i] === arr3[4]) {
      console.log("John desenvolve em MERN");
    } else if (arr3[i] === arr3[5]) {
      console.log("Paul desenvolve em MERN");
    } else if (arr3[i] === arr3[6]) {
      console.log("Thomas desenvolve em MERN");
    }
  } else {
    console.log("Ninguém desenvolve em MERN");
  }
}

// EX04
// Set your name in the users object without modifying the original users object

users.Tamires = {};
console.log(users);

// EX05
// Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);

// EX06
// Get all the values of users object
const values = Object.values(users);
console.log(values);
