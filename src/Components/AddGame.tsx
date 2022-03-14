import React from 'react'
import { IGame } from '../interfaces'

interface Props{
    game: IGame;
    completeGame(GameNametoDelete: string): void;
}

const AddGame = ({game, completeGame}: Props) => {
  return (
    <div className="game">
        <div className="content">
            <span>{game.GameName}</span>
            <span>{game.CompanyName}</span>
            <span>{game.YearOfRelease}</span>
            <button
             onClick={() => {completeGame(game.GameName)} }>X</button>
        </div>
    </div>
  )
}

export default AddGame