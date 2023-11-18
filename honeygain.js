let CR = document.querySelector(".CR");
let MG = document.querySelector(".MG");
let answerCR = document.querySelector(".valueCR");
let answerMG = document.querySelector(".valueMG");
let block = document.querySelector(".block");
let timerInActive = document.querySelector(".timer");

function getCR() {
  data = (CR.value * 3) / 10.01 + "";
  dot = data.indexOf(".") + 1;
  answerCR.innerHTML = data.slice(0, dot + 2) + " CR";
}
function getMG() {
  data = (MG.value / 3) * 10.01 + "";
  dot = data.indexOf(".") + 1;
  answerMG.innerHTML = data.slice(0, dot + 2) + " MG";
}

// Status : acitve-inactive

let statusHG = document.querySelector(".status");
let colors = document.querySelector(".colors");
let details = document.querySelector(".details");
let limit = {
  Vacation: {
    light: {
      hour: "1",
      minute: "00",
    },
    night: {
      hour: "20",
      minute: "37",
    },
  },
  workDay: {
    light: {
      hour: "8",
      minute: "00",
    },
    night: {
      hour: "19",
      minute: "24",
    },
  },
};

function closss() {
  block.style.display = "none";
}

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();


   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss ;

  document.querySelector(".timer").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
function openn() {
  block.style.display = "block";

  setInterval(function Action() {
    let data = new Date();
    if (data.getDay() == 0 || data.getDay() == 5) {
      if (
       ( data.getHours() > limit["Vacation"]["light"]["hour"] &&
        data.getHours() == limit["Vacation"]["night"]["hour"] &&
        data.getMinutes() < limit["Vacation"]["night"]["minute"])||
        ( data.getHours() > limit["Vacation"]["light"]["hour"] &&
        data.getHours() < limit["Vacation"]["night"]["hour"])
      ) {
        console.log("yes");
        statusHG.innerHTML = "Active";
        colors.style.backgroundColor = "green";
      } else {
        console.log("no");

        statusHG.innerHTML = "Inactive";
        colors.style.backgroundColor = "red";
        details.style.display = "none";
currentTime();

      }
    } else {
      console.log("2");
      if (
        ( data.getHours() > limit["workDay"]["light"]["hour"] &&
        data.getHours() == limit["workDay"]["night"]["hour"] &&
        data.getMinutes() < limit["workDay"]["night"]["minute"])||
        ( data.getHours() > limit["workDay"]["light"]["hour"] &&
        data.getHours() < limit["workDay"]["night"]["hour"])
      ) {
        statusHG.innerHTML = "Active";
        colors.style.backgroundColor = "green";
      } else {
        statusHG.innerHTML = "Inactive";
        colors.style.backgroundColor = "red";
        details.style.display = "none";
        timerInActive.style.display = "block"
currentTime();
 
      }
    }
  }, 3000);
}


