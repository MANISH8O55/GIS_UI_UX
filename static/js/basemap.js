window.onload = init
function init() {
  var map = new ol.Map({
    view: new ol.View({
      center: ol.proj.fromLonLat([78.776032, 23.766398]),
      zoom: 5
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'web-map'

  })

  var stamenMap = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain',

    })

  })
  //map.addLayer(stamenMap)


  var watercolor = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',

    })

  })
  //map.addLayer(watercolor)

  var mousePosition = new ol.control.MousePosition({
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function (coordinate) { return ol.coordinate.format(coordinate, 'Latitude: {y} , Longitude: {x}', 6); }
  });
  map.addControl(mousePosition);

  var scaleControl = new ol.control.ScaleLine({
    bar: true,
    text: true
  });
  map.addControl(scaleControl);



  //WFS layers

  var layer1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/Retail/wms?service=WMS&version=1.1.0&request=GetMap&layers=Retail%3AIndia_Boundry&bbox=68.12381590554516%2C6.754077537658393%2C97.40783631625459%2C37.08834739725216&width=741&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers',
      params: {
        LAYERS: 'Retail:India_Boundry',
      }
    })
  });

  map.addLayer(layer1);

  var layer1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/Retail/wms?service=WMS&version=1.1.0&request=GetMap&layers=Retail%3AIndia_Bank&bbox=69.5900283%2C8.1456628%2C95.8948817%2C34.5590513&width=764&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers',
      params: {
        LAYERS: 'Retail:India_Bank',
      }
    })
  });

  // map.addLayer(layer1);

}





