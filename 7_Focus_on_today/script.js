const allCheckBoxes = document.querySelectorAll('.checked')
const allInputContents = document.querySelectorAll('.input-content')
const progressBar = document.querySelector('.progressbar')
const progressValue = document.querySelector('.progressbar-value')
const completedTaskValue = document.querySelector('.completed-task-value')
const progressbarTitle = document.querySelector('.progressbar-title')

const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D',
]

let allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

// let allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     first: {
//         name: '',
//         completed: false,
//     },
//     second: {
//         name: '',
//         completed: false,
//     },
//     third: {
//         name: '',
//         completed: false,
//     },
// }


let completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressValue.style.width = `${(completedGoalCount * 100) / allInputContents.length}%`
// completedTaskValue.firstElementChild.innerHTML = `${completedGoalCount}/3 completed` // optional
progressbarTitle.innerHTML = allQuotes[completedGoalCount]


allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {

        const allGoalsSet = [...allInputContents].every((input) => {
            return input.value
        })

        if (allGoalsSet) { // set checkbox, text color & line through

            checkbox.parentElement.classList.toggle('completed')
            const inputId = checkbox.nextElementSibling.id
            // console.log(inputId); // first, second, third
            allGoals[inputId].completed = !(allGoals[inputId].completed)

            completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length

            progressValue.style.width = `${(completedGoalCount * 100) / allInputContents.length}%`
            completedTaskValue.firstElementChild.innerHTML = `${completedGoalCount}/${allInputContents.length} completed`
            progressbarTitle.innerHTML = allQuotes[completedGoalCount]

            localStorage.setItem('allGoals', JSON.stringify(allGoals))
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

    if (allGoals[inputContent.id]) {
        inputContent.value = allGoals[inputContent.id].name; // inputContent.id is first then first.name

        if (allGoals[inputContent.id].completed) {
            inputContent.parentElement.classList.add('completed')
        }
    }

    inputContent.addEventListener('input', (e) => {

        if (allGoals[inputContent.id] && allGoals[inputContent.id].completed) {
            inputContent.value = allGoals[inputContent.id].name
            return
        }

        allGoals[e.target.id] = { // or = e.target.value ->  // OR inputContent.id | inputContent.value
            name: e.target.value,
            completed: false
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))

    })

})
