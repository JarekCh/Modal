// app.js
const showModal = document.querySelector('.show-modal');
const showModalTwo = document.querySelector('.show-modal-two');
const showModalThree = document.querySelector('.show-modal-three');


function modalBody(body = {}) {
    return `<div tabindex="10" class="modal">           
    <p class="modal-title ${body.type || ''}">
      <i class="modal-title-icon" data-feather = "${body.modal_icon || 'info'}"></i>
      ${body.title || 'are you sure'}
    </p>
    <p class="modal-description">
        ${body.description || 'confirm your choice'}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept modal-action-btn">${body.accept_btn || 'Yes'}</button>
        <button class="modal-declinie modal-action-btn">${body.decline_btn || 'No'}</button>
    </div>
    <button class="modal-close-icon">
        <i data-feather="x"></i>
    </button>
</div>`
}

function createModal(value) {
    const modalContainer =  document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML =  modalBody(value);
    document.body.appendChild(modalContainer);
    
    
    const closeIcon = document.querySelector('.modal-close-icon');

    closeIcon.addEventListener('click', () =>{
        const modal = document.querySelector('.modal-container');
        modal.remove()
        document.body.style.overflow = 'auto';
    });
    const closeBtns = document.querySelectorAll('.modal-action-btn');
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () =>{
            const modal = document.querySelector('.modal-container');
            modal.remove()
            document.body.style.overflow = 'auto';
        });
    });

    const modalActive = document.querySelector(".modal");    
    modalActive.focus();
    modalActive.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.querySelector(".modal-container");
        modal.remove();
        document.body.style.overflow = "auto";
      }
    });

    const modalActiveConatainer = document.querySelector('.modal-container');
    modalActiveConatainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container')) {
            e.target.remove();
            document.body.style.overflow = "auto";            
        };
    });

    feather.replace();
    document.body.style.overflow = 'hidden';
}

function addToBasket(){
    createModal({
        type: 'warning',
        modal_icon: 'alert-triangle',
        title: 'lorem ipsum dolor title',
        description: 'lorem ipsum descriptopn, add more text, add more text, add more text, add more text,',
        accept_btn: 'Accept',
        decline_btn: 'Decline',
    });
};


showModal.addEventListener('click', addToBasket);
showModalTwo.addEventListener('click', () => {
    createModal({   
        title: 'modal two',
        description: 'second modal text, second modal text, second modal text, second modal text, ',
        accept_btn: 'Accept_two',
        decline_btn: 'Decline_tow',
    });
});

showModalThree.addEventListener('click', () => {
    createModal();
});
