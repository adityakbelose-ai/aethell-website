const products=[

{
name:"CMIYGL Mirror",
price:5999,
img:"cmiygl1.jpg",
size:'15"x24"',
desc:"A recreation inspired by the iconic CMIYGL album aesthetic."
},

{
name:"MS PAINT Mirror",
price:8999,
img:"mspaint1.jpg",
size:'47"x31"',
desc:"Retro modern redesign inspired by early digital creativity."
},

{
name:"reCAPTCHA Mirror",
price:5999,
img:"recaptcha.jpg",
size:'42"x31"',
desc:"A conceptual mirror inspired by identity verification."
},

{
name:"Queen of Hearts",
price:5499,
img:"queen.jpg",
size:'48"x31"',
desc:"Royal aesthetics for a royal lifestyle."
},

{
name:"King of Hearts",
price:5499,
img:"king.jpg",
size:'48"x31"',
desc:"Royal aesthetics for a royal lifestyle."
}

]


function viewProduct(i){

localStorage.setItem("product",i)

window.location="product.html"

}


if(window.location.pathname.includes("product.html")){

let p=products[localStorage.getItem("product")]

document.getElementById("productImage").src=p.img
document.getElementById("productTitle").innerText=p.name
document.getElementById("productDesc").innerText=p.desc
document.getElementById("productSize").innerText="Size: "+p.size

}


function buyNow(){

window.location="cart.html"

}


function goCart(){

window.location="cart.html"

}


function toggleMenu(){

let s=document.getElementById("sidebar")

s.style.left=(s.style.left==="0px")?"-250px":"0px"

}


function contact(){

alert("Contact: +91 9987782822")

}


function payUPI(){

window.location=
"upi://pay?pa=aditya.kbelose@oksbi&pn=AETHELL"

}
