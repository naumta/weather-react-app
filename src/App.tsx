import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './AppRoutes';
import { Context } from './components/context/Context';
import { Modal } from './components/modal/Modal';
import { NavBar } from './components/navBar/NavBar';

function App() {

  const [city, setCity] = useState("Minsk");
  const [isAuth, setIsAuth] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, [])

  return (
    <Context.Provider value={{city, setCity, isAuth, setIsAuth, setOpenModal}}>
      <HashRouter>
        <div className="App">
          <NavBar setOpenModal={setOpenModal} />
          <Modal openModal = {openModal} setOpenModal={setOpenModal}/>
          <AppRoutes />
        </div>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
