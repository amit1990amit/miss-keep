'use strict'

import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import videoNote from './video-note.cmp.js'
import {KeepService} from '../services/keep-service.js'

export default {
    name: 'note-preview',
    props: ['note'],
    template:`
        <div class="note-preview-container" :style="{'background-color': note.color}">
                <component :is="note.type"  :data="note.data" />
            <button @click="onRemoveNote">X</button>
        </div>
    `,
    components:{
        textNote,
        imgNote,
        videoNote
    },
    methods:{
        onRemoveNote(){
            KeepService.removeNote(this.note.id)
        }
    }

}





// export default {
//     name: 'book-preview',
//     props: ['book'],
//     template: `
//         <section class="book-preview-container text-center">
//             <router-link :to="bookDetailsLink">
//                 <img :src="book.thumbnail"/>
//                 <h3>{{ book.title }}</h3> 
//                 <p>{{book.listPrice.amount}} {{currencyIcon}}</p>
//             </router-link>
//         </section>
//     `,
//     computed: {
//         currencyIcon() {
//             let currencyCode = this.book.listPrice.currencyCode;
//             if (currencyCode === 'EUR') return '€';
//             if (currencyCode === 'ILS') return '₪';
//             if (currencyCode === 'USD') return '$';
//         },
//         bookDetailsLink() {
//             return `/book/${this.book.id}`
//         }
//     }
// }
