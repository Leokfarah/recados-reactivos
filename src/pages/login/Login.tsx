import React from "react"
import { Box, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import ButtonLogin from "../../components/buttons/ButtonLogin"
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
}))

export const Login = () => {
    return (
        <DivStyle>
            <LogStyle elevation={8}>
                <MyInput name='Email' label='Email' />
                <MyInput name='Password' label='Senha' />
                <ButtonLogin></ButtonLogin>
                <Link to={"/cadastro"}>Não possui conta?</Link>
            </LogStyle>
        </DivStyle>
    )
}