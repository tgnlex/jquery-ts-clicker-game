import header from './header';

const layout = template => `
  <div id="root-layout">
    ${header}
    ${template};
  </div>
`;
export default layout;