import React from "react"
import ListaTarefas from "../../components/listaTarefas/ListaTarefas"
import UserBar from "../../components/userBar/UserBar"

export const Home = () => {
    return (
        <>
            <UserBar usuario="odete" />
            <ListaTarefas />
        </>
    )
}