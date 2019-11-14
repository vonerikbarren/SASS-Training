// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======= if statements =======
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Notes: 
//          So I started this with the intention of understanding the rudimentary concepts
//       I will build upon the example and do it continously until I feel comfortable with
//       it. Its really that simple. 
// ~`~`~`~`~`~`~`
// So... How did it go?
//
//
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


document.write("<h1> If Statements </h1>");
document.write("<h2>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h2>");


// Example:

var age = 18;

if (age >= 18) {
  document.write("<b>Qualifies for driving</b> </br> <b>🙄 Duh!</b>")
} else {
  document.write("<b> Does not qualify for driving 😔 </b> </br>")
}


// ======= My own Example #1 =========

let personAge = 21;

if (personAge >= 21) {
  document.write(" </br> </br> <b> I am 21 or over, Please let me in </b>");
} else {
  document.write("</br> <b>I am too young, but maybe you can help me 😉 !</b>");
}

// ======= My own Example #2 ======== using objects and methods.

let VonErik = {
  age: 27,
  race: "black",
  funny: true,
  ugly: false,
  weird: true,
  favMusic: ["jazz", "classical", "acapella"],
  favSeason: "fall",
  favAnime: "One Piece",
  vehicle: "jeep cherokee",
  moneyUSD_$: 500,
};

let Greysi = {
  age: 29,
  race: ["black", "hispanic"],
  funny: false,
  ugly: false,
  weird: true,
  favMusic: ["latino", "classical", "acapella"],
  favAnime: "Naruto",
  vehicle: "toyota corolla",
  moneyUSD_$: 20000,
};

let expenses = {
  groceries_$: -80,
  rent_$: -1300,
  Greysi_CareNote_$: -250,
  VonErik_CarNote_$: -500,
  Greysi_TakeOut_$: -50,
  VonErik_TakeOut_$: -30,
}

let moneyDifference = Greysi.moneyUSD_$ - VonErik.moneyUSD_$;
let bothRace = VonErik.race == Greysi.race[0];
let both_Weird = VonErik.weird === Greysi.weird;



// Confirming Von & Greysi arent the same Age
if (Greysi.age != VonErik.age) {
  document.write("</br> <p>Greysi and Von arent the same age</p>");
} else {
  document.write("</br> <p>Greysi and Von are the same age</p>");
}

// Confirming Greysi is older than Von
if (Greysi.age >= VonErik.age) {
  document.write("</br> <b> Additionally Greysi is definitely older than Von'Erik! </b>");
} else {
  document.write("</br> <b> Thats impossible. Check again </b>");
}

// Normal Comparisons
if (VonErik.funny = Greysi.funny) {
  document.write("</br> <p> I guess we are both funny </p>");
} else {
  document.write("</br> <p> I guess only one of us is funny</p>");
}

if (bothRace = true) {
  document.write("</br> <p> Yay! We are both black.... kind of... </p>");
  document.write("<p>...</p>");
  document.write("<p>Great... What do we do now?</p>");
} else {
  document.write("</br> <p>Yup only one of us is black</p>");
}

// Utilization of comparisons (deeper):
if (VonErik.moneyUSD_$ >= Greysi.moneyUSD_$) {
  document.write("</br> <p> Yeah, Von'Erik is definitely rich");
  document.write("</br> <p> Greysi is super poor</p>");
  document.write("</br> <p> Thats because Von'Erik has:</p>" + VonErik.moneyUSD_$ + "<p> MUAHAHA 😈 </p>");
} else {
  document.write("</br> <p> Yeah, Greysi is definitely rich");
  document.write("<p> Von'Erik is super poor </p>");
  document.write("<p> Thats because Greysi has:</p>" + moneyDifference + "<p> more than Von'Erik");
}

document.write("<h2>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h2>");


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ======= Using the else...if statements =======
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Notes: 
//          There is just something about this that makes me really want to continue
//        Building this. Its nothing impressive, but its working and I am understanding
//        how to debug everything here as well.  So because of that we are going to move on
//        to the next section. Good luck!
//
//
// Additional Notes: 
//          
//          So to understand if..else if statements, I need to understand exactly what it
//        is doing. First and foremost, and ultimately:
//
//          The if...else statment essentially is the following:
//
//          1st, if this condition is true, then run this code,
//              else, if the condition is false, then run this code.
//
//
//                                  now the if...else if.... 
//
//          1st, if this condition is true, then run this code,
//              else if, run this condition to see if its true by running this code
//              else if, run this condition to see if its true, by running this code
//              else, if none of these conditions are true, THEN run this code. 
//                    (if the previous conditions are false)
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Example:

var book = "maths";

document.write("</br> <h1> All Else If Formulas </h1>")

if (book == "history") {
  document.write("<b> History Book </b> ");
} else if (book == "maths") {
  document.write("<b> Mathematics Book </b>");
} else if (book == "economics") {
  document.write("<b> Economics Book </b>");
} else {
  document.write("<b> Unknown Book </b>");
}

