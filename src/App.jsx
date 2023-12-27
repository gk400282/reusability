import './App.css';
import DropdownPage from './pages/DropdownPage';
import AccordianPage from './pages/AccordianPage';
import ButtonPage from './pages/ButtonPage';
import Router from './components/Router';
import Link from './components/Link';

function App() {
  return (
    <>
      <div>
        <Link to="/accordian">Go to AccordianPage</Link>
        <Link to="/dropdown">Go to DropdownPage</Link>
        <Link to="/buttons">Go to ButtonPage</Link>
        <div>
          <Router path="/accordian">
            <AccordianPage />
          </Router>
        </div>
        <div>
          <Router path="/dropdown">
            <DropdownPage />
          </Router>
        </div>
        <div>
          <Router path="/buttons">
            <ButtonPage />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
