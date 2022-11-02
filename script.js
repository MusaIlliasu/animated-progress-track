const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentStep = 1;
nextBtn.addEventListener("click", () => {
    currentStep += 1;
    if(currentStep > circles.length){currentStep = circles.length;}
    return update();
});
prevBtn.addEventListener("click", () => {
    currentStep -= 1;
    if(currentStep < 1){currentStep = 1;}
    return update();
});

const update = () => {
    if(currentStep === 1){
        prevBtn.disabled = true;
    } else if(currentStep === circles.length){
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
    
    circles.forEach((circle, index) => {
        if(index < currentStep){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    return progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}