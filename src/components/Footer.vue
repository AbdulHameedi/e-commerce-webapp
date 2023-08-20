<script>
import { defineComponent } from 'vue'
import useProductStore from '../stores/store';

export default defineComponent({
    data(){
        return{
            currency: useProductStore().$state.currency
        }
    }
})
</script>
<template>
    <div class="px-[4rem] bg-[#373F50] w-full py-10 max-[979px]:px-[1rem]">
        <div class="grid grid-cols-2 gap-4 max-[979px]:grid-cols-1">
            <div class="flex justify-between gap-4 max-[617px]:flex-col">
                <div>
                    <p class="text-white font-semibold text-lg mb-4">Shop departments</p>
                    <div class="flex flex-col gap-2 text-gray-400 font-semibold text-[14.1px]">
                        <p>Sneakers & Athletic</p>
                        <p>Athletic Apparel</p>
                        <p>Sandals</p>
                        <p>Jeans</p>
                        <p>Shirts & Tops</p>
                        <p>Shorts</p>
                        <p>T-Shirts</p>
                        <p>Swimwear</p>
                        <p>Clogs & Mules</p>
                        <p>Bags & Wallet</p>
                        <p>Swimwear</p>
                    </div>
                </div>
                <div>
                    <div class="mb-7">
                        <p class="text-white font-semibold text-lg mb-4">Account & Shipping Info</p>
                        <div class="flex flex-col gap-2 text-gray-400 font-semibold text-[14.1px]">
                                <p>Sneakers & Athletic</p>
                                <p>Athletic Apparel</p>
                                <p>Sandals</p>
                                <p>Jeans</p>
                                <p>Shirts & Tops</p>
                        </div>
                    </div>
                        <div>
                            <p class="text-white font-semibold text-lg mb-4">About us</p>
                            <div class="flex flex-col gap-2 text-gray-400 font-semibold text-[14.1px]">
                                <p>About company</p>
                                <p>Our team</p>
                                <p>Careers</p>
                                <p>News</p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="justify-self-end max-[979px]:justify-self-auto">
                <div class="mb-6">
                    <p class="text-white font-semibold text-lg mb-4">Stay informed</p>
                    <form>
                        <div class="relative mb-2 flex">
                            <input class="max-[979px]:w-full outline-none px-6 rounded-l-md py-3 pl-10" type="email" placeholder="Your email" name="" id="">
                            <button type="submit" class="rounded-r-md bg-red-400 text-white px-6 py-3 hover:bg-red-500">Subscribe</button>
                            <svg class="absolute top-3 left-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33ZM103.63 152L36 199.76v-96Zm8.19 4h32.36l68 48H43.86Zm40.55-4L220 103.76v96ZM128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11Z"/></svg>
                        </div>
                    </form>
                    <p class="text-gray-400 text-[12px] font-semibold max-w-sm">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
                </div>
                <div>
                    <p class="text-white font-semibold text-lg mb-4">Visit my portfolio</p>
                    <a href="https://abdulhameedi.github.io/portfolio_june_23/" target="_blank">
                    <div class="w-fit flex gap-2 text-white bg-[#2B3445] transition duration-500 hover:bg-[#212835] rounded-md p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/><path d="M9 20.027c-3 .973-5.5 0-7-3"/></g></svg>
                        <div>
                            <p class="text-[12px] text-gray-400 font-semibold">Visit on</p>
                            <p>GitHub Pages</p>
                        </div>
                    </div></a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#2B3445] px-[4rem] w-full py-10 max-[1161px]:px-[1rem]">
        <div class="grid grid-cols-4 border-b border-gray-500 pb-12 max-[635px]:grid-cols-1 max-[1161px]:grid-cols-2 max-[1161px]:gap-8">
            <div class="flex gap-3 items-center">
                <svg class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="M215.52 197.26a8 8 0 0 1-1.86 8.39l-24 24A8 8 0 0 1 184 232a7.09 7.09 0 0 1-.79 0a8 8 0 0 1-5.87-3.52l-44.07-66.12L112 183.59V208a8 8 0 0 1-2.34 5.65s-14 14.06-15.88 15.88a7.91 7.91 0 0 1-2.78 1.88a8 8 0 0 1-10.41-4.35l-.06-.15l-14.7-36.76L29 175.42a8 8 0 0 1-2.69-13.08l16-16A8 8 0 0 1 48 144h24.4l21.27-21.27l-66.11-44.08a8 8 0 0 1-1.22-12.32l24-24a8 8 0 0 1 8.39-1.86l85.94 31.25l31.53-31.53a28 28 0 0 1 39.6 39.6l-31.53 31.53Z"/></svg>
                <div>
                    <p class="text-white font-semibold text-lg">Fast and free delivery</p>
                    <p class="text-sm text-gray-400 font-semibold text-[12px]">Free delivery for all orders over $200</p>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <svg class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-3.5-6h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2Z"/></svg>
                <div>
                    <p class="text-white font-semibold text-lg">Money back guarantee</p>
                    <p class="text-sm text-gray-400 font-semibold text-[12px]">We return money within 30 days</p>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <svg class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><g fill="currentColor"><path d="M80 144v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56h32a16 16 0 0 1 16 16Zm112-16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h32v-72Z" opacity=".2"/><path d="M201.89 54.66A104.08 104.08 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36a88.12 88.12 0 0 1 150.18-54.07A87.39 87.39 0 0 1 215.65 120H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h24a24 24 0 0 1-24 24h-56a8 8 0 0 0 0 16h56a40 40 0 0 0 40-40v-80a103.41 103.41 0 0 0-30.11-73.34ZM64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm128 56a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24v56Z"/></g></svg>
                <div>
                    <p class="text-white font-semibold text-lg">24/7 customer support</p>
                    <p class="text-sm text-gray-400 font-semibold text-[12px]">Friendly 24/7 customer support</p>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <svg class="text-red-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6v12q0 .825-.588 1.413T20 20H4q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6ZM4 8h16V6H4v2Zm0 4v6h16v-6H4Zm0 6V6v12Z"/></svg>
                <div>
                    <p class="text-white font-semibold text-lg">Secure online payment</p>
                    <p class="text-sm text-gray-400 font-semibold text-[12px]">We possess SSL / Secure certificate</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div></div>
            <div></div>
        </div>
    </div>
</template>