// Use the countries array to display all the countries.

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const title = document.createElement("h1");
title.textContent = "World Countries List";
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.textTransform = "uppercase";
title.style.fontFamily = "sans-serif";
title.style.marginTop = "50px";
document.body.appendChild(title);

const subtitle = document.createElement("h2");
subtitle.textContent = "Total number of countries: 193";
subtitle.style.display = "flex";
subtitle.style.justifyContent = "center";
subtitle.style.fontFamily = "sans-serif";
subtitle.style.fontSize = "16px";
subtitle.style.margin = "8px";
document.body.appendChild(subtitle);

const course = document.createElement("p");
course.textContent = "30DaysOfJavaScript: DOM - Day 2";
course.style.display = "flex";
course.style.justifyContent = "center";
course.style.fontFamily = "sans-serif";
course.style.fontSize = "14px";
course.style.margin = "8px";
document.body.appendChild(course);

const author = document.createElement("p");
author.textContent = "Author: Asabeneh Yetayeh";
author.style.display = "flex";
author.style.justifyContent = "center";
author.style.fontFamily = "sans-serif";
author.style.fontSize = "14px";
author.style.margin = "8px";
document.body.appendChild(author);

const div = document.createElement("div");
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.justifyContent = "center";
div.style.margin = "80px 120px";
document.body.appendChild(div);

for (i = 0; i < countries.length; i++) {
  let country = document.createElement("p");
  country.textContent = countries[i];
  country.style.display = "flex";
  country.style.justifyContent = "center";
  country.style.alignItems = "center";
  country.style.textAlign = "center";
  country.style.width = "150px";
  country.style.height = "150px";
  country.style.border = "1px solid rgb(216 216 216)";
  country.style.textTransform = "uppercase";
  country.style.fontFamily = "sans-serif";
  country.style.margin = "4px";

  div.appendChild(country);
}
