var back = $("#back");
var results = $("#results");

//This function takes in a set of search perameters and outpusts a list of events from the ticketmaster api. 
function getEvent(keyword, radius, startDate, endDate, segId, genreId, geohash) {
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu&keyword=" + keyword + "&radius=" + radius + "&locale=*&startDateTime=" + startDate + "&endDateTime=" + endDate + "&sort=date,asc&segmentId=" + segId + "&genreId=" + genreId + "&geoPoint=" + geohash + "")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                        var eventArray = data._embedded.events;
                        for (var i = 0; i < eventArray.length; i++) {
                            var name = eventArray[i].name;
                            var date = eventArray[i].dates.start.localDate;
                            var time = eventArray[i].dates.start.localTime;
                            var url = eventArray[i].url;
                            var distance = eventArray[i].distance;
                            date = moment(date, "YYYY-MM-DD").format("MM-DD-YYYY");
                            time = moment(time, "HH:mm:ss").format("hh:mm A");

                            var container = $("<ul></ul>");
                            var nameEl = $("<li>" + name + "</li>")
                            var distanceEl = $("<li>Distance: " + distance + " miles</li>")
                            var dateEl = $("<li>Date: " + date + "</li>")
                            var timeEl = $("<li>Time: " + time + "</li>")
                            var urlEl = $("<li>url:<a>Event Site</a></li>");
                            urlEl.children().attr("href", url);
                            var storageArray = JSON.stringify([name, date, time, url, distance]);
                            console.log(storageArray);
                            var storageEl = $("<li>" + storageArray + "</li>").css("display", "none");
                            var saveli = $("<li></li>")
                            var save = $("<button>Save Event</button>")
                            save.on("click", function (event) {
                                event.preventDefault();
                                event.stopPropagation();
                                var btn = $(event.target);
                                var eventName = btn.parent().children()[0].textContent;
                                if (localStorage.saved == null) {
                                    var savedArray = [];
                                    var savedEvent = btn.parent().children()[5].textContent;
                                    console.log(savedEvent);
                                    savedArray.push(JSON.parse(savedEvent));
                                    localStorage.setItem("saved", JSON.stringify(savedArray));
                                } else {
                                    var savedArray = JSON.parse(localStorage.getItem("saved"));
                                    console.log(savedArray);
                                    var alreadySaved = false;
                                    for (var x = 0; x < savedArray.length; x++) {
                                        var event = savedArray[x];
                                        if (event[0] == eventName) {
                                            alreadySaved = true;
                                        }
                                    }
                                    if (!alreadySaved) {
                                        var savedArray = JSON.parse(localStorage.getItem("saved"));
                                        var savedEvent = btn.parent().children()[5].textContent;
                                        savedArray.push(JSON.parse(savedEvent));
                                        localStorage.setItem("saved", JSON.stringify(savedArray));
                                    }
                                }

                            })
                            saveli.append(save);
                            var hr = $("<hr>");
                            container.append(nameEl, distanceEl, dateEl, timeEl, urlEl, storageEl, save, hr);
                            results.append(container);
                        }

                    })
            }
        })
}

function extractParameters() {
    var url = window.location.href;
    var params = url.split("?")[1].split("=").join(",").split("&").join(",").split(",");
    var paramsArray = []
    for (var i = 0; i < params.length; i++) {
        if (i % 2 == 1) {
            if (params[i] === "%20") {
                paramsArray.push("")
            } else {
                paramsArray.push(params[i]);
            }
        }
    }
    getEvent(paramsArray[1], paramsArray[2], paramsArray[3], paramsArray[4], paramsArray[5], paramsArray[6], paramsArray[7])
}

back.on("click", function () {
    document.location.replace("../index.html");
})

$("#saved").on("click", function () {
    document.location.replace("../saved/saved.html");
})

extractParameters()
