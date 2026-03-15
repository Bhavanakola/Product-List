
/* PAGE SWITCH */

function showPage(page){

let pages=document.getElementsByClassName("page");

for(let i=0;i<pages.length;i++){
pages[i].style.display="none";
}

document.getElementById(page).style.display="block";

}


/* PRODUCT LIST */

let products=[
{name:"Laptop",category:"electronics",price:500},
{name:"Mobile",category:"electronics",price:200},
{name:"Shirt",category:"clothing",price:25},
{name:"Jeans",category:"clothing",price:40}
];

function displayProducts(items){

let list=document.getElementById("productList");

list.innerHTML="";

items.forEach(p=>{

let div=document.createElement("div");

div.className="product";

div.innerHTML=
"<h3>"+p.name+"</h3>"+
"<p>Price: $"+p.price+"</p>";

list.appendChild(div);

});

}

displayProducts(products);


function updateProducts(){

let category=document.getElementById("category").value;
let sort=document.getElementById("sort").value;

let filtered=[...products];

if(category!="all"){
filtered=filtered.filter(p=>p.category==category);
}

if(sort=="low"){
filtered.sort((a,b)=>a.price-b.price);
}

if(sort=="high"){
filtered.sort((a,b)=>b.price-a.price);
}

displayProducts(filtered);

}


/* TODO LIST */

function addTask(){

let input=document.getElementById("taskInput");

let li=document.createElement("li");

li.innerText=input.value;

document.getElementById("taskList").appendChild(li);

input.value="";

}