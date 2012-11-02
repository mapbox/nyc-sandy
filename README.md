# NYC GIS Sandy Map Mirror

- Original is live here: http://gis.nyc.gov/oem/he/map.htm
- This version can be viewed at http://mapbox.com/nyc-sandy/map.htm

## Generating the centers.js file

The `js/centers.js` file was converted with [ogr2ogr](http://www.gdal.org/ogr2ogr.html) from a point shapefile like so:

    ogr2ogr -f "GeoJSON" -s_srs EPSG:900913 -t_srs EPSG:4326 centers.js src.shp
