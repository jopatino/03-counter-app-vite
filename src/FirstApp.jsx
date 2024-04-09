import PropTypes from "prop-types";

// export const FirstApp = () => {
//     return (
//         <div class="row">
//             <h1>Jose Patiño</h1>
//             <p>im a subtitle</p>
//         </div>
//     )
// }

// Nueva forma para no agregar el div//////////////////
// import { Fragment } from "react";
//
// export const FirstApp = () => {
//     return (
//         <Fragment>
//             <h1>Jose Patiño</h1>
//             <p>im a subtitle</p>
//         </Fragment>
//     )
// }

// Sinónimo del fragmento////////////////
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>Jose Patiño</h1>
//             <p>im a subtitle</p>
//         </>
//     )
// }

// Fuera del componente no se tiene que procesar de nuevo
const newMessage = {
    message: 'Hola mundo',
    title: 'Message'
}

const getMessage = () => 'Mensaje de la función';
export const FirstApp = ({ title, subTitle, name }) => {

    console.log(title)
    // Aquí adentro se especifica de nuevo el espacio de memoria de la función. Es recomendable hacerlo afuera
    // const getResult = (a, b) => {
    //     return a+b;
    // }

    // if (!title) {
    //     throw new Error('El title no existe');
    // }

    return (
        <>
            {/*<code>{ JSON.stringify(newMessage) }</code>*/}
            {/*<h1>{ JSON.stringify(newMessage) }</h1>*/}
            {/*<h1>{ getMessage() }</h1>*/}
            {/*<h1>{ getResult(2, 3) }</h1>*/}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

// Default props se leen antes que los propTypes Se recomiendan poner al final
FirstApp.defaultProps= {
    title: 'No hay título',
    subTitle: 'No hay sbutítulo',
    name: 'Jose Patiño'
}