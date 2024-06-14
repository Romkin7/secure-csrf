import assert from 'assert';

const base62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const base36 = 'abcdefghijklmnopqrstuvwxyz0123456789';
const base10 = '0123456789';

const create = (chars: string) => {
  assert(typeof chars === 'string', 'the list of characters must be a string!');
  const length = Buffer.byteLength(chars);
  return function rndm(len = 10) {
    assert(typeof len === 'number' && len >= 0, 'the length of the random string must be a number!');
    let salt = '';
    for (let i = 0; i < len; i++) {
      salt += chars[Math.floor(length * Math.random())];
    }
    return salt;
  };
};

const exporter = create(base62);
const base62Export = exporter;
const base36Export = create(base36);
const base10Export = create(base10);

export default exporter;
export { base62Export as base62, base36Export as base36, base10Export as base10, create };
