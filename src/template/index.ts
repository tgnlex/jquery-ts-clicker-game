import right from './components/menu-right/index.ts';
import left from "./components/menu-left/index.ts";
import layout from './layout/index';
import center from "./components/center/index.ts";

const game = (state) => `
  <main id="game">
      ${left()}
      ${center(state)}
      ${right()}
  </main>
`;

const template = (state) => layout(game(state));

export default template;