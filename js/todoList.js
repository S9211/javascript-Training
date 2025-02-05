let input = document.querySelector('.input');
let text = document.querySelector('.text');

let button = document.querySelector('.btn-add').addEventListener('click', function(){
    if(input.value == ""){
    alert("Please enter your Task")
    } else{
        let newEl = document.createElement('ul');
        newEl.innerHTML = `${input.value}  <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEl);
        input.value = "";
        newEl.querySelector('i').addEventListener('click', remove);
        function remove(){
            newEl.remove();
        }
    }
})



