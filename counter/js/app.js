let count = 0;

const btns = document.querySelectorAll('.btn');
// console.log(btns)
const value = document.getElementById('value');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;
        console.log(btnClass)

        if(btnClass.contains('decrease')) {
            count--;
        } else if(btnClass.contains('increase')){
            count++;
        } else {
            count = 0;
        }

        if(count < 0) {
            value.style.color = 'red';
        }
        
        if( count > 0) {
            value.style.color = 'green';
        }
        // console.log(count)
        value.textContent = count
    })
})


let first = document.getElementById('root1');
let second = document.getElementById('root2');


function solveeqn() {
    //
let a = prompt('Your first number is?')
let b = prompt('Your second number is?')
let c = prompt('Your third number is?')

function quadratic(a, b, c,) {

    let root1 = (-b + Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a)
    let root2 =  (-b - Math.sqrt(Math.pow(b,2) - 4 * a * c))/ (2 * a)
    console.log(root1)
    console.log(root2)

    first.textContent = root1
    second.textContent = root2
    
}
quadratic(a, b, c);
}


