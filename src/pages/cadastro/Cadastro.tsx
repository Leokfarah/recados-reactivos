import React from "react"
import { Paper, Box } from "@mui/material"
import { Link } from "react-router-dom"
import ButtonCadastrar from "../../components/buttons/ButtonCadastrar"
import MyInput from "../../components/input/MyInput"
import { styled } from '@mui/material/styles';

const DivStyle = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh',
}))

const LogStyle = styled(Paper)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '25vw',
    height: '40vh',
    padding: '25px',
}))

export const Cadastro = () => {
    return (
        <DivStyle>
            <LogStyle elevation={8}>
                <MyInput name='Name' label='Nome' id="1" />
                <MyInput name='Email' label='Email' id="2" />
                <MyInput name='Password' label='Senha' id="3" />
                <MyInput name='RepeatPassword' label='Repita sua senha' id="4" />
                <ButtonCadastrar></ButtonCadastrar>
                <Link to={"/"}>Já possui conta?</Link>
            </LogStyle>
        </DivStyle>
    )
}