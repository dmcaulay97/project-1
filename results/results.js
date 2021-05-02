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
    console.log(paramsArray);
    getEvent(paramsArray[1], paramsArray[2], paramsArray[3], paramsArray[4], paramsArray[5], paramsArray[6], paramsArray[7])
}



back.on("click", function () {
    document.location.replace("../search.html");
})

extractParameters();