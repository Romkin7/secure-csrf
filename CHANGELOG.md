v2.0.1

New patch release 2.0.1 fixes build output

v2.0.0

New major release 2.0.0 
- Removes commonjs and esm output folders
- Moves commonjs output to root of dist folder

v1.1.4

New patch release 1.1.4 fixes build output

v1.1.0

New minor version 1.1.0 removes rndm and tsscmp npm package dependencies and updates uid to uuid package.

- Removes npm package rndm ---> moves it to be internal updated ts and esm supported version.
- Removes npm package tsscmp ---> moves it to be internal updated ts and esm supported version.
- Removes npm package uid ---> moves its secure method to be internally updated ts and esm supported version.

`secure-csrf` is now possible to use with the latest eslint 9.x.

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
