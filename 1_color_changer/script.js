const boxContainer = document.querySelector('.box-container')
const box = document.querySelectorAll('.box')
const body = document.querySelector('body')

// console.log(box); // nodeList

box.forEach((e) => {
    console.log(e.id);
    e.addEventListener('click', () => {
        if (e.id === 'green') {
            body.style.backgroundColor = e.id
        }
        if (e.id === 'yellow') {
            body.style.backgroundColor = e.id
        }
        if (e.id === 'blue') {
            body.style.backgroundColor = e.id
        }
        if (e.id === 'orange') {
            body.style.backgroundColor = e.id
        }
    })
});