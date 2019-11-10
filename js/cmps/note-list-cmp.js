'use strict'

import notePreview from './note-preview.cmp.js'
import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import videoNote from './video-note.cmp.js'
import todoNote from './todo-note.cmp.js'

import {KeepService} from '../services/keep-service.js'
import {eventBus} from '../services/eventbus-service.js'



export default {
    name: 'note-list',
    props: ['notes'],
    template:`
        <section class="note-list-container">
            <!-- <note-preview v-for="currNote in notes" 
                            :note="currNote" 
                            @click.native="onSelectNote(currNote.id)" 
                            :key="currNote.id" /> -->
            <component v-for="currNote in notes" 
                        class="note-preview-container" :style="{'background-color': currNote.color}"
                        :is="currNote.type"
                        :key="currNote.id" 
                        @removeNote="onRemoveNote(currNote.id)"
                        @editData="onEditData(currNote)"
                        @changeColor="onChangeColor(currNote)" 
                        @togglePinNote="onTogglePinNote(currNote)"
                        :note="currNote" />
        </section>
    `, 
    components:{
        notePreview,
        textNote,
        imgNote,
        videoNote,
        todoNote
        
    },
    created(){
        eventBus.$on('remove', (note) => {
            console.log("got it!" , note)
            KeepService.removeNote(note.id)
        }),
        eventBus.$on('changeColor', note => {
            note.color = event.target.value
            this.$emit('updateNotes', note);
        }),
        eventBus.$on('changeData', note => {
            note.data = event.target.value
            this.$emit('updateNotes', note);
        }),
        eventBus.$on('togglePin', note => {
            console.log(note)
            if(note.isPinned === false){
                KeepService.pinNote(note);
            } else {
                KeepService.unpinNote(note);
            }
        })


        
    }
}



