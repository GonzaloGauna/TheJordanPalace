const navMenu = document.getElementById("navMenu");

navMenu.addEventListener("click", ()=> {
    const headerNav = document.getElementById("headerNav");
    
    headerNav.classList.toggle("menu-close");
    headerNav.classList.toggle("menu-open");
})