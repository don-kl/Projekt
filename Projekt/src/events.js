var map = L.map('map').setView([57.1350,-2.0764], 13);

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);



var beerIcon = L.icon({
    iconUrl: 'beer.svg',
    iconSize: [25, 80] // size of the icon
});

var cocktailIcon = L.icon({
   iconUrl: 'cocktail.svg',
   iconSize: [25, 80] // size of the icon
});

var restaurantIcon = L.icon({
   iconUrl: 'restaurant.svg',
   iconSize: [25, 80] //size of the icon
});

var coffeetIcon = L.icon({
   iconUrl: 'coffee.svg',
   iconSize: [25, 80] //size of the icon
});


var madameMews = L.marker([57.14394, -2.10911], {icon: restaurantIcon}).bindTooltip("Madame Mews", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
), 
   seoul = L.marker([57.14456, -2.10334], {icon: restaurantIcon}).bindTooltip("Seoul", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ), 
   siamCottage = L.marker([57.14844, -2.09282], {icon: restaurantIcon}).bindTooltip("Siam Cottage", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   );

var restaurants = L.layerGroup([madameMews, seoul, siamCottage]);

var oldschool = L.marker([57.14702, -2.10093], {icon: beerIcon}).bindTooltip("Old School House", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
),
   macamerons = L.marker([57.14704, -2.10049], {icon: beerIcon}).bindTooltip("Macamerons", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ),
   oneils = L.marker([57.14681, -2.10016], {icon: beerIcon}).bindTooltip("O'Neils", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ),
   oldBlackfriars = L.marker([57.14776, -2.09321], {icon: beerIcon}).bindTooltip("OldBlackFriars", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   );

var pubs = L.layerGroup([oldschool, macamerons, oneils, oldBlackfriars]);

var allbarone = L.marker([57.14870, -2.09741], {icon: cocktailIcon}).bindTooltip("AllBarOne", 
{
    permanent: false, 
    direction: 'bottom',
    className: "marker_label"
}
),
   revolution = L.marker([57.14678, -2.10149], {icon: cocktailIcon}).bindTooltip("Revolution", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ),
   orchid = L.marker([57.14314, -2.10743], {icon: cocktailIcon}).bindTooltip("Orchid", 
   {
       permanent: false, 
       direction: 'bottom',
       className: "marker_label"
   }
   ).on('click', function(e){
      map.setView([e.latlng.lat, e.latlng.lng], 19);
   });

var bars = L.layerGroup([revolution, allbarone, orchid]);

revolution.on('click', function(e){
   map.setView([e.latlng.lat, e.latlng.lng], 19);
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

let checkboxes = document.getElementsByTagName('input');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    let label = this.parentNode;
    label.style.backgroundColor = this.checked ? '#b1b1b1' : '#f3f3f3'; 
  });
  checkboxes[i].addEventListener('click', function() {
      let feed_posts = document.getElementsByClassName(this.id);
      for (let i =0; i <feed_posts.length; i++) {
         feed_posts[i].style.display = this.checked ? "block" : 'none';
      }
  });
}


var TheBreadGuysBakery = L.marker([57.135745080439335, -2.084770004612642]).addTo(map);