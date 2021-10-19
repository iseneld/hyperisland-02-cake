// Loop the JSON, output 5 items.
// Function: Convert date in JSON to proper format date().
// Function: Compares above date to current date.
// Function: Find the five closest dates.
// Function: Remove outdated date.
// Function: Only first show H:M:S when below 24h.

// Set the date we're counting down to


function createListItems(data, selected) {
  var li = document.createElement("li");
  var h2 = document.createElement("h2");
  var h3 = document.createElement("h3");
  var button = document.createElement("button");
  var div = document.createElement("div");
  button.setAttribute("id", `${data.id}`);
  li.setAttribute("id", `list-${data.id}`);

  if (selected) {
    li.classList.add("favourite_selection");
  }

  if (data.id == 1) {
    h2.append(data.name);
    button.innerHTML = "fav";
    div.append(h3);
    li.append(h2, div);

    document.querySelector("main ol").append(li);
  } else {
    h2.append(data.name);
    button.innerHTML = "fav";
    div.append(h3, button);
    li.append(h2, div);

    document.querySelector("main ol").append(li);
  }
}

function printHolidays(data) {
  var countDownDate = new Date(data.date).getTime();

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
      document.querySelector(
        "main ol li:nth-child(" + `${data.id}` + ") h3"
      ).innerHTML = days + " days";
    } else {
      // Display the result in the element with id="demo"
      document.querySelector(
        "main ol li:nth-child(" + `${data.id}` + ") h3"
      ).innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("ol li:first-child").innerHTML =
        "Yay! Today's the day!";
    }
  }, 1000);

  //This will remove the outdated date and replace with new one
  // if(day == -1) {}
  //if (day == 0 && hour == -23 && min == -59 && sec == -59)
  //{

  //}

  document
    .querySelector("ol li:first-child")
    .setAttribute("class", "main__card");
}

function getHolidays() {
  fetch("../data/holidays.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        if (!localStorage.length == 0) {
          var selected = localStorage.getItem("favourites").includes(i + 1);
        }
        createListItems(data[i], selected);
        printHolidays(data[i]);
        // Function call >>
      }
      favouritesActive();
    });
}

//creating localStorage
function favouritesActive() {
  const buttons = document.querySelectorAll("button");
  console.log("buttons", buttons);

  // First check if there's favorite list already
  // if not, set it to be an empty array

  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  console.log(favourites);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      //check if button have class selected
      //if does remove class
      //and remove from local storage

      var id = this.event.target.getAttribute("id");

      // console.log(id.includes("favourite_selection"));

      document
        .getElementById(`list-${id}`)
        .classList.toggle("favourite_selection");

      if (!favourites.includes(button.id)) {
        favourites[button.id] = button.id;
        localStorage.setItem("favourites", JSON.stringify(favourites));
      } else {
        delete favourites[button.id];
        localStorage.setItem("favourites", JSON.stringify(favourites));
      }
      var listItem = document.getElementById(`list-${id}`);
      console.log(listItem.classList);

      // if (listItem.classList.contains(favourite_selection)) {
      //   listItem.classList.toggle("favourite_selection");
      //   JSON.parse(localStorage.removeItem("favourites[" + `${id + 1}` + "]"));
      // }
    });
  });
}