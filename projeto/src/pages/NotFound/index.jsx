import notFound from "../../assets/notFound.svg"
import Button from "../../components/Button"
import { useHistory } from "react-router-dom"
import { Container } from "./style"
import React from "react"


const NotFound = () => {

    const history = useHistory()

    return (
        <Container>
            <div>
                <h1>Ooops!</h1>

                <p>Não encotramos a página que você procurou, <b>vamos tentar novamente</b>.</p>

                <Button tamanho="gg" cor="home" onClick={ () => history.push("/") }>Ir para home</Button>
            </div>

            <img src={ notFound } alt="error" />
        </Container>
    )
}

export default NotFound
