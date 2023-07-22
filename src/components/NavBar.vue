<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            headers: [
                'Friendly 24/7 customer support',
                'Free shipping for order over $200',
                'We return money within 30 days'
            ],
            currentHeader: 0,
            country: 'NG / N',
            currency: 'NGN',
            showCurrency: false,
            showUsefulLink: false
        }
    },
    methods: {
        incHeader(){
            this.currentHeader++
            if(this.currentHeader >= this.headers.length-1){
                this.currentHeader = 0
            }
        },
        decHeader(){
            this.currentHeader--
            if(this.currentHeader <= -1){
                this.currentHeader = 2
            }
        },
        currencyShow(){
            this.showCurrency = !this.showCurrency
        },
        usefulLinkShow(){
            this.showUsefulLink = !this.showUsefulLink
        }
    },
    watch: {
        currency() {
            if(this.currency == 'NGN'){
                this.country = 'NG / N'
            }else if(this.currency == 'USD'){
                this.country = 'US / $'
            }else if(this.currency == 'EUR'){
                this.country = 'FR / e'
            }
        }
    }
})
</script>
<template>
    <div class="w-full">
        <div class="bg-[#373F50] flex justify-between items-center px-[4rem] w-full py-3 max-[963px]:px-[1rem]">
            <div class="flex items-center gap-2 max-[963px]:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-[#FE696A]" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"/></svg>
                <p class="text-[#B9BCC2] text-sm"><span class="text-[#91959F]">Support</span> (+234) 90 2928 5309</p>
            </div>
            <div class="hidden max-[963px]:block relative cursor-pointer">
                <div class="items-center flex" @click="usefulLinkShow">
                    <p class="text-[#B9BCC2] text-sm">Useful links</p>
                    <svg class="text-[#B9BCC2]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                </div>
                <div v-if="showUsefulLink == true" class="absolute flex flex-col gap-3 bg-white shadow-xl rounded-md w-[190px] p-4">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#B9BCC2]" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"/></svg>
                        <p class="text-[#B9BCC2] text-sm hover:text-[#FE696A] transition duration-500">(+234) 90 2928 5309</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="text-[#B9BCC2]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"/></svg>
                        <p class="text-sm text-[#B9BCC2] hover:text-[#FE696A] transition duration-500">Order tracking</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center text-[#91959F] gap-2 max-[963px]:hidden">
                <svg @click="decHeader" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"/></svg>
                <div v-for="(header , index) in headers" :key="header">
                    <p v-if="index == currentHeader" class="text-sm font-bold">{{ header }}</p>
                </div>
                <svg @click="incHeader" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"/></svg>
            </div>
            <div class="flex gap-6">
                <div class="flex gap-1 cursor-pointer items-center max-[963px]:hidden">
                    <svg class="text-[#FE696A]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"/></svg>
                    <p class="hover:text-white text-sm text-[#B9BCC2] font-bold">Order tracking</p>
                </div>
                <div class="relative">
                    <div class="flex items-center gap-2" @click="currencyShow">
                        <svg v-if="currency == 'NGN'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><path fill="#009A49" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"/><path fill="#EEE" d="M12 5h12v26H12z"/><path fill="#009A49" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/></svg>
                        <svg v-if="currency == 'EUR'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72"><path fill="#fff" d="M5 17h62v38H5z"/><path fill="#d22f27" d="M5 17h62v9H5zm0 29h62v9H5z"/><path fill="#92d3f5" stroke="#92d3f5" stroke-linejoin="round" stroke-width=".933" d="M42 36a7 7 0 0 1-14 0"/><path fill="#f4aa41" stroke="#f4aa41" stroke-linejoin="round" stroke-width=".933" d="M28 36a7 7 0 0 1 14 0"/><path fill="#d22f27" stroke="#d22f27" stroke-linejoin="round" d="M36.542 31s-3.167 0-3.167 2.111v3.167l3.167 1.583V33.64s-2.111-.528 0-2.639Z"/><path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M33 39.58s-1.044.696-1.74 0l.05-4.82m5.95 4.82s1.044.696 1.74 0l-.05-4.82"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"/></svg>
                        <svg v-if="currency == 'USD'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64"><path fill="#ec1c24" d="M26 17.76v3.38h37.965c-.053-1.09-.167-2.468-.575-3.38"/><path fill="#e6e7e8" d="M61.6 14.38H26v3.38h37.39c-.406-1.261-1.01-2.411-1.79-3.38"/><path fill="#ec1c24" d="M54 11H26v3.38h35.6C59.931 12.29 57.184 11 54 11"/><path fill="#e6e7e8" d="M63.965 21.14H26v3.38h38v-2.253c0-.201-.013-.397-.019-.594c-.004-.054-.01-.193-.016-.533"/><path fill="#ec1c24" d="M26 27.9h38v-3.38H26v3.38"/><path fill="#e6e7e8" d="M26 31.28h38V27.9H26v3.38"/><path fill="#ec1c24" d="M26 31.28h38v3.38H26z"/><path fill="#e6e7e8" d="M0 34.66v3.38h64v-3.38H26z"/><path fill="#ec1c24" d="M0 38.04h64v3.38H0z"/><path fill="#e6e7e8" d="M.005 43.499s-.009.819.015 1.301h63.96c.028-.494.015-1.301.015-1.301L64 41.42H0z"/><path fill="#ec1c24" d="M10 55h44c3.193 0 5.847-1.16 7.66-3.44H2.33C4.202 53.89 6.906 55 9.995 55"/><path fill="#e6e7e8" d="M2.335 51.56h59.33a9.993 9.993 0 0 0 1.74-3.38H.605a10.363 10.363 0 0 0 1.735 3.38"/><path fill="#ec1c24" d="M.6 48.18h62.8a14.38 14.38 0 0 0 .58-3.38H.02c.099 1.156.191 2.029.58 3.38"/><path fill="#176496" d="M26 11H10C3.373 11 0 15.925 0 22v12.66h26z"/><path fill="#fff" d="m2.798 16.976l.544-.418l.543.418l-.211-.672l.541-.411h-.668l-.207-.675l-.206.675h-.667l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411h-.667l-.207-.675l-.206.675H6.06l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.21-.675l-.207.675h-.663l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411h-.67l-.204-.675l-.206.675h-.668l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411h-.669l-.206-.675l-.206.675h-.667l.54.411zM4.711 18.731l.543-.417l.543.417l-.209-.671l.54-.411H5.46l-.207-.674l-.203.674h-.67l.541.411zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.411H9.05l-.201-.674l-.207.674h-.667l.541.411zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.411h-.667l-.207-.674l-.207.674h-.668l.541.411zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.411h-.667l-.207-.674l-.205.674h-.668l.541.411zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.411h-.666l-.208-.674l-.205.674h-.668l.541.411zm2.227-1.755l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.211-.675l-.206.675h-.673l.547.411zM2.745 31.02l.544-.413l.543.413l-.21-.666l.54-.412l-.667.002l-.208-.674l-.204.674l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.666l.54-.412l-.666.002l-.208-.674l-.205.674l-.667-.002l.54.412zm3.965 0l.543-.413l.544.413l-.211-.666l.54-.412l-.671.002l-.203-.674l-.206.674l-.667-.002l.541.412zm3.936 0l.543-.413l.543.413l-.207-.666l.537-.412l-.668.002l-.206-.674l-.206.674l-.667-.002l.54.412zm3.949 0l.544-.413l.544.413l-.208-.666l.537-.412l-.667.002l-.207-.674l-.205.674l-.668-.002l.54.412zm4.144 0l.543-.413l.544.413l-.211-.666l.541-.412l-.671.002l-.204-.674l-.206.674l-.67-.002l.544.412zM2.798 20.488l.544-.418l.543.418l-.211-.672l.541-.411l-.668.002l-.207-.676l-.206.676l-.667-.002l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411l-.667.002l-.207-.676l-.206.676l-.669-.002l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.21-.676l-.207.676l-.663-.002l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411l-.67.002l-.204-.676l-.206.676l-.668-.002l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411l-.669.002l-.206-.676l-.206.676l-.667-.002l.54.411zM4.711 22.244l.543-.417l.543.417l-.209-.671l.54-.413H5.46l-.207-.672l-.203.672h-.67l.541.413zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.413H9.05l-.201-.672l-.207.672h-.667l.541.413zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.413h-.667l-.207-.672l-.207.672h-.668l.541.413zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.413h-.667l-.207-.672l-.205.672h-.668l.541.413zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.413h-.666l-.208-.672l-.205.672h-.668l.541.413zm2.227-1.756l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.211-.676l-.206.676l-.673-.002l.547.411zM2.745 24l.544-.417l.543.417l-.211-.67l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.417l.544.417l-.211-.67l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.417l.543.417l-.21-.67l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.417l.544.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.417l.543.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 25.756l.543-.416l.543.416l-.209-.666l.539-.414h-.668L5.2 24l-.205.676h-.668l.541.414zm3.595 0l.543-.416l.543.416l-.21-.666l.54-.414H9L8.795 24l-.206.676h-.668l.542.414zm3.966 0l.541-.416l.544.416l-.214-.666l.544-.414h-.667L12.76 24l-.206.676h-.668l.541.414zm3.931 0l.546-.416l.544.416l-.21-.666l.539-.414h-.667L16.695 24l-.205.676h-.668l.541.414zm3.95 0l.546-.416l.544.416l-.211-.666l.542-.414h-.667L20.646 24l-.206.676h-.668l.541.414zM22.334 24l.543-.417l.543.417l-.21-.67l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412zM2.745 27.513l.544-.413l.543.413l-.211-.671l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.671l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.413l.543.413l-.21-.671l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.413l.544.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.413l.543.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 29.27l.543-.418l.543.418l-.209-.672l.539-.408h-.668l-.206-.677l-.205.677h-.668l.541.408zm3.595 0l.543-.418l.543.418l-.21-.672l.54-.408H9l-.205-.677l-.206.677h-.668l.542.408zm3.966 0l.541-.418l.544.418l-.214-.672l.544-.408h-.667l-.207-.677l-.206.677h-.668l.541.408zm3.931 0l.546-.418l.544.418l-.21-.672l.539-.408h-.667l-.207-.677l-.205.677h-.668l.541.408zm3.95 0l.546-.418l.544.418l-.211-.672l.542-.408h-.667l-.208-.677l-.206.677h-.668l.541.408zm2.234-1.757l.543-.413l.543.413l-.21-.671l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412z"/></svg>
                        <p class="hover:text-white cursor-pointer text-sm text-[#B9BCC2] font-bold">{{country}}</p>
                        <svg class="text-[#B9BCC2]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                    </div>
                    <div v-if="showCurrency" class="z-20 text-gray-500 text-sm absolute left-[-4rem] top-[1.6rem] rounded-md shadow-xl bg-white w-[165px] px-6 p-4 flex flex-col gap-3">
                        <select class="border p-2 rounded-md outline-none focus:border-[#FE696A]" v-model="currency">
                            <option value="NGN">NGN</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                        <div class="flex flex-col gap-3">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 36"><path fill="#009A49" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"/><path fill="#EEE" d="M12 5h12v26H12z"/><path fill="#009A49" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/></svg>
                                <p class="font-semibold">Nigeria</p>
                            </div>
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 72 72"><path fill="#fff" d="M5 17h62v38H5z"/><path fill="#d22f27" d="M5 17h62v9H5zm0 29h62v9H5z"/><path fill="#92d3f5" stroke="#92d3f5" stroke-linejoin="round" stroke-width=".933" d="M42 36a7 7 0 0 1-14 0"/><path fill="#f4aa41" stroke="#f4aa41" stroke-linejoin="round" stroke-width=".933" d="M28 36a7 7 0 0 1 14 0"/><path fill="#d22f27" stroke="#d22f27" stroke-linejoin="round" d="M36.542 31s-3.167 0-3.167 2.111v3.167l3.167 1.583V33.64s-2.111-.528 0-2.639Z"/><path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M33 39.58s-1.044.696-1.74 0l.05-4.82m5.95 4.82s1.044.696 1.74 0l-.05-4.82"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"/></svg>
                                <p class="font-semibold">Francais</p>
                            </div>
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64"><path fill="#ec1c24" d="M26 17.76v3.38h37.965c-.053-1.09-.167-2.468-.575-3.38"/><path fill="#e6e7e8" d="M61.6 14.38H26v3.38h37.39c-.406-1.261-1.01-2.411-1.79-3.38"/><path fill="#ec1c24" d="M54 11H26v3.38h35.6C59.931 12.29 57.184 11 54 11"/><path fill="#e6e7e8" d="M63.965 21.14H26v3.38h38v-2.253c0-.201-.013-.397-.019-.594c-.004-.054-.01-.193-.016-.533"/><path fill="#ec1c24" d="M26 27.9h38v-3.38H26v3.38"/><path fill="#e6e7e8" d="M26 31.28h38V27.9H26v3.38"/><path fill="#ec1c24" d="M26 31.28h38v3.38H26z"/><path fill="#e6e7e8" d="M0 34.66v3.38h64v-3.38H26z"/><path fill="#ec1c24" d="M0 38.04h64v3.38H0z"/><path fill="#e6e7e8" d="M.005 43.499s-.009.819.015 1.301h63.96c.028-.494.015-1.301.015-1.301L64 41.42H0z"/><path fill="#ec1c24" d="M10 55h44c3.193 0 5.847-1.16 7.66-3.44H2.33C4.202 53.89 6.906 55 9.995 55"/><path fill="#e6e7e8" d="M2.335 51.56h59.33a9.993 9.993 0 0 0 1.74-3.38H.605a10.363 10.363 0 0 0 1.735 3.38"/><path fill="#ec1c24" d="M.6 48.18h62.8a14.38 14.38 0 0 0 .58-3.38H.02c.099 1.156.191 2.029.58 3.38"/><path fill="#176496" d="M26 11H10C3.373 11 0 15.925 0 22v12.66h26z"/><path fill="#fff" d="m2.798 16.976l.544-.418l.543.418l-.211-.672l.541-.411h-.668l-.207-.675l-.206.675h-.667l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411h-.667l-.207-.675l-.206.675H6.06l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.21-.675l-.207.675h-.663l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411h-.67l-.204-.675l-.206.675h-.668l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411h-.669l-.206-.675l-.206.675h-.667l.54.411zM4.711 18.731l.543-.417l.543.417l-.209-.671l.54-.411H5.46l-.207-.674l-.203.674h-.67l.541.411zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.411H9.05l-.201-.674l-.207.674h-.667l.541.411zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.411h-.667l-.207-.674l-.207.674h-.668l.541.411zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.411h-.667l-.207-.674l-.205.674h-.668l.541.411zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.411h-.666l-.208-.674l-.205.674h-.668l.541.411zm2.227-1.755l.543-.418l.544.418l-.211-.672l.54-.411h-.663l-.211-.675l-.206.675h-.673l.547.411zM2.745 31.02l.544-.413l.543.413l-.21-.666l.54-.412l-.667.002l-.208-.674l-.204.674l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.666l.54-.412l-.666.002l-.208-.674l-.205.674l-.667-.002l.54.412zm3.965 0l.543-.413l.544.413l-.211-.666l.54-.412l-.671.002l-.203-.674l-.206.674l-.667-.002l.541.412zm3.936 0l.543-.413l.543.413l-.207-.666l.537-.412l-.668.002l-.206-.674l-.206.674l-.667-.002l.54.412zm3.949 0l.544-.413l.544.413l-.208-.666l.537-.412l-.667.002l-.207-.674l-.205.674l-.668-.002l.54.412zm4.144 0l.543-.413l.544.413l-.211-.666l.541-.412l-.671.002l-.204-.674l-.206.674l-.67-.002l.544.412zM2.798 20.488l.544-.418l.543.418l-.211-.672l.541-.411l-.668.002l-.207-.676l-.206.676l-.667-.002l.543.411zm3.594 0l.544-.418l.543.418l-.21-.672l.54-.411l-.667.002l-.207-.676l-.206.676l-.669-.002l.543.411zm3.965 0l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.21-.676l-.207.676l-.663-.002l.537.411zm3.936 0l.543-.418l.544.418l-.21-.672l.54-.411l-.67.002l-.204-.676l-.206.676l-.668-.002l.542.411zm3.95 0l.544-.418l.543.418l-.21-.672l.541-.411l-.669.002l-.206-.676l-.206.676l-.667-.002l.54.411zM4.711 22.244l.543-.417l.543.417l-.209-.671l.54-.413H5.46l-.207-.672l-.203.672h-.67l.541.413zm3.595 0l.543-.417l.543.417l-.21-.671l.54-.413H9.05l-.201-.672l-.207.672h-.667l.541.413zm3.965 0l.542-.417l.543.417l-.21-.671l.541-.413h-.667l-.207-.672l-.207.672h-.668l.541.413zm3.934 0l.544-.417l.544.417l-.213-.671l.542-.413h-.667l-.207-.672l-.205.672h-.668l.541.413zm3.955 0l.539-.417l.543.417l-.212-.671l.542-.413h-.666l-.208-.672l-.205.672h-.668l.541.413zm2.227-1.756l.543-.418l.544.418l-.211-.672l.54-.411l-.663.002l-.211-.676l-.206.676l-.673-.002l.547.411zM2.745 24l.544-.417l.543.417l-.211-.67l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.417l.544.417l-.211-.67l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.417l.543.417l-.21-.67l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.417l.544.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.417l.543.417l-.207-.67l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 25.756l.543-.416l.543.416l-.209-.666l.539-.414h-.668L5.2 24l-.205.676h-.668l.541.414zm3.595 0l.543-.416l.543.416l-.21-.666l.54-.414H9L8.795 24l-.206.676h-.668l.542.414zm3.966 0l.541-.416l.544.416l-.214-.666l.544-.414h-.667L12.76 24l-.206.676h-.668l.541.414zm3.931 0l.546-.416l.544.416l-.21-.666l.539-.414h-.667L16.695 24l-.205.676h-.668l.541.414zm3.95 0l.546-.416l.544.416l-.211-.666l.542-.414h-.667L20.646 24l-.206.676h-.668l.541.414zM22.334 24l.543-.417l.543.417l-.21-.67l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412zM2.745 27.513l.544-.413l.543.413l-.211-.671l.541-.412l-.668.002l-.207-.676l-.204.676l-.669-.002l.541.412zm3.595 0l.543-.413l.544.413l-.211-.671l.54-.412l-.666.002l-.208-.676l-.205.676l-.667-.002l.539.412zm3.965 0l.543-.413l.543.413l-.21-.671l.54-.412l-.671.002l-.203-.676l-.206.676l-.667-.002l.541.412zm3.936 0l.542-.413l.544.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.206.676l-.667-.002l.54.412zm3.949 0l.544-.413l.543.413l-.207-.671l.537-.412l-.668.002l-.206-.676l-.205.676l-.668-.002l.54.412zM4.658 29.27l.543-.418l.543.418l-.209-.672l.539-.408h-.668l-.206-.677l-.205.677h-.668l.541.408zm3.595 0l.543-.418l.543.418l-.21-.672l.54-.408H9l-.205-.677l-.206.677h-.668l.542.408zm3.966 0l.541-.418l.544.418l-.214-.672l.544-.408h-.667l-.207-.677l-.206.677h-.668l.541.408zm3.931 0l.546-.418l.544.418l-.21-.672l.539-.408h-.667l-.207-.677l-.205.677h-.668l.541.408zm3.95 0l.546-.418l.544.418l-.211-.672l.542-.408h-.667l-.208-.677l-.206.677h-.668l.541.408zm2.234-1.757l.543-.413l.543.413l-.21-.671l.541-.412l-.671.002l-.204-.676l-.206.676l-.67-.002l.544.412z"/></svg>
                                <p class="font-semibold">U.S.Dollar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="flex w-full items-center justify-between gap-8 px-[4rem] bg-white py-4 max-[963px]:px-[1rem]">
            <div class="flex items-center gap-8">
                <div>
                    <img class="w-[150px]" src="../assets/logo.png" alt="logo">
                </div>
                <div class="w-[670px] max-[1153px]:w-[400px] relative max-[878px]:hidden">
                    <input type="search" placeholder="Search for products" class="p-3 w-full border outline-none rounded-md focus:border-[#FE696A] focus:shadow-md">
                    <svg class="absolute right-[9px] top-[15px] text-gray-500" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="hidden max-[878px]:block">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z" clip-rule="evenodd"/></svg>
                </div>
                <div class="max-[878px]:hidden">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
                </div>
                <div class="flex items-center gap-1">
                    <div>
                        <svg class="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div class="max-[878px]:hidden">
                        <p class="text-gray-400 text-[12px] mb-[-3px]">Logout</p>
                        <p class="text-md text-gray-500">Account</p>
                    </div>
                </div>
                <div class="cart-number flex items-center gap-2 cursor-pointer relative">
                    <div class="bg-gray-100 w-fit p-3 rounded-[50%] relative">
                        <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7.3 21q-.95 0-1.625-.688T5 18.675V9.4L3.175 5H2q-.425 0-.713-.288T1 4q0-.425.288-.713T2 3h1.85q.3 0 .55.175t.375.45L6.175 7H20.95q.575 0 .875.475t.025.975L19 14.025q1.275.2 2.138 1.175T22 17.5q0 1.45-1.012 2.475T18.524 21q-1.475 0-2.487-1.025T15.025 17.5q0-.5.125-.925t.35-.825l-3.275-.3l-3 4.5q-.325.5-.838.775T7.3 21Zm9.55-7.125L19.325 9L7 9.025L8.25 12q.2.5.638.838t1.012.387l6.95.65Zm-9.525 5.1q.05 0 .225-.125l2.425-3.6q-1.225-.125-1.925-.587T7 13.7v5q0 .125.1.2t.225.075ZM18.5 19q.65 0 1.075-.438T20 17.5q0-.65-.425-1.075T18.5 16q-.625 0-1.063.425T17 17.5q0 .625.438 1.063T18.5 19Zm-1.65-5.125l-6.95-.65l6.95.65Z"/></svg>
                        <p class="absolute top-0 right-0 rounded-[50%] bg-[#FE696A] text-white text-[12px] font-bold h-[19px] w-[18px] text-center">4</p>
                    </div>
                    <div class="max-[878px]:hidden">
                        <p class="text-gray-400 text-[12px] mb-[-3px]">My Cart</p>
                        <div class="flex items-center text-md text-gray-500">
                            <p>$265.00</p>
                            <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                        </div>
                    </div>
                    <div class="body-cart transition duration-500 fade-in-out absolute rounded-md shadow-md p-4 top-[3.5rem] w-[340px] left-[-14rem] max-[878px]:left-[-19rem] z-20 bg-white">
                        <div class="flex flex-col gap-3 h-[255px] overflow-auto border-b">
                            <div class="cart flex gap-2 items-center border-b pb-2">
                                <svg class="cancel-cart text-[#FE696A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                                <img class="w-[70px] h-[70px]" src="../assets/shoes.jpg" alt="">
                                <div>
                                    <p class="text-sm text-[#373F50] font-semibold">Women Colorblock Sneakers</p>
                                    <p class="text-blue-500">$150.<small>00</small> &nbsp; <span class="tracking-widest text-gray-400 text-sm">x1</span></p>
                                </div>
                            </div>
                            <div class="cart flex gap-2 items-center border-b pb-2">
                                <svg class="cancel-cart text-[#FE696A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                                <img class="w-[70px] h-[70px]" src="../assets/bag.jpg" alt="">
                                <div>
                                    <p class="text-sm text-[#373F50] font-semibold">TH Jeans City Backpack</p>
                                    <p class="text-blue-500">$150.<small>00</small> &nbsp; <span class="tracking-widest text-gray-400 text-sm">x1</span></p>
                                </div>
                            </div>
                            <div class="cart flex gap-2 items-center border-b pb-2">
                                <svg class="cancel-cart text-[#FE696A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                                <img class="w-[70px] h-[70px]" src="../assets/shoes.jpg" alt="">
                                <div>
                                    <p class="text-sm text-[#373F50] font-semibold">Women Colorblock Sneakers</p>
                                    <p class="text-blue-500">$150.<small>00</small> &nbsp; <span class="tracking-widest text-gray-400 text-sm">x1</span></p>
                                </div>
                            </div>
                            <div class="cart flex gap-2 items-center border-b pb-2">
                                <svg class="cancel-cart text-[#FE696A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                                <img class="w-[70px] h-[70px]" src="../assets/bag.jpg" alt="">
                                <div>
                                    <p class="text-sm text-[#373F50] font-semibold">TH Jeans City Backpack</p>
                                    <p class="text-blue-500">$150.<small>00</small> &nbsp; <span class="tracking-widest text-gray-400 text-sm">x1</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <div class="flex justify-between items-center mb-6">   
                                <div>
                                    <p class="text-gray-500">Subtotal: <span class="text-blue-500">$265.<small>00</small></span></p>
                                </div>
                                <div class="flex items-center hover:bg-gray-100 text-sm text-gray-600 w-fit border p-2 px-3 rounded-md">
                                    <p>Expand cart</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"/></svg>
                                </div>
                            </div>
                            <div class="flex gap-1 py-2 items-center w-full bg-[#FE696A] hover:bg-red-500 text-white rounded justify-center text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5.5H11l-.87 8.65a1 1 0 0 1-1 .85h-6.3a1 1 0 0 1-1-.68l-1.33-4a1 1 0 0 1 .14-.9A1 1 0 0 1 1.5 4h9.15"/><circle cx="3" cy="13" r=".5"/><circle cx="9.5" cy="13" r=".5"/></g></svg>
                                <p>Checkout</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<style scoped>
.cancel-cart{
    display: none;
}
.cart:hover .cancel-cart{
    display: flex;
}
.body-cart{
    display:none;
}
.cart-number:hover .body-cart{
    display: block;
}
</style>