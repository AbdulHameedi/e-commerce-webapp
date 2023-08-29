<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            heroSection: [
                {
                    id: 0,
                    first: 'Complete your look with',
                    second: 'New Men Accessories',
                    third: 'Hats & Caps, Sunglasses, Bags & much more...'
                },
                {
                    id:1,
                    first: 'Hurry up! Limited time offer',
                    second: 'Women Sportswear Sale',
                    third: 'Sneakers, Keds, Sweatshirts, Hoddies & much more'
                },
                {
                    id: 2,
                    first: 'Has just arrived',
                    second: 'Huge Summer Collection',
                    third: 'Swimwear, Tops, Shorts, Sunglasses & much more...'
                },

            ],
            currentHero: 0
        }
    },
    methods: {
        incCurrentHero(){
            this.currentHero++
            if(this.currentHero == this.heroSection.length){
                this.currentHero = 0
            }
        },
        decCurrentHero(){
            this.currentHero--
            if(this.currentHero  == -1){
                this.currentHero = this.heroSection.length-1
            }
        }   
    }
})
</script>
<template>
    <div>
        <div class="hero-section relative flex justify-between max-[1224px]:flex-col max-[1224px]:gap-20 max-[1224px]:items-center max-[1224px]:flex-col-reverse bg-[#EBA170] pl-[6rem] max-[1224px]:pb-10 max-[1224px]:pl-0 z-30">
            <!-- control buttons -->
            <div @click="incCurrentHero" class="text-gray-500 max-[1224px]:hidden control-button transition duration-500 absolute right-8 bg-white w-fit p-4 rounded-[50%] top-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/></svg>
            </div>
            <div @click="decCurrentHero" class="text-gray-500 max-[1224px]:hidden control-button transition duration-500 absolute absolute left-8 bg-white w-fit p-4 rounded-[50%] top-[50%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L9.55 12Z"/></svg>
            </div>
            <!-- responsive control button -->
            <div class="absolute bottom-[-2rem] items-center gap-2 left-[50%] z-20 hidden max-[1224px]:flex">
                <p class="rounded-md" @click="currentHero = 0" :class="currentHero == 0 ? 'w-[17px] h-[5px] bg-red-500': 'w-[5px] h-[5px] bg-gray-500'"></p>
                <p class="rounded-md" @click="currentHero = 1" :class="currentHero == 1 ? 'w-[17px] h-[5px] bg-red-500': 'w-[5px] h-[5px] bg-gray-500'"></p>
                <p class="rounded-md" @click="currentHero = 2" :class="currentHero == 2 ? 'w-[17px] h-[5px] bg-red-500': 'w-[5px] h-[5px] bg-gray-500'"></p>
            </div>
    
            <div class="pt-40 max-[1224px]:pt-0 text-white w-[45%] max-[1224px]:w-full max-[1224px]:flex max-[1224px]:flex-col max-[1224px]:items-center max-[637px]:px-6">
                <div class="max-[1224px]:flex max-[1224px]:flex-col max-[1224px]:items-center" v-for="(heroSection , index) in heroSection" v-bind="heroSection.id">
                    <template v-if="index == currentHero">
                        <p class="max-[637px]:text-2xl max-[637px]:text-center text-4xl mb-6">{{ heroSection.first }}</p>
                        <p class="max-[637px]:text-3xl max-[637px]:text-center font-semibold text-5xl mb-6">{{ heroSection.second }}</p>
                        <p class="max-[637px]:text-lg max-[637px]:text-center mb-6 text-xl">{{ heroSection.third }}</p>
                    </template>
                </div>
                <div class="cursor-pointer flex gap-2 items-center bg-[#FE696A] w-fit rounded-md p-3 px-5 transition duration-200 hover:bg-red-500">
                    <p>Shop now</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/></svg>
                </div>
            </div>
            <div class="w-[55%] max-[1224px]:w-full max-[1224px]:flex max-[1224px]:justify-center">
                <img src="../assets/boy-hero.jpg" alt="hero-img" v-if="currentHero == 0">
                <img src="../assets/hero-2.png" alt="hero-img" v-if="currentHero == 1">
                <img src="../assets/hero-3.png" alt="hero-img" v-if="currentHero == 2">
            </div>
        </div>
        <div class="bg-white px-[1rem] py-[4rem] min-[1224px]:px-[4rem]">
            <div class="bg-white shadow-lg p-6 grid grid-cols-3 rounded-md gap-5 max-[511px]:grid-cols-1 min-[1224px]:w-[65%] min-[1224px]:mt-[-150px] relative z-40">
                <div>
                    <img class="mb-5" src="../assets/men.jpg" alt="">
                    <p class="text-center font-semibold">Men</p>
                </div>
                <div>
                    <img class="mb-5" src="../assets/women.jpg" alt="">
                    <p class="text-center font-semibold">Women</p>
                </div>
                <div>
                    <img class="mb-5" src="../assets/kids.jpg" alt="">
                    <p class="text-center font-semibold">Kids</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.control-button{
    opacity: 0;
}
.hero-section:hover .control-button{
    opacity: 1;
}
</style>