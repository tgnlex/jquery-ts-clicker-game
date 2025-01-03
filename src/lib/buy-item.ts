import state from "../state/index";
import $ from "../config/deps";
function buyItem(item) {
    if (state.coins >= item.price) {
        state.coins = state.coins - item.price;
        item.owned = item.owned + 1;
        item.price = item.price * 1.5;
        state.income = state.income + item.income;
        $(`#${item.name}-owned`).text(item.owned);
        $(`#${item.name}-price`).text(item.price);
        $('#coins').text(state.coins);
        $(`#income`).text(state.income);
      }
}


export default buyItem;