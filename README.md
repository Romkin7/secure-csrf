# Secure CSRF
`secure-csrf`

As of new verison 1.1.0 `secure-csrf` package is now possible to use with latest `eslint 9.x.`.

CSRF protection for Node JS Applications.
Built with TypeScript and ESM.

This package is updated version of [csrf](https://www.npmjs.com/package/csrf) package, with no external dependencies.

Package is used to generate `uid/secure` secret.

## Installation

You can install `csrf-tokens` package with popular package managers for NodeJS.

npm
`npm install csrf-tokens --save`

yarn
`yarn add csrf-tokens`

pnpm 
`pnpm install csrf-tokens`

## Usage

In order to use this package, create a secret key for each user and store it securely for short amount of time.

### Available methods

*secret*

Asyncronous method, that generates secure uuid and returns it. Should be awaited.

```ts
import express, { Request, Response, NextFunction } from 'express';
import CSRF from 'secure-csrf';

const app = express();

app.use(async(req: Request, res: Response, next: NextFunction) => {
    try {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        next();
    } catch(error) {
       return next(error);
    }
}); 
```

### Create CSRF Token

```ts
import CSRF from 'secure-csrf';

const csrf = new CSRF();

const token = csrf.create(secret);
```

```ts
import express, { Request, Response, NextFunction } from 'express';
import CSRF from 'secure-csrf';

const app = express();

app.use(async(req: Request, res: Response, next: NextFunction) => {
    try {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        const token = csrf.create(secret);
        next();
    } catch(error) {
       return next(error);
    }
}); 
```

### Verify CSRF Token

```ts
import CSRF from 'secure-csrf';

const csrf = new CSRF();

const token = csrf.verify(secret, token);
```

```ts
import express, { Request, Response, NextFunction } from 'express';
import CSRF from 'secure-csrf';

const app = express();

app.use(async(req: Request, res: Response, next: NextFunction) => {
    try {
        const csrf = new CSRF();
        const secret = await csrf.secret();
        csrf.verify(req.session.secret, req.body.token);
        next();
    } catch(error) {
       return next(error);
    }
}); 
```