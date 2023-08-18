<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            typePassword: 'password',
            showWarning: false,
            email: '',
            password: ''
        }
    },
    methods: {
        async submit(){
            let result = await axios.get(
                `https://ecommerce-0hgp.onrender.com/users?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-info" , JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})
            }
            else{
                this.showWarning = true
            }
        }
    }
})
</script>
<template>
    <form>
    <div class="bg-white px-6 py-6">
            <div class="flex flex-col gap-2 mb-6">
                <label class="text-[#4B566B] font-semibold text-[15px]" for="email">Email address</label>
                <input v-model="email" id="email" class="border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" type="email" placeholder="johndoe@example.com">
            </div>
            <div class="flex flex-col gap-2 mb-6">   
                <label class="text-[#4B566B] font-semibold text-[15px]" for="password">Password</label>
                <div class="flex items-center w-full relative">
                    <input v-model="password" id="password" class="w-full border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" :type="typePassword">
                    <div v-if="typePassword === 'password'" class="rounded-r-md absolute right-[15px]" @click="typePassword = 'text'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                            <p class="bg-gray-500 w-[21px] h-[2px] rotate-12 absolute top-[9px]"></p>
                        </div>
                        <div v-if="typePassword === 'text'" class="rounded-r-md absolute right-[15px]" @click="typePassword = 'password'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                        </div>
                </div>
                <p v-if="showWarning" class="text-[13px] text-red-500">User is not registered. Sign up</p>
            </div>
            <div>
                <button @click.prevent="submit" type="submit" class="bg-[#FE696A] text-white py-3 w-full rounded-md">Sign in</button>
            </div>
    </div>
    </form>
</template>