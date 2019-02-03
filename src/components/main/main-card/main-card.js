export class Card extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/main/main-card/main-card.css');
      </style>
      <div class="card-header">
        <div class="title">Card One</div>
        <div class="controls">
          <button type="button">
              <i class="fas fa-window-minimize"></i>
          </button>
          <button type="button">
              <i class="fas fa-cog"></i>
          </button>
          <button type="button">
              <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <p>
            Vestibulum auctor pharetra gravida. Sed dapibus augue eget velit imperdiet dapibus nec eget dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum auctor blandit condimentum. Sed viverra massa eu lobortis scelerisque. Nullam scelerisque posuere mi non auctor. Sed imperdiet lectus sit amet orci dictum posuere a sit amet turpis. Morbi quis congue arcu, nec euismod leo. Integer facilisis eros magna. Curabitur et velit urna. Morbi tempor nibh id cursus ultricies. Donec at gravida tortor. Praesent fringilla tempor dui, vitae sodales turpis tristique sed. 
        </p>
      </div>
      <div class="card-footer">
        <small>Some notes here just to fill in some space lol</small>
      </div>
    `;
  }
}

customElements.define('dashing-main-card', Card);
