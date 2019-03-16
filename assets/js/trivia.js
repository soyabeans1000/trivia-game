//set global variables
count = 0
gameEnded = true
let totalQuestions = 3
let totalCorrect = 0
let totalWrong = 0


questions = [{
  question: "Question1",
  choiceList: ["1choice1", "1choice2", "1Choice3", "1Choice4"],
  answer: 'b'
},
{
  question: "Question2",
  choiceList: ["2choice1", "2choice2", "2Choice3", "2Choice4"],
  answer: 'c'
},
{
  question: "Question3",
  choiceList: ["3choice1", "3choice2", "3Choice3", "3Choice4"],
  answer: 'd'
}]

//Add Listeners to the choices and check for correct answers (make a function to check for correct answers)
 
function checkAnswer(answer)
{
  let answerArray = answer.split(' ')
  console.log(answerArray)  

}



function displayQuestion(index)
  {
    let questionDiv = document.createElement('div')
    questionDiv.innerHTML = questions[index].question
    document.querySelector('#content').append(questionDiv)
    console.log(questions[index].answer)
  for (let i = 0; i < questions[index].choiceList.length; i++) 
  {
    let btnElem = document.createElement('a')
    btnElem.textContent = questions[index].choiceList[i]
    btnElem.className = 'waves-effect waves-light btn choiceBtn'
    btnElem.setAttribute('data-value', 'Q' + index + ' ' + i)
    console.log( 'Q' + index + i)
    document.querySelector('#content').append(btnElem)
  }
}




for (i = 0; i < questions.length; i++)
 displayQuestion(i)

 document.addEventListener('click', e => {
  // make sure thing clicked is random number button and that the game has not ended yet
  if (e.target.className === 'waves-effect waves-light btn choiceBtn') {
    let selectedAnswer =  e.target.getAttribute('data-value')
    checkAnswer(selectedAnswer)
  }
})