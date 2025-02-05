let input = document.querySelector("#QR-input");
let button = document.querySelector(".button");
let img = document.querySelector(".QR-img");

button.addEventListener('click', function(){
    if (!input.value){
        alert("please enter the value");
    }
    else if(input.value === " "){
        alert("Don't search blank");
    }
    else{
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;    
        img.src = url;
    }
});