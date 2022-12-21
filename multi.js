const nextBtn = document.querySelector(".next-step");
const backBtn = document.querySelector(".go-back");
const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const cardPageOne = document.querySelector(".card-page-one");
const cardPageTwo = document.querySelector(".card-page-two");


nextBtn.addEventListener('click', () => { 

    stepOne.classList.add("inactive");
    if (stepOne.classList.contains("active")) { 
        stepOne.classList.remove("active");
    }
    if (!stepTwo.classList.contains("active")) {
        stepTwo.classList.add("active");
    }
})

backBtn.addEventListener('click', () => { 
    stepTwo.classList.remove("active");
    stepOne.classList.add("active");
})