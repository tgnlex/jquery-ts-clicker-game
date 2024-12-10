import store from './store'
const left = (state) => `
  <aside id="left" class="sidebar">
    <h2>Left Menu</h2>
    ${store(state)}
  </aside>
`;

export default left;