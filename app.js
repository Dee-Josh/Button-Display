const btns = document.querySelectorAll(".btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");



function exit(){
    form.classList.remove("display");
    overlay.style.display = "none";
}




btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        console.log();
        form.classList.add("display");
        overlay.style.display = "block";

    })
})

cancel.addEventListener('click', ()=>{
    exit()
})

overlay.addEventListener('click', ()=>{
    exit()
})

window.addEventListener('keyup', e=>{
    let theKey = e.key
    // console.log(theKey);
    if(form.classList.contains("display") && theKey === "Escape"){
        exit();
    }
})