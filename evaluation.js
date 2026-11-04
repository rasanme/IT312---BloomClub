function checkEvaluation() {
  var offering = document.getElementById("completed-offering");
  var rating = document.getElementById("rating");
  var feedback = document.getElementById("feedback");
  var message = "";

  offering.style.border = "1px solid #5F7334";
  rating.style.border = "1px solid #5F7334";
  feedback.style.border = "1px solid #5F7334";

  if (offering.value == "") {
    offering.style.border = "2px solid red";
    message = message + "Please choose the offering you completed.\n";
  }
  if (rating.value == "") {
    rating.style.border = "2px solid red";
    message = message + "Please choose a rating.\n";
  }
  if (feedback.value == "") {
    feedback.style.border = "2px solid red";
    message = message + "Please write your feedback.\n";
  }
  if (message != "") {
    alert(message);
    return;
  }

  if (parseInt(rating.value) >= 4) {
    alert("Thank you for your great rating! We are happy you enjoyed it.");
  } else {
    alert("We are sorry the activity did not meet your expectations. We will work to improve it.");
  }
  window.location = "member-dashboard.html";
}

document.getElementById("evalButton").onclick = checkEvaluation;
