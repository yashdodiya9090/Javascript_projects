const form = document.querySelector('form')
let randomNumber = Math.floor(Math.random() * 100) + 1

console.log(typeof randomNumber);

let maxGuess = 10 // for max attempt
let all_previous_guesses = '' // merge all previous guesses

form.addEventListener('submit', (e) => {
    e.preventDefault() // for not submit

    const enteredNumber = parseFloat(document.querySelector('#entered_number').value)
    const guesses_right_wrong_msg = document.querySelector('#guesses_right_wrong_msg')
    let previous_guesses = document.querySelector('#previous_guesses')
    let guesses_remaining = document.querySelector('#guesses_remaining')

    // for less 0 num or NaN or empty 
    if (enteredNumber < 0 || isNaN(enteredNumber) || enteredNumber == '') {
        guesses_right_wrong_msg.innerHTML = "Please check your entered number"
    }

    // for randomNumber < enteredNumber
    else if (randomNumber < enteredNumber) {
        if (maxGuess > 0) { // for display remaining guesses
            guesses_right_wrong_msg.innerHTML = `${enteredNumber} is very Heigh`
            all_previous_guesses += (enteredNumber + ', ')
            previous_guesses.innerHTML = all_previous_guesses
            maxGuess--
            guesses_remaining.innerHTML = `Remaining guesses is ${maxGuess}`
        }
        else { // for game over and reload
            guesses_right_wrong_msg.innerHTML = `Game over`

            // for reload page
            setTimeout(() => {
                location.reload()
            }, 5000)
        }
    }

    // for randomNumber > enteredNumber
    else if (randomNumber > enteredNumber) {
        if (maxGuess > 0) { // for display remaining guesses
            guesses_right_wrong_msg.innerHTML = `${enteredNumber} is very Low`
            all_previous_guesses += (enteredNumber + ', ')
            previous_guesses.innerHTML = all_previous_guesses
            maxGuess--
            guesses_remaining.innerHTML = `Remaining guesses is ${maxGuess}`
        }
        else { // for game over and reload
            guesses_right_wrong_msg.innerHTML = `Game over`

            // for reload page
            setTimeout(() => {
                location.reload()
            }, 5000)
        }
    }

    else { // for both are equals 
        guesses_right_wrong_msg.innerHTML = `${enteredNumber} is Right number`

        // for reload page
        setTimeout(() => {
            location.reload()
        }, 5000)
    }

})