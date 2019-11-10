'use strict';

import toolBar from './toll-bar.cmp.js';

export default {
    name: 'img-note',
    props: ['note'],
    template: `
        <section class="img-note box" :class="{ pinBox: note.isPinned }">
            <iframe :src="note.data" ></iframe>
            <!-- <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
            <button @click="$emit('togglePinNote')" >pin</button> -->
            <tool-bar :note="note"></tool-bar>
        </section>
    `,
    components:{
        toolBar
    }
}




