import { useState } from 'react';
import Banner from './components/Banner/';
import Form from './components/Form/';
import Team from './components/team/';
import Collaborator from './components/Collaborator';
import Footer from './components/Foooter';

function App() {

  const teams = [
    {
      name: 'frontend',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'backend',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'design',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'mobile',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'gestão',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    }
  ]

  const [cards, setCards] = useState([]);
  
  const [collaborators, setCollaborator] = useState([]);

  const renderCard = (card) => {
    console.log(card);
    setCards([...cards, card]); //usa o spread operator pra criar o array com os cards já existentes e adicionar o novo card
    setCollaborator([...collaborators, card])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} cards={card => renderCard(card)}/>

      {teams.map(team => <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          colabborators={collaborators.filter(collaborator => collaborator.team === team.name)} //faz com que só os colaboradores que pertencem ao time aparecam nele
        />)}

      <Footer/>
    </div>
  );
}

export default App;
