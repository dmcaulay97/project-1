var results = $("#results");
var back = $("#back");



function getSaved() {
    var savedArray = JSON.parse(localStorage.getItem("saved"))
    for (var i = 0; i < savedArray.length; i++) {
        var eventArray = savedArray[i];
        var name = eventArray[0];
        var date = eventArray[1];
        var time = eventArray[2];
        var url = eventArray[3];
        var distance = eventArray[4];

        var container = $("<ul></ul>");
        var nameEl = $("<li>" + name + "</li>")
        var distanceEl = $("<li>Distance: " + distance + " miles</li>")
        var dateEl = $("<li>Date: " + date + "</li>")
        var timeEl = $("<li>Time: " + time + "</li>")
        var urlEl = $("<li>url:<a>Event Site</a></li>");
        urlEl.children().attr("href", url);
        var removeli = $("<li></li>")
        var remove = $("<button>Remove from saved</button>")
        remove.on("click", function (event) {
            btn = $(event.target);
            event.preventDefault();
            event.stopPropagation();
            var eventName = btn.parent().children()[0].textContent;
            var savedArray = JSON.parse(localStorage.getItem("saved"));
            for (var x = 0; x < savedArray.length; x++) {
                var event = savedArray[x];
                if (event[0] == eventName) {
                    savedArray.splice(x, 1);
                }
            }

            localStorage.setItem("saved", JSON.stringify(savedArray));
            btn.parent().empty();

        })
        removeli.append(remove);
        var hr = $("<hr>");
        container.append(nameEl, distanceEl, dateEl, timeEl, urlEl, remove, hr);
        results.append(container);
    }

}

back.on("click", function () {
    document.location.replace("../index.html");
})

getSaved()
