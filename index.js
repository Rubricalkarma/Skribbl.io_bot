

// Type "Hello World" then press enter.
var robot = require("robotjs");

//while(true) console.log(robot.getMousePos().x + " " +robot.getMousePos().y);

let currindex = 0;

var colors = [
	[255,255,255,585,845],
	[193,193,193,610,845],
	[255,0,0,635,845],
	[255,113,0,660,845],
	[255,228,685,845],
	[0,204,0,710,845],
	[0,179,255,735,845],
	[35,31,211,760,845],
	[163,0,186,785,845],
	[211,124,170,810,845],
	[160,82,45,835,845]

]

//robot.moveMouse(colors[3][3], colors[3][4]);


const getPixels = require('get-pixels');
    const src = `https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-9/24/018_374_insignia_badge_shape_triangle-512.png`;

    getPixels(src, function(err, pixels) {
      if(err) {
        console.log("Bad image path");
        return;
	  }
	  console.log("got pixels", pixels.shape.slice())
	  console.log("SIZE: "+ pixels.shape[1] + " " + pixels.shape[0]);
	  robot.moveMouse(500,225);
	  robot.mouseClick();

	  let scale = 10;
	  let space = 10;
	

      for (let y = 0; y < pixels.shape[1]; y+=scale) {
		
		 robot.moveMouse(500,robot.getMousePos().y)
		 adjustMouse(space,0);

        for (let x = 0; x < pixels.shape[0]; x+=scale) {

			setColor(pixels.get(x,y,0),pixels.get(x,y,1),pixels.get(x,y,2));
			robot.mouseClick();
			adjustMouse(0,space);
		  
		}		
	  }
	  
	  
	});
	



//setTimeout(function(){dashedLine()},1000);


function dashedLine(){
	for(let i=0;i<10;i++){
		if(i%2 == 0){
			draw();
		}else{
			adjustMouse(0,5);
		}
	}
}

function setColor(r, g, b){
	let minDis = 255*255*255;
	let index = 0;
	let pos = robot.getMousePos();
	for(let i=0;i<colors.length;i++){
		let dis = Math.sqrt(Math.pow(colors[i][0]-r,2) +  Math.pow(colors[i][1]-g,2) + Math.pow(colors[i][2]-b,2));
		if(dis < minDis){
			minDis = dis;
			index = i;
		}
	}
	if(currindex!=index){
	currindex = index;
	//console.log(colors[index][3] + " " + colors[index][4]);
	robot.moveMouse(colors[index][3],colors[index][4]);
	robot.mouseClick();
	robot.moveMouse(pos.x,pos.y);
	}
}

function myFunction(){
	robot.mouseClick();
	robot.moveMouse(100,300);
	robot.mouseClick();
	robot.mouseToggle("down")
	robot.moveMouseSmooth(500,500);
	robot.mouseToggle("up")
}

function draw(){
	//console.log('drawing');
	robot.mouseClick();
}

function adjustMouse(y, x){
	let m = robot.getMousePos();

	//console.log(m.x + ' ' + m.y);
	robot.moveMouse(m.x+x,m.y+y);
}


/*
robot.setKeyboardDelay(1000);
// Type "Hello World".
robot.typeString("goodbye World");
 
// Press enter.
//robot.keyTap("enter");
*/



/*
// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
 
// Speed up the mouse.
robot.setMouseDelay(2);
 
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
 
for (var x = 0; x < width; x++)
{
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
}
*/