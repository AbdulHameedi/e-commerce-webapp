<script>
import { defineComponent } from 'vue';
import Signin from './Signin.vue'
import Signup from './Signup.vue'

export default defineComponent({
    components: {Signin , Signup},
    data(){
        return{
            accountComponent: 'Signin',
            active: true
        }
    },
    methods: {
        signIn(){
            this.accountComponent = 'Signin'
            this.active = true
        },
        signUp(){
            this.accountComponent = 'Signup'
            this.active = false
        }
    }
})
</script>
<template>
    <div class="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-[url('../assets/bg-account.png')]">
        <p class="overlay fixed top-0 bottom-0 w-full bg-black opacity-50"></p>
        <div class="bg-white w-[500px] rounded-md shadow-xl relative">
        <div class="bg-[#F6F9FC] border-b-[1px] w-full h-[60px] pb-2 px-6 flex gap-8 pt-[1rem] rounded-t-md">
            <div class="relative cursor-pointer flex font-semibold items-center gap-2 text-lg transition duration-300 ease-in hover:text-[#FE696A]" @click="signIn" :class="active? 'text-[#FE696A]': 'text-[#4B566B]'">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"/></svg>
                <p>Sign in</p>
                <p class="absolute bottom-[-9px] bg-[#FE696A] w-[4.9rem] h-[1px]" v-if="active"></p>
            </div>
            <div class="relative cursor-pointer flex font-semibold items-center gap-2 text-lg text-[#4B566B] transition duration-300 ease-in hover:text-[#FE696A]" @click="signUp" :class="!active? 'text-[#FE696A]': 'text-[#4B566B]'">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm6 8H6q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20ZM6 18h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6-8q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0-2Zm0 10Z"/></svg>
                <p>Sign up</p>
                <p class="absolute bottom-[-9px] bg-[#FE696A] w-[4.9rem] h-[1px]" v-if="!active"></p>
            </div>
        </div>
        <!--  -->
        <div>
        <component :is="accountComponent"></component>
        </div>
        </div>
    </div>
</template>