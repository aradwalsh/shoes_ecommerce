
//Nav
const navigation = document.querySelector(".navigation")
const nav = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");


openBtn.addEventListener("click", () => {
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
    
    /*
    if (navLeft < 0) {
        menu.classList.add("show");
        documento.body.classList.add("show");
        navBar.classList.add("show");
    }
    */
});


closeBtn.addEventListener("click", () => {
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
    
    /*
    if (navLeft < 0) {
        menu.classList.remove("show");
        documento.body.classList.remove("show");
        navBar.classList.remove("show");
    }
    */
});

//Fixed Nav
const navBar = document.querySelector(".navigation");

const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav")
    }
    
});


// Scroll To 

/*
const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {

    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const id = e.target.getAttibute("href").slice(1);
        
        const element = document.getElementById(id);
        const fixNav = navBar.classList.contains("fix-nav");
        let position = element.offsetTop - navHeight;
        
        if (!fixNav){
            position = position - navHeight; 
        }

        window.scrollTo({
            top: position,
            left: 0,
        });
        
        navigation.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });
    
});
*/

//preLoader

window.addEventListener("load", () =>{
    const loader = document.getElementById("pre-loader");
    setTimeout(() => {
        loader.classList.add("hide");
    },2000);
});

//PopUp

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});

window.addEventListener("load", () => {
    setTimeout(() => {
        popup.classList.add("show");
    },5000)
})
