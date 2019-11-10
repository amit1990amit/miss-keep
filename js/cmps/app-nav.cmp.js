'use strict';

export default {
    name: 'app-nav',
    template: `
    <section class="app-header-container flex wrap space-between align-center">
        <router-link class="logo" exact to="/">APPSUS</router-link>
        <button class="app-navigation-btn" :class="classObject" @click="toggleNav"> 
            <img src="imgs/menu2-icon.png"/>
            <nav class="flex wrap">
                <router-link exact to="/email">email</router-link>
                <router-link exact to="/keep">keep</router-link>
            </nav>
        </button>
    </section>
    `,
    data() {
        return {
            isClicked: true
        }
    },
    methods: {
        toggleNav() {
            this.isClicked = !this.isClicked;
        },
    },
    computed: {
        classObject() {
            return {
                clicked: this.isClicked
            }
        }
    }
};