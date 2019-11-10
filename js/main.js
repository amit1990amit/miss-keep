'use strict';

import router from './routes.js';
import appNav from './cmps/app-nav.cmp.js';

new Vue({
    router,
    el: '#appsus-app',
    template: `
    <section>
        <app-nav></app-nav>
        <router-view></router-view>
    </section>
    `,
    components: {
        appNav,
    }
});