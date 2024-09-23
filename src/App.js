import './App.css';
import { useState } from 'react';
import FirstModal from './components/FirstModal';
import MenuBar from './components/MenuBar';
import NavBar from './components/NavBar';


function App() {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);


  return (
    <div>
      <NavBar />
      <MenuBar onOpenModal={handleOpenModal} />

      {
        open && (<FirstModal onCloseModal={handleCloseModal} />)
      }

    </div>
  );
}

export default App;
