'use strict'


export default {
    name: 'edit-note',
    template:`
        <section>
            <h1>ssss</h1>
        </section>
    `,
    data(){
        // return {
        //     noteToEdit: 
        // }
    }
}



// import {eventBus} from '../services/event-bus.service.js'
// import {dogService} from '../services/dog.service.js';



// export default {
//     name: 'DogEdit',
//     template: `
//         <section class="dog-edit container">
//             <h3>Dog Add/Edit</h3>
//             <form @submit.prevent="saveDog">
//                 <input ref="inputDogName" type="text" placeholder="New Dog Name" v-model.trim="dogToEdit.name" />
//                 <input ref="inputDogWeight" type="number" placeholder="New Dog Weight" v-model.number="dogToEdit.weight" />
//                 <input type="url" placeholder="New Dog URL" v-model="dogToEdit.url" />
                
//                 <input type="checkbox" value="Puncho" v-model="dogToEdit.nickNames" />  Punchu
//                 <input type="checkbox" value="Shoko" v-model="dogToEdit.nickNames" /> Shoko


//                 <select v-model="dogToEdit.features" multiple>
//                     <option>Bark</option>
//                     <option>Eat</option>
//                     <option>Sleep</option>
//                 </select>

//                 <input type="radio" value="M" v-model="dogToEdit.gender"> Male
//                 <input type="radio" value="F" v-model="dogToEdit.gender"> Female
//                 <textarea placeholder="Dog's Bio" v-model="dogToEdit.bio" @keyup.ctrl.delete="bioClear">
//                 </textarea>
                
//                 <button :disabled="!dataIsValid">Add</button>
//             </form>
//             <pre>{{dogToEdit}}</pre>
            
//         </section>
    
//     `,
//     data() {
//         return {
//             dogToEdit : dogService.getEmptyDog()
//         }
//     },
//     created() {
//         const dogId = this.$route.params.id;
//         if (dogId) {
//             dogService.getDogById(dogId)
//             .then(dog => this.dogToEdit = dog)
//         }
//     },
//     mounted() {
//         // var el = document.querySelector('#dog-name');
//         // console.log('el', el);
//         // el.focus();
//         console.log('this.$refs', this.$refs);
//         this.$refs.inputDogName.focus();

//     },
//     methods: {
//         saveDog() {
//             dogService.saveDog(this.dogToEdit)
//                 .then(savedDog => {
//                     const msg = {
//                         txt: `${savedDog.name} Saved Succefully`,
//                         type: 'success'
//                     }
//                     eventBus.$emit('show-msg', msg);
//                     // alert('Success! id:' + savedDog.id);
//                     this.$router.push('/dog');
//                 })
//                 .catch(err => {
//                     const msg = {
//                         txt: `NOT Saved (${err})`,
//                         type: 'error'
//                     }
//                     eventBus.$emit('show-msg', msg);
//                 })
//         },
//         bioClear(ev) {
//             this.dogToEdit.bio = '';
//         }
//     },
//     computed: {
//         dataIsValid() {
//             return !!this.dogToEdit.name && 
//                     this.dogToEdit.nickNames.length > 0;
//         }
//     }
// }