// LEVEL1
// EX01
// Change skills array to JSON using JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

const newSkills = JSON.stringify(skills);
console.log(newSkills);
console.log(typeof newSkills);

// EX02
// Stringify the age variable
let age = 250;

const stringAge = JSON.stringify(age);
console.log(stringAge);
console.log(typeof stringAge);

// EX03
// Stringify the isMarried variable
let isMarried = true;

const stringIsMarried = JSON.stringify(isMarried);
console.log(stringIsMarried);
console.log(typeof stringIsMarried);

// EX04
// Stringify the student object
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const stringStudent = JSON.stringify(student);
console.log(stringStudent);
console.log(typeof stringStudent);

// LEVEL2
// EX01
// Stringify the students object with only firstName, lastName and skills properties
const newStudent = JSON.stringify(student, ["firstName", "lastName", "skills"]);

console.log(newStudent);
console.log(typeof newStudent);

// LEVEL3
// EX01
// Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

const newTxt = JSON.parse(txt);
console.log(newTxt);
console.log(typeof newTxt);

// EX02
// Find the user who has many skills from the variable stored in txt.
const txtObject = JSON.parse(txt);
const txtNames = Object.keys(txtObject);
const skillsNum = [];

for (let i = 0; i < txtNames.length; i++) {
  skillsNum[i] = txtObject[txtNames[i]].skills.length;
}

let max = Math.max(...skillsNum);
for (const element of skillsNum) {
  if (element === max) {
    console.log(txtNames[skillsNum.indexOf(element)]);
  }
}
//Asab
