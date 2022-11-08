// constants
const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const   nextBtn = document.querySelector(".next-btn");
const   prevBtn = document.querySelector(".prev-btn");
const   navigationDots = document.querySelector(".navigation-dots");

let numberOfImages  = slideImage.length;
let slideWidth  = slideImage[0].clientWidth;
let currentSlide = 0;


// Set up the slider

function init(){
    /*
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    slideImage[3] = 300%
    slideImage[4] = 400%
    slideImage[5] = 500%


    */
   slideImage.forEach((img,i) => {
    img.style.left = i * 100 + "%";
   });
   slideImage[0].classList.add("active");

   createNavigationDots();
}
init();

// create Navigation dot

function createNavigationDots(){
    for(let i = 0; i < numberOfImages; i++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }
    navigationDots.children[0].classList.add("active");

   

}

// next button
nextBtn.addEventListener("click",() =>{
    if(currentSlide >= numberOfImages - 1){
        goToSlide(0);
        // currentSlide = 0;
        return;
    }

    currentSlide++;
   goToSlide(currentSlide);
});

// prev btn
prevBtn.addEventListener("click",() =>{
    if(currentSlide <= 0){
        goToSlide(numberOfImages - 1);
        // currentSlide = numberOfImages - 1;
        return;
    }

    currentSlide--;
   goToSlide(currentSlide);
});

// GO to Slide
function goToSlide(slideNumber){
    slidesContainer.style.transform = "translateX(-" + 
    slideWidth * slideNumber + "px)";
    currentSlide = slideNumber;

    setActiveClass();
    
}
// set Active Class 

function setActiveClass(){
        // Set Active CLass for the Slide Images

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // set activew class for navigation Dots
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");



    }


