v1.1.0

New minor version 1.1.0 removes rndm and tsscmp npm package dependencies and updates uid to uuid package.

- Removes npm package rndm ---> moves it to be internal updated ts and esm supported version that is built in.
- Removes npm package tsscmp ---> moves it to be internal updated ts and esm supported version that is built in.
- Removes uid npm package dependency
- Adds uuid npm package dependency

`secure-csrf` is now possible to use with latest eslint 9.x.

v1.0.2

New patch release contains:

- Removes express dependency

v1.0.1

- Removes tests from npm package

v1.0.0

-   Creates CSRF token methods
    - secret
    - create
    - verify
