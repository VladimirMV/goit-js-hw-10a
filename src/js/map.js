
$( document ).ready(function() {

   
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
  
   
   
    let Mapss = function geoadress(adress) {
    let resultlat = ''; let resultlng = '';
    $.ajax({
    async: false,
    dataType: "json",
    url: 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address=' + adress,
    success: function(data){
         
    for (let key in data.results) {
    resultlat = data.results[key].geometry.location.lat;
    resultlng = data.results[key].geometry.location.lng;
    
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
    geo = new Mapss(countries.name.common);
    
}