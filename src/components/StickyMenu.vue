<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<template>
    <div class="fixed bottom-0 w-full bg-white py-2 flex justify-around z-20 hidden max-[878px]:flex">
        <div class="flex items-center flex-col w-[33.3%] border-r">
            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
            <p class="text-sm text-gray-500">Wishlist</p>
        </div>
        <div class="flex items-center flex-col w-[33.3%] border-r">
            <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-500">Menu</p>
        </div>
        <div class="flex items-center flex-col w-[33.3%]">
            <div class="flex items-center">
                <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7.3 21q-.95 0-1.625-.688T5 18.675V9.4L3.175 5H2q-.425 0-.713-.288T1 4q0-.425.288-.713T2 3h1.85q.3 0 .55.175t.375.45L6.175 7H20.95q.575 0 .875.475t.025.975L19 14.025q1.275.2 2.138 1.175T22 17.5q0 1.45-1.012 2.475T18.524 21q-1.475 0-2.487-1.025T15.025 17.5q0-.5.125-.925t.35-.825l-3.275-.3l-3 4.5q-.325.5-.838.775T7.3 21Zm9.55-7.125L19.325 9L7 9.025L8.25 12q.2.5.638.838t1.012.387l6.95.65Zm-9.525 5.1q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.587T7 13.7v5q0 .125.1.2t.225.075ZM18.5 19q.65 0 1.075-.438T20 17.5q0-.65-.425-1.075T18.5 16q-.625 0-1.063.425T17 17.5q0 .625.438 1.063T18.5 19Zm-1.65-5.125l-6.95-.65l6.95.65Z"/></svg>
                <p class="w-fit text-[11px] bg-[#FE696A] rounded-[50%] px-1 text-white">4</p>
            </div>
            <p class="text-sm text-gray-500">$265.00</p>
        </div>
    </div>
</template>