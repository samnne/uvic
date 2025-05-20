

let logos = document.querySelectorAll(".logo")
let navlink = document.querySelectorAll("li")

logos.forEach((l) => {
    l.addEventListener("load", (e) => {
        l.classList.add("fadeIn")
    })

})