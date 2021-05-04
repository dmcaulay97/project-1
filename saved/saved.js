//html elements that will be targeted later are assigned variable names.
var results = $("#results");
var back = $("#back");


//The getSaved function gets all events saved in local storage and diplays them on the document.  
function getSaved() {
    var savedArray = JSON.parse(localStorage.getItem("saved"))
    //This function displays te events in a similar way to the results page, but the info is coming from locarl storage instead of the ticketmasterapi.
    for (var i = 0; i < savedArray.length; i++) {
        //Allrequired values are extracted form the localStorage Array.
        var eventArray = savedArray[i];
        var name = eventArray[0];
        var date = eventArray[1];
        var time = eventArray[2];
        var url = eventArray[3];
        var distance = eventArray[4];

        //All the html elements required to display the event are created and given the proper attributes.
        var container = $("<ul></ul>");
        var nameEl = $("<li>" + name + "</li>")
        var distanceEl = $("<li>Distance: " + distance + " miles</li>")
        var dateEl = $("<li>Date: " + date + "</li>")
        var timeEl = $("<li>Time: " + time + "</li>")
        var urlEl = $("<li>url:<a>Event Site</a></li>");
        urlEl.children().attr("href", url);
        var removeli = $("<li></li>")
        var remove = $("<button>Remove from saved</button>")
        //Each event is given a remove button, so it can be removed from the saved page and local storage.
        remove.on("click", function (event) {
            btn = $(event.target);
            event.preventDefault();
            event.stopPropagation();
            //We search the savedArray for the event that he user is trying to remove and remove it form the array
            var eventName = btn.parent().children()[0].textContent;
            var savedArray = JSON.parse(localStorage.getItem("saved"));
            for (var x = 0; x < savedArray.length; x++) {
                var event = savedArray[x];
                if (event[0] == eventName) {
                    savedArray.splice(x, 1);
                }
            }

            localStorage.setItem("saved", JSON.stringify(savedArray));
            //The html elemenet displaying the event that is being removed is emptied, so that is is no longer diplayed.
            btn.parent().empty();

        })
        //All html elements are appended to the document
        removeli.append(remove);
        var hr = $("<hr>");
        container.append(nameEl, distanceEl, dateEl, timeEl, urlEl, remove, hr);
        results.append(container);
    }

}

//This event listener allows the user to navigate back to the search page.
back.on("click", function () {
    document.location.replace("../index.html");
})

//The getSaved function is called as the page loads so saved events are diplayed right away.
getSaved()
