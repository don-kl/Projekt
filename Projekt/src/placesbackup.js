var map = L.map('map').setView([57.1343, -2.0823], 16);

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);


var places = {
   "type": "FeatureCollection",
   "features": [
     {
       "type": "Feature",
       "properties": {
         "business_type": "pub",
         "name": "The Grampian Bar"
       },
       "geometry": {
         "coordinates": [
           -2.088764736672431,
           57.13890717572687
         ],
         "type": "Point"
       },
       "id": 0
     },
     {
       "type": "Feature",
       "properties": {
         "business_type": "restaurant",
         "name": "LaFiamma Pizza"
       },
       "geometry": {
         "coordinates": [
           -2.0886975162563033,
           57.13876980925599
         ],
         "type": "Point"
       },
       "id": 1
     },
     {
       "type": "Feature",
       "properties": {
         "business_type": "bar",
         "name": "Victoria Bar"
       },
       "geometry": {
         "coordinates": [
           -2.088746443068004,
           57.13812851020933
         ],
         "type": "Point"
       },
       "id": 2
     },
     {
       "type": "Feature",
       "properties": {
         "business_type": "groceries",
         "name": "Spar"
       },
       "geometry": {
         "coordinates": [
           -2.088202568525645,
           57.13761287259331
         ],
         "type": "Point"
       },
       "id": 3
     },
     {
       "type": "Feature",
       "properties": {
         "business_type": "pharmacy",
         "name": "Dickies Pharmacy"
       },
       "geometry": {
         "coordinates": [
           -2.0877166985754627,
           57.13724590536944
         ],
         "type": "Point"
       },
       "id": 4
     },
     {
       "type": "Feature",
       "properties": {
         "business_type": "groceries",
         "name": "Keystore"
       },
       "geometry": {
         "coordinates": [
           -2.0871128238383676,
           57.136154577961776
         ],
         "type": "Point"
       },
       "id": 5
     }
   ]
};

var beerIcon = L.icon({
    iconUrl: 'icons/beer.svg',
    iconSize: [25, 80] // size of the icon
});

var cocktailIcon = L.icon({
   iconUrl: 'icons/cocktail.svg',
   iconSize: [25, 80] // size of the icon
});

var restaurantIcon = L.icon({
   iconUrl: 'icons/restaurant.svg',
   iconSize: [25, 80] //size of the icon
});

var groceryIcon = L.icon({
   iconUrl: 'icons/groceries.svg',
   iconSize: [25, 80] //size of the icon
});

var pharmacyIcon = L.icon({
   iconUrl: 'icons/pharmacy2.svg',
   iconSize: [30, 100] //size of the icon
});

var hoverIcon = L.icon({
   iconUrl: 'icons/pin.svg',
   iconSize: [35, 110], //size of the icon
   iconAnchor:[22, 80]
});


var laFiamma = L.marker([57.13876, -2.08872], {icon: restaurantIcon}).bindTooltip("LaFiamma Stone Baked Pizza", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
).on('click', function(e){
   map.setView([e.latlng.lat, e.latlng.lng], 19)
   laFiamma.setIcon(hoverIcon);
});

var restaurants = L.layerGroup([laFiamma]);

var theWhiteCockade = L.marker([57.13557, -2.08605], {icon: beerIcon}).bindTooltip("The White Cockade", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
).on('click', function(e){
   map.setView([e.latlng.lat, e.latlng.lng], 19)
   theWhiteCockade.setIcon(hoverIcon);
}),
   theGrampianBar = L.marker([57.13885, -2.08873], {icon: beerIcon}).bindTooltip("The Grampian Bar", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      theGrampianBar.setIcon(hoverIcon);
   }),
   goldenTee = L.marker([57.13639, -2.07178], {icon: beerIcon}).bindTooltip("Golden Tee", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      goldenTee.setIcon(hoverIcon);
   });

var pubs = L.layerGroup([theWhiteCockade, theGrampianBar, goldenTee]);

var victoriaBar = L.marker([57.13808, -2.08875], {icon: cocktailIcon}).bindTooltip("Victoria Bar", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
).on('click', function(e){
   map.setView([e.latlng.lat, e.latlng.lng], 19)
   victoriaBar.setIcon(hoverIcon);
});

var bars = L.layerGroup([victoriaBar]);

var sparBig = L.marker([57.137623832501966, -2.0881899407569664], {icon: groceryIcon}).bindTooltip("Spar", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      sparBig.setIcon(hoverIcon);
   }),
   torryConvenienceStore = L.marker([57.13364992503441, -2.093050058280363], {icon: groceryIcon}).bindTooltip("Torry Convenience Store", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      torryConvenienceStore.setIcon(hoverIcon);
   }),
   nisaLocal = L.marker([57.13302754900439, -2.0796049002943824], {icon: groceryIcon}).bindTooltip("Nisa Local", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      nisaLocal.setIcon(hoverIcon);
   }),
   mcColls = L.marker([57.13616713844648, -2.072636913892899], {icon: groceryIcon}).bindTooltip("McColl's", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label",
       offset: (0, 4)
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      mcColls.setIcon(hoverIcon);
   });

var convenienceStore = L.layerGroup([sparBig, torryConvenienceStore, nisaLocal, mcColls]);

var dickiesPharmacy = L.marker([57.13726823163315, -2.0877085046733477], {icon: pharmacyIcon}).bindTooltip("Dickies Pharmacy", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      dickiesPharmacy.setIcon(hoverIcon);
   }),
   torryPharmacy = L.marker([57.13788,-2.08854], {icon: pharmacyIcon}).bindTooltip("Torry Pharmacy (RWP Sub ltd)", 
   {
      permanent: false, 
      direction: 'bottom',
      className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19)
      torryPharmacy.setIcon(hoverIcon);
   });

