<script>
import { defineComponent } from 'vue';
import { Form, Field , ErrorMessage } from 'vee-validate'
import { validate } from 'vee-validate';
import axios from 'axios';

export default defineComponent({
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data(){
        return{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            typePassword: 'password',
            typeConfirmPassword: 'password',
        }
    },
    methods: {
        validateName(value){
            if(value && value.trim()){
                return true
            }
            return 'This field is required'
        },
        validateEmail(value){
            if(!value){
                return 'This field is required';
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            return true;
        },
        validatePassword(value){
            if(!value){
                return 'This field is required';
            }
            if(value.length < 6){
                return 'Passowrd is weak'
            }
            return true;
        },
        validateConfirmPassword(value){
            if(!value){
                return 'This field is required';
            }
            if(value !== this.password){
                return 'Passwords do not match'
            }
            return true
        },
         async handleSubmit(){
            this.validateName()
            this.validateEmail()
            this.validatePassword()
            this.validateConfirmPassword()
            if(this.validateName && this.validateEmail && this.validatePassword && this.validateConfirmPassword){
                let result = await axios.post("http://localhost:3000/users" , {
                    username: this.name,
                    email: this.email,
                    password: this.password
                });
                if(result.status == 201){
                    localStorage.setItem("user-info" , JSON.stringify(result.data))
                    this.$router.push({name: 'Home'})
                }
            }
        }
    }
})
</script>
<template>
    <Form @submit="handleSubmit">
    <div class="bg-white px-6 py-6">
            <div class="flex flex-col gap-2 mb-4">
                <label class="text-[#4B566B] font-semibold text-[15px]" for="name">Username</label>
                <Field
                    name="name"
                    id="email" 
                    class="border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" 
                    type="text" 
                    placeholder="John Doe"
                    v-model="name" 
                    :rules="validateName"/>
                    <ErrorMessage name="name" class="text-[13px] text-red-500" />
            </div>
            <div class="flex flex-col gap-2 mb-4">
                <label class="text-[#4B566B] font-semibold text-[15px]" for="email">Email address</label>
                <Field
                    name="email" 
                    id="email" 
                    class="border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    v-model="email" 
                    :rules="validateEmail" />
                    <ErrorMessage name="email" class="text-[13px] text-red-500" />
            </div>
            <div class="flex flex-col gap-2 mb-4">   
                <label class="text-[#4B566B] font-semibold text-[15px]" for="password">Password</label>
                <div class="flex items-center w-full relative">
                    <Field
                        name="password"
                        id="password" 
                        class="w-full border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" 
                        :type="typePassword" 
                        v-model="password"
                        :rules="validatePassword"/>
                        <div v-if="typePassword === 'password'" class="rounded-r-md absolute right-[15px]" @click="typePassword = 'text'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                            <p class="bg-gray-500 w-[21px] h-[2px] rotate-12 absolute top-[9px]"></p>
                        </div>
                        <div v-if="typePassword === 'text'" class="rounded-r-md absolute right-[15px]" @click="typePassword = 'password'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                        </div>
                </div>
                    <ErrorMessage name="password" class="text-[13px] text-red-500" />
            </div>
            <div class="flex flex-col gap-2 mb-4">   
                <label class="text-[#4B566B] font-semibold text-[15px]" for="confirmPassword">Confirm password</label>
                <div class="flex items-center w-full relative">
                    <Field
                        name="confirmPassword" 
                        id="confirmPassword"
                        class="w-full border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" 
                        :type="typeConfirmPassword" 
                        v-model="confirmPassword"
                        :rules="validateConfirmPassword"/>
                        <div v-if="typeConfirmPassword === 'password'" class="rounded-r-md absolute right-[15px]" @click="typeConfirmPassword = 'text'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                            <p class="bg-gray-500 w-[21px] h-[2px] rotate-12 absolute top-[9px]"></p>
                        </div>
                        <div v-if="typeConfirmPassword === 'text'" class="rounded-r-md absolute right-[15px]" @click="typeConfirmPassword = 'password'">
                            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                        </div>
                </div>
                    <ErrorMessage name="confirmPassword" class="text-[13px] text-red-500" />
            </div>
            <div>
                <button type="submit" class="bg-[#FE696A] text-white py-3 w-full rounded-md">Sign up</button>
            </div>
    </div>
    </Form>
</template>