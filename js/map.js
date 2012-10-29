$(document).ready(function() {
    // See http://mapbox.com/mapbox.js/api/v0.6.6/#mapbox.auto
    mapbox.auto('map', 'villeda.map-up0fpg1g', function(map, tiledata) {
        var querystring = location.search.replace( '?', '' ).split( '&' ), params = {};
        for (var i = 0; i < querystring.length; i++ ) {
            var name = querystring[i].split('=')[0],
            value = querystring[i].split('=')[1];
            params[name] = value * 1;
        }
        if (params.lon && params.lat) {
            var features = [{
                geometry: {type: "Point", coordinates: [params.lon, params.lat]},
    			properties: {image: "http://gis-dev-1.nycnet/doitt/webmap-conf/styles/mapIcons/SearchLocation.gif"}
            }];
            // See http://mapbox.com/mapbox.js/api/v0.6.6/#map.addLayer
            map.addLayer(mapbox.markers.layer().features(features));
            // See http://mapbox.com/mapbox.js/api/v0.6.6/#map.center
            map.center({lon: params.lon, lat: params.lat}).zoom(14);
        }
    });
});

function legend(){
	var leg = $("#legendPane"), d = leg.css("display"), w = leg.css("font-size"), c = $("#close");
	if (d == "block"){
		leg.css("display", "none");
		c.css("display", "none");
	}else{
		leg.css("display", "block");
		if (w == "10px") c.css("display", "block");
	}
	
	
};