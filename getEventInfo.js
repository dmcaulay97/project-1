var key = "121be27f099cadb670e3df21f6aa2ad1"
var btn = document.getElementById("btn");
console.log(btn);

function getIp() {
    fetch("https://api.ipify.org/?format=json")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        var ip = data.ip;
                        getLocation(ip);
                    })
            }
        })
}

function getLocation(ip) {
    var currentIp = ip;
    fetch("http://api.ipstack.com/" + currentIp + "?access_key=" + key)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                    })
            }
        })
}

function getEvent() {

    fetch("https://app.ticketmaster.com/discovery/v2/events?locale=*&sort=date,asc&city=New%20York&includeSpellcheck=yes&apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu")
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    for (var i = 0; i < 20; i++) {
                        var segment = data._embedded.events[i].classifications[0].segment.name
                    }
                })
        })
}

var catagories = {
    segments: []
}

function getcatagories() {
    var ticketKey = "&apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu";
    var root = "https://app.ticketmaster.com";
    var page = "/discovery/v2/classifications.json?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu";
    var url = root + page + ticketKey;
    fetch(url)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    for (var i = 11; i < 17; i++) {
                        var segmentId = data._embedded.classifications[i].segment.id;
                        var segmentName = data._embedded.classifications[i].segment.name;
                        var obj = { name: segmentName, id: segmentId, genres: [] };
                        var genreLength = data._embedded.classifications[i].segment._embedded.genres.length;
                        console.log(genreLength);
                        for (var x = 0; x < genreLength; x++) {
                            var genreName = data._embedded.classifications[i].segment._embedded.genres[x].name
                            var genreid = data._embedded.classifications[i].segment._embedded.genres[x].id
                            var obj2 = { name: genreName, id: genreid, subGenre: [] };
                            obj.genres.push(obj2);
                            subGenreLength = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres.length;
                            for (var z = 0; z < subGenreLength; z++) {
                                var subGenreName = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres[z].name;
                                var subGenreid = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres[z].id;
                                var obj3 = { name: subGenreName, id: subGenreid };
                                obj2.subGenre.push(obj3);
                            }
                        }
                        catagories.segments.push(obj);
                    }
                })
        })
}

getIp();