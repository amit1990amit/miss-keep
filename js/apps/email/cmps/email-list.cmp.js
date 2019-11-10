'use strict';

import emailPreview from './email-preview.cmp.js'

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
    <section class="email-list-container">
        <ul class="clean-list flex wrap justify-center align-center">
            <email-preview v-for="currEmail in emails" :email="currEmail" @click.native="onSelectEmail(currEmail.id)" :key="currEmail.id">
            </email-preview>
        </ul>
    </section>
    `,
    data() {
        return {
            selectedEmail: null
        }
    },
    methods: {
        onSelectEmail(emailId) {
            this.selectedEmail = emailId;
            this.$emit('selected', this.selectedEmail);
        }
    },
    components: {
        emailPreview
    }
}