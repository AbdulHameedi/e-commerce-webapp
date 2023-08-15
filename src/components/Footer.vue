<script>
import { defineComponent } from 'vue'

export default defineComponent({

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
                    <div class="w-fit flex gap-2 text-white bg-[#212836] rounded-md p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/><path d="M9 20.027c-3 .973-5.5 0-7-3"/></g></svg>
                        <div>
                            <p class="text-[12px] text-gray-400 font-semibold">Visit on</p>
                            <p>GitHub Pages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>