import { createSlice } from "@reduxjs/toolkit";
import productData from '../productdata/ProductData'
const initialState = { 
    cart:[],
    items: productData,
    totalQuantity:0,
    totalPrice:0
};

export const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action) =>{
        let existingitem= state.cart.findIndex((item)=>item.id===action.payload.id)
        if (existingitem>=0){
            state.cart[existingitem].quantity +=1;
        }
        else{
            state.cart.push(action.payload)
        }
    
    },
    getCartTotal: (state) => {
        let totalQuantity = 0;
        let totalPrice = 0;
        state.cart.forEach((item) => {
            const { price, quantity } = item;
            const itemTotal = price * quantity;
            console.log(itemTotal);
            totalPrice += itemTotal;
            console.log(totalPrice)
            totalQuantity += quantity;
        });
        state.totalPrice = parseInt(totalPrice.toFixed(2));
        state.totalQuantity = totalQuantity;
    },

    removeItem:(state,action)=>{
        state.cart =state.cart.filter((item)=> item.id !==action.payload)
    },
    increaseItemQuantity: (state, action) => {
        const itemId = action.payload;
        const itemIndex = state.cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          state.cart[itemIndex].quantity += 1;
        }

      },
      decreaseItemQuantity: (state, action) => {
        const itemId = action.payload;
        const itemIndex = state.cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          state.cart[itemIndex].quantity -= 1;
        }

      }

    
},



})

export const {addToCart, getCartTotal, removeItem,  increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions
export default cartSlice.reducer;