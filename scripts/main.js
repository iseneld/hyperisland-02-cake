// Loop the JSON, output 5 items.
// Function: Convert date in JSON to proper format date().
// Function: Compares above date to current date.


// Set the date we're counting down to
var countDownDate = new Date("Oct 14, 2022 11:48:30").getTime();

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

  // Display the result in the element with id="demo"
  document.querySelector("body").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("body").innerHTML = "Yay! Today's the day!";
  }
}, 1000);

let test2 = new Date("November 7 2021");
console.log("Test 2: " + test2)

// CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER CHECK LATER 

function getHolidays() {
  fetch("../data/holidays.json")
    .then((response) => response.json())
    // .then((data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     loopHolidays(data[i]); // Function call >>
    //   }
    // });
}