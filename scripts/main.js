// Loop the JSON, output 5 items.
// Function: Convert date in JSON to proper format date().
// Function: Compares above date to current date.
// Function: Find the five closest dates.
// Function: Remove outdated date.
// Function: Only first show H:M:S when below 24h.

// Set the date we're counting down to
var countDownDate = new Date(data.date).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("body").innerHTML = "Yay! Today's the day!";
  }
}, 1000);

function printHolidays(data) {
  var countDownDate = new Date(data.date).getTime();
  var li = document.createElement("li"); 
  li.append(data.date);

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 86400000) {
      li.innerHTML = days + " days";
    } else {
      // Display the result in the element with id="demo"
      li.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("ol li:first-child").innerHTML = "Yay! Today's the day!";
    }
  }, 1000);

  document.querySelector("body ol").append(li);

}

function getHolidays() {
  fetch("../data/holidays.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        printHolidays(data[i]); // Function call >>
      }
    });
}