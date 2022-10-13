
import "./components/styles/index.css"


import {useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import instance  from "./components/Axios/instance";
import Characters from "./components/Characters";
import Homepage from "./components/Homepage";
import { DataContext } from "./components/Context/dataContext";


function App() {    
    const [characterList, setCharacterList] = useState([]);
    const [changePage, SetChangePage] =useState(true)
    const [pages, SetPages] = useState(1)
    
    
  useEffect(() => {
    instance.get(`/character/?page=${pages}`)
    .then(({data}) => {
        setCharacterList(data.results)
    }) 
      .catch((error) => console.log(error));
  }, [pages]);
  
  


  return (
    
    <div className="App">
      <DataContext.Provider value={[pages, SetPages, characterList, setCharacterList]}>

      {changePage ?(
      <Main >
        <Characters/>          
      </Main>       
      ):
      (
        <Homepage/>
        
        )
      }

    </DataContext.Provider>

    </div>
  );
}

export default App;
