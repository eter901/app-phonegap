function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	ios7statusBar(); //ios7 statusBar fix function
	ShowNativeMessage("Phonegap načten",false,"Phone-gap","Pokračujte");
}

// notifications
function ShowNativeMessage(message,callback,title,buttonText){
	navigator.notification.alert(
		message, 	//zprava
		callback, 	//callback
		title, 		//titulek
		buttonText 	//nazev tlacitka
	);	
}

// ios statusbar function
function ios7statusBar(){
	if (parseFloat(window.device.version) >= 7.0) {
		$(".ui-header-fixed").css("paddingTop", "20px");
		$(".navigation").css("top", "20px");
		$(".ui-content").css("paddingTop", "40px");
	};	
};

$(document).ready(init());



//MAPA GOOGLE MAPA GOOGLE MAPA GOOGLE MAPA GOOGLE

$(document).on('pageshow', '#map-page',function(e,data){   
    $('#content').height(getRealContentHeight());
   // This is the minimum zoom level that we'll allow
   var minZoomLevel = 12;

   var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(38.50, -90.50),
      mapTypeId: google.maps.MapTypeId.ROADMAP
   });

  /* // Bounds for North America
   var strictBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(28.70, -127.50), 
     new google.maps.LatLng(48.85, -55.90)
   );

   // Listen for the dragend event
   google.maps.event.addListener(map, 'dragend', function() {
     if (strictBounds.contains(map.getCenter())) return;

     // We're out of bounds - Move the map back within the bounds

     var c = map.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = strictBounds.getNorthEast().lng(),
         maxY = strictBounds.getNorthEast().lat(),
         minX = strictBounds.getSouthWest().lng(),
         minY = strictBounds.getSouthWest().lat();

     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;

     map.setCenter(new google.maps.LatLng(y, x));
   });

   // Limit the zoom level
   google.maps.event.addListener(map, 'zoom_changed', function() {
     if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
   });  */
    
});

function getRealContentHeight() {
	var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
	var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
	var viewport_height = $(window).height();

	var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
	if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
		content_height -= (content.outerHeight() - content.height());
	} 
	return content_height;
}