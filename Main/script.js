// const prev = document.querySelector(".prev");
// const next = document.querySelector('.next');
const slider = document.querySelector(".slider-wrapper");
const innerSlider = document.querySelector(".slider-inner");
const sliderCard = document.querySelector(".slider-card");

let drag = false;
let startx;
let x;

slider.addEventListener("mouseenter", () => {
    slider.style.cursor="grab";
})

slider.addEventListener('mousemove', (e) => {
    if(!drag) return;
    e.preventDefault();
    x = e.offsetX;

innerSlider.style.left = `${x - startx}px`;
check();
})

slider.addEventListener("mouseup",(e) => {
    slider.style.cursor="grab";
    drag = false;
} )

slider.addEventListener("mousedown", (e) => {
    drag = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
})

slider.addEventListener("touchstart", (e) => {
    drag = true;
    startx = e.targetTouches[0].clientX - innerSlider.offsetLeft;
    check();
}, {
    passive:true
})

slider.addEventListener("touchmove", (e) => {
    if (!drag) return;
    x = e.targetTouches[0].clientX;
    innerSlider.style.left = `${x - startx}px`;
    check();
},
{
    passive:true
})

// prev.addEventListener("click", (e) => {
//     let innerSliderLeft = innerSlider.style.left;
//     innerSlider.style.left = parseInt(innerSlider.left.replace("px", "")) - 265 + "px";
//     check();
// })

// next.addEventListener("click", (e) => {
//     let innerSliderLeft = innerSlider.style.left;
//     innerSlider.style.left = parseInt(innerSlider.left.replace("px", "")) + 265 + "px";
//     check();
// })

const check = () => {
    let outer = slider.getBoundingClientRect();
    let inner = slider.getBoundingClientRect();

    if (parent(innerSlider.style,left) > 0) 
    innerSlider.style.left = "-10px";
    if (inner.right < outer.right)
    innerSlider.style.left = `${inner.width - outer.width - 10}px`

}

