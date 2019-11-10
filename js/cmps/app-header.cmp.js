'use strict';

export default {
    name: 'app-header',
    template: `
    <section class="app-header-container">
        <section class="main-header container flex wrap space-between align-center">
            <router-link class="logo" exact to="/">APPSUS</router-link>
            <button class="app-navigation-btn" :class="classObject" @click="toggleNav"> 
                <img src="imgs/menu2-icon.png"/>
                <nav  class="app-model flex wrap">
                    <router-link exact to="/email" class="fa fa-fw fa-envelope"></router-link>
                    <router-link exact to="/keep"><i class="fas fa-comment-alt"></i></router-link>
                </nav>
            </button>
        </section>
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