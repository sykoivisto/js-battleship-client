const Ship = (length) => {
	let hitsTaken = 0;
	let location = [];

	const setLocation = (isHorizontal, startingLocation) => {
		//starting location should be in the format [x,y]
		let peg = startingLocation;
		location.length = 0;
		for (let i = 0; i < length; i++) {
			location.push([...peg]);
			isHorizontal ? peg[0]++ : peg[1]++;
		}
	};
	const hit = () => {
		hitsTaken++;
	};
	const isSunk = () => hitsTaken >= length;
	const getLength = () => length;
	const getHitsTaken = () => hitsTaken;
	const getLocation = () => location;

	return {
		getLength,
		getHitsTaken,
		getLocation,
		setLocation,
		hit,
		isSunk,
	};
};

export default Ship;
