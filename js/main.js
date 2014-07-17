function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	StatusBar.backgroundColorByHexString("#f8f8f8");
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