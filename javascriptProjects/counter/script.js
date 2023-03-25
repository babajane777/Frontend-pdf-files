var disp = document.querySelectorAll('.display');
var inputbarvalue ;
// console.log(display);
var interval;
var target ;
var c = 1;
var flag;

function toDo()
{
    c = 1;
    count = document.getElementById('inputBar').value;
    integer = parseInt(count,10);

    id = setInterval(displayNumber,1000);
   
}


function displayNumber()
{
	if(count != "" && count > 0){

	    if(c == integer+1)
	        {
	            clearInterval(id);
	            // setTimeout(setBack,5000);
	        }
	    else
	        {
	            var i = 2;
	            c++;
	            while(i>=0)
	            {
	                if(disp[i].innerText == 9)
	                {
	                    disp[i].innerText = 0;
	                }
	                else
	                {
	                    disp[i].innerText = parseInt(disp[i].innerText,10)+1+"";
	                    break;
	                }
	                i--;
	            }
	        }
    }   
    
}




function resetbutton(){
	disp[0].innerText = 0 + "";
	disp[1].innerText = 0 + "";
	disp[2].innerText = 0 + "";
	document.getElementById('inputBar').value = '';
	clearInterval(interval);

	

}


// ............TA..............


// var disp = document.getElementsByClassName('display');
// var id ;
// document.getElementById("counterBtn").addEventListener('click',toDo);
// var c = 1;

// var count;
// var integer;
// function toDo()
// {
//     c = 1;
//     count = document.getElementById('numb').value;
//     integer = parseInt(count,10);

//     id = setInterval(displayNumber,1000);
   
// }

// function displayNumber()
// {
//     if(c == integer+1)
//         {
//             clearInterval(id);
//             setTimeout(setBack,5000);
//         }
//     else
//         {
//              var i = 4;
//             c++;
//             while(i>=0)
//             {
//                 if(disp[i].innerText == 9)
//                 {
//                     disp[i].innerText = 0;
//                 }
//                 else
//                 {
//                     disp[i].innerText = parseInt(disp[i].innerText,10)+1+"";
//                     break;
//                 }
//                 i--;
//             }
//         }
        
    
// }
// function setBack() //to reset value of form and counter back to zero 
// {
//     for(var i=0;i<=4;i++)
//     {
//         disp[i].innerText = "0";
//     }
//     document.getElementsByTagName('form')[0].reset();
// }