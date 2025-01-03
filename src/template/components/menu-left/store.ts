import { items } from "../../../state"
import item from "./item";
const store = () => `
<ul class="store">
  ${item(items.pc)}
  ${item(items.website)}
  ${item(items.vps)}
  ${item(items.server)}
  ${item(items.cluster)}
</ul>
`;
export default store;