export class Profile extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/header/header-profile/header-profile.css');
      </style>
      <div class="notifications">
        <i class="far fa-bell fa-fw">
          <span>13</span>
        </i>
      </div>
      <div class="user">
          <a href="#">
            Admin <i class="fas fa-caret-down fa-fw"></i>
          </a>
      </div>
    `;
  }
}

customElements.define('dashing-header-profile', Profile);
