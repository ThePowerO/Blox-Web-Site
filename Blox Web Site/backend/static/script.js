const mainOptions = document.querySelectorAll(".nav-link");

const toggleActiveClass = (selectedOption) => {
    mainOptions.forEach(option => {
        if (option === selectedOption) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    });
};

document.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.classList.contains("nav-link")) {
        toggleActiveClass(targetEl);
    }
});

/* */
const selectElements = document.querySelectorAll(".filter");
const imageElements = document.querySelectorAll(".fightingStyleImage");

selectElements.forEach((selectElement, index) => {
    selectElement.addEventListener("change", function() {
