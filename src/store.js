import { configureStore, createSlice } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

let cartInfo = createSlice({
    name: 'info',
    initialState: [
    ],
    reducers: {
        changeCount(state, i) {
            let number = state.findIndex(el => {
                return el.id === i.payload;
            }); //조건과 동일한 배열의 index를 리턴해줌
            state[number].count++;
        },

        addCart(state, action) {
            const sameCheck = state.findIndex(el => {
                return el.name == action.payload.name;
            });

            if (sameCheck == -1) {
                state.push(action.payload);
            } else {
                state[sameCheck].count++;
            }
        },
    },
});

export let { changeCount, addCart } = cartInfo.actions;

export default configureStore({
    reducer: {
        cartData: cartInfo.reducer,
    },
});
