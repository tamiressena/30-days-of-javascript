// LEVEL 1
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(0, 2));
console.log(challenge.slice(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("a"));

let firstPart = "30 Days of ";
console.log(firstPart.concat("JavaScript"));

console.log(challenge.repeat(2));

// LEVEL 2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

let string = "10";
console.log(typeof Number(string));

console.log(Math.ceil(parseFloat("9.8")) == 10);

let first = "python";
let second = "jargon";

console.log(first.includes("on"), second.includes("on"));

let sentence2 = "I hope this course is not full of jargon.";
console.log(sentence2.includes("jargon"));

let num = Math.floor(Math.random() * 101);
console.log(num);

let num2 = Math.floor(Math.random() * 51) + 50;
console.log(num2);

let num3 = Math.floor(Math.random() * 256);
console.log(num3);

let js = "JavaScript";
let num4 = Math.random() * 10;
console.log(js.charAt(num4));

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

console.log(sentence.substr(31, 54));

// LEVEL 3
let sentence3 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence3.split("love").length);

console.log(sentence.match(/because/gi).length);

let sentence4 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let clear1 = sentence4.replace("%", "");
let clear2 = clear1.replace("$", "");
let clear3 = clear2.replace("@", "");
let clear4 = clear3.replace("&", "");
let clear5 = clear4.replace("#", "");
console.log(clear5);
