'use strict';

import toolBar from './toll-bar.cmp.js';

export default {
    name: 'text-note',
    props: ['note'],
    template: `
        <section class="text-note box" :class="{ pinBox: note.isPinned }">
            <h2>{{note.data}}</h2>
            <!-- <div class="toolbar"> 
                <button class="remove-btn" @click="$emit('removeNote')">X</button>
                <input type="text" class="text-input" @keyup.enter="$emit('editData')">
                <input class="color-input" @change="$emit('changeColor')" type="color"/>
                <button @click="$emit('togglePinNote')" :class="{ glow: note.isPinned }">pin</button> 
            </div> -->
            <tool-bar :note="note"></tool-bar>
        </section>
    `,
    components:{
        toolBar
    }
}