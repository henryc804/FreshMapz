function init() {
    var options = {
        zoom: 13,
        center: new google.maps.LatLng(0,0),
        // center: new google.maps.LatLng(42.35, -71.083),
        mapTypeId: google.maps.MapTypeId.STREET,


        // {
        //     zoomControl: boolean,
        //     mapTypeControl: boolean,
        //     scaleControl: boolean,
        //     streetViewControl: boolean,
        //     rotateControl: boolean,
        //     fullscreenControl: boolean
        // }

        disableDefaultUI: true


        // zoomControl: false,
        // scaleControl: false,
        // streetViewControl: false


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

// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers() {

    // this variable sets the map bounds and zoom level according to markers position
    var bounds = new google.maps.LatLngBounds();

    // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
    for (var i = 0; i < markersData.length; i++) {

        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].title;
        var description = markersData[i].description;
        //var address1 = markersData[i].address1;
        //var address2 = markersData[i].address2;
        //var postalCode = markersData[i].postalCode;

        createMarker(latlng, name, description);

        // Marker’s Lat. and Lng. values are added to bounds variable
        bounds.extend(latlng);
    }

    // Finally the bounds variable is used to set the map bounds
    // with API’s fitBounds() function

    // map.fitBounds(bounds);
}

// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, description) { //latlng, name, address1, address2, postalCode
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: name
    });

    // This event expects a click on a marker
    // When this event is fired the infowindow content is created
    // and the infowindow is opened
    google.maps.event.addListener(marker, 'click', function() {

        // Variable to define the HTML content to be inserted in the infowindow
        var iwContent = '<div id="iw_container">' +
            '<h5 class="heading">' + name + '</h5>' +
            '<div class="iw_content">' + description; // + '<br />' +
        // address2 + '<br />' +
        // postalCode + '</div></div>';

        // including content to the infowindow
        infoWindow.setContent(iwContent);

        // opening the infowindow in the current map and at the current marker location
        infoWindow.open(map, marker);
    });

    listOfMarkers.push(marker);

}

//locate to run the find nearest x locations to you button//
//
//
//

function locate(numberMarkersInput) {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
                nearestMarkers(pos, numberMarkersInput);

            },

            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function nearestMarkers(pos, numberOfResults) {
    var closest = [];
    for (var i = 0; i < markersData.length; i++) {

        var markerLat = markersData[i].lat;
        var markerLng = markersData[i].lng;
        var markerCoords = new google.maps.LatLng(markerLat, markerLng);

        markersData[i].distance = google.maps.geometry.spherical.computeDistanceBetween(pos, markerCoords);
        closest.push(markersData[i]);
    }
    closest.sort(sortByDist);
    var numberClosestMarkers = closest.splice(0, numberOfResults);
    updateShowNearestMarkers(numberClosestMarkers);
}

function sortByDist(a, b) {
    return (a.distance - b.distance);
}

function updateShowNearestMarkers(input) {
    removeBlahMarkers(input);
}



// google.maps.event.addDomListener(window, 'load', init);


function removeBlahMarkers(locs) {
    //  sets markers visible and some to not visible
    //  not really removing them

    var removeIndex = [];
    var visibleIndex = [];


    for (var x = 0; x < locs.length; x++) {
        index = markersData.indexOf(locs[x]);
        visibleIndex.push(index);
    }

    for (var y = 0; y < locations.length; y++) {
        if (markersData.indexOf(y) == -1) {
            removeIndex.push(y);
        }
    }


    for (x = 0; x < removeIndex.length; x++) {
        listOfMarkers[removeIndex[x]].setMap(null);
    }
    for (x = 0; x < visibleIndex.length; x++) {
        listOfMarkers[visibleIndex[x]].setMap(map);
    }
}


function removeMarkers(locs) {
    //  sets markers visible and some to not visible
    //  not really removing them

    var removeIndex = [];
    var visibleIndex = [];


    for (var x = 0; x < locs.length; x++) {
        index = locations.indexOf(locs[x]);
        visibleIndex.push(index);
    }

    for (var y = 0; y < locations.length; y++) {
        if (visibleIndex.indexOf(y) == -1) {
            removeIndex.push(y);
        }
    }


    for (x = 0; x < removeIndex.length; x++) {
        listOfMarkers[removeIndex[x]].setMap(null);
    }
    for (x = 0; x < visibleIndex.length; x++) {
        listOfMarkers[visibleIndex[x]].setMap(map);
    }
}

function update() {
    var locations = getLocations(checkList);
    removeMarkers(locations);
    //console.log(locations);
}
