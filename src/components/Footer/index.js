// components/Footer/index.js - CORRIGIDO
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <div className='logo'>
                        {/* Use uma imagem local ou um texto */}
                        <div className="footer-logo">Organo</div>
                    </div>
                    <p className='footer-tagline'>Organizando pessoas, criando equipes felizes</p>
                </div>
                
                <div className='footer-section'>
                    <h4>Desenvolvido com ❤️ por</h4>
                    <div className='developers'>
                        <span>Alaertes</span>
                        <span>Vinicius</span>
                        <span>Nathalia</span>
                    </div>
                </div>
            
            </div>
            
            <div className='footer-bottom'>
                <p>&copy; 2025 Organo. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;