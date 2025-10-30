// components/Form/index.js - CORRIGIDO
import './Form.css';
import TextField from '../TextField/';
import DropdownList from '../DropdownList';
import Button from '../Button'
import { useState, useRef } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // CORREÇÃO: usar props.onCollaboratorAdded em vez de props.cards
        props.onCollaboratorAdded({
            name: name,
            role: role,
            image: image,
            team: team
        });
        
        // Reset do formulário
        setName('')
        setRole('')
        setImage('')
        setTeam('')
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <p>Preencha os dados para criar o card do colaborador.</p>
                
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    value={name}
                    onAltered={value => setName(value)}
                />
                
                <TextField
                    required={true}
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    value={role}
                    onAltered={value => setRole(value)}
                />

                {/* <div className="text-field">
                    <label>Imagem</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        ref={fileInputRef} 
                    />
                </div> */}
                
                <DropdownList
                    required={true}
                    label="Time" 
                    items={props.teams}
                    value={team}
                    onAltered={value => setTeam(value)}
                />

                <Button type="submit">Criar card</Button>
            </form>
        </section>
    )
}

export default Form;