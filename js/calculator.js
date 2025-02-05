let string = '';
let buttons = document.querySelectorAll('.button');

buttons.forEach((button)=> {
    button.addEventListener('click', function(e){
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.querySelector(".input").value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector(".input").value = string;
        }
    }); 
});




// let numbers = [4,8,22,34];
// numbers.sort();
// console.log(numbers); 

// let arr1 = [1, 2];
// let arr2 = [1, 2];
// console.log(arr1 == arr2);