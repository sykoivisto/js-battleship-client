import Ship from '../Ship';

let carrier = Ship(5);

test('creates ship with proper length', () => {
	expect(carrier.getLength()).toBe(5);
});
test('has proper amount of hits', () => {
	expect(carrier.getHitsTaken()).toBe(0);
});
test('hit fuction adds a hit', () => {
	carrier.hit();
	expect(carrier.getHitsTaken()).toBe(1);
});
test('sunk in proper amount of hits', () => {
	carrier.hit();
	carrier.hit();
	carrier.hit();
	expect(carrier.isSunk()).toBe(false);
	carrier.hit();
	expect(carrier.isSunk()).toBe(true);
});
test('creates ship with proper location', () => {
	carrier.setLocation(false, [0, 0]);
	expect(carrier.getLocation()).toEqual([
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4],
	]);
});
test('creates ship with proper location', () => {
	carrier.setLocation(true, [0, 0]);
	expect(carrier.getLocation()).toEqual([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[4, 0],
	]);
});
