const products=[

{
name:"CMIYGL Mirror",
img:"cmiygl1.jpg",
size:'15"x24"',
desc:"A recreation inspired by the iconic CMIYGL album aesthetic."
},

{
name:"MS PAINT Mirror",
img:"mspaint1.jpg",
size:'47"x31"',
desc:"Retro modern redesign of early digital creativity."
},

{
name:"reCAPTCHA Mirror",
img:"recaptcha.jpg",
size:'42"x31"',
desc:"To become a being one must first verify themselves."
},

{
name:"Queen of Hearts",
img:"queen.jpg",
size:'48"x31"',
desc:"Royal looks for a royal lifestyle."
},

{
name:"King of Hearts",
img:"king.jpg",
size:'48"x31"',
desc:"Royal looks for a royal lifestyle."
}

]

function viewProduct(i){
localStorage.setItem("product",i)
window.location="product.html"
}

if(window.location.pathname.includes("product.html")){
let p=products[localStorage.getItem("product")]
document.getElementById("productImg").src=p.img
document.getElementById("productName").innerText=p.name
document.getElementById("productDesc").innerText=p.desc
document.getElementById("productSize").innerText="Dimensions: "+p.size
}

function buyNow(){
window.location="checkout.html"
}

function toggleMenu(){
let s=document.getElementById("sidebar")
s.style.left=(s.style.left==="0px")?"-260px":"0px"
}

function contact(){
alert("Contact: +91 9987782822")
}

function payUPI(){
window.location="upi://pay?pa=aditya.kbelose@oksbi&pn=AETHELL"
}

function cod(){
window.location="https://wa.me/919987782822?text=New%20AETHELL%20Order"
}
