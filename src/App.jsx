import './App.css';
import DropdownPage from './pages/DropdownPage';
import AccordianPage from './pages/AccordianPage';
import ButtonPage from './pages/ButtonPage';
import Router from './components/Router';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordian", path: "/accordian" },
    { label: "Buttons", path: "/buttons" },
    { label: "Model", path: "/modal" },
    { label: "Table", path: "/table" },
  ];
  return (
    <>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar links={links}/>
        <div className='col-span-5'>
          <Router path="/accordian">
            <AccordianPage />
          </Router>
          <Router path="/dropdown">
            <DropdownPage />
          </Router>
          <Router path="/buttons">
            <ButtonPage />
          </Router>
          <Router path="/modal">
            <ModalPage />
          </Router>
          <Router path="/table">
            <TablePage />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
