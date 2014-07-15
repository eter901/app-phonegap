function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
function onDeviceReady(){
	ShowNativeMessage("zprava",false,"Nadpis","Pokračujte");	
}

// notifications
function ShowNativeMessage(message,callback,title,buttonText){
	navigator.notifications.alert(
		message, 	//zprava
		callback, 	//callback
		title, 		//titulek
		buttonText 	//nazev tlacitka
	);	
}

$(document).ready(init());
