import state from "../state";
import {clickUpgrade} from "../state";
import $ from "../config/deps";
function upgradeClick() {
    if (state.coins >= clickUpgrade.price) {
      state.coins = state.coins - clickUpgrade.price;
      state.power = state.power + 1;
      clickUpgrade.price = clickUpgrade.price * 1.5;
      $('#power').text(state.power);
      $('#coins').text(state.coins);
      $('#clicker-upgrade-price').text(clickUpgrade.price);
    } else {
      console.log("not enough coins");
    }
};

export default upgradeClick;
