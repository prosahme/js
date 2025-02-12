document.getElementById('navButtons').addEventListener("click",function(event){
    if(event.target.tagName === 'BUTTON'){
        const taskId = event.target.getAttribute('data-task');
        showTask(taskId);
    }
});
function showTask(taskId){
    //hide all task sections
    let tasks =
    document .querySelectorAll('.task').forEach(task => {
        task.classList.remove('active');
    });
    //show the selected task
    document .getElementById(taskId).classList.add('active');
 }
 
 //image slider
const nextE1 = document .querySelector(".next");
const prevE1 = document.querySelector(".prev");
const imgsE1 = document .querySelector("img");
const imagecontainerE1 = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextE1.addEventListener("click" ,() => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevE1.addEventListener("click" , () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

  updateImg();

function updateImg(){
    if (currentImg > imgsE1.length) {
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsE1.length;
    }
    imagecontainerE1.style.transform = `translateX(-${(currentImg - 1)*100}%)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    },3000);
}
 const timerEl  = document.getElementById("timer") ;
 const startButtonEl = document.getElementById( "start");
 const stopButtonEl = document.getElementById( "stop");
 const resetButtonEl  = document.getElementById( "reset");

 let startTime = 0;
 let elapsedTime = 0;
 let timerInterval;
 
function startTimer() {

 startTime = Date.now()- elapsedTime;
    
 timerInterval = setInterval(() => {
    
elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
 },10);

 startButtonEl.disabled = true;
 startButtonEl.disabled = false;
}
  
function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000)/10);
    const seconds = Math.floor((elapsedTime % (1000 * 60))/1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 *60))/(1000 *60));
    const hours = Math.floor(elapsedTime / (1000*60 *60));
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
     ":" +
     (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
     ":" +
     (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
     "." +
     (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}
function stopTimer() {
    clearInterval(timerInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
function resetTimer(){
    clearInterval(timerInterval);

    elapsedTime  = 0;
    timerEl .textContent = "00:00:00";

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}
startButtonEl.addEventListener("click",startTimer);
stopButtonEl.addEventListener("click",stopTimer);
resetButtonEl.addEventListener("click",resetTimer);
//color changer
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach( (button) =>{
    button.addEventListener('click',function(e) {

    
      switch(e.target.id){
        case 'grey':
        case 'white':
        case 'blue':
        case 'yellow':

        body.style.backgroundColor =e.target.id;
        break;
      }

    });
});

//digital clock
const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h - 12;
        ampm = "pm";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();
