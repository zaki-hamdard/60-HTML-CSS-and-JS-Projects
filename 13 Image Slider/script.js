const panels = document.querySelectorAll(".panel");
const h3 = document.querySelector("h3");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
        panel.h3.style.opacity = "100%"
    })
})


function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}