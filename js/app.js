/*

*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
esempio:
{
  nomeTavolo: 'Tavolo VIP',
  nomeOspite: 'Brad Pitt',
  posto: 1
}
*SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id   Name                    Grades
213  Marco della Rovere       78
110  Paola Cortellessa        96
250  Andrea Mantegna 	        48
145  Gaia Borromini           74
196  Luigi Grimaldello 	      68
102  Piero della Francesca    50
120  Francesca da Polenta     84

*/

console.log("JavaScript Snacks")


// // SNACK 1

// const vipTable = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// // const typographyVipTable = [];

// // EASY WAY
// // vipTable.forEach((el, i)=>{
// //   const personVip = {
// //     tableName : 'Tavolo VIP',
// //     guestName : el,
// //     place: i+1,
// //   }

// //   typographyVipTable.push(personVip);

// //   console.log(typographyVipTable[i])
// // })

// // MAP WAY
// // vipTable.forEach((el, i)=>{
// //   const personVip = new Map();
// //   personVip.set("tableName", 'Tavolo VIP');
// //   personVip.set("guestName", el);
// //   personVip.set("place", i+1);

// //   typographyVipTable.push(personVip);
// // })

// // ARRAY MAP METHOD
// const typographyVipTable = vipTable.map((el, i)=>{
//   const vip = {
//     tableName : 'Tavolo VIP',
//     guestName : el,
//     place: i+1
//   }

//   return vip;
// });

// console.log(typographyVipTable);




// // SNACK 2

// const capitalizedNames = [];
// const gradeSelection = [];
// const gradeIdSelection = [];

// const studentsChart = [];

// function createStudent(id, name, grade){
//   const student = {
//     id: id,
//     name: name,
//     grades: grade
//   }

//   return student;
// }

// studentsChart.push(createStudent(213, "Marco della Rovere", 78));
// studentsChart.push(createStudent(110, "Paola Cortellessa", 96));
// studentsChart.push(createStudent(250, "Andrea Mantegna", 48));
// studentsChart.push(createStudent(145, "Gaia Borromini", 74));
// studentsChart.push(createStudent(196, "Luigi Grimaldello", 68));
// studentsChart.push(createStudent(213, "Piero della Francesca", 50));
// studentsChart.push(createStudent(102, "Francesca da Polenta", 84));

// console.log(studentsChart);

// studentsChart.forEach((el)=>{
//   const studentCapitalized = createStudent(el["id"], el["name"].toUpperCase(), el["grades"]);
//   capitalizedNames.push(studentCapitalized);

//   if(el["grades"] > 70){
//     const studentGradeSelected = createStudent(el["id"], el["name"], el["grades"]);
//     gradeSelection.push(studentGradeSelected);
//     // console.log("Trovato VOTO");
//   }if(el["grades"] > 70 && el["id"] > 120){
//     const studentGradeIdSelected = createStudent(el["id"], el["name"], el["grades"]);
//     gradeIdSelection.push(studentGradeIdSelected);
//     // console.log("Trovato VOTO e ID");
//   }

//   // console.log(student["name"].toUpperCase());
// })

// console.log(capitalizedNames);
// console.log(gradeSelection);
// console.log(gradeIdSelection);

/*

SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!

*/

// SNACK 3

// creo array di oggetti bici con name e weight come proprietà
const bikes = [
  {
    name: "Bianchi Specialissima",
    weight: 6.7
  },
  {
    name: "Canyon Ultimate CF",
    weight: 6.8
  },
  {
    name: "Rose X-Lite Six Disc",
    weight: 6.9
  },
  {
    name: "Sarto asola",
    weight: 6.7
  },
  {
    name: "Time Alpe D’Huez 01",
    weight: 6.2
  },
];

// destrutturo il primo oggetto
const {name: nameFirst, weight: weightFirst} = bikes[0];

// attribuisco ad una variabile il primo oggetto
let lighterBike = {nameFirst, weightFirst};

// ciclo tutti gli oggetti destrutturandoli e confrontandoli con la variabile lighterBike
bikes.forEach((el, index)=>{
  // destrutturo l'oggetto dell'array ciclato
  const {name, weight} = bikes[index];
  // confronto il peso
  if(weight < lighterBike["weightFirst"]){
    // riassegno i valori nel caso soddisfino le premesse
    lighterBike["weightFirst"] = weight;
    lighterBike["nameFirst"] = name;
  }
})

console.log(lighterBike);

// SNACK 4

const teams = [];

function generateTeam(name){
  const team = {
    nome: name,
    punti_fatti: 0,
    falli_subiti: 0,
  }

  return team
}

teams.push(generateTeam("Salernitana"));
teams.push(generateTeam("Torino"));
teams.push(generateTeam("Genoa"));
teams.push(generateTeam("Parma"));
teams.push(generateTeam("Milan"));
teams.push(generateTeam("Inter"));
teams.push(generateTeam("Caltanissetta"));
console.log(teams);

function generateRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

teams.forEach((el, index, object)=>{
  object[index]["falli_subiti"] = generateRandomNumber(1, 100);
  object[index]["punti_fatti"] = generateRandomNumber(1, 100);
})

console.log(teams);

const teamsNomeFalli = [];

teams.forEach((el, i)=>{
  const {nome, falli_subiti} = el;
  const teamNomeFalli = {nome, falli_subiti};
  teamsNomeFalli.push(teamNomeFalli);
})

console.log(teamsNomeFalli);


