const joinEl=document.querySelector(".join");
const modalContainer=document.querySelector(".modal-container")
const modalBlack=document.querySelector(".modal-black")
const modal=document.querySelector(".modal")
const icon=document.querySelector(".icon")


joinEl.addEventListener("click",modalShower)
icon.addEventListener("click",modalRemover)
modalBlack.addEventListener("click",modalRemover)


function modalShower() {
    modalContainer.classList.remove("something")
    modalBlack.classList.add("something-2")
    modal.classList.add("something-3")
    modal.classList.remove("something-4")
    
}

function modalRemover() {
    modalContainer.classList.add("something")
    modal.classList.remove("something-3")
    modalBlack.classList.remove('something-2')
    modal.classList.add("something-4")
}



