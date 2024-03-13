import { configureStore } from '@reduxjs/toolkit';
import discountReducer from './discountSlice';

export const store = configureStore({
    reducer: {
        discount: discountReducer,
    },
});
