//set global variables
count = 0
gameEnded = true
let totalQuestions = 3
let totalCorrect = 0
let totalWrong = 0



questions = [{
  question: "Jellyfish have a body plan that is described by biologists by what name?",
  choiceList: ["coelenterate", "tubular", "annelid", "scrum-dilly-icious"],
  answer: 'a',
  explaination:``
},
{
  question: "Which of the following is composed of nervous tissue?",
  choiceList: ["the skin", "a paper mache statue of Jerry Lewis", "the spinal cord", "the liver"],
  answer: 'a',
  explaination:"Incorrectthe spinal cordThe spinal cord is really a direct extension of the brain."

},
{
  question: "A leech survives by feeding off the blood of other, larger beings. What is this type of behavior known as?",
  choiceList: ["working for the IRS", "mutualism", "parasitism","heterophagism"],
  answer: 'c',
  explaination:"Parasitism"
},
{
  question: "Lobsters, crabs, and shrimp all belong to what group of animals?",
  choiceList: ["Chordata", "Arthropods","Icthyata","Paella"],
  answer: 'b',
  explaination:"Insects also belong to this group, making it the largest among all animal phyla."
},
{
  question: "Which of the following lives in a cocoon for part of its life cycle?",
  choiceList: [ "Dick Clark", "a mollusk","a moth","a crab"],
  answer: 'c',
  explaination:"A cocoon protects the pupa of some insects during metamorphosis."
},
{
  question: "Why do fish swim in schools?",
  choiceList: [
    "to get to college", "to chase away larger fish", "to confuse predators","to surround prey"
   ],
  answer: 'c',
  explaination:"Apparently, predators must focus on just one fish in order to strike successfully. Distracted by the school, they lose focus."
},

{
  question: "Which of the following animals are gutless?",
  choiceList:  ["sea cucumbers",  "salamanders",  "earthworms",  "tapeworms" ],
  answer: 'd',
  explaination:"Because the tapeworm lives inside the gut of a host, it has evolved to absorb nutrients directly from outside its body."
},
{
  question: "What is the scientific term for a 'cold-blooded' animal?",
  choiceList: ["a homeotherm", "a prosecuting attorney", "a cryotherm", "a poikilotherm"],
  answer: 'c',
  explaination:"Poikilotherms such as reptiles aren't actually cold. Their body temperature varies and is regulated by the environment and their behavior. Perhaps more common is the term 'ectotherm,' referring to the fact that the animals must rely on external heat."
}]

//Add Listeners to the choices and check for correct answers (make a function to check for correct answers) 


function checkAnswer(answer)
{
  let answerArray = answer.split(' ')
  console.log(answerArray)
  
  let answerCode
  let QuestionCode = answerArray[0].substring(1)

  console.log(QuestionCode)

  switch (questions[QuestionCode].answer)
{
  case 'a': 
  {
    answerCode = '0';
  break;
  }
  case 'b':  
  {answerCode = '1';
  break;
}
  case 'c': 
  {
    answerCode = '2';
  break;
    }
      case 'd':
  {answerCode = '3';
  break;
  }
  }

let realAnswer = "Q" + QuestionCode  + " " + answerCode

console.log(realAnswer)


  

if (answer === realAnswer)
{
  console.log("MATCH")
    totalCorrect++
}
else
{
  console.log("NOT MATCH")
  totalWrong++
 
}



}


function displayQuestion(index)
  {
    let questionDiv = document.createElement('div')
    questionDiv.innerHTML = questions[index].question
    questionDiv.className = 'Q'
    document.querySelector('#content').append(questionDiv)
    console.log(questions[index].answer)
  for (let i = 0; i < questions[index].choiceList.length; i++) 
  {
    let btnElem = document.createElement('a')
    btnElem.textContent = questions[index].choiceList[i]
    btnElem.className = 'waves-effect waves-light btn choiceBtn center-align'
    btnElem.setAttribute('data-value', 'Q' + index + ' ' + i)
    console.log( 'Q' + index + i)
    document.querySelector('#content').append(btnElem)
  }
}

document.addEventListener('click', e => {
  // make sure thing clicked is random number button and that the game has not ended yet
  if (e.target.className === 'waves-effect waves-light btn choiceBtn center-align') {
    let selectedAnswer =  e.target.getAttribute('data-value')
    console.log("Selected Answer =>" +  selectedAnswer )
    checkAnswer(selectedAnswer)
  }

if (e.target.id === "SubmitButton")
 displayScore()


})

function displayScore()
{
  document.querySelector('#content').textContent = `Total Correct:${totalCorrect}
                                                    Total wrong: ${totalWrong}` 
}

function init(){
for (i = 0; i < questions.length; i++)
 displayQuestion(i)


 let submitBtn = document.createElement('button')
 
 submitBtn.className = 'red waves-effect waves-light btn submit center-align'
 submitBtn.innerHTML = 'Submit Answers'
 submitBtn.id = "SubmitButton"
 document.querySelector('#content').append(submitBtn)


 if (timeUp)
displayScore()

 
}


init()
 