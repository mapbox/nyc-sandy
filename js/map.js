$(document).ready(function() {
    // IE9 is erratic on downloading this data, embedding here from
    // http://a.tiles.mapbox.com/v3/villeda.map-up0fpg1g.json
    var o = {
        "attribution": "<a href='http://mapbox.com/about/maps' target='_blank'>Terms & Feedback</a>",
        "bounds": [-180, -85, 180, 85],
        "center": [-73.89957298446463, 40.71661255950389, 12],
        "geocoder": "http://a.tiles.mapbox.com/v3/villeda.map-up0fpg1g/geocode/{query}.jsonp",
        "grids": ["http://a.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.grid.json", "http://b.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.grid.json", "http://c.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.grid.json", "http://d.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.grid.json"],
        "id": "villeda.map-up0fpg1g",
        "legend": "<div class='legend'>\n\t<div class='centers'>\n\t\t<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFXSURBVDiNrZS9asJQFIA/fxZBOkgnCzoUMdIiPoGDi7g46CaCSF/mPkCydMuYIU9w3yBThmYqHdIxS8AhklByO6gltImmtt947rnfPVzOORWlFP9BtUROrYyofuH8EegA78DLtRW1bduezOfzZ9u2J0D7GlEV0CzLetrv93eWZT0B2rmHiw66uq6PwzAcAoRhONR1fQx0fyOqx3Hcl1Jus0Ep5TaO4z4F/5on6gkhZlEUdbLBKIo6QogZ0CsjagRBoDmOs85LdhxnHQSBBjQuifpCiEWSJK08UZIkLSHEAuifE924rvvged4yT3LC87yl67oPwE2RaGAYxipN0x9lZ0nTtGEYxgoY5IlupZQj3/en5yQnfN+fSilHwO13kWaa5kYpVWqulFI10zQ3HJr0S1QBmrvdrrDZ8jjmN4/3qRzXyD2H/rg0xFk+gFfgLSv6M2X2USk+ASpegoY51Xe5AAAAAElFTkSuQmCC\" />\n\t<span class='clabel'>Evacuation Centers</span>\n\t</div>\n\t<div class='zones'>\n\t\t<div class='color'>\n\t\t\t<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAdSURBVDiNY/zPoPSfgQLARInmUQNGDRg1YDAZAADiJwJAwtCi/wAAAABJRU5ErkJggg==\"/>\n\t\t\t<span class='zlabel'>Zone A</span>\n\t\t\t<div class='exp'>Residents in Zone A face the <b>highest</b> risk of flooding from a hurricane's storm surge</div>\n\t\t</div>\n\t\t<div class='color'>\n\t\t\t<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAdSURBVDiNY/x/l+E/AwWAiRLNowaMGjBqwGAyAADYsAL7qkubRAAAAABJRU5ErkJggg==\"/>\n\t\t\t<span class='zlabel'>Zone B</span>\n\t\t\t<div class='exp'>Residents in Zone B can expect a <b>moderate</b> likelihood of evacuation if a hurricane is expected to reach NYC</div>\n\t\t</div>\n\t\t<div class='color'>\n\t\t\t<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAdSURBVDiNYyz/z/CfgQLARInmUQNGDRg1YDAZAAA6hQKV4kKvpwAAAABJRU5ErkJggg==\"/>\n\t\t\t<span class='zlabel'>Zone C</span>\n\t\t\t<div class='exp'>Residents in Zone C can expect a <b>low</b> likelihood of evacuation if a hurricane is expected to reach NYC</div>\n\t\t</div> \n\t\t<div class='title'>Evacuation Zone</div>\n\t</div>\n</div> ",
        "maxzoom": 17,
        "minzoom": 0,
        "name": "NYC Evacuation Zones and Centers",
        "private": true,
        "scheme": "xyz",
        "template": "{{#__l0__}}{{#__location__}}{{/__location__}}{{#__teaser__}}<div class='int'>\n\t<div class='name'>{{{EC_NAME}}}</div>\n\t<div class='addr'>{{{ADDRESS}}} </div>\n\t<div class='cross'>{{{CROSS_STR}}}</div>\n\t<div class='boro'>{{{BOROUGH}}}</div>\n</div>{{/__teaser__}}{{#__full__}}{{/__full__}}{{/__l0__}}",
        "tilejson": "2.0.0",
        "tiles": ["http://a.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.png", "http://b.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.png", "http://c.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.png", "http://d.tiles.mapbox.com/v3/villeda.map-up0fpg1g/{z}/{x}/{y}.png"],
        "webpage": "http://tiles.mapbox.com/villeda/map/map-up0fpg1g"
    };

    var map = window.map = mapbox.map('map');
    map.zoom(o.center[2]).center({
        lat: o.center[1],
        lon: o.center[0]
    });
    map.addLayer(mapbox.layer().tilejson(o));
    mapbox.interaction().map(map).auto();
    map.ui.zoomer.add();
    map.ui.zoombox.add();
    map.ui.attribution.content(o.attribution);
    map.ui.attribution.add();

    var querystring = location.search.replace('?', '').split('&'),
        params = {};
    for (var i = 0; i < querystring.length; i++) {
        var name = querystring[i].split('=')[0],
            value = querystring[i].split('=')[1];
        params[name] = value * 1;
    }
    if (params.lon && params.lat) {
        var features = [{
            geometry: {
                type: "Point",
                coordinates: [params.lon, params.lat]
            },
            properties: {
                image: "http://gis-dev-1.nycnet/doitt/webmap-conf/styles/mapIcons/SearchLocation.gif"
            }
        }];
        // See http://mapbox.com/mapbox.js/api/v0.6.6/#map.addLayer
        map.addLayer(mapbox.markers.layer().features(features));
        // See http://mapbox.com/mapbox.js/api/v0.6.6/#map.center
        map.center({
            lon: params.lon,
            lat: params.lat
        }).zoom(14);
    }
});

function legend() {
    var leg = $("#legendPane"),
        d = leg.css("display"),
        w = leg.css("font-size"),
        c = $("#close");
    if (d == "block") {
        leg.css("display", "none");
        c.css("display", "none");
    } else {
        leg.css("display", "block");
        if (w == "10px") c.css("display", "block");
    }
}

var oldreq = wax.request.get;
var req_queue = queue(1);

wax.request.get = function(url, cb) {
    req_queue.defer(function(done) {
        function new_callback(a, b, c) {
            cb(a, b, c);
            done();
        }
        oldreq.apply(wax.request, [url, new_callback]);
    });
};
