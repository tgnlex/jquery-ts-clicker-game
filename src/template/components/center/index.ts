import stats from './stats';
import clicker from "./clicker";
import upgrade from "./upgrade";
const main = state => `
    <section id="main">
      ${stats(state)}
      ${clicker()}
      ${upgrade()}
    </section>
`;


export default main;