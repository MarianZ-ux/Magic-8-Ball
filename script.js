
/* 
   Welcome to the Magic 8-ball Project.  
   The following functions are available to you 
   (you can just call them):
   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3 */


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:
   xCreate an array containing at least 5 possible answers as strings.
   xGenerate a random array index by calling 
       getRandomIntInclusive function.
   xCall 'makeAnswerAppear' using the random answer you selected.
   ?? (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).*/


function answerQuestion() {

  let answerText= ["Nope", "Yup","Meh","Try again later", "Obviously","Gandalf says Use the Dark Side","Use the Force Harry","You're a wizard Spock","Live long & prosper rebel scum","Dag nab it Jim! I'm a doctor! Not a mindreader","Qapla'!","Darmok & Jalad at Tenagra","beep-boop-meep-morp"];
  let randomNum= getRandomIntInclusive(0,13);
  let lastAnswer= answerText[randomNum] 
  
makeAnswerAppear(answerText[randomNum]); 
do {
   randomNum= getRandomIntInclusive(lastAnswer %13)+1;
  }
  while (answerText[randomNum] == lastAnswer)
}

/* gave up: Console log wouldn't mark anything as wrong but program wouldn't generate a randomAnswer either

function lastAnswer (){
 let lastAnswer= (counter %10)+1;
 counter ++;
 addClassToAnswerElement("lastAnswer+2");
 addClassToLastAnswerElement("randomNum+lastAnswer");
 do {
  i = i + 1;
  result = result + i;
} while (i < 5);
}*/



