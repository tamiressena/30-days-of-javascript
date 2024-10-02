// LEVEL1
// EX01
// Store you first name, last name, age, country, city in your browser localStorage.
// (código executado no console do navegador)
window.localStorage;
localStorage.setItem("firstName", "Tamires");
localStorage.setItem("lastName", "Afonso");
localStorage.setItem("age", 27);
localStorage.setItem("country", "Brasil");
localStorage.setItem("city", "Monte Mor");
console.log(localStorage);

// LEVEL2
// EX01
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
// (código executado no console do navegador)
window.localStorage;
const student = new Object();

student.firstName = "João";
student.lastName = "Silva";
student.age = 23;
student.skills = ["HTML", "CSS", "JavaScript", "React"];
student.country = "Brasil";

console.log(student);

const studentJSON = JSON.stringify(student);
localStorage.setItem(studentJSON);
