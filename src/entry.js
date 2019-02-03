export class Entry extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = '<h1>Hello!</h1>';
  }
}

customElements.define('dash-entry', Entry);
