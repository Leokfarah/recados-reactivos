import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function TaskCheckBox() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Feito" />
            <FormControlLabel control={<Checkbox />} label="À Fazer" />
        </FormGroup>
    );
}