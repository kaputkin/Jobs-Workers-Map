var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    var Stamen_TerrainBackground = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
    	minZoom: 10,
    	maxZoom: 15,
    	ext: 'png'
    }).addTo(map);

var lines = L.geoJSON(subwaylines, {
      style:
      function(feature) {
          switch (feature.properties.rt_symbol)  {
                    case "1": return {color: "#EE352E", weight: 1.4};
                    case "2": return {color: "#EE352E", weight: 1.4};
                    case "3": return {color: "#EE352E", weight: 1.4};
                    case "4": return {color: "#00933C", weight: 1.4};
                    case "5": return {color: "#00933C", weight: 1.4};
                    case "6": return {color: "#00933C", weight: 1.4};
                    case "B": return {color: "#FF6319", weight: 1.4};
                    case "D": return {color: "#FF6319", weight: 1.4};
                    case "F": return {color: "#FF6319", weight: 1.4};
                    case "M": return {color: "#FF6319", weight: 1.4};
                    case "A": return {color: "#2850AD", weight: 1.4};
                    case "C": return {color: "#2850AD", weight: 1.4};
                    case "E": return {color: "#2850AD", weight: 1.4};
                    case "G": return {color: "#6CBE45", weight: 1.4};
                    case "J": return {color: "#996633", weight: 1.4};
                    case "Z": return {color: "#996633", weight: 1.4};
                    case "L": return {color: "#A7A9AC", weight: 1.4};
                    case "N": return {color: "#FCCC0A", weight: 1.4};
                    case "Q": return {color: "#FCCC0A", weight: 1.4};
                    case "R": return {color: "#FCCC0A", weight: 1.4};
                    case "S": return {color: "#808183", weight: 1.4};
                    case "7": return {color: "#A7A9AC", weight: 1.4};
        }}});

var stopsMarkerOptions = {
            radius: 3,
            fillColor: "#828282",
            color: "#000",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        };

var stops = L.geoJSON(subwaystops, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, stopsMarkerOptions);}
            });

var subway = L.layerGroup([lines,stops]).addTo(map);


//Finance
    var finance10_15 = L.tileLayer('data/Finance10_15/data/{z}/{x}/{y}.png', {
      maxZoom: 15
    });

    var finance10_05 = L.tileLayer('data/Finance10_05/data/{z}/{x}/{y}.png', {
      maxZoom: 15
    });

//Accomodation
    var Accommodation10_05 = L.tileLayer('data/Accommodation10_05/data/{z}/{x}/{y}.png', {
      maxZoom: 15
    });

    var Accommodation10_15 = L.tileLayer('data/Accommodation10_15/data/{z}/{x}/{y}.png', {
      maxZoom: 15
    });

//Total 2015
    var Total10h_15 = L.tileLayer('data/Total10_15/Total10h_15/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

    var Total10w_15 = L.tileLayer('data/Total10_15/Total10w_15/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

    var Total10_15 = L.layerGroup([Total10h_15,Total10w_15]);

//Total 2005
    var Total10h_05 = L.tileLayer('data/Total10_05/Total10_h_05/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

    var Total10w_05 = L.tileLayer('data/Total10_05/Total10_w_05/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

    var Total10_05 = L.layerGroup([Total10h_05,Total10w_05]);

//Art
    var Art10_05 = L.tileLayer('data/Art10_05/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

    var Art10_15 = L.tileLayer('data/Art10_15/data/{z}/{x}/{y}.png', {
                        maxZoom: 15
    });

      var artSide = L.layerGroup([Art10_05,Art10_15]).addTo(map);

//Admin
    var Admin10_05 = L.tileLayer('data/Admin10_05/data/{z}/{x}/{y}.png', {
                            maxZoom: 15
    });

    var Admin10_15 = L.tileLayer('data/Admin10_15/data/{z}/{x}/{y}.png', {
                            maxZoom: 15
    });

      var adminSide = L.layerGroup([Admin10_05,Admin10_15]);


//     var artLayers = [Admin10_05, Admin10_15];
//     layerGroup = L.layerGroup(artLayers);
//
// var sliderControl = L.control.sliderControl({
//           position: "topright",
//           layer: layerGroup,
//           range: true
//         });
// map.addControl(sliderControl);
// sliderControl.startSlider();

var Sectorslayer = {
  "Art & Enternatinment": artSide,
  "Finance 2005": finance10_05,
  "Finance 2015": finance10_15,
  "Accommodation 2005": Accommodation10_05,
  "Accommodation 2015": Accommodation10_15,
  "Total 2015": Total10_15,
  "Total 2005": Total10_05,
  "Administration": adminSide
};

var Subwaylayer = {
  "Subway" : subway
};

L.control.layers(Sectorslayer,Subwaylayer,{collapsed:false, position: 'topright'}).addTo(map);


L.control.sideBySide([subway, Art10_05, Admin10_05],[subway, Art10_15, Admin10_15]).addTo(map);
