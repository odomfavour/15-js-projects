const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log('hey')
})

function getRandomNum() {
    return Math.floor(Math.random() * colors.length)
}