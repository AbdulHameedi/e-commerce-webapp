<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'
import StickyMenu from './StickyMenu.vue'

export default defineComponent({
    components:{
        NavBar,
        StickyMenu
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
    <StickyMenu />
    <NavBar />
</template>