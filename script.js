if(localStorage.getItem("user")){
showSite();
}




function showSite(){
document.getElementById("loginPage").style.display="none";
document.getElementById("website").style.display="block";
}

function logout(){
localStorage.removeItem("user");
location.reload();
}

function bookTrip(){
let name=document.getElementById("name").value;
let place=document.getElementById("place").value;
let date=document.getElementById("date").value;

if(name==="" || place==="" || date===""){
alert("Fill all details");
return;
}

let booking={
name:name,
place:place,
date:date
};

localStorage.setItem(
"booking",
JSON.stringify(booking)
);

document.getElementById("msg").innerHTML =
"Booking Successful for " + place;
}

function searchDestination(){
let input =
document.getElementById("searchBox")
.value.toLowerCase();

let li =
document.querySelectorAll(
"#destinationList li"
);

li.forEach(function(item){
if(item.innerHTML.toLowerCase().includes(input)){
item.style.display="block";
}
else{
item.style.display="none";
}
});
}

function toggleDark(){
document.body.classList.toggle("dark");
}