'use strict';
 
export default {
    name: 'search-note',
    template:`
        <section class="search-container">
            <input type="text" placeholder="Search" v-model="filterBy.data" />
        </section>
    `,
    data(){
        return {
            filterBy: {
                data: ''
            }
        }
    },
    
    created() {
        console.log('filter');
        this.$emit('filtered', this.filterBy)
    }
    
}
 
 