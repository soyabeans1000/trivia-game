//set global variables
count = 0


questions = [{
  question: "Question1",
  a: "choice1", 
  b: "choice2",
  c: "Choice3",
  d: "Choice4",
  correct: "b" 
},
{
  question: "Question2",
  a: "2choice1", 
  b: "2choice2",
  c: "2Choice3",
  d: "2Choice4",
  correct: "c" 
}]


document.querySelector('#question').textContent = `${questions[0].question}`
document.querySelector('#answer').textContent = `${questions[0].a}`

