(function(){
	IView = 
	{
		detection: function() {},
		getWidth: function() {},
		getHeight: function() {}
	};

	View = function(app)
	{
		var size = 
		{
			width:    0, 
			height:   0,
			paddingX: 60
		}

		var detection = function()
		{
			size.width  = parseInt(window.innerWidth) - size.paddingX;
			size.height = parseInt(window.innerHeight);
		}

		this.getWidth = function()
		{
			return size.width;
		}

		this.getHeight = function()
		{
			return size.height;
		}

		this.placeEan = function(selector, code)
		{
			ean.place(selector, code);
		}

		/* CONSTRUCT */
		detection();
		var ean = new ViewEan(this);
	}
})();