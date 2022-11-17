const navMenu = document.getElementById("navMenu");
const user = document.getElementById("user");

navMenu.addEventListener("click", ()=> {
    const headerNav = document.getElementById("headerNav");
    
    headerNav.classList.toggle("menu-close");
    headerNav.classList.toggle("menu-open");
})

// user.addEventListener("click", ()=> {
//     console.log("probando");
// })