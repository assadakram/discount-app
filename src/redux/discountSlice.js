import { createSlice } from '@reduxjs/toolkit';

export const discountSlice = createSlice({
    name: 'discount',
    initialState: {
        selectedOption: '',
        discountCode: '',
        notes: '',
    },
    reducers: {
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        },
        setDiscountCode: (state, action) => {
            state.discountCode = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        generateDiscountCode: (state) => {
            state.discountCode = `NEWCODE${Math.floor(100 + Math.random() * 900)}`;
        },
    },
});

export const { setSelectedOption, setDiscountCode, setNotes, generateDiscountCode } = discountSlice.actions;

export default discountSlice.reducer;
