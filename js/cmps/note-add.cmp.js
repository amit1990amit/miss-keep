'use strict';


export default {
    name: 'note-add',
    template:`
        <section class="note-add">
            <input type="text" :placeholder="shownPlaceholder" v-model="note.data" @keyup.enter="addNote"/>
            <button @click="changeNoteType('text-note')"><i class="fas fa-font"></i></button>
            <button @click="changeNoteType('img-note')"><i class="fas fa-image"></i></button>
            <button @click="changeNoteType('video-note')"><i class="fab fa-youtube"></i></button>
            <button @click="changeNoteType('todo-note')"><i class="fas fa-list-ul"></i></button>
        </section>
    `,
    data() {
        return {
            note:{
                data:'',
                type:'text-note'
            }
        }
    },
    methods:{
        addNote(){
            let note = {...this.note};
            this.$emit('added', note);
        },
        changeNoteType(type){
            this.note.type = type,
            this.note.data = ''

        }
    },
    computed: {
        shownPlaceholder() {
            if (this.note.type === 'img-note') return `Enter image URL`;
            if (this.note.type === 'video-note') return `Enter video URL`;
            if (this.note.type === 'todo-note') return `Enter comma separated list`;
            else return `What's on your mind?`
        }
    },
    mounted() {
        this.changeNoteType('textNote')
    }
}

