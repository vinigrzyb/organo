import Collaborator from '../Collaborator';
import './team.css'

const Team = (props) => {
    return(
        //só renderiza o time se o array de colaboradores não for vazio (renderização condicional)
        (props.colabborators.length > 0) ? <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderBottomColor: props.primaryColor}}>{props.name}</h3>
            <div className='Collaborators'>
                {props.colabborators.map(collaborator => <Collaborator name={collaborator.name} role={collaborator.role} image={collaborator.image}/>)} 
            </div>
        </section>
        : '' //pode colocar um elemento caso a condição seja false (ternario)
    )
}

export default Team;