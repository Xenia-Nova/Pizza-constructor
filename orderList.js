import {PizzaController} from './pizzaController.js';

const pizzaController = new PizzaController();

export class OrderList {
  #updateState(newState) {
    sessionStorage.setItem('controlState', JSON.stringify(newState));
  }

  #renderPrice() {
    const price = document.getElementById('price');
    let orderList = document.getElementById('orderList').children;
    orderList = Array.prototype.slice.call(orderList)
    price.textContent = `Цена: ${orderList.reduce((acc, cur) => acc + cur.value ,0)}$`;
  }

  addItem(group, target) {
    let state = JSON.parse(sessionStorage.getItem('controlState'));

    if (target) {
      const orderList = document.getElementById('orderList');
      const listItem = document.createElement('li');
      listItem.value = target.value;
      listItem.classList.add(group, target.id);
      listItem.textContent = target.textContent;

      orderList.appendChild(listItem)
      state = {
        ...state,
        [group]: state[group].map((item) => (
          { ...item, checked: item.name === target.textContent ? !item.checked : item.checked }
        ))
      };
      this.#updateState(state);
      this.#renderPrice();
      pizzaController.checkPizza(state);
    }
  }

  removeItem(group, target) {
    let state = JSON.parse(sessionStorage.getItem('controlState'));
    if (target) {
      const orderList = document.getElementById('orderList');
      const currentItem = document.getElementsByClassName(target.id)[0] || target;

      orderList.removeChild(currentItem)

      state = {
        ...state,
        [group]: state[group].map((item) => (
          { ...item, checked: item.name === target.textContent ? !item.checked : item.checked }
        ))
      };
      this.#updateState(state);
      this.#renderPrice();
      pizzaController.checkPizza(state);
    }
  }

  removeOnClick = (event) => {
    const target = event.target;

    if (target.tagName === 'LI') {
      const [group, name] = target.classList;
      const controlPanelElement = document.getElementById(name);
      controlPanelElement.classList.remove('checked');
      this.removeItem(group, target);
    }
  }
}
