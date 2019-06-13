// Grabs DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Function Shows Time

function showTime(){
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM for time

const amPm = hour >= 12 ? 'PM' : 'AM';

// 12 HOUR format
hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
//1000 = 1ms
setTimeout(showTime, 1000);
}

//Function adds zeros to showTime min, secs
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Set background and greeting
function setBackGreet(){
  let today = new Date(),
    hour = today.getHours();
  // Morning
  if (hour < 12) { 
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = 'Good Morning!';
  }  
  // Afternoon
  else if (hour >= 12) {
  document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
  greeting.textContent = 'Good Afternoon!';

  }
  // Evening
  else if (hour <= 18) {
  document.body.style.backgroundImage = "url('./img/evening.jpg')";
  greeting.textContent = 'Good Evening!';
  document.body.style.color = 'white';

  } 
  // Night
  else if (hour >=20){
  document.body.style.backgroundImage = "url('./img/night.jpg')";
  greeting.textContent = 'Good Night!';
  document.body.style.color = 'white';
  }
}
//Run time
showTime();
setBackGreet();
