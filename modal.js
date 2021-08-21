const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-modal");
const confirmModalBtn = document.querySelector(".confirm-modal");

showModalBtn.addEventListener("click", ()=>{
    modal.style.opacity = "1";
    modal.style.transform = "translateY(20vh)";
    backDrop.style.display = "block";
});

function closeModal(){
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);

confirmModalBtn.addEventListener("click", ()=>{
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)";
    backDrop.style.display = "none";
    window.alert("Confirm Clicked!")
});

backDrop.addEventListener("click", closeModal);