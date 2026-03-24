fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
 let output="";
 data.slice(0,5).forEach(loc=>{
  output+=`<p>Gym in ${loc.address.city}</p>`;
 });
 document.getElementById("locations").innerHTML=output;
});