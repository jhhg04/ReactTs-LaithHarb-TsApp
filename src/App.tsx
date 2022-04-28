import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  /*
  const [number, setNumber] = useState(5)
  const changeNumber=()=>{
    setNumber(15)
  }
  */

  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

  const [people, peopleSet] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 36,
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to stay on the same team',
    },
  ]);

  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
