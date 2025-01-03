import state from "../state";
import $ from "../config/deps";
function loop() {
  const intervalId = window.setInterval(function() {
    state.coins = state.coins + state.income;
    $('#coins').text(state.coins);
  }, 1000) 
  return intervalId;
};


export default loop;