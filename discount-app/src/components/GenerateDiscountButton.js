import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { generateDiscountCode } from '../redux/discountSlice';

const GenerateDiscountButton = () => {
    const dispatch = useDispatch();
    const discountCode = useSelector((state) => state.discount.discountCode);

    const handleClick = () => {
        dispatch(generateDiscountCode());
    };

    return (
        <div>
            <Button onClick={handleClick} variant="contained" color="secondary">
                Generate Discount Code
            </Button>
            {discountCode && <Box mt={2}><TextField value={discountCode} disabled fullWidth /></Box>}
        </div>
    );
};

export default GenerateDiscountButton;
