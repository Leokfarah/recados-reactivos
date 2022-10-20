import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonLogin() {
    return (
        <Stack spacing={2} direction="column">
            <Link to="/home">
                <Button variant="outlined">Login</Button>
            </Link>
        </Stack>
    );
}
