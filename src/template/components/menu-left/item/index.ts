import {capitalize} from "../../../../utils";
const item = (item) => {
  const displayName = capitalize(item.name);
  const template = `
  <li class="item col">
    <button class="btn store-btn" id="buy-${item.name}">Buy ${displayName}</button>
    <div id="store--text" class="row item-text">
      <p class="text">
        Owned: <span id="${item.name}-owned">${item.owned}</span>
      </p>
      <div class="divider-sm"></div>
      <p class="text">
        Price: <span id="${item.name}-price">${item.price}<span>
      </p>
    </div>
  </li>
  `;
  return template;
};

export default item;