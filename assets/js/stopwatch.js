
let minutes = 0
let seconds = 0
let count = 0
let displaySeconds = ""
let displayMinutes = ""
let totaltime = 2


function compTime ()
 { 
   
timer = setInterval(_ => {
  count++
 
  minutes = Math.floor(count/60)

seconds = count % 60 // seconds

minutes = (totaltime - minutes) - 1
seconds = 60 - seconds
//console.log("Minutes: " + minutes)
//console.log("seconds" + seconds)

displaySeconds = seconds
displayMinutes = minutes

if (seconds < 10 )
{
  
  displaySeconds = '0' + seconds
}

if (minutes < 10)
{
  displayMinutes = '0' + minutes
}

if (minutes === 0 && seconds === 0 )
{
  clearInterval(timer)
} 

document.querySelector('#display').textContent = `${displayMinutes}:${displaySeconds}`
}, 1000)


}


compTime();





