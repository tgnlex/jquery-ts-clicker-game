import items from "./items";
let state = {
  clicks: 0,
  coins: 0,
  income: 0, 
  power: 1,
  running: false
}

let clickUpgrade = {
  price: 20,
}

export default state;
export { items, clickUpgrade };