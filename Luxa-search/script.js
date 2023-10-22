const likeIcon = document.getElementById("likeIcon");

likeIcon.addEventListener("click", () => {
    // Toggle the class to change from regular to solid heart
    likeIcon.classList.toggle("fa-regular");
    likeIcon.classList.toggle("fa-solid");
});

const staricon = document.getElementById("staricon");
staricon.addEventListener("click",() =>{
    staricon.classList.toggle("fa-regular");
    staricon.classList.toggle("fa-solid");
});
