let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let audio = document.getElementById("canon");
let button = document.getElementById("play");
var link = document.querySelector("link[rel~='icon']");
let occasionEl = document.getElementById("occasion");
let ball = document.getElementById("ball");
let platform = document.getElementById("platform");

//! VARIABLES TO CHANGE

// icon at the top of the page
let icon = "https://www.freeiconspng.com/uploads/red-fireworks-png-26.png";

// appears on the screen after the times
let occasion = "UNTIL 2021";

// when to count down to
let date = "Dec 31, 2020 23:00:00";

// color of the numbers counting down
let numColor = "blue";

// color of the words, 'IT IS CURRENTLY' and occasion
let wordsColor = "red";

// color of the words, 'DAYS', 'HOURS' ECT.
let hoursColor = "white";

// what music to play
let music = "./auld-lang-syne.mp3";

// background image
let backgroundImage =
  "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80";

// border radius
let borderRadius = 40;

// says when it comes
let whatToSay = "HAPPY NEW YEAR!!";

//! END OF TO CHANGE

link.href = icon;
occasionEl.innerHTML = occasion;
occasionEl.style.color = wordsColor;
var countDownDate = new Date(date).getTime();
days.style.color = numColor;
hours.style.color = numColor;
minutes.style.color = numColor;
seconds.style.color = numColor;
document.getElementById("itis").style.color = wordsColor;
document.getElementsByClassName("main")[0].style.color = hoursColor;
document.getElementsByClassName(
  "main"
)[0].style.borderRadius = `${borderRadius}px`;
audio.src = music;
document.getElementsByClassName(
  "wrapper"
)[0].style.backgroundImage = `url('${backgroundImage}')`;

button.addEventListener("click", () => {
  audio.play();
  button.style.display = "none";
});

let main = function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  updateDom({
    days,
    hours,
    minutes,
    seconds,
    timeleft,
  });
};

let myfunc = setInterval(main, 1000);

function updateDom(time) {
  // if(time.hours!=0){
  //     time.hours-=1;
  // }else{
  //     time.hours=23;
  // }
  daysElement.innerHTML = time.days;
  hoursElement.innerHTML = time.hours;
  minutesElement.innerHTML = time.minutes;
  secondsElement.innerHTML = time.seconds;
  if (time.timeleft < 0) {
    let h1 = document.createElement("h1");
    h1.innerHTML = whatToSay;
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
    newYears();
  }
  if (time.days == 0 && time.hours == 0 && time.minutes < 5) {
    let h1 = document.createElement("h1");
    let h12 = document.createElement("h1");
    h1.innerHTML = `${time.minutes} minutes,`;
    h12.innerHTML = `${time.seconds} seconds`;
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
    document.getElementById("main").appendChild(h12);
  }
  if (time.days == 0 && time.hours == 0 && time.minutes == 0) {
    let h1 = document.createElement("h1");
    h1.style.fontSize = "300px";
    h1.innerHTML = time.seconds;
    h1.classList.add("final-countdown");
    document.getElementById("main").style.backgroundColor = "rgb(0, 0, 0, 0)";
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(h1);
    ball.style.display = "block";
    platform.style.display = "block";
    if (time.seconds == 10) {
      ball.classList.add("falling");
      setTimeout(() => {
        ball.classList.replace("falling", "fallen");
      }, 10000);
    }
  }
}

const newYears = () => {
  clearInterval(myfunc);
  let zIndex = 5;
  setInterval(() => {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let size = Math.random() * 200 + 20;

    let h1 = document.createElement("h1");

    h1.innerHTML = "2021";
    h1.style.color = "white";
    h1.style.webkitTextStroke = `${size / 30}px`;
    h1.style.webkitTextStrokeColor = "black";
    h1.style.fontSize = `${size}px`;
    h1.style.position = "absolute";
    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.zIndex = zIndex;
    h1.style.fontWeight = "900";
    h1.style.letterSpacing = `${(size / 10) * -1}px`;
    h1.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    document.body.appendChild(h1);
    h1.style.transform = "translate(-50%, -50%)";

    zIndex++;
  }, 300);
};

main();
