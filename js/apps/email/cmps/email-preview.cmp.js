'use strict';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
        <section class="email-preview-container">
        <h3>{{ email.subject }}</h3>
        <h1>asfasf</h1>
            <!-- <router-link :to="emailDetailsLink">
                 
            </router-link> -->
        </section>
    `,
    computed: {
        currencyIcon() {
            let currencyCode = this.book.listPrice.currencyCode;
            if (currencyCode === 'EUR') return '€';
            if (currencyCode === 'ILS') return '₪';
            if (currencyCode === 'USD') return '$';
        },
        bookDetailsLink() {
            return `/book/${this.book.id}`
        }
    }
}