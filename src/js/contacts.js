(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open-con]'),
    closeModalBtn: document.querySelector('[data-modal-close-con]'),
    modal: document.querySelector('[data-modal-con]'),
  };

    refs.openModalBtn.forEach(e => {
        e.addEventListener('click', toggleModal);
    })
        
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();