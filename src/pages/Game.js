import React, { useState } from 'react';
import PlayerBoard from '../components/PlayerBoard/PlayerBoard';
import ComputerBoard from '../components/ComputerBoard/ComputerBoard';

import '../Shared/gameboard.scss';

function Game({ computer, player }) {

	const [computerTurnTrigger, setComputerTurnTrigger] = useState(0);

	const onAllShipsSunk = (winner) => {
		console.log('allships sunk!')
		if (winner === 'computer') return alert(`You've lost all your ships!`);
		if (winner === 'player')
			return alert(`Congratulations, You've sunken all the enemy ships!`);
	};

	const onTriggerComputerTurn = () => {
		setComputerTurnTrigger((trigger) => trigger + 1);
	};

	return (
		<div className='game'>
			<ComputerBoard
				player={computer}
				onTriggerComputerTurn={onTriggerComputerTurn}
				onAllShipsSunk={onAllShipsSunk}
			></ComputerBoard>
			<hr />
			my ships
			<PlayerBoard
				player={player}
				computerTurnTrigger={computerTurnTrigger}
				onAllShipsSunk={onAllShipsSunk}
			></PlayerBoard>
		</div>
	);
}

export default Game;
