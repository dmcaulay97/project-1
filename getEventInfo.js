var btn = document.getElementById("btn");

//This object is used to go from segment/genre name to id. 
var eventType = { "segments": [{ "name": "Miscellaneous", "id": "KZFzniwnSyZfZ7v7n1", "genres": [{ "name": "Casino/Gaming", "id": "KnvZfZ7vAAa" }, { "name": "Comedy", "id": "KnvZfZ7vAA1" }, { "name": "Community/Civic", "id": "KnvZfZ7vAAE" }, { "name": "Community/Cultural", "id": "KnvZfZ7v7lE" }, { "name": "Fairs & Festivals", "id": "KnvZfZ7vAeE" }, { "name": "Family", "id": "KnvZfZ7vA1n" }, { "name": "Food & Drink", "id": "KnvZfZ7vAAI" }, { "name": "Health/Wellness", "id": "KnvZfZ7vAAl" }, { "name": "Hobby/Special Interest Expos", "id": "KnvZfZ7vAAJ" }, { "name": "Holiday", "id": "KnvZfZ7vAAt" }, { "name": "Ice Shows", "id": "KnvZfZ7v7lI" }, { "name": "Lecture/Seminar", "id": "KnvZfZ7vAJe" }, { "name": "Multimedia", "id": "KnvZfZ7vAAF" }, { "name": "Psychics/Mediums/Hypnotists", "id": "KnvZfZ7vAAn" }, { "name": "Special Interest/Hobby", "id": "KnvZfZ7v7lt" }, { "name": "Undefined", "id": "KnvZfZ7v7ll" }] }, { "name": "Sports", "id": "KZFzniwnSyZfZ7v7nE", "genres": [{ "name": "Aquatics", "id": "KnvZfZ7vAeI" }, { "name": "Athletic Races", "id": "KnvZfZ7vAet" }, { "name": "Badminton", "id": "KnvZfZ7vAen" }, { "name": "Bandy", "id": "KnvZfZ7vAel" }, { "name": "Baseball", "id": "KnvZfZ7vAdv" }, { "name": "Basketball", "id": "KnvZfZ7vAde" }, { "name": "Biathlon", "id": "KnvZfZ7vAdd" }, { "name": "Body Building", "id": "KnvZfZ7vAd7" }, { "name": "Boxing", "id": "KnvZfZ7vAdA" }, { "name": "Cricket", "id": "KnvZfZ7vAdk" }, { "name": "Curling", "id": "KnvZfZ7vAdF" }, { "name": "Cycling", "id": "KnvZfZ7vAda" }, { "name": "Equestrian", "id": "KnvZfZ7vAd1" }, { "name": "eSports", "id": "KnvZfZ7vAJF" }, { "name": "Extreme", "id": "KnvZfZ7vAdJ" }, { "name": "Field Hockey", "id": "KnvZfZ7vAJv" }, { "name": "Fitness", "id": "KnvZfZ7vAJ7" }, { "name": "Floorball", "id": "KnvZfZ7vA1l" }, { "name": "Football", "id": "KnvZfZ7vAdE" }, { "name": "Golf", "id": "KnvZfZ7vAdt" }, { "name": "Gymnastics", "id": "KnvZfZ7vAdn" }, { "name": "Handball", "id": "KnvZfZ7vAdl" }, { "name": "Hockey", "id": "KnvZfZ7vAdI" }, { "name": "Ice Skating", "id": "KnvZfZ7vA7v" }, { "name": "Indoor Soccer", "id": "KnvZfZ7vA7e" }, { "name": "Lacrosse", "id": "KnvZfZ7vA77" }, { "name": "Martial Arts", "id": "KnvZfZ7vA7d" }, { "name": "Miscellaneous", "id": "KnvZfZ7vA7A" }, { "name": "Motorsports/Racing", "id": "KnvZfZ7vA7k" }, { "name": "Netball", "id": "KnvZfZ7vA76" }, { "name": "Rodeo", "id": "KnvZfZ7vAea" }, { "name": "Roller Derby", "id": "KnvZfZ7vAJA" }, { "name": "Roller Hockey", "id": "KnvZfZ7vA7a" }, { "name": "Rugby", "id": "KnvZfZ7vA71" }, { "name": "Ski Jumping", "id": "KnvZfZ7vA7J" }, { "name": "Skiing", "id": "KnvZfZ7vAd6" }, { "name": "Soccer", "id": "KnvZfZ7vA7E" }, { "name": "Softball", "id": "KnvZfZ7vAJd" }, { "name": "Squash", "id": "KnvZfZ7vA7I" }, { "name": "Surfing", "id": "KnvZfZ7vA7t" }, { "name": "Swimming", "id": "KnvZfZ7vA7n" }, { "name": "Table Tennis", "id": "KnvZfZ7vA7l" }, { "name": "Tennis", "id": "KnvZfZ7vAAv" }, { "name": "Toros", "id": "KnvZfZ7vAAe" }, { "name": "Track & Field", "id": "KnvZfZ7vAAd" }, { "name": "Volleyball", "id": "KnvZfZ7vAA7" }, { "name": "Waterpolo", "id": "KnvZfZ7vAAA" }, { "name": "Wrestling", "id": "KnvZfZ7vAAk" }] }, { "name": "Music", "id": "KZFzniwnSyZfZ7v7nJ", "genres": [{ "name": "Alternative", "id": "KnvZfZ7vAvv" }, { "name": "Ballads/Romantic", "id": "KnvZfZ7vAve" }, { "name": "Blues", "id": "KnvZfZ7vAvd" }, { "name": "Chanson Francaise", "id": "KnvZfZ7vAvA" }, { "name": "Children's Music", "id": "KnvZfZ7vAvk" }, { "name": "Classical", "id": "KnvZfZ7vAeJ" }, { "name": "Country", "id": "KnvZfZ7vAv6" }, { "name": "Dance/Electronic", "id": "KnvZfZ7vAvF" }, { "name": "Folk", "id": "KnvZfZ7vAva" }, { "name": "Hip-Hop/Rap", "id": "KnvZfZ7vAv1" }, { "name": "Holiday", "id": "KnvZfZ7vAvJ" }, { "name": "Jazz", "id": "KnvZfZ7vAvE" }, { "name": "Latin", "id": "KnvZfZ7vAJ6" }, { "name": "Medieval/Renaissance", "id": "KnvZfZ7vAvI" }, { "name": "Metal", "id": "KnvZfZ7vAvt" }, { "name": "New Age", "id": "KnvZfZ7vAvn" }, { "name": "Other", "id": "KnvZfZ7vAvl" }, { "name": "Pop", "id": "KnvZfZ7vAev" }, { "name": "R&B", "id": "KnvZfZ7vAee" }, { "name": "Reggae", "id": "KnvZfZ7vAed" }, { "name": "Religious", "id": "KnvZfZ7vAe7" }, { "name": "Rock", "id": "KnvZfZ7vAeA" }, { "name": "Undefined", "id": "KnvZfZ7vAe6" }, { "name": "World", "id": "KnvZfZ7vAeF" }] }, { "name": "Arts & Theatre", "id": "KZFzniwnSyZfZ7v7na", "genres": [{ "name": "Children's Theatre", "id": "KnvZfZ7v7na" }, { "name": "Circus & Specialty Acts", "id": "KnvZfZ7v7n1" }, { "name": "Classical", "id": "KnvZfZ7v7nJ" }, { "name": "Comedy", "id": "KnvZfZ7vAe1" }, { "name": "Cultural", "id": "KnvZfZ7v7nE" }, { "name": "Dance", "id": "KnvZfZ7v7nI" }, { "name": "Espectaculo", "id": "KnvZfZ7v7nt" }, { "name": "Fashion", "id": "KnvZfZ7v7nn" }, { "name": "Fine Art", "id": "KnvZfZ7v7nl" }, { "name": "Magic & Illusion", "id": "KnvZfZ7v7lv" }, { "name": "Miscellaneous", "id": "KnvZfZ7v7le" }, { "name": "Miscellaneous Theatre", "id": "KnvZfZ7v7ld" }, { "name": "Multimedia", "id": "KnvZfZ7v7l7" }, { "name": "Music", "id": "KnvZfZ7v7lA" }, { "name": "Opera", "id": "KnvZfZ7v7lk" }, { "name": "Performance Art", "id": "KnvZfZ7v7l6" }, { "name": "Puppetry", "id": "KnvZfZ7v7lF" }, { "name": "Spectacular", "id": "KnvZfZ7v7la" }, { "name": "Theatre", "id": "KnvZfZ7v7l1" }, { "name": "Variety", "id": "KnvZfZ7v7lJ" }] }, { "name": "Undefined", "id": "KZFzniwnSyZfZ7v7nl", "genres": [{ "name": "Undefined", "id": "KnvZfZ7vAkI" }] }, { "name": "Film", "id": "KZFzniwnSyZfZ7v7nn", "genres": [{ "name": "Action/Adventure", "id": "KnvZfZ7vAke" }, { "name": "Animation", "id": "KnvZfZ7vAkd" }, { "name": "Arthouse", "id": "KnvZfZ7vAk7" }, { "name": "Comedy", "id": "KnvZfZ7vAkA" }, { "name": "Documentary", "id": "KnvZfZ7vAkk" }, { "name": "Drama", "id": "KnvZfZ7vAk6" }, { "name": "Family", "id": "KnvZfZ7vAkF" }, { "name": "Foreign", "id": "KnvZfZ7vAk1" }, { "name": "Horror", "id": "KnvZfZ7vAJk" }, { "name": "Miscellaneous", "id": "KnvZfZ7vAka" }, { "name": "Music", "id": "KnvZfZ7vAkJ" }, { "name": "Science Fiction", "id": "KnvZfZ7vAJa" }, { "name": "Urban", "id": "KnvZfZ7vAkE" }] }] }


