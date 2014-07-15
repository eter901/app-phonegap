$(document).ready(init());

Function init(){
	document.addEventListener("deviceready",onDeviceReady, false);
}

//PHONEGAP FUNCTIONS
// onDeviceReady
Function onDeviceReady(){
	ShowNativeMessage("zprava",false,"Nadpis","Pokračujte");	
}

// notifications
Function ShowNativeMessage(message,callback,title,buttonText){
	navigator.notifications.alert(
		message, 	//zprava
		callback, 	//callback
		title, 		//titulek
		buttonText 	//nazev tlacitka
	);	
}
