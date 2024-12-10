import $ from "./config/deps.ts";
import template from './template';
import state, { items} from './state/index.ts';
import {handleClick, buyItem, upgradeClick, start, loop} from "./lib";

import './style/main.css'
/** TODO:
 *  Setup income loop. 
 *  
 **/

start(template(state));

loop()

$('#buy-pc').on("click", () => buyItem(items.pc))
$('#buy-website').on("click", () => buyItem(items.website));
$('#buy-vps').on("click", () => buyItem(items.vps));
$('#buy-server').on("click", () => buyItem(items.server));
$('#buy-cluster').on("click", () => buyItem(items.cluster));
$('#clicker-upgrade').on("click", upgradeClick);
$('#clicker').on("click", handleClick);


