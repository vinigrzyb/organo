import { useState } from 'react';
import './TextField.css';


const TextField = (props) => { //props é um objeto que contém todas as propriedades passadas para o componente

    // let value = 'vinicius'
    
    //hook
    //    valor   setter
    //Valor é lido, setter é criado
    //Valor padrão de campo
    
    const onType = (event) => {
        props.onAltered(event.target.value);

    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input  value={props.value} onChange={onType} required={props.required} type="text" placeholder={`${props.placeholder}...`}/>   
        </div>
    )
}

export default TextField;