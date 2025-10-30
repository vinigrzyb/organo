import { useState, useEffect } from 'react';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import './EditModal.css';

const EditModal = ({ collaborator, teams, onUpdate, onClose }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  useEffect(() => {
    if (collaborator) {
      setName(collaborator.name);
      setRole(collaborator.role);
      setImage(collaborator.image);
      setTeam(collaborator.team);
    }
  }, [collaborator]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...collaborator, name, role, image, team });
    onClose();
  };

  if (!collaborator) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2>Editar Colaborador</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <TextField
            required
            label="Nome"
            placeholder="Digite o nome"
            value={name}
            onAltered={setName}
          />
          <TextField
            required
            label="Cargo"
            placeholder="Digite o cargo"
            value={role}
            onAltered={setRole}
          />
          {/* <TextField
            label="Imagem"
            placeholder="URL da imagem"
            value={image}
            onAltered={setImage}
          /> */}
          <DropdownList
            required
            label="Time"
            items={teams}
            value={team}
            onAltered={setTeam}
          />
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
