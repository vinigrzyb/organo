// components/Banner/index.js - ATUALIZADO
import './Banner.css';

const Banner = () => {
    return(
        <header className="banner">
            <div className="banner-background">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="banner-content">
                <div className="logo-wrapper">
                    <h1 className="logo">Organo</h1>
                    <div className="logo-subtitle">Sistema de Gestão</div>
                </div>
                <p className="banner-tagline">Pessoas organizadas, equipes felizes!</p>
                <div className="banner-stats">
                    <div className="stat">
                        <div className="stat-number">+100</div>
                        <div className="stat-label">Colaboradores</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">+10</div>
                        <div className="stat-label">Times</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">99%</div>
                        <div className="stat-label">Satisfação</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;