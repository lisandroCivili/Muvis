// funcion para cambiar el backgorund del header cuando se scrollea

window.addEventListener("scroll", ()=>{ //se usa "window" porque el scroll es una funcion global de toda la pagina
    const header = document.getElementById("header")
    console.log(window.scrollY)
    if (window.scrollY > 36) {
        header.classList.add("headerBackground")
    }else if(window.scrollY < 36){
        header.classList.remove("headerBackground")
    }
    if (window.scrollY > 0) {
        document.getElementById("searchToggle").classList.add("displayToggle")
    }
})

// funcion para abrir el input de busqueda al presionar lupa

const searchButton = document.getElementById("openSearchButton");
const offcanvasBar = document.getElementById("offcanvasNavbar");

searchButton.addEventListener("click", ()=>{document.getElementById("searchToggle").classList.toggle("displayToggle")})
