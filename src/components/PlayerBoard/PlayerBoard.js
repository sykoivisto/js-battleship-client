import React, { useEffect, useState } from 'react';

import NEWARR from '../../scripts/NEWARR';

export default function GameboardDisplay({
	player,
	computerTurnTrigger,
	onAllShipsSunk,
}) {
	const [domHitsAndMisses, setDomHitsAndMisses] = useState(NEWARR());
	const [domShips, setDomShips] = useState(NEWARR);

	useEffect(() => {
		let ships = [];

		player.gameboard
			.getShips()
			.map((ship) => ships.push(...ship.getLocation()));

		let newArr = NEWARR();

		ships.map((pos) => {
			newArr[pos[0]][pos[1]] = 'ship';
		});

		setDomShips(newArr);
	}, []);

	useEffect(() => {
		if (computerTurnTrigger) {
			computerTakeTurn();
		}
	}, [computerTurnTrigger]);

	const computerTakeTurn = () => {
		setTimeout(() => {
			// this algorithm is abysmal
			let x, y;
			do {
				x = Math.floor(Math.random() * 10);
				y = Math.floor(Math.random() * 10);
			} while (player.gameboard.wasClickedAlready(x, y));

			player.gameboard.receiveAttack([x, y]);

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

			if (player.gameboard.allShipsSunk()) onAllShipsSunk('computer');
		}, 1000);
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
					className={`gridSquare ${domHitsAndMisses[i][j]} ${domShips[i][j]}`}
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

	return <div className='gameboard'>{rows}</div>;
}
