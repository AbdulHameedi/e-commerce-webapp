<script>
import { defineComponent  } from 'vue'

export default defineComponent({
    props: [
        'heading',
        'typeOne',
        'typeTwo',
        'depImg'
    ]
})
</script>
<template>
    <div>
        <div class="mb-3">
            <img :src="depImg" class="rounded-md" alt="">
        </div>
        <p class="text-[#373F50] mb-3 font-semibold">{{ heading }}</p>
        <div class="text-sm flex flex-col gap-1 text-gray-500">
            <p>{{ typeOne }}</p>
            <p>{{ typeTwo }}</p>
            <p>Kid's clothing</p>
        </div>
    </div>
</template>