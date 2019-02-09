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
            <dashing-main-card>
              <span slot="card-title">He11o!</span>
              <span slot="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut dapibus urna, vel placerat enim. Cras sed posuere neque, tristique convallis mauris. Mauris consequat diam orci, et aliquam massa blandit euismod. Duis at ligula vel sapien porttitor porta ut feugiat dolor. Proin rhoncus, sem id maximus luctus, quam odio hendrerit massa, vitae pretium ante ante id sapien. Phasellus quis felis eleifend, vulputate magna quis, commodo diam. Vivamus tincidunt lectus efficitur tempus venenatis. Fusce sit amet ligula velit. </span>
              <span slot="card-footer">Look ma', I'm a footer!</span>
            </dashing-main-card>
            <dashing-main-card>
              <span slot="card-title">Hello2!</span>
              <span slot="card-body">Pellentesque sed placerat purus. Curabitur vitae volutpat ipsum. Maecenas feugiat tristique tortor, in imperdiet odio accumsan ac. Ut fringilla pharetra urna, sit amet ullamcorper mi.</span>
            </dashing-main-card>
            <dashing-main-card>
              <span slot="card-title">H3llo!</span>
              <span slot="card-body">Nam at bibendum nibh. Maecenas eget erat sed neque fermentum placerat. Duis imperdiet, lorem a scelerisque bibendum, tortor nisi euismod justo, eget tempor dui metus sed risus. Maecenas non maximus velit. Proin ultricies luctus ligula at faucibus. Maecenas nec consectetur urna, vel bibendum ante. Nam dignissim ex est, eu sollicitudin magna accumsan varius. Nullam et ante faucibus, rhoncus tortor sit amet, aliquam mi. Fusce porttitor at leo nec tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris ac lectus vehicula, tempor nisi in, rhoncus lorem. Morbi scelerisque efficitur ligula, vel varius nulla tempor malesuada. Maecenas nisl risus, dapibus vel maximus laoreet, ullamcorper vel lorem. Fusce mi erat, aliquet ac sapien nec, condimentum finibus ex. Pellentesque accumsan rutrum dolor, eget pharetra erat molestie quis. Phasellus ornare dui quis sodales aliquam. </span>
              <span slot="card-footer">Yet another footer!</span>
            </dashing-main-card>
            <dashing-main-card>
              <span slot="card-title">Hello44</span>
              <span slot="card-body">Cras vehicula justo at nibh pulvinar pretium. Aenean pellentesque mauris ac nulla varius, eu rhoncus neque vehicula. Etiam tincidunt sed enim vel malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
            </dashing-main-card>
            <dashing-main-card>
              <span slot="card-title">Hello5!</span>
              <span slot="card-body">Proin placerat egestas sapien. In convallis leo sed massa consequat egestas. Etiam nunc mi, dapibus et quam quis, euismod pretium dui. Donec a dictum mauris. </span>
              <span slot="card-footer">Woot!</span>
            </dashing-main-card>
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
