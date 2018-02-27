var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    var Stamen_TerrainBackground = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
    	minZoom: 10,
    	maxZoom: 15,
    	ext: 'png'
    }).addTo(map);


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

    var Total10_15 = L.layerGroup([Total10h_15,Total10w_15]).addTo(map);

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







// $('#my-map').beforeAfter(before, after);

var Sectorslayer = {
  "Art & Enternatinment  2005": Art10_05,
  "Art & Enternatinment 2015": Art10_15,
  "Finance 2005": finance10_05,
  "Finance 2015": finance10_15,
  "Accommodation 2005": Accommodation10_05,
  "Accommodation 2015": Accommodation10_15,
  "Total 2015": Total10_15,
  "Total 2005": Total10_05
};

L.control.layers(Sectorslayer,null,{collapsed:false, position: 'topright'}).addTo(map);
