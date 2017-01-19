var map;

var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
for (var x = 0; x < data.length; x++) {
    for (var y = 0; y < days.length; y++) {
        data[x][days[y]] = "N";
        var string = String(data[x]["Season1Time"]);
        if (string.indexOf(days[y]) > -1) {
            data[x][days[y]] = "Y";
        }
    }
}

var checkList = [];


var locations = getLocations(checkList);
var markersData = [],
    listOfMarkers = [];
var names = getName(locations);
var coords = getCoord(locations);
var descrips = getInfo(locations);
for (var x = 0; x < locations.length; x++) {
    if (coords[x][0] !== 0 && coords[x][1] !== 0) {
        markersData.push({
            "title": names[x],
            "lat": coords[x][0],
            "lng": coords[x][1],
            "description": descrips[x]
        });
    }
}


function init() {
    var options = {
        zoom: 13,
        center: new google.maps.LatLng(42.35, -71.083),
        mapTypeId: google.maps.MapTypeId.STREET
    };
    map = new google.maps.Map(document.getElementById('map'), options);


    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();

    // Event that closes the InfoWindow with a click on the map
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    // Finally displayMarkers() function is called to begin the markers creation
    displayMarkers();
}

google.maps.event.addDomListener(window, 'load', init);
