import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface BarProps {
  usuario: string;
}

export default function UserBar({ usuario }: BarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bem vinda {usuario}!
          </Typography>
          <Link to='/'>
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}