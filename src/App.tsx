import React, {FC, ChangeEvent ,useState} from "react";
import './App.css';
import AddGame from "./Components/AddGame";
import { IGame } from "./interfaces";

const App = () => {

  const [gamename, setGame] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [Year, setYear] = useState<number>(0)
  const [GameAdd, setGameAdd] = useState<IGame[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "Game"){
      setGame(event.target.value)
    }else if (event.target.name ==="Company"){
      setCompany(event.target.value)
    } else {
      setYear(Number(event.target.value));
    }
  };

  const addGame = (): void => {
    // We take the interfaces name and match it with the variables
    const newGame = { GameName: gamename, CompanyName: company, YearOfRelease: Year};
    setGameAdd([...GameAdd, newGame])
    // Reset after submitting
    setGame("")
    setCompany("")
    setYear(0)
  }

  const completeAddGame = (GameNametoDelete: string): void => {
    setGameAdd(GameAdd.filter((game)=>{ 
      return game.GameName != GameNametoDelete
    }))
  }


  return (  
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <p>GameName:</p>
          <input 
           type='text' 
           placeholder="GameName"
           name="Game"
           value={gamename}
           onChange={handleChange}/>
          <p>Company Name:</p>
          <input
           type='text'
           placeholder='Company'
           name="Company"
           value={company}
           onChange={handleChange}/>
          <p>Year of Release:</p>
          <input
            type='number'
            name="Year"
            placeholder='Year Of Release'
            value={Year}
            onChange={handleChange}/>
        </div>
        <button onClick={addGame}>Add Game</button>
      </div>
      <div className="AddGame">
        {/* Todo */}
        {GameAdd.map((gamename: IGame, key: number) =>{
          return <AddGame key={key} game={gamename}  completeGame={completeAddGame}/>
        })}
      </div>
    </div>
  );
}

export default App;
