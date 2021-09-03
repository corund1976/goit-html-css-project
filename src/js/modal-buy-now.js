// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[buy-now-modal-open]'),
//     closeModalBtn: document.querySelector('[buy-now-modal-close]'),
//     modal: document.querySelector('[buy-now-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden-buy-now');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-close]'),
    modal: document.querySelector('[buy-now-modal]'),
    scrollBtn: document.querySelector('.scroll-up'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-buy-now');
    refs.scrollBtn.classList.toggle('is-btn-hidden');
  }
})();