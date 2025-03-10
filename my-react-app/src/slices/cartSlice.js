import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: loadCartFromLocalStorage(),
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state)); // Збереження у localStorage
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
