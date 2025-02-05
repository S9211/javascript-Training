// let form = document.querySelector('form')

// form.addEventListener('submit' ,function(e){
//     e.preventDefault();

//     let height = parseInt(document.querySelector('#height').value);
//     let weight = parseInt(document.querySelector('#weight').value);
//     let results = document.querySelector('#results');

//     if (height === '' || height < 0 || isNaN(height)){
//     results.innerHTML = `Please enter a valid height ${height}`;
//     }
//     else  if (weight === '' || weight < 0 || isNaN(weight)){
//     results.innerHTML = `Please enter a valid weight ${weight}`;
//     }
//     else{
//         let bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         // show the result
//         results.innerHTML = `<span>${bmi}</span>`;


//         if(bmi<18.6){
//             results.innerHTML=`<span>Under weigth :${bmi}</span>`;
//             }else if(bmi>18.6 && bmi<24.9){
//                 results.textContent=`Normal Weight: ${bmi}`;
//             }else{
//                 results.textContent=`Over Weight : ${bmi}`;
//             }
//     }

// });


let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please enter a valid height ${height}`;
    }

    else if(weight === '' || height < 0 || isNaN(weight)){
        results.innerHTML = `please enter a valid height ${weight}`;
    }

    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show result
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
            results.innerHTML = `<span>under weight :${bmi}<span>`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>Normal Range :${bmi}<span>`;
        }
        else{
            results.innerHTML = `<span>Overweight :${bmi}<span>`;
        }
    }


})