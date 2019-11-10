'use strict';

import { emailService } from '../apps/email/services/email.service.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
import emailSideNav from '../apps/email/cmps/email-side-nav.cmp.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'

export default {
    name: 'email-app',
    template: `
        <section class="email-app-container flex">
            <!-- <email-details></email-details> -->
            <!-- <email-status></email-status> -->
            <email-filter></email-filter>
            <email-side-nav></email-side-nav>
            <email-list :emails="emailsToShow" @selected="selectEmail"></email-list>
            <!-- <email-compose></email-compose> -->
        </section>
        
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            selectedEmail: null
        }
    },
    methods: {
        selectEmail(emailId) {
            emailService.getEmailById(emailId)
                .then(email => this.selectedEmail = email)
        },
        setFilter(filter) {
            this.filterBy = filter;
        },
        hideDetails() {
            this.selectedEmail = null;
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            // let regex = new RegExp(`${this.filterBy.byName}`, 'i');
            // return this.emails.filter(email => {
            //     let emailIsRead = email.isRead;
            //     return regex.test(email.subject) && emailIsRead > this.filterBy.fromPrice && bookPrice < this.filterBy.toPrice
            // })
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    },
    components: {
        emailFilter,
        emailSideNav,
        emailList
    }
}