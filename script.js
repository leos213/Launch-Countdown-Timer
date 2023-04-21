let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("min");
let seconds = document.getElementById("seconds");
let box = document.getElementsByClassName("box");

let startDate = new Date();
startDate.setHours(0, 0, 0, 0); // set the start date to today at midnight
let endDate = new Date();
endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 6) + 25); // set the end date to a random date between April 25 and April 30 at midnight
endDate.setHours(0, 0, 0, 0);

let timeDate = endDate.getTime();

let startTime = setInterval(function () {
  let now = new Date().getTime();
  let time = timeDate - now;
  console.log(time);

  let daysContent = Math.floor(time / (1000 * 60 * 60 * 24));
  let hoursContent = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let secondsContent = Math.floor((time % (1000 * 60)) / 1000);

  days.innerHTML = daysContent;
  hours.innerHTML = hoursContent;
  minutes.innerHTML = minutesContent;
  seconds.innerHTML = secondsContent;

  if (time < 0) {
    clearInterval(startTime);
  }
}, 1000);
