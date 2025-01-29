
import './App.css';
import Button from './components/Button/Button';
import Card from './components/UserCard/Card'

function App() {

  let Lina = {
    fullName: 'Lina Demiri',
    occupation: 'React student'
  }
  // let Lina2 = {
  //   text: 'Lina',
  //   color: 'Red'
  // }
  let buttonText = 'ClickMe';
  let buttonCOlor = '#'
  return <> <h1>These are the users</h1>;
    <Card user={Lina}></Card>
    <Button text={buttonText} user1={buttonCOlor}></Button></>

}

export default App;
