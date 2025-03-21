import './Collaborator.css'

const Collaborator = ({name, image, role, backgroundColor}) => { //variáveis sem props
    return(
        <div className='collaborator'>
        <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Collaborator