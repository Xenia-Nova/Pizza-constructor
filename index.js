import { ControlRender } from './modules/controlPanelRender.js';
import { ControlPanelHandler } from './modules/controlPanelHandler.js';
import { OrderList } from './modules/orderList.js';
import { ButtonHandler } from './modules/buttonHandler.js';

const controlPanel = document.getElementById('controlPanel');
const orderList = document.getElementById('orderList');
const orderButton = document.getElementById('orderButton');
const closeButton = document.getElementById('closeButton');

const ingredients = {
  pizzaBase: [
    { id: 'thin', name: 'На тонком тесте', price: 2, checked: false },
    { id: 'middle', name: 'На среднем тесте', price: 3, checked: false },
    { id: 'thick', name: 'На толстом тесте', price: 3, checked: false },
    { id: 'cheeseRim', name: 'С сырным бортиком', price: 4, checked: false },
  ],
  meatIngredients: [
    { id: 'pepperoni', name: 'Пеперони', price: 7, checked: false },
    { id: 'ham', name: 'Ветчина', price: 5, checked: false },
    { id: 'sausages', name: 'Охотничьи колбаски', price: 9, checked: false },
    { id: 'bacon', name: 'Бекон', price: 3, checked: false },
  ],
  vegIngredients: [
    { id: 'mushrooms',  name: 'Шампиньоны', price: 2, checked: false },
    { id: 'tomato',  name: 'Помидоры', price: 4, checked: false },
    { id: 'pepper',  name: 'Перец', price: 6, checked: false },
    { id: 'olive',  name: 'Оливки и маслины', price: 3, checked: false },
  ],
  sauces: [
    { id: 'mayo', name: 'Майонез', price: 2, checked: false },
    { id: 'cheeseSauces', name: 'Сырный', price: 2, checked: false },
    { id: 'ketchup', name: 'Томатный', price: 2, checked: false },
    { id: 'teriyaki', name: 'Терияки', price: 3, checked: false },
  ]
}

const limits = {
  pizzaBase: 1,
  meatIngredients: 2,
  vegIngredients: 2,
  sauces: 1,
}

sessionStorage.setItem('controlState', JSON.stringify(ingredients))

const control = new ControlRender(controlPanel);
const controlPanelHandler = new ControlPanelHandler(limits);
const orderListHandler = new OrderList();
const buttonHandler = new ButtonHandler();


control.render();

controlPanel.addEventListener('click', controlPanelHandler.handleEvent);
orderList.addEventListener('click', orderListHandler.removeOnClick);
orderButton.addEventListener('click', buttonHandler.toggleModal);
closeButton.addEventListener('click', buttonHandler.toggleModal);
