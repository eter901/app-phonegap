$(document).ready(function() {

	//favourite studio
	$("span.favourite").click(function() {
  	$(this).toggleClass("checked");
	});

	$(".controls span").click(function() {
		if ($(this).hasClass("checked")) {
			$(this).removeClass("checked");
		}else{
			$(this).parent("div").children("span.checked").removeClass("checked");
			$(this).addClass("checked");	
		}
	});
});



//google maps
function initialize() {
  var styles = [{"stylers": [{ "saturation": -100 },{ "lightness": -32 },{ "gamma": 0.88 }]}];
  
  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
  
  var image = './img/map-marker.svg';

  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    disableDefaultUI: true,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image,
});
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);
//google maps end