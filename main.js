// swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  


// ai 
 
function initMap() {
  // إنشاء متغير لتحديد موقع الخريطة
  var myLatLng = {lat: -34.397, lng: 150.644};

  // إنشاء خريطة Google Maps جديدة
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  // إنشاء علامة على الخريطة
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
  