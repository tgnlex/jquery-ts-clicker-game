import $ from "../config/deps";
import state from "../state";

function start(app) {
  state.running = true;
  $('#app').html(app);
};

export default start;