import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonEditTarefa from '../buttons/ButtonEditTarefa';
import ButtonDeleteTarefa from '../buttons/ButtonDeleteTarefa';
import TaskCheckBox from '../taskCheckBox/TaskCheckBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    titulo: string,
    descricao: string,
    status: JSX.Element,
    editbutton: JSX.Element,
    deletebutton: JSX.Element,

) {
    return { titulo, descricao, status, editbutton, deletebutton };
}

const rows = [
    createData('Tomar Frozen yoghurt', 'Ir com a Michele tomar um Frozen Yoghurt', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
    createData('Fofoca time', 'Fofocar sobre a vida alheia', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
    createData('Espionar o vizinho', 'Ficar na janela só de olho', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
    createData('Fazer pudim pro Rafael D.', 'Pudim de pão ou de leite?', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
    createData('Ligar para a Neta', 'E julgar ela com todas as forças', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
    createData('ir à Missa', 'E rezar bastante para ir pro céu', <TaskCheckBox />, <ButtonEditTarefa />, <ButtonDeleteTarefa />),
];

export default function ListaTarefas() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Titulo</StyledTableCell>
                        <StyledTableCell align="right">Descrição</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.titulo}>
                            <StyledTableCell component="th" scope="row">
                                {row.titulo}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.descricao}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                            <StyledTableCell align="right">{row.editbutton}</StyledTableCell>
                            <StyledTableCell align="right">{row.deletebutton}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
