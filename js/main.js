function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	
        if (window.device.platform === "iOS" && parseFloat(window.device.version) >= 7.0) {
          var appElement = document.getElementById('app');
          appElement.style.top = "20px";
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
