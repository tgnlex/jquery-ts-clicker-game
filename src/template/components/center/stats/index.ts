const stats = (state) => `
  <section id="stats" class="stats">
    <div class="column stats--wrapper">
      <h2 class="stats--text">
        Coins: <span id="coins">${state.coins}</span>
      </h2>  
      <h2 class="stats--text">
        Power: <span id="power">${state.power}</span>
      </h2>
      </div>
      <div class="column stats--wrapper">
      <h2 class="stats--text">
        Clicks: <span id="clicks">${state.clicks}</span>
      </h2>
      <h2 class="stats--text">
        Income: <span id="income">${state.income}</span>
      </h2>
   
    </div>
  </section>
`;

export default stats;