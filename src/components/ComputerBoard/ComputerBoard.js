import React, { useState } from 'react';

import styles from './ComputerBoard.module.scss';

import NEWARR from '../../scripts/NEWARR';

export default function GameboardDisplay({
	player,
	onTriggerComputerTurn,
	onAllShipsSunk,
}) {
	const [domHitsAndMisses, setDomHitsAndMisses] = useState(NEWARR());

	const onClickGridSquare = (col, row) => {
		if (player.gameboard.wasClickedAlready(col, row)) return;

		player.gameboard.receiveAttack([col, row]);

		let hits = player.gameboard.getHitLog();
		let misses = player.gameboard.getMissLog();

		let newArr = NEWARR();

		hits.map((pos) => {
			newArr[pos[0]][pos[1]] = 'hit';
		});
		misses.map((pos) => {
			newArr[pos[0]][pos[1]] = 'miss';
		});

		setDomHitsAndMisses(newArr);

		// TODO check to see if all ships are sunk
		if (player.gameboard.allShipsSunk()) onAllShipsSunk('player');

		// TODO call function for computer player to take turn
		onTriggerComputerTurn();
	};

	const rows = [];

	for (let j = 0; j < 10; j++) {
		const cols = [];
		for (let i = 0; i < 10; i++) {
			cols.push(
				<div
					key={i}
					data-row={j}
					data-col={i}
					className={`gridSquare ${domHitsAndMisses[i][j]}`}
					onClick={(e) =>
						onClickGridSquare(e.target.dataset.col, e.target.dataset.row)
					}
				>
					{i}
				</div>
			);
		}

		rows.push(
			<div key={j} className='gridRow'>
				{cols}
			</div>
		);
	}

	return <div className={`gameboard ${styles.crosshair}`}>{rows}</div>;
}
