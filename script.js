'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseBtn = document.querySelector('.close-modal');
const modalBtns = document.querySelectorAll('.show-modal');


const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < modalBtns.length; i++){
    modalBtns[i].addEventListener('click', openModal);
}

btnCloseBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
