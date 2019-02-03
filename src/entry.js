import './components/aside/aside-logo/aside-logo.js';
import './components/aside/aside-nav/aside-nav.js';
import './components/header/header-search/header-search.js';
import './components/header/header-profile/header-profile.js';
import './components/main/main-heading/main-heading.js';
import './components/main/main-card/main-card.js';
import './components/footer/footer-sitemap/footer-sitemap.js';
import './components/footer/footer-copyright/footer-copyright.js';

export class Entry extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
      <style>
        @import url('./entry.css');
      </style>
      <div class="entry">
        <header>
          <dashing-header-search></dashing-header-search>
          <dashing-header-profile></dashing-header-profile>
        </header>
        <aside>
          <dashing-aside-logo></dashing-aside-logo>
          <dashing-aside-nav></dashing-aside-nav>
        </aside>
        <main>
          <dashing-main-heading></dashing-main-heading>
          <div class="contents">
            <dashing-main-card></dashing-main-card>
            <dashing-main-card></dashing-main-card>
            <dashing-main-card></dashing-main-card>
            <dashing-main-card></dashing-main-card>
            <dashing-main-card></dashing-main-card>
            <dashing-main-card></dashing-main-card>
          </div>
        </main>
        <footer>
          <dashing-footer-sitemap></dashing-footer-sitemap>
          <dashing-footer-copyright></dashing-footer-copyright>
        </footer>
      </div>
    `;
  }
}

customElements.define('dashing-entry', Entry);
