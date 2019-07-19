export class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('./components/main/main-card/main-card.css');
      </style>
      <div class="card-header">
        <div class="title"><slot name="card-title">Card Title</slot></div>
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
          <slot name="card-body">Card Body</slot>
        </p>
      </div>
      <div class="card-footer">
        <small><slot name="card-footer">Card Footer</slot></small>
      </div>
    `;
  }
}

customElements.define('dashing-main-card', Card);
