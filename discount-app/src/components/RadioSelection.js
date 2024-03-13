import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedOption } from '../redux/discountSlice';

const RadioSelection = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setSelectedOption(event.target.value));
    };

    return (
        <RadioGroup row onChange={handleChange}>
            <FormControlLabel value="Option A" control={<Radio />} label="Option A" />
            <FormControlLabel value="Option B" control={<Radio />} label="Option B" />
            <FormControlLabel value="Option C" control={<Radio />} label="Option C" />
        </RadioGroup>
    );
};

export default RadioSelection;
