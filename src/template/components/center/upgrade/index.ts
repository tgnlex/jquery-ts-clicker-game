import { clickUpgrade } from "../../../../state";

const upgradeClicker = () => `
  <button id="clicker-upgrade" class="btn">
    Upgrade Price: <span id="clicker-upgrade-price">${clickUpgrade.price}</span>
  </button>
`;

export default upgradeClicker;