import './App.css';
import Navbar from './Components/Navbar/Navbar';
import navBarJson from './assets/navbar.json';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Structured from './Components/Content/Structured/Structured';
import FreeText from './Components/Content/FreeText/FreeText';
import { Button, ButtonToolbar } from  'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function App() {
  const navItems = navBarJson.list;

  return (
    <Router>
      <div className="App">
       <Navbar navList = {navItems} />
       <div className='container  mt-3 mb-5'>
          <ButtonToolbar className="custom-btn-toolbar container mb-2">
            <LinkContainer to="/freetext">
              <Button variant="outline-dark">Freetext</Button>
            </LinkContainer>
            <LinkContainer to="/structured">
              <Button variant="outline-dark">Structured</Button>
            </LinkContainer>
            <LinkContainer to="#">
              <Button variant="outline-dark">Graph</Button>
            </LinkContainer>
            <LinkContainer to="#">
              <Button variant="outline-dark">Tree</Button>
            </LinkContainer>
          </ButtonToolbar>
          <Routes>
            <Route path="/freetext" element={<FreeText/>} />
            <Route path="/structured" element={<Structured/>} />
          </Routes>
       </div>
       <div>
         <p>Alternate option is using bootstrap Nav but need to find a solution with Js for below code to highlight the active link.</p>
         <nav className="nav nav-pills flex-column flex-sm-row">
          <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/freetext">FreeText</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to="/structured">Structured</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to="#">Graph</Link>
          <Link className="flex-sm-fill text-sm-center nav-link" to="#" aria-disabled="true">Tree</Link>
        </nav>
       </div>
    </div>
  </Router>
  );
}

export default App;
