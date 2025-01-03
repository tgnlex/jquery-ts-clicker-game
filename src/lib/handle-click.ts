import state from '../state';
import $ from 'jquery';

function updateCount(state) {
  $('#clicks').text(state.clicks);
  $('#coins').text(state.coins);
}
const handleClick = () => {
    state.clicks = state.clicks + 1;
    state.coins = state.coins + state.power;
    updateCount(state);
}

export default handleClick;
