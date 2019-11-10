import emailApp from './pages/email-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import noteEdit from './pages/note-edit.cmp.js';

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep/:noteId',
        component: noteEdit 

    },
];

const router = new VueRouter({ routes });
export default router;