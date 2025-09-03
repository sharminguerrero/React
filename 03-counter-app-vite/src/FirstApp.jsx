/*const getResult = (a,b) =>{
return  a+b;
}*/

import PropTypes from 'prop-types';

import React from "react"


export const FirstApp = ({title, subTitle, name}) => {
    return(
        <>
<h1>{title}</h1>
<p>{subTitle}</p>
<p>{name}</p>
</>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string

}

FirstApp.defaultProps ={
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Sharmin'
}