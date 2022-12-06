import { configureStore, createSlice } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

let cartInfo = createSlice({
    name: 'info',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {
        changeCount(state, i) {
            state[i.payload].count++;
        },

        addCart(state) {
            console.log('hi');
        },
    },
});

export let { changeCount, addCart } = cartInfo.actions;

export default configureStore({
    reducer: {
        cartData: cartInfo.reducer,
    },
});
