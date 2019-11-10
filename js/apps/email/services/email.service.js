'use strict';

import { storageService } from '../../../services/storage-service.js'
import { makeId } from '../../../services/utils-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    // addReview,
    // removeReview,
    // getSearchedBooks,
    // addToBooks,
    // getNearBooksIds
}

const EMAILS_KEY = 'emails'

function getEmails() {
    let emails = storageService.loadFromStorage(EMAILS_KEY)
    if (!emails) {
        emails = gEmails;
        storageService.saveToStorage(EMAILS_KEY, emails)
    }
    gEmails = emails;
    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    gEmails = storageService.loadFromStorage(EMAILS_KEY);
    let email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

// function addReview(bookId, review) {
//     review.id = makeId();
//     return getBookById(bookId)
//         .then(book => {
//             if (!book.reviews) book.reviews = [];
//             book.reviews.unshift(review);
//             storageService.store(BOOKS_KEY, gBooks)
//             return Promise.resolve(book);
//         })
// }

// function removeReview(book, reviewId) {
//     var idx = book.reviews.findIndex(review => review.id === reviewId);
//     if (idx !== -1) book.reviews.splice(idx, 1)
//     storageService.store(BOOKS_KEY, gBooks)
//     return Promise.resolve(book);
// }

// function getNearBooksIds(bookId) {
//     var idx = gBooks.findIndex(book => book.id === bookId);
//     var nextIdx = idx + 1;
//     if (nextIdx === gBooks.length) nextIdx = 0;
//     var next = gBooks[nextIdx].id;
//     var prevIdx = idx - 1;
//     if (prevIdx === -1) prevIdx = gBooks.length - 1;
//     var prev = gBooks[prevIdx].id;
//     return { prev, next };
// }

// function queryBooks(query) {
// function getSearchedBooks(searched) {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searched}&key=AIzaSyCw8djD1Hif_FagSIHuaLdcPXB-KgWGiiw`)
//         .then(res => {
//             return res.data.items
//         })
// }

// function addToBooks(bookUrl) {
//     return axios.get(bookUrl)
//         .then(res => {
//             return res.data
//         })
//         .then(book => {
//             return {
//                 "id": book.id,
//                 "title": book.volumeInfo.title,
//                 "subtitle": book.volumeInfo.subtitle,
//                 "authors": book.volumeInfo.authors,
//                 "publishedDate": book.volumeInfo.publishedDate,
//                 "description": book.volumeInfo.description,
//                 "pageCount": book.volumeInfo.pageCount,
//                 "categories": book.volumeInfo.categories,
//                 "thumbnail": book.volumeInfo.imageLinks.thumbnail,
//                 "language": book.volumeInfo.language,
//                 "listPrice": book.saleInfo.listPrice
//             }
//         })
//         .then(addedBook => {
//             if (!addedBook.saleInfo) addedBook.listPrice = {
//                 "amount": 109,
//                 "currencyCode": "EUR",
//                 "isOnSale": true
//             }
//             gBooks.unshift(addedBook)
//             storageService.store(BOOKS_KEY, gBooks)
//             return addedBook;
//         })
// }

var gEmails = [{
        "id": "OXeMG8wNskc",
        "subject": " with Vue?",
        "body": "May I",
        "isRead": false,
        "sentAt": 1551133930594
    },
    {
        "id": "OXeMG8wNtjk",
        "subject": "sadglkjdslgjasdgl?",
        "body": "sadgsdagsdag",
        "isRead": false,
        "sentAt": 1551133930596
    }
];