import Dropdown from '../components/Dropdown';
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);
  const handleSelection = (option) => {
    setSelected(option);
  };
  const options = [
    { "label": "regular", "description": "Shouldn't be spicy" },
    { "label": "spicy", "description": "Make it spicy" },
    { "label": "extra_spicy", "description": "Should burn my tongue" },
  ];
  return (
    <>
      <div>
          <Dropdown options={options} value={selected} onChange={handleSelection}/>
      </div>
    </>
  );
}

export default App;