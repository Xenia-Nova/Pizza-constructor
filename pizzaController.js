export class PizzaController {
  constructor() {
    this.pizzaStatuses = {
      1: './img/quarterPizza.png',
      2: './img/halfPizza.png',
      3: './img/thirdPizza.png',
      4: './img/fullPizza.png',
    }
  }
  #checkGroup(state, groupName) {
    return state[groupName].some(({ checked }) => checked)
  }

  checkPizza(state) {
    const img = document.getElementById('img').children[0];
    const orderButton = document.getElementById('orderButton');

    const isBaseChecked = this.#checkGroup(state, 'pizzaBase');
    const isMeatChecked = this.#checkGroup(state, 'meatIngredients');
    const isVegChecked = this.#checkGroup(state, 'vegIngredients');
    const isSaucesChecked = this.#checkGroup(state, 'sauces');

    const count = [isBaseChecked, isMeatChecked, isVegChecked, isSaucesChecked].filter(Boolean).length;
    img.src = this.pizzaStatuses[count] || './img/nonePizza.png';
    orderButton.disabled = count !== 4;
  }
}
