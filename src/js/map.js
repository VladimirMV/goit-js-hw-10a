
$( document ).ready(function start() {

    let countries = [];

    let mapOptions = {
        zoom: 3,
        minZoom: 1,
        center: new google.maps.LatLng(50.7244893,3.2668189),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: 'none'
    };

    let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    

});


export function showCountriesCoose(countries) {
  
   
   
    let Mapss = function geoadres(adress) {
    let resultlat = ''; let resultlng = '';
    let resultnorthlng = ''; let resultsouthwlng = '';
    $.ajax({
    async: false,
    dataType: "json",
    url: 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address=' + adress,
    success: function(data){
        console.log(data); 
    for (let key in data.results) {
    resultlat = data.results[key].geometry.location.lat;
    resultlng = data.results[key].geometry.location.lng;

    resultnorthlng = data.results[key].geometry.bounds.northeast.lng;
    resultsouthwlng = data.results[key].geometry.bounds.southwest.lng;
    // let delta = resultnorthlng - resultsouthwlng; 
     console.log(resultlat, resultlng, resultnorthlng, resultsouthwlng);
    } }
    });

    
    let mapOptions = {
        zoom: 5,
        minZoom: 1,
        center: new google.maps.LatLng(resultlat,resultlng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: 'none'
    };

    let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    return { lat: resultlat, lng: resultlng};
    }
    let geo = new Mapss(countries.name.common);
    
}