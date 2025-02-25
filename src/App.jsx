// src/App.jsx
import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList/PetList.jsx';
const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
      const fetchedPets = await petService.index();
      if (fetchedPets.err) {
        throw new Error(fetchedPets.err);
      }
      setPets(fetchedPets);
    } catch (err) {
      console.log(err);
    }
  };
      fetchPets();
  }, []);
const handleSelect = (pet) => {
    setSelected(pet);
  };

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
    </>
  );
};

export default App;
