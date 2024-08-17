import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemExists = state.find((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.push({ ...action.payload });
            } else {
                toast.error('Item already in cart');
            }

        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        markAsDone(state, action) {
            const orderId = action.payload.id;
            const orderIndex = state.findIndex(order => order.id === orderId);
            if (orderIndex !== -1) {
                state[orderIndex].status = 'done';
            }
        }

    }
})

export const { addToCart, deleteFromCart, markAsDone } = cartSlice.actions

export default cartSlice.reducer;