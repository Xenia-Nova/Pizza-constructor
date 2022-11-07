import { OrderList } from './orderList.js';

const orderListHandler = new OrderList();

export class ControlPanelHandler {
  constructor(limits) {
    this.limits = limits
  }

  #checkLimits(state, blockName, limit) {
    const options = state[blockName];
    return options.filter((item) => item.checked).length < limit;
  }

  handleEvent = (event) => {
    const target = event.target;

    if (target.tagName === 'LI') {
      let state = JSON.parse(sessionStorage.getItem('controlState'));
      const currentGroup = event.path[2].id;
      const isCanBeChosen = this.#checkLimits(state, currentGroup, this.limits[currentGroup]);

      if (target.className === 'checked') {
        target.classList.remove('checked');
        return orderListHandler.removeItem(currentGroup, target);
      }

      if (isCanBeChosen) {
        target.classList.add('checked');
        return orderListHandler.addItem(currentGroup, target);
      }
    }
  }
}
