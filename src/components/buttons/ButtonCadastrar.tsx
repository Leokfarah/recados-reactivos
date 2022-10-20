import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonCadastrar() {
    return (
        <Stack spacing={2} direction="column">
            <Link to="/">
                <Button variant="outlined">Criar Conta</Button>
            </Link>
        </Stack>
    );
}
