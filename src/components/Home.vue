<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'
import StickyMenu from './StickyMenu.vue'
import Footer from './Footer.vue';

export default defineComponent({
    components:{
        NavBar,
        StickyMenu,
        Footer
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
    <Footer />
</template>