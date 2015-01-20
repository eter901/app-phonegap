(function(){
	IViewEan = 
	{
		place: function(selector, code) {}
	};

	ViewEan = function(view)
	{
		var constants = Object.freeze({
			'w'     : 87,
			'h'     : 6,
			'output': 'css'
		});

		var size =
		{
			width:   0,
			height:  0,
			font:    22,
			padding: 0
		}

		var detection = function()
		{
			size.width   = Math.floor(view.getWidth()  / constants.w);
			size.height  = Math.floor(view.getHeight() / constants.h);
			size.padding = Math.floor((view.getWidth() - (size.width * constants.w)) / 2);
		}

		this.place = function(selector, code)
		{
			$(selector).barcode(code, 'ean8', 
			{
				output:    constants.output,
				barWidth:  size.width,
				barHeight: size.height,
				fontSize:  size.font
			});
			$(selector).css('padding-left',  size.padding + 'px');
			$(selector).css('padding-right', size.padding + 'px');
		}

		/* CONSTRUCT */
		detection();
	}
})();