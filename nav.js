const screens = [
    document.querySelector(".screen-one").innerHTML,
    document.querySelector(".screen-two").innerHTML,
    document.querySelector(".screen-three").innerHTML
];

const info = document.querySelector(".info")

var currentIndex = 0;

const main = document.querySelector("main")

function navigate(direction) {
    currentIndex += direction;
    currentIndex %= screens.length;
    info.innerHTML = screens[currentIndex];
}

main.addEventListener("click", () => {
    navigate(1)
})
