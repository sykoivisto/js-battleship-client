import Ship from '../Ship';
import Player from '../Player';

let player1 = Player();
let destroyer = Ship(2);
player1.gameboard.placeShip(destroyer, false, [0, 0]);

test('ship is placed at proper location', () => {
	expect(player1.gameboard.getShips()[0].getLocation()).toEqual([
		[0, 0],
		[0, 1],
	]);
});
test('ship is not sunk', () => {
	expect(player1.gameboard.allShipsSunk()).toBe(false);
});
test('ship is sunk', () => {
  player1.gameboard.receiveAttack([0,0]);
  player1.gameboard.receiveAttack([0,1]);
	expect(player1.gameboard.allShipsSunk()).toBe(true);
});