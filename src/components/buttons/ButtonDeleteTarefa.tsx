import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonDeleteTarefa() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color='error'>Deletar</Button>
        </Stack>
    );
}
