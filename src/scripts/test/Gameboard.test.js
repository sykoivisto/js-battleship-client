import Ship from '../Ship';
import Gameboard from '../Gameboard';

let player1board = Gameboard();
let carrier = Ship(5);

test('ship is placed at proper location', () => {
	player1board.placeShip(carrier, false, [0, 3]);
	expect(player1board.getShips()[0].getLocation()).toEqual([
		[0, 3],
		[0, 4],
		[0, 5],
		[0, 6],
		[0, 7],
	]);
});

test('hit is logged', () => {
	player1board.receiveAttack([0, 4]);
	expect(player1board.getShips()[0].getHitsTaken()).toBe(1);
});
test('hit is recorded', () => {
	expect(player1board.getHitLog()[0]).toEqual([0, 4]);
});
test('misses are recorded', () => {
	player1board.receiveAttack([0, 1]);
	expect(player1board.getMissLog()[0]).toEqual([0, 1]);
});
test('ships still alive', () => {
	player1board.receiveAttack([0, 3]);
	player1board.receiveAttack([0, 5]);
	player1board.receiveAttack([0, 6]);
	expect(player1board.allShipsSunk()).toBe(false);
});
test('ships still alive', () => {
	player1board.receiveAttack([0, 7]);
	expect(player1board.allShipsSunk()).toBe(true);
});
