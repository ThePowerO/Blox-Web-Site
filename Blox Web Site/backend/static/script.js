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
        const selectedValue = selectElement.value;
        const imageElement = imageElements[index];

            // Blox Fruits
            if (selectedValue === "Dark Blade") {
                imageElement.src = "../static/img/Dark_Blade.png"; 
            }
            else if (selectedValue === "Dragon") {
                imageElement.src = "../static/img/DragonNew.png"; 
            }
            else if (selectedValue === "Dough") {
                imageElement.src = "../static/img/DoughNew.png"; 
            }
            else if (selectedValue === "Control") {
                imageElement.src = "../static/img/ControlNew.png"; 
            }
            else if (selectedValue === "Gravity") {
                imageElement.src = "../static/img/GravityNew.png"; 
            }
            else if (selectedValue === "Blizzard") {
                imageElement.src = "../static/img/BlizzardIcon.png"; 
            }
            else if (selectedValue === "Rumble") {
                imageElement.src = "../static/img/RumbleNew.png"; 
            }
            else if (selectedValue === "Buddha") {
                imageElement.src = "../static/img/BuddhaNew.png";
            }
            else if (selectedValue === "Dark") {
                imageElement.src = "../static/img/DarkNew.png"; 
            }
            else if (selectedValue === "Diamond") {
                imageElement.src = "../static/img/DiamondNew.png";
            }
            else if (selectedValue === "Flame") {
                imageElement.src = "../static/img/FlameNew.png"; 
            }
            else if (selectedValue === "Ice") {
                imageElement.src = "../static/img/IceNew.png"; 
            }
            else if (selectedValue === "Sand") {
                imageElement.src = "../static/img/SandNew.png"; 
            }
            else if (selectedValue === "Love") {
                imageElement.src = "../static/img/LoveNew.png"; 
            }
            else if (selectedValue === "Spider") {
                imageElement.src = "../static/img/SpiderIcon.png"; 
            }
            else if (selectedValue === "Kilo") {
                imageElement.src = "../static/img/KiloNew.png"; 
            }
            else if (selectedValue === "Leopard") {
                imageElement.src = "../static/img/Leopard_Logo.png"; 
            }
            else if (selectedValue === "Light") {
                imageElement.src = "../static/img/LightNew.png"; 
            }
            else if (selectedValue === "Magma") {
                imageElement.src = "../static/img/MagmaNew.png"; 
            }
            else if (selectedValue === "Paw") {
                imageElement.src = "../static/img/Paw_icon.png"; 
            }
            else if (selectedValue === "Phoenix") {
                imageElement.src = "../static/img/PhoenixNew.png"; 
            }
            else if (selectedValue === "Portal") {
                imageElement.src = "../static/img/PortalIcon.png"; 
            }
            else if (selectedValue === "Quake") {
                imageElement.src = "../static/img/QuakeNew.png"; 
            }
            else if (selectedValue === "Revive") {
                imageElement.src = "../static/img/ReviveNew.png"; 
            }
            else if (selectedValue === "Rubber") {
                imageElement.src = "../static/img/RubberNew.png"; 
            }
            else if (selectedValue === "Shadow") {
                imageElement.src = "../static/img/ShadowNew.png"; 
            }
            else if (selectedValue === "Smoke") {
                imageElement.src = "../static/img/SmokeNew.png"; 
            }
            else if (selectedValue === "Spike") {
                imageElement.src = "../static/img/SpikeNew.png"; 
            }
            else if (selectedValue === "Spin") {
                imageElement.src = "../static/img/SpinNew.png"; 
            }
            else if (selectedValue === "Spirit") {
                imageElement.src = "../static/img/SpiritIcon.png"; 
            }
            else if (selectedValue === "Venom") {
                imageElement.src = "../static/img/VenomNew.png"; 
            }
            else if (selectedValue === "Spring") {
                imageElement.src = "../static/img/SpringNew.png"; 
            }
            else if (selectedValue === "Falcon") {
                imageElement.src = "../static/img/FalconNew.png"; 
            }
            else if (selectedValue === "Chop") {
                imageElement.src = "../static/img/ChopNew.png"; 
            }
            else if (selectedValue === "Bomb") {
                imageElement.src = "../static/img/BombNew.png"; 
            }
            else if (selectedValue === "Barrier") {
                imageElement.src = "../static/img/BarrierNew.png"; 
            }

            // Swords
            else if (selectedValue === "Pole (2nd Form)") {
                imageElement.src = "../static/img/Pole_2.png"; 
            }
            else if (selectedValue === "Saddi") {
                imageElement.src = "../static/img/Saddi.png"; 
            }
            else if (selectedValue === "Rengoku") {
                imageElement.src = "../static/img/Rengoku.png"; 
            }
            else if (selectedValue === "True Triple Katana") {
                imageElement.src = "../static/img/True_Triple_Katana.png"; 
            }
            else if (selectedValue === "Wando") {
                imageElement.src = "../static/img/Wando.png"; 
            }
            else if (selectedValue === "Shisui") {
                imageElement.src = "../static/img/Shisui.png"; 
            }
            else if (selectedValue === "Buddy Sword") {
                imageElement.src = "../static/img/Buddy_Sword.png"; 
            }
            else if (selectedValue === "Dark Dagger") {
                imageElement.src = "../static/img/Dark_Dagger.png"; 
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
                imageElement.src = "../static/img/Cursed_Dual_Katana.png"; 
            }
            else if (selectedValue === "Twin Hooks") {
                imageElement.src = "../static/img/Twin_Hooks.png"; 
            }
            else if (selectedValue === "Midnight Blade") {
                imageElement.src = "../static/img/Midnight_Blade.png"; 
            }
            else if (selectedValue === "Koko") {
                imageElement.src = "../static/img/Koko.png"; 
            }
            else if (selectedValue === "Gravity Cane") {
                imageElement.src = "../static/img/Gravity_Cane.png"; 
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
                imageElement.src = "../static/img/Pole_1.png"; 
            }
            else if (selectedValue === "Soul Cane") {
                imageElement.src = "../static/img/Soul_Cane.png";
            }
            else if (selectedValue === "Warden Sword") {
                imageElement.src = "../static/img/Warden_Sword.png"; 
            }
            else if (selectedValue === "Pipe") {
                imageElement.src = "../static/img/Pipe.png"; 
            }
            else if (selectedValue === "Shark Saw") {
                imageElement.src = "../static/img/Shark_Saw.png"; 
            }
            else if (selectedValue === "Dual-Headed Blade") {
                imageElement.src = "../static/img/Dual-Headed_Blade.png"; 
            }
            else if (selectedValue === "Triple Katana") {
                imageElement.src = "../static/img/Triple_Katana.png"; 
            }
            else if (selectedValue === "Iron Mace") {
                imageElement.src = "../static/img/Iron_Mace.png"; 
            }
            else if (selectedValue === "Katana") {
                imageElement.src = "../static/img/Katana.png"; 
            }
            else if (selectedValue === "Dual Katana") {
                imageElement.src = "../static/img/Dual_Katana.png"; 
            }
            else if (selectedValue === "Cutlass") {
                imageElement.src = "../static/img/Cutlass.png"; 
            }
            else if (selectedValue === "Triple Dark Blade") {
                imageElement.src = "../static/img/Triple_Dark_Blade.png"; 
            }
            else if (selectedValue === "Trident") {
                imageElement.src = "../static/img/Trident.png"; 
            }
            else if (selectedValue === "Hallow Scythe") {
                imageElement.src = "../static/img/Hallow_Scythe.png"; 
            }
            else if (selectedValue === "Spikey Trident") {
                imageElement.src = "../static/img/Spikey_Trident.png"; 
            }
            else if (selectedValue === "Dragon Trident") {
                imageElement.src = "../static/img/Dragon_Trident.png"; 
            }

            // Fighting Styles
            else if (selectedValue === "Godhuman") {
                imageElement.src = "../static/img/Godhuman.png"; 
            }

        });
});
