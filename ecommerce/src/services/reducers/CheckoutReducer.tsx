import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CheckoutState {
    items: any;
    totalQuantity: number,
    totalAmount: number
}

const checkoutInitState: CheckoutState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const CheckoutReducer = createSlice({
    name: 'checkout',
    initialState: checkoutInitState,
    reducers: {
        addItemToCart(state: any, action: PayloadAction<any>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item: any) => item.id == newItem.id);
            
            if(!existingItem) {
                state.totalQuantity++;
                state.totalAmount += Number(newItem.offerPrice);
                state.items.push({
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    offerPrice: newItem.offerPrice,
                    size: newItem.price,
                    totalPrice: newItem.offerPrice,
                    imageUrl: newItem.imageUrl
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.offerPrice;
                state.totalAmount += Number(existingItem.offerPrice);
            }
            
        },
        removeItemFromCart(state: any, action: PayloadAction<any>) {
            const newItem = action.payload;
            const idx = state.items.findIndex((item: any) => item.id == newItem.id);
            state.items.splice(idx, 1);
            state.totalAmount -= Number(newItem.price);
            state.totalQuantity--;
        }
    }
})
export const {addItemToCart, removeItemFromCart} = CheckoutReducer.actions;
export default CheckoutReducer