const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// LEVEL1
// EX01
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(initialize(data));
  })
  .catch((error) => console.error(error));

function initialize(countriesData) {
  let options = "";
  for (let i = 0; i < countriesAPI.length; i++) {
    options += `País: ${countriesData[i].name}\n Capital: ${countriesData[i].capital}\n Languages: ${countriesData[i].languages}\n Population: ${countriesData[i].population}\n Area: ${countriesData[i].area}\n\n`;
  }
  return options;
}

// LEVEL2
// EX01
// Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => console.log(initialize(data)))
  .catch((error) => console.error(error));

function initialize(catsData) {
  let catNames = "";
  for (let i = 0; i < catsAPI.length; i++) {
    catNames += `${catsData[i].name}\n`;
  }
  return catNames;
}

// LEVEL3
// EX01
// Read the cats api and find the average weight of cat in metric unit.
function getAverageCatWeight() {
  const catsAPI = "https://api.thecatapi.com/v1/breeds";

  fetch(catsAPI)
    .then((response) => response.json())
    .then((cats) => {
      let totalWeight = 0;
      let count = 0;

      cats.forEach((cat) => {
        if (cat.weight) {
          const weight =
            (parseInt(cat.weight.metric.split(" - ")[0], 10) +
              parseInt(cat.weight.metric.split(" - ")[1], 10)) /
            2;
          totalWeight += weight;
          count++;
        }
      });

      const averageWeight = totalWeight / count;
      console.log(`A média de peso dos gatos é: ${averageWeight.toFixed(2)}Kg`);
    })
    .catch((error) => console.error(error));
}

getAverageCatWeight();

// EX02
// Read the countries api and find out the 10 largest countries
function getLargestCountries() {
  const countriesAPI = "https://restcountries.com/v2/all";

  fetch(countriesAPI)
    .then((response) => response.json())
    .then((countries) => {
      const largestCountries = countries
        .sort((a, b) => b.area - a.area) // Ao iterar os países, verificará se b é maior ou não que a, por meio do resultado da subtração, a partir desse resultado ele determina se b deve vir antes de a ou vice-versa. Se b - a é positivo, b é maior que a, se é negativo, b é menor que a
        .slice(0, 10);

      largestCountries.forEach((country) => {
        console.log(`${country.name}: ${country.area} Km²`);
      });
    })
    .catch((error) => console.error(error));
}

getLargestCountries();

// EX03
// Read the countries api and count total number of languages in the world used as officials.
function totalOfficialLanguages() {
  const countriesAPI = "https://restcountries.com/v2/all";

  fetch(countriesAPI)
    .then((response) => response.json())
    .then((countries) => {
      const languagesSet = new Set(); // Set é utilizado para evitar duplicatas

      countries.forEach((country) => {
        if (country.languages) {
          country.languages.forEach((language) => {
            languagesSet.add(language.name);
          });
        }
      });
      const totalLanguages = languagesSet.size;
      console.log(`Número de idiomas oficiais no mundo: ${totalLanguages}`);
    });
}

totalOfficialLanguages();
