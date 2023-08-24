<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'
import StickyMenu from './StickyMenu.vue'
import Footer from './Footer.vue';
import ScrollToTop from './ScrollToTop.vue';

export default defineComponent({
    components:{
        NavBar,
        StickyMenu,
        Footer,
        ScrollToTop
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
    <a href="#to-top"><ScrollToTop /></a>
    <StickyMenu />
    <NavBar id="to-top"/>
    <Footer />
</template>
<style>
html{
    scroll-behavior: smooth;
}
</style>