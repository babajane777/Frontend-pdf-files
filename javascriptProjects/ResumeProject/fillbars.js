var progressBars = document.querySelectorAll('.skill-progress > div');
console.log(progressBars);
var skillcontainer = document.getElementById('skills');
window.addEventListener('scroll',checkscroll);
var skillcontainervisible = false;

function initializeBars(){
	for(let bars of progressBars){
		bars.style.width = 0 + '%'
	}
}
initializeBars();

function fillbars(){
	for(let bar of progressBars){
		let targetwidth = bar.getAttribute('data-bar-width');
		let currentwidth = 0;
		var interval = setInterval(function(){
			if(currentwidth > targetwidth){
				clearInterval(interval);
				return;
			}
			currentwidth++;
			bar.style.width = currentwidth + '%';

		},30);
	}
}

function checkscroll(){
	var skillcontainerboundaries = skillcontainer.getBoundingClientRect();
	if(!skillcontainervisible && skillcontainerboundaries.top <= window.innerHeight){
		skillcontainervisible = true;
		console.log("skillcontainer-visible");  
		fillbars();
		
	}else if(skillcontainerboundaries.top > window.innerHeight){
		skillcontainervisible=false;
		initializeBars();
	}
}