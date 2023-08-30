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

document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.querySelector(".load-more");
    const pageCountInput = document.querySelector("#page-count");
    loadMoreButton.addEventListener("click", function() {
        const currentPage = parseInt(pageCountInput.value);
        const nextPage = currentPage + 1;

        fetch(`/community_combo?page=${nextPage}`, { method: "GET" })
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const newCombos = parser.parseFromString(html, "text/html").querySelectorAll(".content");

                // Get the main container
                const mainContainer = document.querySelector("#main");

                // Loop through new combos and append them to the main container

                

/* */
const selectElements = document.querySelectorAll(".filter");
const imageElements = document.querySelectorAll(".fightingStyleImage");

selectElements.forEach((selectElement, index) => {
    selectElement.addEventListener("change", function() {
        const selectedValue = selectElement.value;
        const imageElement = imageElements[index];

            // Blox Fruits
            if (selectedValue === "Dark Blade") {
                imageElement.src = "../static/img/Dark Blade.png"; 
            }
            else if (selectedValue === "Dragon") {
                imageElement.src = "../static/img/Dragon.png"; 
            }
            else if (selectedValue === "Dough") {
                imageElement.src = "../static/img/Dough.png"; 
            }
            else if (selectedValue === "Control") {
                imageElement.src = "../static/img/Control.png"; 
            }
            else if (selectedValue === "Gravity") {
                imageElement.src = "../static/img/Gravity.png"; 
            }
            else if (selectedValue === "Blizzard") {
                imageElement.src = "../static/img/Blizzard.png"; 
            }
            else if (selectedValue === "Rumble") {
                imageElement.src = "../static/img/Rumble.png"; 
            }
            else if (selectedValue === "Buddha") {
                imageElement.src = "../static/img/Buddha.png"; 
            }
            else if (selectedValue === "Dark") {
                imageElement.src = "../static/img/Dark.png"; 
            }
            else if (selectedValue === "Diamond") {
                imageElement.src = "../static/img/Diamond.png"; 
            }
            else if (selectedValue === "Flame") {
                imageElement.src = "../static/img/Flame.png"; 
            }
            else if (selectedValue === "Ice") {
                imageElement.src = "../static/img/Ice.png"; 
            }
            else if (selectedValue === "Sand") {
                imageElement.src = "../static/img/Sand.png"; 
            }
            else if (selectedValue === "Love") {
                imageElement.src = "../static/img/Love.png"; 
            }
            else if (selectedValue === "Spider") {
                imageElement.src = "../static/img/Spider.png"; 
            }
            else if (selectedValue === "Kilo") {
                imageElement.src = "../static/img/Kilo.png"; 
            }
            else if (selectedValue === "Leopard") {
                imageElement.src = "../static/img/Leopard.png"; 
            }
            else if (selectedValue === "Light") {
                imageElement.src = "../static/img/Light.png"; 
            }
            else if (selectedValue === "Magma") {
                imageElement.src = "../static/img/Magma.png"; 
            }
            else if (selectedValue === "Paw") {
                imageElement.src = "../static/img/Paw.png"; 
            }
            else if (selectedValue === "Phoenix") {
                imageElement.src = "../static/img/Phoenix.png"; 
            }
            else if (selectedValue === "Portal") {
                imageElement.src = "../static/img/Portal.png"; 
            }
            else if (selectedValue === "Quake") {
                imageElement.src = "../static/img/Quake.png"; 
            }
            else if (selectedValue === "Revive") {
                imageElement.src = "../static/img/Revive.png"; 
            }
            else if (selectedValue === "Rubber") {
                imageElement.src = "../static/img/Rubber.png"; 
            }
            else if (selectedValue === "Shadow") {
                imageElement.src = "../static/img/Shadow.png"; 
            }
            else if (selectedValue === "Smoke") {
                imageElement.src = "../static/img/Smoke.png"; 
            }
            else if (selectedValue === "Spike") {
                imageElement.src = "../static/img/Spike.png"; 
            }
            else if (selectedValue === "Spin") {
                imageElement.src = "../static/img/Spin.png"; 
            }
            else if (selectedValue === "Spirit") {
                imageElement.src = "../static/img/Spirit.png"; 
            }
            else if (selectedValue === "Venom") {
                imageElement.src = "../static/img/Venom.png"; 
            }
            else if (selectedValue === "Spring") {
                imageElement.src = "../static/img/Spring.png"; 
            }
            else if (selectedValue === "Falcon") {
                imageElement.src = "../static/img/Falcon.png"; 
            }
            else if (selectedValue === "Chop") {
                imageElement.src = "../static/img/Chop.png"; 
            }
            else if (selectedValue === "Bomb") {
                imageElement.src = "../static/img/Bomb.png"; 
            }
            else if (selectedValue === "Barrier") {
                imageElement.src = "../static/img/Barrier.png"; 
            }

            // Swords
            else if (selectedValue === "Pole (2nd Form)") {
                imageElement.src = "../static/img/Pole (2nd Form).png"; 
            }
            else if (selectedValue === "Saddi") {
                imageElement.src = "../static/img/Saddi.png"; 
            }
            else if (selectedValue === "Rengoku") {
                imageElement.src = "../static/img/Rengoku.png"; 
            }
            else if (selectedValue === "True Triple Katana") {
                imageElement.src = "../static/img/True Triple Katana.png"; 
            }
            else if (selectedValue === "Wando") {
                imageElement.src = "../static/img/Wando.png"; 
            }
            else if (selectedValue === "Shisui") {
                imageElement.src = "../static/img/Shisui.png"; 
            }
            else if (selectedValue === "Buddy Sword") {
                imageElement.src = "../static/img/Buddy Sword.png"; 
            }
            else if (selectedValue === "Dark Dagger") {
                imageElement.src = "../static/img/Dark Dagger.png"; 
            }
            else if (selectedValue === "Tushita") {
                imageElement.src = "../static/img/Tushita.png"; 
            }
            else if (selectedValue === "Yama") {
                imageElement.src = "../static/img/Yama.png"; 
            }
            else if (selectedValue === "Canvander") {
                imageElement.src = "../static/img/Canvander.png";
            }
            else if (selectedValue === "Cursed Dual Katana") {
                imageElement.src = "../static/img/Cursed Dual Katana.png"; 
            }
            else if (selectedValue === "Twin Hooks") {
                imageElement.src = "../static/img/Twin Hooks.png"; 
            }
            else if (selectedValue === "Midnight Blade") {
                imageElement.src = "../static/img/Midnight Blade.png"; 
            }
            else if (selectedValue === "Koko") {
                imageElement.src = "../static/img/Koko.png"; 
            }
            else if (selectedValue === "Gravity Cane") {
                imageElement.src = "../static/img/Gravity Cane.png"; 
            }
            else if (selectedValue === "Longsword") {
                imageElement.src = "../static/img/Longsword.png"; 
            }
            else if (selectedValue === "Saber") {
                imageElement.src = "../static/img/Saber.png"; 
            }
            else if (selectedValue === "Bisento") {
                imageElement.src = "../static/img/Bisento.png"; 
            }
            else if (selectedValue === "Pole (1st Form)") {
                imageElement.src = "../static/img/Pole (1st Form).png"; 
            }
            else if (selectedValue === "Soul Cane") {
                imageElement.src = "../static/img/Soul Cane.png"; 
            }
            else if (selectedValue === "Warden Sword") {
                imageElement.src = "../static/img/Warden Sword.png"; 
            }
            else if (selectedValue === "Pipe") {
                imageElement.src = "../static/img/Pipe.png"; 
            }
            else if (selectedValue === "Shark Saw") {
                imageElement.src = "../static/img/Shark Saw.png"; 
            }
            else if (selectedValue === "Dual-Headed Blade") {
                imageElement.src = "../static/img/Dual-Headed Blade.png"; 
            }
            else if (selectedValue === "Triple Katana") {
                imageElement.src = "../static/img/Triple Katana.png"; 
            }
            else if (selectedValue === "Iron Mace") {
                imageElement.src = "../static/img/Iron Mace.png"; 
            }
            else if (selectedValue === "Katana") {
                imageElement.src = "../static/img/Katana.png"; 
            }
            else if (selectedValue === "Dual Katana") {
                imageElement.src = "../static/img/Dual Katana.png"; 
            }
            else if (selectedValue === "Cutlass") {
                imageElement.src = "../static/img/Cutlass.png"; 
            }
            else if (selectedValue === "Triple Dark Blade") {
                imageElement.src = "../static/img/Triple Dark Blade.png"; 
            }
            else if (selectedValue === "Trident") {
                imageElement.src = "../static/img/Trident.png"; 
            }
            else if (selectedValue === "Hallow Scythe") {
                imageElement.src = "../static/img/Hallow Scythe.png"; 
            }
            else if (selectedValue === "Spikey Trident") {
                imageElement.src = "../static/img/Spikey Trident.png"; 
            }
            else if (selectedValue === "Dragon Trident") {
                imageElement.src = "../static/img/Dragon Trident.png"; 
            }
            else if (selectedValue === "Jitte") {
                imageElement.src = "../static/img/Jitte.png"; 
            }

            // Fighting Styles
            else if (selectedValue === "Godhuman") {
                imageElement.src = "../static/img/Godhuman.png"; 
            }
            else if (selectedValue === "Electric Claw") {
                imageElement.src = "../static/img/Electric Claw.png"; 
            }
            else if (selectedValue === "Dragon Talon") {
                imageElement.src = "../static/img/Dragon Talon.png"; 
            }
            else if (selectedValue === "Sharkman Karate") {
                imageElement.src = "../static/img/Sharkman Karate.png"; 
            }
            else if (selectedValue === "Super Human") {
                imageElement.src = "../static/img/Superhuman.png"; 
            }
            else if (selectedValue === "Death Step") {
                imageElement.src = "../static/img/Death Step.png"; 
            }
            else if (selectedValue === "Dragon Breath") {
                imageElement.src = "../static/img/Dragon Breath.png"; 
            }
            else if (selectedValue === "Water Kung Fu") {
                imageElement.src = "../static/img/Water Kung Fu.png"; 
            }
            else if (selectedValue === "Electric") {
                imageElement.src = "../static/img/Electric.png"; 
            }
            else if (selectedValue === "Dark Step") {
                imageElement.src = "../static/img/Dark Step.png"; 
            }
            else if (selectedValue === "Combat") {
                imageElement.src = "../static/img/Combat.png"; 
            }

            // Guns
            else if (selectedValue === "Soul Guitar") {
                imageElement.src = "../static/img/Soul Guitar.png"; 
            }
            else if (selectedValue === "Acidum Rifle") {
                imageElement.src = "../static/img/Acidum Rifle.png"; 
            }
            else if (selectedValue === "Kabucha") {
                imageElement.src = "../static/img/Kabucha.png"; 
            }
            else if (selectedValue === "Serpent Bow") {
                imageElement.src = "../static/img/Serpent Bow.png"; 
            }
            else if (selectedValue === "Bizarre Rifle") {
                imageElement.src = "../static/img/Bizarre Rifle.png"; 
            }
            else if (selectedValue === "Bazooka") {
                imageElement.src = "../static/img/Bazooka.png"; 
            }
            else if (selectedValue === "Refined Slingshot") {
                imageElement.src = "../static/img/Refined Slingshot.png"; 
            }
            else if (selectedValue === "Refined Musket") {
                imageElement.src = "../static/img/Refined Musket.png"; 
            }
            else if (selectedValue === "Refined Flintlock") {
                imageElement.src = "../static/img/Refined Flintlock.png"; 
            }
            else if (selectedValue === "Cannon") {
                imageElement.src = "../static/img/Cannon.png"; 
            }
            else if (selectedValue === "Musket") {
                imageElement.src = "../static/img/Musket.png"; 
            }
            else if (selectedValue === "Flintlock") {
                imageElement.src = "../static/img/Flintlock.png"; 
            }
            else if (selectedValue === "Slingshot") {
                imageElement.src = "../static/img/Slingshot.png"; 
            }
        });
});
