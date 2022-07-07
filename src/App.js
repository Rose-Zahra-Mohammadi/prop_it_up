import './App.css';


import PersonCard from './components/PersonCard';

const people = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
  {"firstName": "Kevin", "lastName": "Bacon", "age": 22, "hairColor": "Red"},
  {"firstName": "Amber", "lastName": "Heard", "age": 45, "hairColor": "Poop-Brown"},
  {"firstName": "Carol", "lastName": "Baskin", "age": 32, "hairColor": "Blonde"}
]

function App() {
  return (
    <div className="App">
      {people.map(person => {
      return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>})
      }
  </div>
  );
}

export default App;
