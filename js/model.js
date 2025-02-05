let btnOpenModel = document.querySelectorAll('.show-modal');
let btnCloseModel = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

// console.log(btnOpenModel);

for (let i = 0 ; i < btnOpenModel.length; i++)
btnOpenModel[i].addEventListener('click' , function(){
    console.log('btn clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

let closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click' , closeModel)
overlay.addEventListener('click' , closeModel)

//  code repeating 

// btnCloseModel.addEventListener('click' , function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click' , function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
