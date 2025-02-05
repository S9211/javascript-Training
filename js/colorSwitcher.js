let buttons = document.querySelectorAll('.button');
// console.log(buttons)
let body = document.querySelector('body');

buttons.forEach( function(button) {
    // console.log(button)


button.addEventListener('click', function(e) {
        if(e.target.id === 'grey')
        body.style.backgroundColor = e.target.id;

        if(e.target.id === 'white')
        body.style.backgroundColor = e.target.id;

        if(e.target.id === 'blue')
        body.style.backgroundColor = e.target.id;

        if(e.target.id === 'yellow')
        body.style.backgroundColor = e.target.id;
})

});

// let buttons = document.querySelectorAll('.button');

// let body = document.querySelector('body');

// buttons.forEach(function (btn) {
//     // console.log(btn);
//     btn.addEventListener('click', function (e) {
//     //   console.log(e);
//     //   console.log(e.target);
//       switch (e.target.id) {
//         case 'grey':
//         case 'blue':
//         case 'yellow':
//         case 'white':
//           body.style.backgroundColor = e.target.id;
//           break;
//       }
//     });
//   });


// let buttons = document.querySelectorAll(".button");
//       let body = document.querySelector("body");
//       buttons.forEach((button) => {
//         button.addEventListener("click", (e) => {
//           body.style.backgroundColor = e.target.id;
//         });
//       });