var current = document.querySelector('.current');
var hunddivs = document.querySelectorAll('#hund .next');
var tensdivs = document.querySelectorAll('#tens .next');
var onesdivs = document.querySelectorAll('#ones .next')
var inputbar = document.getElementById('inputbar');
var i;

  
function startCounter(){

    var target = inputbar.value;

    var i = 0;
    var j = 0;
    var k = 0;
    

    if (target > 0){

        var increment = setInterval(function(){

            i = i + 1;
            
        },1000)




       

        var interval = setInterval(function(){

            if(j == 9){

                j = 0
            }
        

            stop(i,target,interval);

            console.log(j);

            animationOnOnes(j)

            console.log(j)

            j = j + 1

            setTimeout(function(){

                onesdivs.forEach(removeanimation)

            },9000)

        

        },1000)


      


        setInterval(function(){

            animationOnTens(k)

            k = k + 1

        },10000)

    }
}
    


function stop(i,t,fun){

    if(i >= t){

        clearInterval(fun)

        return
    }
}


    
function ones(){
    
    setInterval(function(){

        animation(i)

        i=i+1

    },1000)

}

function animationOnOnes(j){

    onesdivs[j].classList.add('animate');  

}




function removeanimation(value){

    value.classList.remove('animate');  
}


function animationOnTens(j){

    tensdivs[j].classList.add('animate');

    setTimeout(function(){

        tensdivs.forEach(removeanimation)

    },90000)
}

// function animation(i){
//  onesdivs[i].classList.add('animate');
  
// }
    // var target = inputbar.value;
 //    var i =0;
 //    var interval = setInterval(function(){
 //        animation(i)
 //        i=i+1;
 //        },1000)

 // TA//////
