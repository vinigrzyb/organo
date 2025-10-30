// components/Team/team.js - ATUALIZADO
import './Team.css';
import Collaborator from '../Collaborator';

const Team = ({ team, collaborators, onDelete, onToggleFavorite, onEdit }) => {
  return (
    <section className="team-section">
      <div className="team-header" style={{ borderLeftColor: team.primaryColor }}>
        <div className="team-info">
          <h3 className="team-name">{team.name}</h3>
          <p className="team-description">{team.description}</p>
        </div>
        <div className="team-stats">
          <span className="collaborator-count">{collaborators.length}</span>
          <span>colaborador{collaborators.length !== 1 ? 'es' : ''}</span>
        </div>
      </div>
      
      {collaborators.length > 0 ? (
        <div className="collaborators-grid">
          {collaborators.map((collaborator) => (
            <Collaborator 
              key={collaborator.id}
              collaborator={collaborator}
              backgroundColor={team.primaryColor}
              onDelete={onDelete}
              onToggleFavorite={onToggleFavorite}
              onEdit={onEdit}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <p>Nenhum colaborador neste time ainda</p>
          <small>Adicione colaboradores usando o formulário acima</small>
        </div>
      )}
    </section>
  );
};

export default Team;