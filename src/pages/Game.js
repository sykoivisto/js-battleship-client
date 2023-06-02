import React, { useState } from 'react';
import PlayerBoard from '../components/PlayerBoard/PlayerBoard'
import ComputerBoard from '../components/ComputerBoard/ComputerBoard'
import Player from '../scripts/Player';
import Ship from '../scripts/Ship';

import '../Shared/gameboard.scss'

function Game() {
	const [computer] = useState(Player());
	const carrier = Ship(5);
	computer.gameboard.placeShip(carrier, false, [0, 0]);

  const [player] = useState(Player());
	const carrier2 = Ship(5);
  const carrier3 = Ship(5);
  const carrier4 = Ship(5);
	player.gameboard.placeShip(carrier2, false, [0, 0]);
  player.gameboard.placeShip(carrier3, false, [3, 2]);
  player.gameboard.placeShip(carrier4, true, [3, 8]);

  return (
    <div className="game">
      <ComputerBoard player={computer}></ComputerBoard>
      <hr />
      my ships
      <PlayerBoard player={player}></PlayerBoard>
    </div>
  );
}

export default Game;
