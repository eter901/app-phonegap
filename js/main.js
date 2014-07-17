function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	if (parseFloat(window.device.version) >= 7.0) {
		$(".ui-header-fixed").css( "paddingTop", "20px" );
		$(".ui-content").css( "paddingTop", "40px" );
    	ShowNativeMessage("ios7",false,"ios7","ios7");
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