// function getIp() {
//     fetch("https://api.ipify.org/?format=json")
//         .then(function (response) {
//             if (response.ok) {
//                 response.json()
//                     .then(function (data) {
//                         var ip = data.ip;
//                         getLocation(ip);
//                     })
//             }
//         })
// }

//This function gets the users location using their ip address when they load the page.
function getLocation() {
    fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=ae719e5173304649b7f31e033c8a5ecf")
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        lat = data.latitude;
                        lon = data.longitude;
                    })
            }
        })
}

//These variables are being used to test the getEvent function
var kw = "Devils"
var rad = 100
var start = "2021-05-01T12:53:00Z"
var end = "2021-05-08T12:53:00Z"
var seg = ""
var gen = ""

//This function takes in a set of search perameters and outpusts a list of events from the ticketmaster api. 
function getEvent(keyword, radius, startDate, endDate) {
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu&keyword=" + keyword + "&radius=" + radius + "&locale=*&startDateTime=" + startDate + "&endDateTime=" + endDate + "&sort=date,asc&segmentId=KZFzniwnSyZfZ7v7nE&genreId=KnvZfZ7vAdI&subGenreId=KZazBEonSMnZfZ7vFEE&geoPoint=dr57s1")
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                })
        })
}

getEvent(kw, rad, start, end);

