import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setDiscountCode } from '../redux/discountSlice';

const DiscountCodeEntry = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCode(event.target.value);
        setError(false);
    };

    const validateCode = () => {
        if (/^DISCOUNT2024$/.test(code)) {
            dispatch(setDiscountCode(code));
        } else {
            setError(true);
        }
    };

    return (
        <div>
            <TextField
                error={error}
                helperText={error ? "Invalid code. Expected format: 'DISCOUNT2024'." : ''}
                label="Discount Code"
                variant="outlined"
                value={code}
                onChange={handleChange}
                fullWidth
            />
            <Button onClick={validateCode} variant="contained" color="primary" style={{ marginTop: 10 }}>
                Validate Code
            </Button>
        </div>
    );
};

export default DiscountCodeEntry;
