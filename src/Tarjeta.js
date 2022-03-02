import Container from 'react-bootstrap/Container';

const Tarjeta = (props) => {

    const diccionario = props.lista

    return(
        <Container>
            {JSON.stringify(diccionario, null, 2)}
        </Container>
    );

}

export default Tarjeta

