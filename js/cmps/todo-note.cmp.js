'use strict';
 
import toolBar from './toll-bar.cmp.js';

export default {
    name: 'todo-note', 
    props: ['note'],
    template: `
        <section class="todo-note box"  :class="{ pinBox: note.isPinned }" >
            <div v-for="todo in note.data">
                <h3 :class="{ marked: todo.isDone }" @click="toggleIsDone(todo)">{{todo.txt}}</h3> 
            </div>
            <!-- <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
            <button @click="$emit('togglePinNote')" >pin</button> -->
            <tool-bar :note="note"></tool-bar>
        </section>
        
    `,
    methods: {
        toggleIsDone(todo) {
            var isDone = !todo.isDone
            todo.isDone = isDone
        }
    },
    components:{
        toolBar
    }

}  





