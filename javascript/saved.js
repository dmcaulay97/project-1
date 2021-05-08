//html elements that will be targeted later are assigned variable names.
var container = $("#container");
var back = $("#back");


//The getSaved function gets all events saved in local storage and diplays them on the document.  
function getSaved() {
    var savedArray = JSON.parse(localStorage.getItem("saved"))
    //This function displays te events in a similar way to the results page, but the info is coming from locarl storage instead of the ticketmasterapi.
    for (var i = 0; i < savedArray.length; i++) {
        //Allrequired values are extracted form the localStorage Array.
        var eventArray = savedArray[i];
        var fullName = eventArray[0];
        if (fullName.length > 35) {
            var name = fullName.substring(0, 32) + "...";
        } else {
            var name = fullName;
        }
        var date = eventArray[1];
        var time = eventArray[2];
        var url = eventArray[3];
        var distance = eventArray[4];

        //All the html elements required to display the event are created and given the proper attributes.
        var carousel = $("<div></div>").attr("class", "carousel-item")
        var row = $("<div></div>").attr("class", "row")
        var collumn = $("<div></div>").attr("class", "col s12 m6 savedCard")
        var card = $("<div></div>").attr("class", "card blue-grey darken-1")
        var cardContent = $("<div></div>").attr("class", "card-content white-text savedCard")
        var nameEl = $("<span>" + name + "</span>").attr("class", "card-title")
        var distanceEl = $("<p>Distance: " + distance + " miles</p>")
        var dateEl = $("<p>Date: " + date + "</p>")
        var timeEl = $("<p>Time: " + time + "</p>")
        var weatherCity = $("<p>" + eventArray[5] + "</p>").css("display", "none");
        var urlEl = $("<p><a>Event Site</a></p>");
        urlEl.children().attr("href", url);
        urlEl.children().attr("class", "waves-effect waves light btn inline")
        var removeli = $("<li></li>")
        var remove = $("<a>Remove</a>").attr("class", "waves-effect waves light btn inline")
        var fullName = $("<p>" + fullName + "</p>");
        fullName.css("display", "none");
        //Each event is given a remove button, so it can be removed from the saved page and local storage.
        remove.on("click", function (event) {
            btn = $(event.target);
            event.preventDefault();
            event.stopPropagation();
            //We search the savedArray for the event that the user is trying to remove and remove it form the array
            var eventName = btn.parent().children()[8].textContent;
            var savedArray = JSON.parse(localStorage.getItem("saved"));
            for (var x = 0; x < savedArray.length; x++) {
                var event = savedArray[x];
                if (event[0] == eventName) {
                    savedArray.splice(x, 1);
                }
            }

            localStorage.setItem("saved", JSON.stringify(savedArray));
            //The html elemenet displaying the event that is being removed is emptied, so that is is no longer diplayed.
            btn.parent().parent().parent().parent().parent().remove();
            $('.carousel').carousel();
        })
        //All html elements are appended to the document
        removeli.append(remove);
        var hr = $("<hr>");
        cardContent.append(nameEl, distanceEl, dateEl, timeEl, hr, urlEl, remove, weatherCity, fullName);
        card.append(cardContent);
        collumn.append(card);
        row.append(collumn);
        carousel.append(row);
        container.append(carousel);
    }

}

function getWeather(city, index, date) {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=2d5a13d9312ee895b46814ad5a65ff9f")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                        var lat = data[0].lat;
                        var lon = data[0].lon;
                        fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts&appid=2d5a13d9312ee895b46814ad5a65ff9f")
                            .then(function (response) {
                                if (response.ok) {
                                    response.json()
                                        .then(function (data) {
                                            console.log(data)
                                            var temp = data.daily[index].temp.day;
                                            var humid = data.daily[index].humidity;
                                            var icon = "http://openweathermap.org/img/wn/" + data.daily[index].weather[0].icon + "@2x.png";
                                            $("#weatherImg").attr("src", icon);
                                            $("#weatherTemp").text("Temp: " + temp + "F");
                                            $("#weatherHumid").text("Humidity: " + humid + "%");
                                            $("#weatherTitle").text("Weather for : " + moment(date, "X").format("MMM Do, YYYY"));
                                            $("#modal3").attr("class", "modal show");
                                        })
                                }
                            })
                    })
            }
        })
}

$("#getWeather").on("click", function () {
    var city = $(".carousel-item.active").children().children().children().children().children()[7].textContent;
    var date = $(".carousel-item.active").children().children().children().children().children()[2].textContent;
    date = date.substring(6, 16);
    date = moment(date, "MM-DD-YYYY").format('X');
    var oneWeek = moment(date, "X").add(7, "days").format("X");
    var currentDate = moment().format("MM-DD-YYYY");
    currentDate = moment(currentDate, "MM-DD-YYYY").format("X");

    if (date < currentDate || date > oneWeek) {
        $("#weatherTitle").text("Weather can only be displayd for days within one week of today");
        $("#modal3").attr("class", "modal show");
    } else {
        dayIndex = (date - currentDate) / 86400;
        console.log(dayIndex);
        getWeather(city, dayIndex, date);
    }

})

//This event listener allows the user to navigate back to the search page.
back.on("click", function () {
    document.location.replace("../index.html");
})

$("#modal3Close").on("click", function () {
    $("#modal3").attr("class", "modal");
})

//The getSaved function is called as the page loads so saved events are diplayed right away.
getSaved()
