import './Form.css';
import TextField from '../TextField/';
import DropdownList from '../DropdownList';
import Button from '../Button'
import { useState } from 'react';

 const Form = () => {

    const times = [
        'frontend',
        'backend',
        'design',
        'mobile',
        'gestão'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');


    const saveCard = (event) => {
        event.preventDefault() //previne o comportamento padrão do submit
        console.log('card salvo => ', name, role)
    }

    return (
        <section class="form">
            <form onSubmit={saveCard}>
                <h2>titulo</h2>
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="digite algo"
                    value={name}
                    onAltered={value => setName(value)}
                />
                <TextField
                    label="Cargo" 
                    placeholder="digite algo"
                    value={role}
                    onAltered={value => setRole(value)}
                />

                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onAltered={value => setImage(value)}
                />
                
                <DropdownList required={true} label="lista" items={times}/>

                <Button onclick={saveCard}>Criar card</Button>
            </form>
        </section>
    )
 }

 export default Form;