export class Nav extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./components/aside/aside-nav/aside-nav.css');
      </style>
      <a href="#" class="active">
        <i class="fas fa-tachometer-alt fa-fw"></i> Dashboard
      </a>  
      <a href="#">
        <i class="fas fa-users fa-fw"></i> Users
      </a>
      <a href="#">
        <i class="fas fa-tasks fa-fw"></i> Activity
      </a>
      <a href="#">
        <i class="fas fa-tools fa-fw"></i> Tools
      </a>
      <a href="#">
        <i class="fas fa-folder fa-fw"></i> Modules
      </a>
      <a href="#">
        <i class="fas fa-comments fa-fw"></i> Forums
      </a>
    `;
  }
}

customElements.define('dashing-aside-nav', Nav);
