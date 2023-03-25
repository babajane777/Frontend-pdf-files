var ball = document.getElementById('movingball');
var outerdiv = document.getElementById('container');
let divrect = outerdiv.getBoundingClientRect();
let ballrect = ball.getBoundingClientRect();
let divwidth = outerdiv.offsetWidth;
let divheight = outerdiv.offsetHeight;
let ballLeft = ball.offsetLeft;
let balltop= ball.offsetTop;
let ballwidth = ball.offsetWidth;
let ballheight = ball.offsetHeight;
console.log(ballwidth);

function leftkey(){
	let ballspeed = 20;
	ballLeft -= ballspeed;
	if(ballLeft >= 0 ){
		ball.style.left = ballLeft +"px"
	}
}

function Rightkey(){
	let ballspeed = 20;
	ballLeft += ballspeed;
	if(ballLeft == 0 || (ballLeft + ballwidth) <= divwidth){
		ball.style.left = ballLeft  + "px"
	}
}

function Upkey(){
	let ballspeed = 20;
	balltop -= ballspeed;
	if(balltop >= 0){
		ball.style.top = balltop  + "px"
	}
}

function Downkey(){
	let ballspeed = 20;
	balltop += ballspeed;
	if(balltop == 0 || (balltop + ballheight) <= divheight){
		ball.style.top = balltop  + "px"
	}
}

