const toggler = document.querySelector(".theme-btn");
const toggleObj = document.querySelector(".fa-sun");

toggler.addEventListener("click", () => {
    if(toggleObj.classList == "fas fa-sun") {
        toggleObj.className = "fas fa-moon";
        toggleObj.style.color = "blue"
    } else {
        toggleObj.className = "fas fa-sun";
        toggleObj.style.color = "rgb(255, 189, 66)";
    }

    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach(element => {
        element.classList.toggle("invert");
    })
});