//This function is just being used to see how geoPoint works
function geoPointTest() {
    var geoPoint = "dr7g2x";
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu&locale=*&geoPoint=" + geoPoint + "&radius=30&sort=distance,asc")
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                })
        })
}


//This function gets the information for the object 'eventType' from the ticketmaster api. see line 4
function getCatagories() {
    var catagories = {
        segments: []
    }
    var ticketKey = "&apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu";
    var root = "https://app.ticketmaster.com";
    var page = "/discovery/v2/classifications.json?apikey=GzFkQCar3fBiQNMZCAG5AGjj9xujtAiu";
    var url = root + page + ticketKey;
    fetch(url)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    for (var i = 11; i < 17; i++) {
                        var segmentId = data._embedded.classifications[i].segment.id;
                        var segmentName = data._embedded.classifications[i].segment.name;
                        var obj = { name: segmentName, id: segmentId, genres: [] };
                        var genreLength = data._embedded.classifications[i].segment._embedded.genres.length;
                        for (var x = 0; x < genreLength; x++) {
                            var genreName = data._embedded.classifications[i].segment._embedded.genres[x].name
                            var genreid = data._embedded.classifications[i].segment._embedded.genres[x].id
                            var obj2 = { name: genreName, id: genreid };
                            obj.genres.push(obj2);
                            subGenreLength = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres.length;
                            // for (var z = 0; z < subGenreLength; z++) {
                            //     var subGenreName = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres[z].name;
                            //     var subGenreid = data._embedded.classifications[i].segment._embedded.genres[x]._embedded.subgenres[z].id;
                            //     var obj3 = { name: subGenreName, id: subGenreid };
                            //     obj2.subGenre.push(obj3);
                            // }
                        }
                        catagories.segments.push(obj);
                    }
                    console.log(catagories);
                    console.log(JSON.stringify(catagories));
                })
        })

}


getCatagories();

