<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            trending: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    }
})
</script>
<template>
    <div class="bg-white px-[4rem]">
        <p class="text-3xl text-[#373F50] font-semibold text-center">Trending products</p>
        <template class="grid grid-cols-4 gap-2 py-8">
            <div v-for="i in trending" :bind="i">
                <div class="trending relative bg-white hover:shadow-xl p-2 rounded-md h-fit">
                    <div class="absolute w-fit bg-gray-200 text-gray-500 p-2 rounded-[50%] right-6">
                        <svg class="hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
                        <!-- <p class="absolute bg-[#373F50] rounded-md">Add to wishlist</p>
                        <p class="bg-[#373F50] w-[10px] h-[10px] translate-20"></p> -->
                    </div>
                    <div class="flex justify-center">
                        <img class="w-[180px] h-[180px]" src="../assets/shoes.jpg" alt="">
                    </div>
                    <div class="mb-4">
                        <p class="text-sm text-gray-500">Sneakers & Keds</p>
                        <p>Women Colorblock Sneakers</p>
                    </div>
                    <div class="flex justify-between mb-2">
                        <p class="text-blue-300">$154.<small>00</small></p>
                        <div class="flex items-center">
                            <svg class="text-orange-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                            <svg class="text-orange-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                            <svg class="text-orange-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                            <svg class="text-orange-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                            <svg class="text-orange-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                        </div>
                    </div>
                    <div class="sub-trending">
                        <div class="flex gap-2 text-sm justify-center mb-4">
                            <p class="w-fit border p-1 px-2 text-gray-400 rounded-md">XS</p>
                            <p class="w-fit border p-1 px-2 text-gray-400 rounded-md">S</p>
                            <p class="w-fit border p-1 px-2 text-gray-400 rounded-md">M</p>
                            <p class="w-fit border p-1 px-2 text-gray-400 rounded-md">L</p>
                        </div>
                        <div class="text-white bg-[#FE696A] flex gap-1 items-center text-[15px] justify-center p-[7px] rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"/></svg>
                            <p>Add to Cart</p>
                        </div>
                        <div class="text-gray-500 font-semibold flex gap-1 items-center text-[15px] justify-center p-[7px] hover:text-red-500 transition duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
                            <p>Quick view</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<style>
.sub-trending{
    display: none;
}
.trending:hover .sub-trending{
    display: block;
}
.trending:hover{
    height: 400px;
    z-index: 2;
}
</style>