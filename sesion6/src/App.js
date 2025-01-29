
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

function App() {
  let plan = [{
    title: 'Basic',
    description: '...',
    price: 20,
    currency: '$',
    features: [
      'bllabllablla',
      'tralalala'
    ]
  },
  {
    title: 'Basic',
    description: '...',
    price: 35,
    currency: '$',
    features: [
      'Create and Edit posts',
      'Unlimited notifications'
    ]
  },
  {
    title: 'Basic',
    description: '...',
    price: 40,
    currency: '$',
    features: [
      'Unlimited Requests',
      'Up to 100 accounts'
    ]
  }
  ];
  return (

    < div className="App" >
      <><NavBar title='Cool Saas'></NavBar>
        <Header pagetitle='Payment Plans' desc='Choose from one of the following payment plans'></Header>
        <div>{plan.map(c => <Card plan={c}></Card>)}</div>
      </>



    </div >
  );
}

export default App;
