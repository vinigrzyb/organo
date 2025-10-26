import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
      description: 'Especialistas em backend e arquitetura de sistemas'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
      description: 'Criadores de interfaces incríveis'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
      description: 'Transformando dados em insights'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
      description: 'Infraestrutura e deployment'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
      description: 'Design thinking e experiência do usuário'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
      description: 'Apps nativos e híbridos'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
      description: 'Estratégia e gestão de produtos'
    }
  ];

  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    const newCollaborator = {
      ...collaborator,
      id: Math.random().toString(36).substr(2, 9),
      favorite: false
    };
    setCollaborators(prev => [...prev, newCollaborator]);
  };

  const deleteCollaborator = (id) => {
    setCollaborators(prev => prev.filter(collaborator => collaborator.id !== id));
  };

  const toggleFavorite = (id) => {
    setCollaborators(prev => prev.map(collaborator => 
      collaborator.id === id 
        ? {...collaborator, favorite: !collaborator.favorite}
        : collaborator
    ));
  };

  return (
    <div className="App">
      <Banner />
      
      <main className="main-content">
        <div className="container">
          <Form 
            teams={teams.map(team => team.name)} 
            onCollaboratorAdded={addCollaborator}
          />
          
          <section className="organization-section">
            <div className="section-header">
              <h2>Minha Organização</h2>
              <p>Gerencie seus times e colaboradores</p>
            </div>

            <div className="teams-grid">
              {teams.map(team => (
                <Team
                  key={team.name}
                  team={team}
                  collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
                  onDelete={deleteCollaborator}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;