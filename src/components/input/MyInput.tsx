import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputProps {
    name: string;
    label: string;
    id: string;
}

export default function MyInput({ name, label, id }: Partial<InputProps>) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id={id}
                    name={name}
                    label={label}
                    defaultValue=""
                />
            </div>
        </Box>
    );
}
