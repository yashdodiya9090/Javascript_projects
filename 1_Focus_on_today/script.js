const allCheckBoxes = document.querySelectorAll('.checked')
const allInputContents = document.querySelectorAll('.input-content')
const progressBar = document.querySelector('.progressbar')
const progressValue = document.querySelector('.progressbar-value')



allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {

        const allGoalsSet = [...allInputContents].every((input) => {
            return input.value
        })

        if (allGoalsSet) { // set checkbox, text color & line through
            checkbox.parentElement.classList.toggle('completed')
            progressValue.style.width = '33.33%'
        }
        else { // set error
            progressBar.classList.add('show-error')
        }
    })
})


// if input Field is focused then error will remove
allInputContents.forEach((inputContent) => {
    inputContent.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })
})