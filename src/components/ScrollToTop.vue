<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<template>
    <div class="fixed bottom-7 right-7 z-20 flex items-center gap-2 max-[878px]:bottom-20 scroll-box">
        <p class="text-sm text-gray-500 scroll-top">Top</p>
        <div class="bg-[#2B3445] text-white rounded-[50%] p-2 hover:bg-[#373F50]">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"/></svg>
        </div>
    </div>
</template>

<style>
.scroll-top{
    display: none;
}
.scroll-box:hover .scroll-top{
    display: flex;
}
</style>