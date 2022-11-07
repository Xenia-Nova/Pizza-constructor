export class ButtonHandler {
  constructor() {
    this.modal = document.getElementById('modalWrapper');
  }

  toggleModal = (event) => {
    const { target } = event;

    if (target.id === 'orderButton') {
      return this.modal.style.display = 'block';
    }
    return this.modal.style.display = 'none';
  }
}
