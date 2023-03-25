
var anchortags = document.querySelectorAll('#horizontal-list a');
// console.log(anchortags);
var interval;
for(var i=0; i<=anchortags.length;i++){
	anchortags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetsectionId = this.textContent.trim().toLowerCase();
		var targetsection = document.getElementById(targetsectionId);
	
	interval = setInterval(function(){
		scrollvertically(targetsection);
	},20);
      
	});
}

function scrollvertically(targetsection){

	var targetSectionCoordinates = targetsection.getBoundingClientRect();
	if(targetSectionCoordinates.top <= 0){
		clearInterval(interval);
		return;
	}
	window.scrollBy(0,20)
}

// var skillcontainer = document.getElementById('skills');
// window.addEventListener('scroll',checkscroll);

// function checkscroll(){
// 	var skillcontainerboundaries = skillcontainer.getBoundingClientRect();
// 	if(skillcontainerboundaries.top < window.innerHeight){
// 		console.log("skillcontainer-visible");
// 	}
// }