const toggleButton = document.getElementById("searchToggle");
const inputToggleForm = document.getElementById("inputToggleForm");
// funcion para cambiar el backgorund del header cuando se scrollea

window.addEventListener("scroll", ()=>{ //se usa "window" porque el scroll es una funcion global de toda la pagina
    const header = document.getElementById("header")
    if (window.scrollY > 36) {
        header.classList.add("headerBackground")
    }else if(window.scrollY < 36){
        header.classList.remove("headerBackground")
    }
    if (window.scrollY > 0) {
        inputToggleForm.classList.add("headerBackground")
    }
})

// funcion para abrir el input de busqueda al presionar lupa

const searchButton = document.getElementById("openSearchButton");
const burgerButtonHitbox = document.getElementById("buttonHitbox");

searchButton.addEventListener("click", ()=>{
    toggleButton.classList.toggle("displayToggle")
})

burgerButtonHitbox.addEventListener("click", ()=>{
    if (!toggleButton.classList.contains("displayToggle")) {
        toggleButton.classList.add("displayToggle")
    }
})

