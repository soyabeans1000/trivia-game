//set global variables
count = 0
gameEnded = true
let answerTimer


questions = [{
  question: "Question1",
  choiceList: ["1choice1", "1choice2", "1Choice3", "1Choice4"],
  answer: "1choice2"
},
{
  question: "Question2",
  choiceList: ["2choice1", "2choice2", "2Choice3", "2Choice4"],
  answer: "2choice3"
},
{
  question: "Question3",
  choiceList: ["3choice1", "3choice2", "3Choice3", "3Choice4"],
  answer: "3choice3"
}]

     
function displayScore()
{
  clearTimeout(scoreTimer)
 document.getElementById('content').textContent = "Score"
 //Give an option to play new game

}


function displaynextQuestion()
  {
    clearTimeout(answerTimer)
    document.getElementById('content').textContent = "next Question"

    
  }

//Function to Display Answer
function displayanswer()
  {
    document.getElementById('content').textContent = "Answer"
    answerTimer = setTimeout(displaynextQuestion, 3000)
   //If last question, display answer 
  }

 
 
  let choiceSelection = document.createElement('input');
  let choiceLabel = document.createElement('span');
  let i = 1;

  choiceSelection.setAttribute('type', 'radio');
  choiceSelection.setAttribute('id', 'id');
   choiceSelection.setAttribute('name', 'choices' + i);
   choiceSelection.setAttribute('value', 'choices[0]');
   choiceSelection.setAttribute('checked', true);
   choiceSelection.setAttribute('disabled', false);
   choiceLabel.innerHTML = "test"
   document.getElementById('content').append(choiceSelection);
  document.getElementById('content').append(choiceLabel);


  //Event Handler for the Question
  document.getElementById("content").addEventListener("click", displayanswer);


  