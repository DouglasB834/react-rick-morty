
import "./components/styles/index.css"


import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import instance  from "./components/Axios/instance";
import Characters from "./components/Characters";
import Homepage from "./components/Homepage";


function App() {    
    const [characterList, setCharacterList] = useState([]);
    const [changePage, SetChangePage] =useState(true)


  useEffect(() => {
    instance.get(`/character`)
      .then(({data} ) =>  {
        setCharacterList(data.results)
      })
      .catch((error) => console.log(error));
  }, []);
  

  return (
    
    <div className="App">
      {changePage ?(
        <Main setCharacterList={setCharacterList}>
        <Characters characterList={characterList} /> 
         
      </Main>       
      ):
      (
        <Homepage/>
        
      )
  }

    </div>
  );
}

export default App;
