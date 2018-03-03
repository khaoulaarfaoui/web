
function clickbtn(){
	var pr = prompt("Please enter your name", "Harry Potter");
    if (pr != null) {

        var test =document.getElementById("socialmedia").innerHTML+pr;
        document.getElementById("socialmedia").innerHTML = test ;
	}
}
function ground(){
var element=document.getElementById("socialmedia").style.backgroundColor="blue";
}

function font(){
var element=document.getElementById("socialmedia").style.fontSize="30px";


}
function badilattribue(){
	$("#photo2").attr("src","http://www.lepoint.fr/images/2017/07/24/9488520lpw-9488547-article-jpg_4444098.jpg");
}
 	

 function toggleit(){
 	$("#photo").toggle();
 	$("#test").css({"color":"red"});
 
 }
var imagenumber=0;
setInterval(carousel,1000);

function carousel(){
if(imagenumber>4)
imagenumber=0;
$("#test_img").attr('src',"ressources/h"+imagenumber+".jpg");
imagenumber++;
}