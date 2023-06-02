import React, { useEffect, useState } from 'react';

import styles from './PlayerBoard.module.scss';

import NEWARR from '../../scripts/NEWARR';

export default function GameboardDisplay({ player }) {
	const [domHitsAndMisses, setDomHitsAndMisses] = useState(NEWARR());
	const [domShips, setDomShips] = useState(NEWARR);

	useEffect(() => {
		let ships = [];
    
    player.gameboard.getShips().map(ship => ships.push(...ship.getLocation()));

		let newArr = NEWARR();

		ships.map((pos) => {
      newArr[pos[0]][pos[1]] = 'ship';
		});

		setDomShips(newArr);
	}, []);

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
