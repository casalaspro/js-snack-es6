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


// SNACK 1

const vipTable = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const typographyVipTable = [];

vipTable.forEach((el, i)=>{
  const personVip = {
    tableName : 'Tavolo VIP',
    guestName : el,
    place: i+1,
  }

  typographyVipTable.push(personVip);

  console.log(typographyVipTable[i])
})

// SNACK 2

const capitalizedNames = [];
const gradeSelection = [];
const gradeIdSelection = [];

const studentsChart = [];

function createStudent(id, name, grade){
  const student = {
    id: id,
    name: name,
    grades: grade
  }

  return student;
}

studentsChart.push(createStudent(213, "Marco della Rovere", 78));
studentsChart.push(createStudent(110, "Paola Cortellessa", 96));
studentsChart.push(createStudent(250, "Andrea Mantegna", 48));
studentsChart.push(createStudent(145, "Gaia Borromini", 74));
studentsChart.push(createStudent(196, "Luigi Grimaldello", 68));
studentsChart.push(createStudent(213, "Piero della Francesca", 50));
studentsChart.push(createStudent(102, "Francesca da Polenta", 84));

console.log(studentsChart);

studentsChart.forEach((el)=>{
  const studentCapitalized = createStudent(el["id"], el["name"].toUpperCase(), el["grades"]);
  capitalizedNames.push(studentCapitalized);

  if(el["grades"] > 70){
    const studentGradeSelected = createStudent(el["id"], el["name"], el["grades"]);
    gradeSelection.push(studentGradeSelected);
    // console.log("Trovato VOTO");
  }if(el["grades"] > 70 && el["id"] > 120){
    const studentGradeIdSelected = createStudent(el["id"], el["name"], el["grades"]);
    gradeIdSelection.push(studentGradeIdSelected);
    // console.log("Trovato VOTO e ID");
  }

  // console.log(student["name"].toUpperCase());
})

console.log(capitalizedNames);
console.log(gradeSelection);
console.log(gradeIdSelection);



