var currentTheme = 1;

function switchTheme() {
  var button = document.getElementById("themeBtn");
  if (currentTheme == 1) {
    document.body.style.backgroundColor = "#FCE4EC";
    document.body.style.color = "#4A1C2B";
    button.innerHTML = "Switch to Daisy Theme";
    currentTheme = 2;
  } else {
    document.body.style.backgroundColor = "#faf8f5";
    document.body.style.color = "#000000";
    button.innerHTML = "Switch to Rose Theme";
    currentTheme = 1;
  }
}

function showClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("clock").innerHTML = "Current time: " + hours + ":" + minutes + ":" + seconds;
}

function checkScroll() {
  if (window.scrollY > 300) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}

document.getElementById("themeBtn").onclick = switchTheme;
showClock();
setInterval(showClock, 1000);
checkScroll();
setInterval(checkScroll, 200);
