'use strict';

import {eventBus} from '../services/eventbus-service.js'

export default {
    name: 'toolbar',
    props: ['note'],
    template: `
        <section class="toolbar">
            <button class="remove-btn" @click="emitRemove">X</button>
            <button v-if="!isShown" @click="openInput"><i class="far fa-edit"></i></button>
            <input v-if="isShown" type="text" placeholder="Edit" class="text-input" v-model="note.copydata" @keyup.enter="emitChangeData">
            <input :id="note.id" class="color-input" @change="emitChangeColor" type="color" />
            <label :for="note.id"><i class="fas fa-palette"></i></label>
            <button @click="emitTogglePin" :class="{glow: note.isPinned}"><i class="fas fa-thumbtack"></i></button>    
        </section>
    `,
    methods:{
        emitRemove() {
            eventBus.$emit('remove',this.note)
        },
        emitChangeColor() {
            eventBus.$emit('changeColor',this.note)
        },
        emitChangeData(){
            this.isShown = false;
            eventBus.$emit('changeData',this.note)
        },
        emitTogglePin(){
            eventBus.$emit('togglePin',this.note)
        },
        openInput(){
            this.isShown = true;
        }
    },
    data(){
        return{
            isShown: false
        }
    }
}