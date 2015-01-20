(function(){
	IApp = 
	{
		//public methods here
	};

	App = function(config)
	{
		var events  = new Events(this);
		var view    = new View(this);
		var api     = new Api(this);

		view.placeEan('#barcode-account', '87654321');
		view.placeEan('#barcode-discount', '12345678');

	};

	var runApp = function()
	{
		var config = 
		{
			slideIn:  'slideUp',
			slideOut: 'slideDown',
		};

		var app = new App(config);
	};

	window.onload = runApp;

})();