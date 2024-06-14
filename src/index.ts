/*!
 * csrf
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
import crypto from 'crypto';
import { uid } from 'uid/secure';
import timeSafeCompare from './lib/tsscmp';
import rndm from './lib/rndm';
import ISettings from './@types/settings';

class CSRF {
    private EQUAL_GLOBAL_REGEXP: RegExp;
    private PLUS_GLOBAL_REGEXP: RegExp;
    private SLASH_GLOBAL_REGEXP: RegExp;
    private secretLength: number;
    private saltLength: number;
    constructor(settings?: ISettings) {
        this.EQUAL_GLOBAL_REGEXP = /=/g;
        this.PLUS_GLOBAL_REGEXP = /\+/g;
        this.SLASH_GLOBAL_REGEXP = /\//g;
        this.secretLength = settings?.secretLength || 18;
        this.saltLength = settings?.saltLength || 8;
    }

    /**
     * Create a new CSRF token.
     *
     * @param {string} secret The secret for the token.
     * @returns {string}
     * @public
     */
    create(secret: string): string {
        if (!secret || typeof secret !== 'string') {
            throw new TypeError('argument secret is required');
        }

        return this.tokenize(secret, rndm(this.saltLength));
    }

    /**
     * Create a new secret key.
     * @returns {Promise<string>}
     * @public
     */
    async secret(): Promise<string> {
        return uid(this.secretLength);
    }

    /**
     * Tokenize a secret and salt.
     * @param {string} secret
     * @param {string} salt
     * @returns {string}
     * @private
     */
    private tokenize(secret: string, salt: string): string {
        return `${salt}-${this.hash(salt + '-' + secret)}`;
    }

    /**
     * Verify if a given token is valid for a given secret.
     *
     * @param {string} secret
     * @param {string} token
     * @returns {boolean}
     * @public
     */
    verify(secret: string, token: string): boolean {
        if (!secret || typeof secret !== 'string') {
            return false;
        }

        if (!token || typeof token !== 'string') {
            return false;
        }

        const index = token.indexOf('-');

        if (index === -1) {
            return false;
        }

        const salt = token.substr(0, index);
        const expected = this.tokenize(secret, salt);

        return timeSafeCompare(token, expected);
    }

    /**
     * Hash a string with SHA1, returning url-safe base64
     * @param {string} input
     * @returns {string}
     * @private
     */
    private hash(input: string): string {
        return crypto
            .createHash('sha1')
            .update(input, 'ascii')
            .digest('base64')
            .replace(this.PLUS_GLOBAL_REGEXP, '-')
            .replace(this.SLASH_GLOBAL_REGEXP, '_')
            .replace(this.EQUAL_GLOBAL_REGEXP, '');
    }
}

export default CSRF;
