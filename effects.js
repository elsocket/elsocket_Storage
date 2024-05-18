const logo = document.getElementById("logo");
const closeAlertButton = document.getElementById("closeAlert");
const changetoSignup = document.getElementById("changetoSignup");
const changetoLogin = document.getElementById("changetoLogin");
const loginElement = document.getElementById("loginElement");
const signupElement = document.getElementById("signupElement");

const defaultLogo = `https://res.cloudinary.com/dr0y2usoy/image/upload/v1716051776/Elsocket__8_-removebg-preview_hqcfon.png`
const animationLogo = `https://res.cloudinary.com/dr0y2usoy/image/upload/v1716057211/3dgifmaker50953_afg7cf.gif`


logo.addEventListener('mouseover',()=>{
    
    logo.src = animationLogo;
});
logo.addEventListener('mouseout',()=>{
    logo.src =defaultLogo;
})

closeAlertButton.addEventListener('click',()=>{
    let alert = document.getElementById("loginAlert");
    alert.style.display = "none";
})

changetoSignup.addEventListener('click',()=>{
    loginElement.style.display = "none";
    signupElement.style.display = "block";
})

changetoLogin.addEventListener('click',()=>{
    signupElement.style.display = "none";
    loginElement.style.display = "block";
})
