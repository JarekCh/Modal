// app.js
const showModal = document.querySelector('.show-modal');
const showModalTwo = document.querySelector('.show-modal-two')

function modalBody(body) {
    return `<div class="modal">           
    <p class="modal-title">
      <i class="modal-title-icon" data-feather = "info"></i>
      ${body.title}
    </p>
    <p class="modal-description">
        ${body.description}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept">${body.accept_btn}</button>
        <button class="modal-declinie">${body.decline_btn}</button>
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
