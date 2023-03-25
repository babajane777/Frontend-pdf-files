var Box = document.getElementById('box');
var container = document.getElementById('container');
var contWidth = container.offsetWidth;
var contHeight = container.offsetHeight;
var boxleft = box.offsetLeft;
var boxtop = box.offsetTop;
var boxwidth = box.offsetWidth;
var boxheight = box.offsetHeight;


Box.addEventListener('mouseover', movingBox);

function movingBox(){

	value1 = Math.ceil(Math.random() * (contWidth  - boxwidth));
	value2 = Math.ceil(Math.random() * (contHeight - boxheight));

	boxleft += value1 ;
	boxtop += value2 ;

	if( boxleft > 0 || boxtop > 0) {


		Box.style.left = value1 + "px";
		Box.style.top = value2  + "px";

	}	

}


