# NYC GIS Sandy Map Mirror

- Original is live here: http://gis.nyc.gov/oem/he/map.htm
- This version can be viewed at http://mapbox.com/nyc-sandy/map.htm

## Updating center information

Evacuation centers and shelter are stored in `js/centers.js`. The `js/centers.js` file was converted with [ogr2ogr](http://www.gdal.org/ogr2ogr.html) from a point shapefile.

1) Convert shapefile to GeoJSON:

    ogr2ogr -f "GeoJSON" -s_srs EPSG:900913 -t_srs EPSG:4326 centers.json src.shp

2) Open GeoJSON and copy content into `js/centers.js`, wrapped into the centers variable:

    var centers = <content of centers.json>;
