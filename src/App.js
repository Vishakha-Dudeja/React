import './App.css';
import Navbar from './Components/Navbar/Navbar';
import navBarJson from './assets/navbar.json';

function App() {
  const navItems = navBarJson.list;

  return (
    <div className="App">
       <Navbar navList = {navItems} />
       <button className='btn btn-primary mt-3'>Testing Bootstrap</button>
    </div>
  );
}

export default App;
