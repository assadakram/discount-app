import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes } from '../redux/discountSlice';

const NoteField = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.discount.notes);

    const handleChange = (event) => {
        dispatch(setNotes(event.target.value));
    };

    return (
        <TextField
            label="Notes"
            multiline
            rows={4}
            variant="outlined"
            value={notes}
            onChange={handleChange}
            fullWidth
        />
    );
};

export default NoteField;
