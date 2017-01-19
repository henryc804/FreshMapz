
function getLocations(checked) {
    //checked should ideally be a list containing all the data to stratify upon
    //the checked should only include the ones that are yes
    var output = [];
    var works = false;

    for (var x in data) {
    	if(checked.length === 0){
    		return data;
    	}
        for (var y in checked) {
            if (data[x][checked[y]] === "Y") {
                works = true;
            } else {
                works = false;
                break;
            }
        }
        if(works === true){
        	output.push(data[x]);
        }
    }
    return output;
}

function getCoord(locations){
	var output = [];
	var longitude, latitude;
	for(var x in locations){
		output.push([locations[x].y,locations[x].x]);	//latitude, longitude
	}
	return output;
}

function getAddress(locations){
	var output = [];
	var string = "";
	for(var x in locations){
		string += locations[x]["street"] + "\n" + locations[x]["city"] + ", " + locations[x]["State"] + " " + locations[x]["zip"];
		output.push(string);	//latitude, longitude
	}
	return output;
}


function getInfo(locations){
	//this returns the blurb for info windows
	var output = [];
	var list = ["Facebook", "Twitter", "Youtube"];
	var string = "";
	for(var x in locations){
		if(locations[x]["Website"] !== 0){
			string += "Website: <a href=" + locations[x]["Website"] + ">" + locations[x]["Website"] + "</a><br>";
		}
		for(var y in list){
			if(locations[x][list[y]] !== 0){
				string += list[y] + ": <a href=" + locations[x][list[y]] + ">" + locations[x][list[y]] + "</a><br>";
			}
		}
		if(locations[x]["OtherMedia"] !== 0){
			string += "Other Media: <a href=" + locations[x]["OtherMedia"] + ">" + locations[x]["OtherMedia"] + "</a>";
		}
		output.push(string);
		string = "";
	}
	return output;
}

function getName(locations){
	var output = [];
	for(var x in locations){
		output.push(locations[x]["MarketName"]);	//latitude, longitude
	}
	return output;
}

function getTimes(location){
	var output = [];
	for(var x in locations){
		output.push(locations[x]["Season1Time"]);	//latitude, longitude
	}
	console.log(output);
	//return output;
}

function getDates(location){
	var output = [];
	for(var x in locations){
		output.push(locations[x]["Season1Date"]);	//latitude, longitude
	}
	return output;
}