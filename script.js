/* 
   Placeholder Coffee Shop name
   Filename: script.js

   Author:   William Andel and Erin Bowen
   Date:     7/25/2021
 */



function refreshPage(){
window.location.reload();
} 

var fname;
var lname;
var email;
var phone;

function getvalue(){
	fname = document.getElementById("fnameinput").value;
	lname = document.getElementById("lnameinput").value;
}

function sendinfo(){
	fname = document.getElementById("fnameinput").value;
	lname = document.getElementById("lnameinput").value;
	email = document.getElementById("emailinput").value;
	phone = document.getElementById("phoneinput").value;
	alert("First name: " + fname+"\n" + "Last name: " + lname +"\n"+ "Email: " + email +"\n"+ "Phone Number: " + phone);
}
