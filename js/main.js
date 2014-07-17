function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	if(navigator.userAgent.match(/(iPad.*|iPhone.*|iPod.*);.*CPU.*OS 7_\d/i)) {
    	$("body").addClass("ios7");
        $('body').append('<div id="ios7statusbar"/>');
	}

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

$(document).ready(init());