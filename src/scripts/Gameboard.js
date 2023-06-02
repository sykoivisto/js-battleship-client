const Gameboard = () => {
	let ships = [];
	let hitLog = [];
	let missLog = [];

	const placeShip = (ship, isHorizontal, startPosition) => {
		ship.setLocation(isHorizontal, startPosition);

		ships.push(ship);
	};

	const receiveAttack = (position) => {
		// check for hits
		// looping thru all ships
		for (let ship of ships) {
			// looping thru all positions of the ship
			for (let x of ship.getLocation()) {
				// check for hits
				if (x.toString() === position.toString()) {
					// this is a hit
					hitLog.push(position);
					ship.hit();
					return;
				}
			}
		}
		// if we get this far and it is not a hit, it is a miss
		missLog.push(position);
	};

	const allShipsSunk = () => {
		for (let ship of ships) {
			if (!ship.isSunk()) return false;
		}
		return true;
	};

	const getShips = () => ships;

	const getHitLog = () => hitLog;

	const getMissLog = () => missLog;

	return {
		placeShip,
		receiveAttack,
		allShipsSunk,
		getShips,
		getHitLog,
		getMissLog,
	};
};

export default Gameboard;
