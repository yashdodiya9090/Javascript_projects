const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const calculate_bmi = document.querySelector('#calculate_ibm')
    const calculate_msg = document.querySelector('#calculate_msg')

    const bmi = weight / (height * height)

    if (height < 0 || isNaN(height) || height === '') {
        calculate_msg.innerHTML = 'Please verify your height'
    }

    else if (weight < 0 || isNaN(weight) || weight === '') {
        calculate_msg.innerHTML = 'Please verify your weight'
    }

    else {
        if (bmi < 18.6) {
            calculate_bmi.innerHTML = `BMI is ${bmi.toFixed(2)}`
            calculate_msg.innerHTML = `You have under weight`
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            calculate_bmi.innerHTML = `BMI is ${bmi.toFixed(2)}`
            calculate_msg.innerHTML = `You have normal weight`
        }
        else {
            calculate_bmi.innerHTML = `BMI is ${bmi.toFixed(2)}`
            calculate_msg.innerHTML = `You have over weight`
        }
    }


    console.log(height);
    console.log(weight);
    console.log(bmi);
})