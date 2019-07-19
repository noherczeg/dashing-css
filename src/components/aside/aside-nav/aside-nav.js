export class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('./components/aside/aside-nav/aside-nav.css');
      </style>
      ${this.navs.map(({ title, url, icon, active }) => `
        <a href="${url}" class="${active ? 'active' : ''}">
          <i class="${icon}"></i> <span class="label">${title}</span>
        </a>
      `).join('')}
    `;
  }

  get navs() {
    return [
      { title: 'Dashboard', url: '#', icon: 'fas fa-tachometer-alt fa-fw', active: true },
      { title: 'Users', url: '#users', icon: 'fas fa-users fa-fw' },
      { title: 'Activity', url: '#activity', icon: 'fas fa-tasks fa-fw' },
      { title: 'Tools', url: '#tools', icon: 'fas fa-tools fa-fw' },
      { title: 'Modules', url: '#modules', icon: 'fas fa-folder fa-fw' },
      { title: 'Forums', url: '#forums', icon: 'fas fa-comments fa-fw' },
    ];
  }
}

customElements.define('dashing-aside-nav', Nav);
