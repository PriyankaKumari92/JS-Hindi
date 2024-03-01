const form = document.querySelector('form')

//this usecase give you empty value so dont do that 
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if (height ==="" || height < 0 || isNaN(height)) {

        results.innerHTML = `pleas give me valide height ${height}`

    }else if (weight ==="" || weight < 0 || isNaN(weight) ){
        
        results.innerHTML = `pleas give me valide weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result

        results.innerHTML = `<span>${bmi}</span>`
}
    })
