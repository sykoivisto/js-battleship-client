import React, {useState} from 'react'
import Player from './scripts/Player';
import Ship from './scripts/Ship';

import Game from './pages/Game';

export default function App() {

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
    <Game computer={computer} player={player}></Game>
  )
}
