import './App.css';
import DetailsBar from './components/DetailsBar';
import NavBar from './components/NavBar';
import Table from './components/Table';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <DetailsBar />
      <Table/>
    </div>
  );
}

export default App;
