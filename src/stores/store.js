import {defineStore} from 'pinia'

export default function useProductStore() {
    return defineStore('products' , {
        state: ()=> ({
          responsiveMenu: false,
          currency: 'NGN',
          country: 'NG / N'
        }),
      
    })()
}