// ======== My Practice Examples 1: ========== 

let languagesArray = ['English', 'Spanish', 'French', 'Portuguese', 'Somali', 'German',
  'Russian', 'Greek', 'Hebrew', 'Arabic', 'Hindi', 'Korean', 'Japanese', 'Chinese'];


document.write("<p>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>");
document.write(languagesArray.length);
document.write("<p>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>");

let skill_level_Num = {
  English: 10,
  Spanish: 5,
  French: 2,
  Portuguese: 1,
  Somali: 0,
  German: 1,
  Russian: 1,
  Greek: 0,
  Hebrew: 0,
  Arabic: 2,
  Hindi: 1,
  Korean: 0,
  Japanese: 3,
  Chinese: 4,
}

let skill_level_word = {
  English: "Expert",
  Spanish: "Intermediate",
  French: "Beginner",
  Portuguese: "Beginner",
  Somali: "Have not Started",
  German: "Beginner+",
  Russian: "Beginner",
  Greek: "Have not Started",
  Hebrew: "Beginner",
  Arabic: "Beginner+",
  Hindi: "Beginner",
  Korean: "Have not Started",
  Japanese: "Beginner+",
  Chinese: "Beginner+",

}

let English_Skill = languagesArray[0] + " has the skill number of " + skill_level_Num.English + " with the level of " + skill_level_word.English;
let Spanish_Skill = languagesArray[1] + " has the skill number of " + skill_level_Num.Spanish + " with the level of " + skill_level_word.Spanish;
let French_Skill = languagesArray[2] + " has the skill number of " + skill_level_Num.French + " with the level of " + skill_level_word.French;
let unknown_Skill = "This language is unknown"

let actionA = " I can speak "
let actionB = " I can NOT speak "

let Spanish_text = "Hola mi nombre is Alvaro y este es un examen para usando el code en español y con los textos y letras differentes"

let a = 12
let b = 13
let c = 25
let d = 40
let x = 3
let y = 7
let z = 3

if (skill_level_Num.English >= 11) {
  document.write(English_Skill);
} else if (skill_level_Num.Spanish >= 6) {
  document.write(Spanish_Skill);
} else if (skill_level_Num.French >= 5) {
  document.write(French_Skill);
} else {
  document.write(actionB + ' ' + unknown_Skill + ': ' + Spanish_text);
}

document.write("<p>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>");

if (a == b) {
  document.write(English_Skill);
} else if (skill_level_Num.English != 10) {
  document.write(actionA);
} else if (skill_level_Num.Korean != 0) {
  document.write(Spanish_text);
} else if (skill_level_Num.Russian >= 10) {
  document.write(actionB);
} else {
  document.write("I speak Chinese and I am a " + skill_level_word.Chinese);
}

document.write("<h2>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</h2>");



document.write("</br> <h1> Switch Statements / Blocks </h1>");

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ========== Switch Statement ==========
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Notes:
//          So ultimately, a switch statement is like a loop but it just doesnt loop. 
//       In other words, I feel like it stops, if a condition is met, if it hits the default 
//       then it hits it then just moves on to the rest of the code. If it hits one of the
//       break statements, then it leaves the switch block, then moves on to the rest of 
//       the code. 
//
//          This is a side note, but a rather important side note. But one thing we have 
//       noticed is our usage of variables which can store information can save alot of 
//       repeated coding. So try to think of the variables a little bit better for better
//       coding. 
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example:

var grade = 'A';

document.write('Entering switch block </br> ');
switch (grade) {
  case 'A': document.write("Good job </br>");
    break;

  case 'B': document.write("Pretty good! </br>");
    break;

  case 'C': document.write("Passed </br>");
    break;

  case 'D': document.write("Not so good </br>");
    break;

  case 'F': document.write("Failed </br>");
    break;

  default: document.write("Grade Unknown </br>");
}
document.write("Exiting switch block");


document.write("<p>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-</p>");

//  ======= My own Example #1 =========

let equation1 = (x * y) / z;
let equation2 = (3 + 20);


let congratulations = 'congratulations you got it correct';
let fishStick = ' Ew something smells like fish';

switch (equation1) {
  case 23: document.write(congratulations);
    break;

  case 22: document.write(congratulations);
    break;

  case 21: document.write(congratulations);
    break;

  case 23: document.write(congratulations);
    break;

  case 27: document.write(congratulations);
    break;

  case 17: document.write(congratulations);
    break;

  case 6: document.write(congratulations);
    break;

  default: document.write("I am sorry but an error has occured, why are you so dumb? for real?");

}


// ========= My own Example #2 ===========
// Here we are going to use more DOM manipulation or at least try lol. 
// We will also try a nested switch statement inside of an if statement. 

document.write('</br> <button id="button1"> Hello </button>');

if (a >= b) && (b <= c) {
  switch (4) {

    case: 
  }
}





