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
