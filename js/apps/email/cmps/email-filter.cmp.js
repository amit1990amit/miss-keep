'use strict';

export default {
    name: 'email-filter',
    template: `
    <section class="email-filter-container flex center">
        <form @submit.prevent="searchBook" >
            <input type="search" placeholder="Search mail"/>
            <button>Search</button>
        </form>
    </section>
    `,
    data() {
        return {
            // filterBy: { byName: '', fromPrice: 0, toPrice: 10000 }
        }
    },
    methods: {
        // onFilter() {
        //     let filter = {...this.filterBy };
        //     this.$emit('filtered', filter);
        // }
    }
}