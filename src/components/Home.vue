<script>
import { defineComponent } from 'vue';

export default defineComponent({
    mounted(){
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name: 'Account'})
        }
    }
})
</script>
<template>
    This ishome
</template>