const NEWARR = () => {
	let newArr = [];
	for (let i = 0; i < 10; i++) {
		let child = [];
		for (let j = 0; j < 10; j++) {
			child.push('');
		}
		newArr.push(child);
	}

	return newArr;
};

export default NEWARR;