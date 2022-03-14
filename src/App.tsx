import React, {FC, ChangeEvent ,useState} from "react";
import './App.css';
import { IGame } from "./interfaces";

const App = () => {

  const [game, setGame] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [Year, setYear] = useState<number>(0)
  const [GameAdd, setGameAdd] = useState<IGame[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "GameName"){
      setGame(event.target.value)
    }else if (event.target.name ==="Company"){
      setCompany(event.target.value)
    } else {
      setYear(Number(event.target.value));
    }
  };

  const addGame = (): void => {
    // We take the interfaces name and match it with the variables we created
    const newGame = {GameName: game, CompanyName: company, YearOfRelease: Year};

    setGameAdd([...GameAdd, newGame])
  }



  return (  
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type='text' placeholder="GameName" name="Game" onChange={handleChange}/>
          <input type='text' placeholder='Company' name="Company" onChange={handleChange}/>
          <input type='number' name="Year" placeholder='Year Of Release' onChange={handleChange}/>
        </div>
        <button onClick={addGame}>Add Game</button>
      </div>
      <div className="AddGame"></div>
    </div>
  );
}

export default App;
