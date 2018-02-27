var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    var Stamen_TerrainBackground = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
    	minZoom: 10,
    	maxZoom: 15,
    	ext: 'png'
    }).addTo(map);


var finance10_15 = L.tileLayer('data/Finance10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
}).addTo(map);

var finance10_05 = L.tileLayer('data/Finance10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
})


var Sectorslayer = {
  "Finance 2005": finance10_05,
  "Finance 2015": finance10_15
};

L.control.layers(Sectorslayer,null,{collapsed:false, position: 'topright'}).addTo(map);
