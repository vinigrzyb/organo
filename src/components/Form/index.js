import './Form.css';
import TextField from '../TextField/';
import DropdownList from '../DropdownList';
import Button from '../Button'
import { useState } from 'react';

 const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');


    const saveCard = (event) => {
        event.preventDefault() //previne o comportamento padrão do submit
        console.log('card salvo => ', name, role)
        props.cards({
            name: name,
            role: role,
            image: image,
            team: team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
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
                
                <DropdownList
                    required={true}
                    label="lista" 
                    items={props.teams}
                    onAltered={value => setTeam(value)}
                />

                <Button onclick={saveCard}>Criar card</Button>
            </form>
        </section>
    )
 }

 export default Form;