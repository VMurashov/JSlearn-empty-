let clickButton = document.querySelector(".click__button");
let modal =document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let modalButton =document.querySelector(".modal__button");

modal.style.display ='none';

clickButton.onclick =()  =>{
    modal.style.display='block';
}

modalClose.onclick =() =>{
    modal.style.display='none';
}

modalButton.onclick =() =>{
    modal.style.display='none';
}