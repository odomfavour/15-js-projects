// using slectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if(item !== question) {
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text');
    })
})
// using traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     // console.log(btn)
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text')
//     });
// })
// console.log(btns)