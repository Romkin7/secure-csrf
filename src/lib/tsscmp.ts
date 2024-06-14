// Implements Brad Hill's Double HMAC pattern from
// https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/.
// The approach is similar to the node's native implementation of timing safe buffer comparison that will be available on v6+.
// https://github.com/nodejs/node/issues/3043
// https://github.com/nodejs/node/pull/3073
import crypto from 'crypto';

/**
 * bufferEqual function
 * @param {Buffer} bufferA
 * @param {Buffer} bufferB
 * @returns {boolean}
 */
function bufferEqual(bufferA: Buffer, bufferB: Buffer): boolean {
  if (bufferA.length !== bufferB.length) {
    return false;
  }
  // `crypto.timingSafeEqual` was introduced in Node v6.6.0
  // <https://github.com/jshttp/basic-auth/issues/39>
  if (crypto.timingSafeEqual) {
    return crypto.timingSafeEqual(bufferA, bufferB);
  }
  for (let i = 0; i < bufferA.length; i++) {
    if (bufferA[i] !== bufferB[i]) {
      return false;
    }
  }
  return true;
}
/**
 * timeSafeCompare function
 * @param {string} a
 * @param {string} b 
 * @returns {boolean}
 */
function timeSafeCompare(a: string, b: string): boolean {
  const stringA = String(a);
  const stringB = String(b);
  const key = crypto.pseudoRandomBytes(32);
  const bufferA = crypto.createHmac('sha256', key).update(stringA).digest();
  const bufferB = crypto.createHmac('sha256', key).update(stringB).digest();

  return bufferEqual(bufferA, bufferB) && a === b;
}

export default timeSafeCompare;
