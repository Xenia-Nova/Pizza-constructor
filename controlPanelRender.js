export class ControlRender {
  constructor(controlPanel) {
    this.ingredients = JSON.parse(sessionStorage.getItem('controlState'));
    this.controlPanel = controlPanel;
  }

  #renderBlock(blockName, title) {
    const options = this.ingredients[blockName];

    const blockWrapper = document.createElement('div');
    const listWrapper = document.createElement('ul');
    const blockTitle = document.createElement('h3');
    blockWrapper.id = blockName;
    blockTitle.textContent = title;

    options.forEach(({ id, name, price, checked }) => {
      const element = document.createElement('li');
      element.value = price;
      element.textContent = name;
      element.id = id;
      element.className = checked ? 'checked' : '';
      listWrapper.appendChild(element);
    });

    blockWrapper.appendChild(blockTitle);
    blockWrapper.appendChild(listWrapper);
    this.controlPanel.appendChild(blockWrapper);
  }

  render() {
    this.#renderBlock('pizzaBase', 'Основа');
    this.#renderBlock('meatIngredients', 'Мясо');
    this.#renderBlock('vegIngredients', 'Овощи');
    this.#renderBlock('sauces', 'Соус');
  }
}
