import CSRF from '../';

describe('CSRF', () => {
    it('secret can be created', async () => {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        expect(secret).toHaveLength(18);
    });
    it('token can be created', async () => {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        const token = csrf.create(secret);
        expect(token).toHaveLength(36);
    });
    it('token can be verified with secret', async () => {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        const token = csrf.create(secret);
        const isValid = csrf.verify(secret, token);
        expect(isValid).toBeTruthy();
    });
    it('token verification fails with invalid secret', async () => {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        const token = csrf.create(secret);
        const isValid = csrf.verify('abc', token);
        expect(isValid).toBeFalsy();
    });
    it('token verification fails with invalid token', async () => {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        const token = csrf.create(secret);
        const isValid = csrf.verify(secret, `${token}abc`);
        expect(isValid).toBeFalsy();
    });
});
