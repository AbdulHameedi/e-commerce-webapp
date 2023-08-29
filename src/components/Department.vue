<script>
import { defineComponent  } from 'vue'

export default defineComponent({
    props: [
        'heading',
        'typeOne',
        'typeTwo',
    ]
})
</script>
<template>
    <div>
        <div class="mb-3">
            <img src="../assets/women-attire.jpg" class="rounded-md" alt="">
        </div>
        <p class="text-[#373F50] mb-3 font-semibold">{{ heading }}</p>
        <div class="text-sm flex flex-col gap-1 text-gray-500">
            <p class="hover:text-red-500 transition duration-500">{{ typeOne }}</p>
            <p class="hover:text-red-500 transition duration-500">{{ typeTwo }}</p>
            <p class="hover:text-red-500 transition duration-500">Kid's clothing</p>
        </div>
    </div>
</template>