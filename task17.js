// Display 3 cards in a row through js
var d = document.createElement("div"); 
d.innerHTML = "card title-1"; 
d.style.width = "300px";
d.style.height = "400px";
d.style.border = "2px solid black";
d.style.marginTop="10px";
document.body.appendChild(d);
console.log(d);

var s = document.createElement("div"); 
s.innerHTML = "card title-2"; 
s.style.width = "300px";
s.style.height = "400px";
s.style.border = "2px solid black";
s.style.marginTop="10px";
document.body.appendChild(s);
console.log(s);

var l = document.createElement("div"); 
l.innerHTML = "card title-3"; 
l.style.width = "300px";
l.style.height = "400px";
l.style.border = "2px solid black";
l.style.marginTop="10px";
document.body.appendChild(l);
console.log(l);