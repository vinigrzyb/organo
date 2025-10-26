// components/Collaborator/index.js - CORRIGIDO
import './Collaborator.css';

const Collaborator = ({ collaborator, backgroundColor, onDelete, onToggleFavorite }) => {
  
  // Se onDelete ou onToggleFavorite não foram passados, usar funções vazias para evitar erros
  const handleDelete = onDelete ? () => {
    if (window.confirm(`Tem certeza que deseja excluir ${collaborator.name}?`)) {
      onDelete(collaborator.id);
    }
  } : () => {};
  
  const handleToggleFavorite = onToggleFavorite ? () => {
    onToggleFavorite(collaborator.id);
  } : () => {};

  return (
    <div className="collaborator-card">
      {/* Mostrar ações apenas se as funções foram passadas */}
      {(onDelete || onToggleFavorite) && (
        <div className="collaborator-actions">
          {onToggleFavorite && (
            <button 
              className={`favorite-btn ${collaborator.favorite ? 'favorited' : ''}`}
              onClick={handleToggleFavorite}
              aria-label={collaborator.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              {collaborator.favorite ? '★' : '☆'}
            </button>
          )}
          {onDelete && (
            <button 
              className="delete-btn"
              onClick={handleDelete}
              aria-label="Excluir colaborador"
            >
              🗑️
            </button>
          )}
        </div>
      )}
      
      <div className="collaborator-header" style={{ backgroundColor }}>
        <img 
          src={collaborator.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik02MCA2MEM2Ni42IDYwIDcyIDU0LjYgNzIgNDhDNzIgNDEuNCA2Ni42IDM2IDYwIDM2QzUzLjQgMzYgNDggNDEuNCA0OCA0OEM0OCA1NC42IDUzLjQgNjAgNjAgNjBaTTYwIDcyQzQ0LjggNzIgMTIgODAgMTIgOTZWMTA4SDEwOFY5NkMxMDggODAgNzUuMiA3MiA2MCA3MloiIGZpbGw9IiM5QTlBOUEiLz4KPC9zdmc+'} 
          alt={collaborator.name}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik02MCA2MEM2Ni42IDYwIDcyIDU0LjYgNzIgNDhDNzIgNDEuNCA2Ni42IDM2IDYwIDM2QzUzLjQgMzYgNDggNDEuNCA0OCA0OEM0OCA1NC42IDUzLjQgNjAgNjAgNjBaTTYwIDcyQzQ0LjggNzIgMTIgODAgMTIgOTZWMTA4SDEwOFY5NkMxMDggODAgNzUuMiA3MiA2MCA3MloiIGZpbGw9IiM5QTlBOUEiLz4KPC9zdmc+';
          }}
        />
        {collaborator.favorite && <div className="favorite-badge">⭐</div>}
      </div>
      
      <div className="collaborator-body">
        <h4 className="collaborator-name">{collaborator.name}</h4>
        <p className="collaborator-role">{collaborator.role}</p>
        <span className="collaborator-team">{collaborator.team}</span>
      </div>
    </div>
  );
};

export default Collaborator;