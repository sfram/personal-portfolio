		var c = document.getElementById("green-canv");
		var context = c.getContext("2d");
		var screenWidth = screen.width;
		
		var canvasWidth = (.7 * screenWidth);
		context.canvas.width = canvasWidth;
		
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0, 420);
		context.lineTo(1400, 500);
		context.lineTo(1400, 0);
		context.closePath();
		context.fillStyle = "#0B6121";
		context.fill();