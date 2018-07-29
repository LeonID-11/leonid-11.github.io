function myContainer(sSelector){	
	var c = this;	
		
	c.container    = $(sSelector);
	c.containerBox = c.container.find(".container_box");
	c.window       = c.containerBox.find(".window");
	c.imgLabel     = c.container.find(".img-label");
	c.current      = 0;
	
	c.showCurrLabel = function(label){
		label = $(this).index();
		c.current = label;
		c.imgNewSrc(c.current);
	}
	
	c.imgNewSrc = function(label){		
		c.window.css("display", "none");
		var src = c.container.find(".window:eq(" + (label) + ")").css("display", "block");

		c.imgLabel.removeClass("active");
		c.container.find(".img-label:eq(" + (label) + ")").addClass("active");
	}
	
	c.imgLabel.click(c.showCurrLabel);
}