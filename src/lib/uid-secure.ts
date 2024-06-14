import { randomBytes } from 'crypto';

/**
 * random function
 * @param {number} length
 * @returns {Buffer}
 */
export function random(length: number): Buffer {
	return randomBytes(length);
}

let IDX=256;
let HEX: string[] =[];
let SIZE=256*16;
let BUFFER: Buffer;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

/**
 * uid function, returns secure uid
 * @param {number} length
 * @returns {string}
 */
function uid(length: number): string {
	let str=''; 
    let tmp=(length || 11); 
    let num=(1+tmp) / 2 | 0;
	if (!BUFFER || ((IDX + num) > SIZE)) {
		BUFFER = random(SIZE);
		IDX = 0;
	}

	while (num--) {
		str += HEX[BUFFER[IDX++]];
	}

	return str.substring(0, tmp);
}

export default uid;
