// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; //type Undefind

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["css", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Javascript", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

//-------------------------------------------
//Les structures de controles
//-------------------------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

//while
let w = 0;

while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  //console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//on declare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  //   console.log(data[i].technos[0]);
  //   document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

//Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//---------------
//Méthodes String
//---------------
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
// // let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLocaleLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//---------------
// Méthodes numbers
//---------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 50));

//----------------
// Méthodes Arrays
//----------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" "));

// console.log(array3.slice(1));
// console.log(newArray.slice(2, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language === "Php"));

// let shift = array3.shift();
// console.log(array3);

// console.log(array3.pop());

// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
console.log(arrayNumber);

// FILTER , SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join("");

//------------------
//  Méthodes Objects
//------------------
document.body.innerHTML = data
  .filter((user) => user.pseudo.includes("a"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
    <div class="user-card">
      <h2>${user.pseudo}</h2>
      <p>Age : ${user.age} ans</p>
      <p>Status ${user.admin ? "Modérateur" : "Membre"}</p>
    </div>
  `
  )
  .join("");
