<script>
import { defineComponent } from 'vue';
import Department from './Department.vue';
import Currency from './Currency.vue'
import useProductStore from '../stores/store'

export default defineComponent({
    components: {
        Department, Currency
    },
    data(){
        return{
            headers: [
                'Friendly 24/7 customer support',
                'Free shipping for order over $200',
                'We return money within 30 days'
            ],
            top: 'top-[1.6rem]',
            left: 'left-[-4rem]',
            currentHeader: 0,
            country: useProductStore().$state.country,
            currency: useProductStore().$state.currency,
            showUsefulLink: false,
            depImage: '/../src/assets/women-attire.jpg',
            depImageTwo: '/../src/assets/shoes-attire.jpg',
            depImageThree: '/../src/assets/gadgets.jpg',
            responsiveMenu: useProductStore().$state.responsiveMenu,
            responsiveDepartment: false,
            responsiveAccount: false,
            responsiveSubAccount: false,
            responsiveVendor: false

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
        },
        logout(){
            localStorage.getItem("user-info");
            localStorage.clear()
            this.$router.push({name: 'Account'})
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
                <Currency :top="top" :left="left"/>
            </div> 
        </div>
        <div class="flex w-full items-center justify-between gap-8 px-[4rem] bg-white py-4 max-[963px]:px-[1rem] max-[878px]:mb-2">
            <div class="flex items-center gap-8">
                <div>
                    <img class="w-[150px] hidden min-[554px]:block" src="../assets/logo.png" alt="logo">
                    <img class="w-[80px] hidden max-[553px]:block" src="../assets/logo2.png" alt="logo">
                </div>
                <div class="w-[670px] max-[1153px]:w-[400px] relative max-[878px]:hidden">
                    <input type="search" placeholder="Search for products" class="p-3 w-full border outline-none rounded-md focus:border-[#FE696A] focus:shadow-md">
                    <svg class="absolute right-[9px] top-[15px] text-gray-500" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="hidden max-[878px]:block" @click="responsiveMenu = !responsiveMenu">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z" clip-rule="evenodd"/></svg>
                </div>
                <div class="max-[878px]:hidden">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
                </div>
                <div class="flex items-center gap-1">
                    <div>
                        <svg class="text-gray-600" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div class="max-[878px]:hidden cursor-pointer" @click="logout">
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
        <div class="flex px-[4rem] gap-6 bg-white max-[963px]:px-[1rem] w-full py-3 max-[878px]:hidden">
            <div class="relative flex items-center gap-2 border-r pr-5 cursor-pointer">
                <div class="department-menu flex items-center gap-2 text-gray-500 transition duration-500 hover:text-[#FE696A]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/></svg>
                    <p>Departments</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                    <div class="departments absolute shadow-xl bottom-[-17.5rem] bg-white p-6 w-[700px] gap-6 grid grid-cols-3 z-30">
                        <Department heading="Clothing" :depImg="depImage" typeOne="Women's clothing" typeTwo="Men's clothing" />
                        <Department heading="Shoes" :depImg="depImageTwo" typeOne="Women's shoes" typeTwo="Men's shoes" />
                        <Department heading="Gadgets" :depImg="depImageThree" typeOne="Smartphones & Tablets" typeTwo="Wearable Gadgets" />
                    </div>
                </div>
                
            </div>
            <div class="flex items-center gap-6 text-gray-500">
                <p class="transition duration-300 cursor-pointer hover:text-[#FE696A]">Home</p>
                <p class="transition duration-300 cursor-pointer hover:text-[#FE696A]">Shop</p>
                <div class="relative cursor-pointer z-30">
                    <div class="account-menu">
                        <span class="transition duration-300 hover:text-[#FE696A]">Account</span>
                        <div class="accounts absolute bottom-[-9rem] flex flex-col gap-2 p-4 px-5  bg-white w-[220px] shadow-md">
                            <div class="relative shop-user-account-menu">
                                <div class="flex items-center justify-between hover:text-[#FE696A] transition duration-300">
                                    <p class="text-sm">Shop User Account</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5v10z"/></svg>
                                </div>
                                <div class="shop-user-account absolute right-[-12rem] bottom-[-11rem] w-[195px] bg-white flex flex-col z-20 gap-2 text-sm shadow-xl p-4 px-5 rounded-md">
                                    <p class="hover:text-[#FE696A] transition duration-300">Orders History</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">Profile Settings</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">Account Addresses</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">Payment Methods</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">Wishlist</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">My Tickects</p>
                                    <p class="hover:text-[#FE696A] transition duration-300">Single Ticket</p>
                                </div>
                            </div>
                            <div class="relative vendor-menu">
                                <div class="flex items-center justify-between transition duration-300 hover:text-[#FE696A]">
                                    <p class="text-sm">Vendor Dashboard</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5v10z"/></svg>
                                </div>
                                    <div class="vendor absolute w-[195px] right-[-12rem] top-[-1rem] bg-white flex flex-col z-20 gap-2 text-sm shadow-xl p-4 px-5 rounded-md">
                                        <p class="hover:text-[#FE696A] transition duration-300">Settings</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Purchases</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Favourites</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Sales</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Products</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Add new product</p>
                                        <p class="hover:text-[#FE696A] transition duration-300">Payouts</p>
                                    </div>
                            </div>
                            <div @click="logout" class="flex items-center justify-between transition duration-300 hover:text-[#FE696A]">
                                <p class="text-sm">Logout</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5v10z"/></svg>
                            </div>
                            <div class="flex items-center justify-between transition duration-300 hover:text-[#FE696A]">
                                <p class="text-sm">Password Recovery</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5v10z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="transition duration-300 cursor-pointer hover:text-[#FE696A]">Pages</p>
                <p class="transition duration-300 cursor-pointer hover:text-[#FE696A]">Blog</p>
                <p class="transition duration-300 cursor-pointer hover:text-[#FE696A]">Support</p>
            </div>
        </div>
        <!-- responsive layout -->
        <div class="bg-white hidden max-[878px]:flex flex-col gap-3 items-center px-[1rem] w-full" v-if="responsiveMenu == true">
            <div class="w-full relative">
                <svg class="absolute left-[9px] top-[15px] text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
                <input type="search" placeholder="Search for products" class="p-3 px-9 w-full border outline-none rounded-md focus:border-[#FE696A] focus:shadow-md">
            </div>
            <div class="w-full rounded-md bg-[#F6F9FC] cursor-pointer p-3 pb-5 flex flex-col gap-8" @click="responsiveDepartment = !responsiveDepartment">
                <div class="flex items-center gap-1" :class="responsiveDepartment == true && 'text-red-500'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/></svg>
                    <p class="font-semibold">Departments</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                </div>
                <div class="grid grid-cols-3 gap-4 max-[560px]:grid-cols-2 max-[378px]:grid-cols-1" v-if="responsiveDepartment == true">
                    <Department heading="Clothing" :depImg="depImage" typeOne="Women's clothing" typeTwo="Men's clothing" />
                    <Department heading="Shoes" :depImg="depImageTwo" typeOne="Women's shoes" typeTwo="Men's shoes" />
                    <Department heading="Gadgets" :depImg="depImageThree" typeOne="Smartphones & Tablets" typeTwo="Wearable Gadgets" />
                </div>
            </div>
            <div class="w-full rounded-md bg-[#F6F9FC] p-3 cursor-pointer">
                <p class="font-semibold">Home</p>
            </div>
            <div class="w-full rounded-md bg-[#F6F9FC] p-3 flex flex-col gap-4 cursor-pointer">
                <div class="flex items-center" @click="responsiveAccount = !responsiveAccount" :class="responsiveAccount == true && 'text-red-500'">
                    <p class="font-semibold">Account</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                </div>
                <div class="text-sm flex flex-col gap-3" v-if="responsiveAccount == true">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center" @click="responsiveSubAccount = !responsiveSubAccount"  :class="responsiveSubAccount == true && 'text-red-500'">
                            <p class="font-semibold">Shop user Account</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                        </div>
                        <div class="flex flex-col gap-3 text-gray-700 px-4" v-if="responsiveSubAccount == true">
                            <p>Orders History</p>
                            <p>Profile Settings</p>
                            <p>Wishlist</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center" @click="responsiveVendor = !responsiveVendor"  :class="responsiveVendor == true && 'text-red-500'">
                            <p class="font-semibold">Vendor Dashboard</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
                        </div>
                        <div class="flex flex-col gap-3 text-gray-700 px-4" v-if="responsiveVendor == true">
                            <p>Settings</p>
                            <p>Purchases</p>
                            <p>Favourites</p>
                            <p>Sales</p>
                            <p>Products</p>
                            <p>Add new products</p>
                        </div>
                    </div>
                    <div @click="logout">
                        <p class="font-semibold">Log out</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center w-full rounded-md bg-[#F6F9FC] p-3 cursor-pointer">
                <p class="font-semibold">Blog</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
            </div>
            <div class="flex items-center w-full rounded-md bg-[#F6F9FC] p-3 cursor-pointer">
                <p class="font-semibold">Support</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
.cancel-cart , .departments , .accounts, .shop-user-account, .vendor{
    display: none;
}
.cart:hover .cancel-cart ,.department-menu:hover .departments , .account-menu:hover .accounts , .shop-user-account-menu:hover .shop-user-account , .vendor-menu:hover .vendor{
    display: flex;
}
.body-cart{
    display:none;
}

@media screen and (min-width: 878px){
    .cart-number:hover .body-cart{
        display: block;
    }
}
</style>