const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    console.log(height);
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi =parseInt( (weight / ((height*height)/10000)).toFixed(2))
        // show the result

        if(bmi <= 18.60){
            results.innerHTML = `${bmi} <br />Under Weight`
        }
        else if(18.60 <= bmi && bmi <= 24.90){
            results.innerHTML = `${bmi} <br />Normal Weight`
        }
        else{
            results.innerHTML = `${bmi} <br />OverWeight`
        }
    }


})