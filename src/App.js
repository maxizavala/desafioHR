import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Tarjeta from './Tarjeta';
import { useState } from 'react';

const {Brand} = Navbar

const correcciones = {
    idiosincracia : 'idiosincrasia ',
    preveer : 'prever ',
    beneficiencia : 'beneficencia ',
    visicitud : 'vicisitud ',
    suscinto : 'sucinto ',
    aferrimo : 'acérrimo ',
    exceptico : 'escéptico ',
    convalescencia : 'convalecencia ',
    discrección : 'discreción ',
    esplanada : 'explanada ',
    innundación : 'inundación ',
    fideligno : 'fidedigno ',
    fregaplatos : 'friegaplatos ',
    inexcrutable : 'inescrutable ',
    misogeno : 'misógino ',
    prevadicación : 'prevaricación ',
    subrealista : 'surrealista ',
    sujección : 'sujeción ',
    transtornado : 'trastornado ',
    exalar : 'exhalar ',
    exhuberante : 'exuberante ',
    exumar : 'exhumar ',
    exausto : 'exhausto ',
    exibir : 'exhibir ',
    exortar : 'exhortar '
}


function App() {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);


    const onChangeHandler = e => {

        const entrada = e.target.value;

        let salida = entrada;

        if(entrada[entrada.length - 1] === ' ') {

            const palabras = entrada.split(' ');
            const ultimaPalabra = palabras[palabras.length - 2].toLowerCase();

            let incorrectas = Object.keys(correcciones)

            incorrectas.forEach(incorrecta => {
                if (incorrecta.toString() === ultimaPalabra) {
                    let correccion = correcciones[incorrecta]
                    console.log(correccion)

                    palabras[palabras.length - 2] = correccion;
                    salida = palabras.join(' ')
                }
            });
            
        }

        setText(salida);

    }


    const handleChange = () => {
        setShow(!show)
    }

    return (
        <>
            <Navbar as="header" expand="sm" className="color-nav" variant="dark">
                <Brand className="fontmarca">Autocorrection App</Brand>
            </Navbar>

            <Container className="container">
                <button
                    type="button"
                    className="btn btn-info btn-sm"
                    onClick={() => handleChange()}
                >
                    Diccionario
                </button>

                {show ? 
                <Tarjeta lista={correcciones} />
                :
                <></>
                }
            </Container>

            <Container className="container">
                <textarea value={text} className="form-control" rows="3" onChange={onChangeHandler}></textarea>
            </Container>
        </>
    );
}

export default App;
