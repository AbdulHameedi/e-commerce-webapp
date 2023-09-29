<script>
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue'
import StickyMenu from './StickyMenu.vue'
import Footer from './Footer.vue';
import ScrollToTop from './ScrollToTop.vue';
import HeroSection from './HeroSection.vue';
import TrendingProduct from './TrendingProduct.vue';

export default defineComponent({
    components:{
        NavBar,
        StickyMenu,
        Footer,
        ScrollToTop,
        HeroSection,
        TrendingProduct
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
    <HeroSection />
    <TrendingProduct />
    <Footer />
</template>
<style>
html{
    scroll-behavior: smooth;
}
</style>