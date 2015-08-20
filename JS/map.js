function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 12,
        center: new google.maps.LatLng(45.017, 4.933),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });   
} 
 
if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback,
                            null,
                            {enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");    
 
function successCallback(position){
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
    map: map
  }); 
}