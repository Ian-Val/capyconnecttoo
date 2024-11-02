const screens = [
    document.querySelector(".screen-one").innerHTML,
    document.querySelector(".screen-two").innerHTML,
    document.querySelector(".screen-three").innerHTML
];

const info = document.querySelector(".info")

var currentIndex = 0;

const leftarea = document.querySelector(".left-tap")
const rightarea = document.querySelector(".right-tap")

leftarea.addEventListener("click", () => {
    try {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        currentIndex %= screens.length;
        info.innerHTML = screens[currentIndex];
        info.innerHTML = screens[currentIndex];
    } catch (err) {
        console.error(err)
    }
})

rightarea.addEventListener("click", () => {
    try {
        currentIndex++;
        if (currentIndex > screens.length - 1) {
            currentIndex = screens.length - 1;
        }
        currentIndex %= screens.length;
        info.innerHTML = screens[currentIndex];
        info.innerHTML = screens[currentIndex];
    } catch (err) {
        console.error(err)
    }
})
