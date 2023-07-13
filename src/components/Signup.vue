<script>
import { defineComponent } from 'vue';

export default defineComponent({
    
})
</script>
<template>
    <form>
    <div class="bg-white px-6 py-6">
            <div class="flex flex-col gap-2 mb-4">
                <label class="text-[#4B566B] font-semibold text-[15px]" for="name">Full name</label>
                <input id="email" class="border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" type="text" placeholder="John Doe">
            </div>
            <div class="flex flex-col gap-2 mb-4">
                <label class="text-[#4B566B] font-semibold text-[15px]" for="email">Email address</label>
                <input id="email" class="border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" type="email" placeholder="johndoe@example.com">
            </div>
            <div class="flex flex-col gap-2 mb-4">   
                <label class="text-[#4B566B] font-semibold text-[15px]" for="password">Password</label>
                <div class="flex items-center w-full relative">
                    <input class="w-full border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" type="password">
                    <svg class="text-gray-500 rounded-r-md absolute right-[15px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                </div>
            </div>
            <div class="flex flex-col gap-2 mb-4">   
                <label class="text-[#4B566B] font-semibold text-[15px]" for="password">Confirm password</label>
                <div class="flex items-center w-full relative">
                    <input class="w-full border-[1px] rounded-md p-3 focus:outline-none focus:border-[#FE696A]" type="password">
                    <svg class="text-gray-500 rounded-r-md absolute right-[15px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"/></svg>
                </div>
            </div>
            <div>
                <button class="bg-[#FE696A] text-white py-3 w-full rounded-md">Sign up</button>
            </div>
    </div>
    </form>
</template>