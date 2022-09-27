
import "./components/styles/index.css"


import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import instance  from "./components/Axios/instance";
import Characters from "./components/Characters";
import CharCard from "./components/CharCard";
function App() {
  
  
  
  //  const  baseUrl="https://rickandmortyapi.com/api/character/"
  //  useEffect(()=>{
    //     axios.get(`${baseUrl}`)
    //     .then( res => setCharacterList (res.data.results))
    //     .catch(error => console.log(error))
    
    //   },[])
    
    //   console.log(characterList)
    
    const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    instance.get(`/character`)
      .then(({data} ) =>  {setCharacterList(data.results)}
      )
      .catch((error) => console.log(error));
  }, []);
  console.log(characterList)
  return (
    <div className="App">
      <Main>
        <h1>Personagens Rick Morty</h1>
        <Characters characterList={characterList}>
        <CharCard/>
        </Characters>
    
      </Main>
    </div>
  );
}

export default App;
