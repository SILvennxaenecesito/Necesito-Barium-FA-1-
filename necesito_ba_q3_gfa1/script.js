//1.
var nickname = ("Sil");
var height = parseInt("66"); /*height in inches*/
var weight = parseInt("55"); /*weight in kg*/


var n = ("Name: "+nickname);
var h = ("Height: "+Math.trunc(height/12)+"'"+height%12+'"');
var w = ("Weight: "+weight*2.204);
alert(n+"\n"+h+"\n"+w);

/*Convert to weight to feet and weight to pounds*/


//2.
var fname = prompt("Enter first name:");
var lname = prompt("Enter last name:");
var bdyear = prompt("Enter birthyear:");

var age = 2023 - parseInt(bdyear);

var op = ("Hello "+fname+" "+lname+"!"+" How does it feel to be "+age+" years old?");

document.getElementById("output").innerHTML= op;


//3.
if(confirm("Do you agree to share your information in the site?")){
	document.getElementById("n").innerHTML= n;
	document.getElementById("h").innerHTML= h;
	document.getElementById("w").innerHTML= w;
}else{
	var no=("User does not wish to share his/her information");
	document.getElementById("output2").innerHTML= no;

}
