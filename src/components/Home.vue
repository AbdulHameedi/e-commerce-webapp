<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'

export default defineComponent({
    components:{
        NavBar
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name: 'Account'})
        }
    }
})
</script>
<template>
    <NavBar />
</template>