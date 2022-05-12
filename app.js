// app.js
const showModal = document.querySelector('.show-modal');
const showModalTwo = document.querySelector('.show-modal-two');
const showModalThree = document.querySelector('.show-modal-three');

function modalBody(body = {}) {
    return `<div class="modal">           
    <p class="modal-title ${body.type || ''}">
      <i class="modal-title-icon" data-feather = "${body.modal_icon || 'info'}"></i>
      ${body.title || 'are you sure'}
    </p>
    <p class="modal-description">
        ${body.description || 'confirm your choice'}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept">${body.accept_btn || 'Yes'}</button>
        <button class="modal-declinie">${body.decline_btn || 'No'}</button>
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

    feather.replace();

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