var pharmacy = L.layerGroup([dickiesPharmacy, torryPharmacy]);

let article1 = document.getElementsByTagName('article');

article1[0].addEventListener("mouseover", function() {
   sparBig.setIcon(hoverIcon);
   map.setView(sparBig.getLatLng(), 16);
});
article1[0].addEventListener("mouseout", function() {
   sparBig.setIcon(groceryIcon);
});

article1[1].addEventListener("mouseover", function() {
   mcColls.setIcon(hoverIcon);
   map.setView(mcColls.getLatLng(), 16);
});
article1[1].addEventListener("mouseout", function() {
   mcColls.setIcon(groceryIcon);
});

article1[2].addEventListener("mouseover", function() {
   theGrampianBar.setIcon(hoverIcon);
   map.setView(theGrampianBar.getLatLng(), 16);
});
article1[2].addEventListener("mouseout", function() {
   theGrampianBar.setIcon(beerIcon);
});

article1[3].addEventListener("mouseover", function() {
   dickiesPharmacy.setIcon(hoverIcon);
   map.setView(dickiesPharmacy.getLatLng(), 16);
});
article1[3].addEventListener("mouseout", function() {
   dickiesPharmacy.setIcon(pharmacyIcon);
});



torryPharmacy.on('onmouseover', function(e) {
   map.setView([e.latlng.lat, e.latlng.lng], 19)
});


document.getElementById("pharmacy").addEventListener('click', function() {
   if (map.hasLayer(pharmacy)) {
      map.removeLayer(pharmacy);
      
    } else {
      map.addLayer(pharmacy);
    }
    
});

document.getElementById("conveniece").addEventListener('click', function() {
   if (map.hasLayer(convenienceStore)) {
      map.removeLayer(convenienceStore);
      
    } else {
      map.addLayer(convenienceStore);
    }
    
});

document.getElementById("pub").addEventListener('click', function() {
   if (map.hasLayer(pubs)) {
      map.removeLayer(pubs);
      
    } else {
      map.addLayer(pubs);
    }
    
});

document.getElementById('bar').addEventListener('click', function() {
   if (map.hasLayer(bars)) {
      map.removeLayer(bars);
   } else {
      map.addLayer(bars);
   }
});


document.getElementById('restaurant').addEventListener('click', function() {
   if (map.hasLayer(restaurants)) {
      map.removeLayer(restaurants);
   } else {
      map.addLayer(restaurants);
   }
});


let checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    let label = this.parentNode;
    label.style.backgroundColor = this.checked ? '#b1b1b1' : '#ebebeb'; 
  });

  checkboxes[i].addEventListener('click', function() {
      let feed_posts = document.getElementsByClassName(this.id);
      for (let i =0; i <feed_posts.length; i++) {
         feed_posts[i].style.display = this.checked ? "flex" : 'none';
      }
  });
};





function onClick(e) {
   map.setView([e.latlng.lat, e.latlng.lng], 19);
   torryPharmacy.setIcon(hoverIcon);
 }


 let filter = function)

let categories = document.querySelectorAll('input[type="checkbox"]');

categories.array.forEach(element => {
  this.addEventListener('change', function() {
  let ids = this.id;
  if (placesSettings.feature.properties.business_type == ids)
  
});






let checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', function() {

    let isChecked = this.checked;

    locationLayer.clear();

    var filteredLocations = locations.features.filter(function(feature) {
      return feature.properties.business_type === this.id;
    });

    locationLayer.addData({
      type: 'featureCollection',
      features: filteredLocations
    });

  }
)};

var restaurantsLayer = L.geoJSON(null, {
   filter: function(feature) {
     return feature.properties.business_type === 'restaurant'; // Replace 'restaurant' with the desired business type
   }
 }).addTo(map);









 var restaurantsLayer = L.geoJSON(null, {
   filter: function(feature) {
     return feature.properties.business_type === 'restaurant'; // Replace 'restaurant' with the desired business type
   }
 }).addTo(map);
 
 // Add the GeoJSON data to the corresponding layers
 restaurantsLayer.addData(geojsonData);
 
 // Function to handle the checkbox click
 document.getElementById('restaurant').addEventListener('click', function() {
   // Get the checkbox status (checked or unchecked)
   var isChecked = this.checked;
 
   // Toggle the visibility of the layer based on the checkbox status
   if (isChecked) {
     map.addLayer(restaurantsLayer);
   } else {
     map.removeLayer(restaurantsLayer);
   }
 });

















 for (let i = 0; i < checkboxes.length; i++) {
   // Function to handle the checkbox click
   checkboxes[i].addEventListener('change', function() {
     // Get the checkbox status (checked or unchecked)
     let isChecked = this.checked;
   
     let checkboxId = checkboxes[i].id;
   
     let filteredLocations = locations.features.filter(function(feature) {
       return feature.properties.business_type == checkboxId;
     });
     
     locationLayer.addData({
       type: 'featureCollection',
       features: filteredLocations
     });
   
     // Toggle the visibility of the layer based on the checkbox status
     if (isChecked) {
       map.addLayer(locationLayer);
     } else {
       locationLayer.eachLayer(function(layer) {
         if(layer.feature.properties.business_type == checkboxId) {
           locationLayer.removeLayer(layer);
         }
       })
   };
   });
   };