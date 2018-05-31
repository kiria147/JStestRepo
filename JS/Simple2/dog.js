function substring(str) {

	let aibe = [];
	for (let a = 0, b = 1; a < str.length; a++, b++) {
		aibe[a] = str.substring(a, b);
	}

	let komb = [];
	let tmp = '';
	let math = Math.pow(2, aibe.length);

	for (let i = 0; i < math; i++) {
		tmp = '';
		for (let j = 0; j < aibe.length; j++) {
			if (i & Math.pow(2, j)) {
				tmp += aibe[j];
			}

		}
		if (tmp !== '') {
			komb.push(tmp);
		}
    
	}
	console.log(komb.join('\n'));
}

substring('dog');