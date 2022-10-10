import './App.css';
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import ModalInfoCharacter from "./components/ModalInfoCharacter";
import React, {useEffect, useState} from "react";



function App() {
  const initialUrl = "https://rickandmortyapi.com/"; 
  const urlApi = initialUrl + "api/"; 

  /**
   * Estados
   */
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [character, setCharacter] = useState({});
  /**
   * Obtener datos
   * @param {*} url 
   */
  const fetchCharacters = ( url ) => {
    fetch(url)
      .then(response => response.json())
      .catch(err=> {console.log(err);})
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
  };


  /**
   * 
   * @param {*} id 
   */
  const fetchOneElement = ( id ) => {
    fetch(urlApi + 'character/' + id)
      .then(response => response.json())
      .catch(err=> {console.log(err);})
      .then(data => {
        // console.log(data);
        setCharacter(data);
        setIsOpen(true);
        // setInfo(data.info);
      })
  };

  

  const onPrevious = ( ) => {
    fetchCharacters(info.prev);
  };
  const onNext = ( ) => {
    fetchCharacters(info.next);
  };

  /**
   * Se ejectua al inicio
   */
  useEffect(() => {
    fetchCharacters( urlApi +'character');
  }, []);


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  function openItem(id){
    fetchOneElement(id)
    // setIsOpen(true);

  }

  return (
    <>
      <NavBar brand="Rick and Morty App"></NavBar>
      <div className='container mt-5'>
        {/* Pagination */}
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious} ></Pagination>
        {/* LIST */}
        <Characters characters={characters} openItem={openItem}/>
        {/* Pagination */}
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious} ></Pagination>
      </div>
      <ModalInfoCharacter info={character} modalIsOpen={modalIsOpen} closeModal={closeModal}> </ModalInfoCharacter>


      {/* <button onClick={openModal}>Open Modal</button> */}
      
    </>
  );
}

export default App;
