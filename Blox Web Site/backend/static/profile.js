const editSquareImages = document.querySelectorAll(".edit-square img");
const profilePicture = document.querySelector(".profile-picture img");

editSquareImages.forEach(image => {
    image.addEventListener("click", () => {
        
        profilePicture.src = image.src;
    });
});
