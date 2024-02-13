import { writeFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require('../package.json');

/**
 * writePackageJSON function,
 * that writes package json file in build output.
 * @returns {void}
 */
function writePackageJSON(): void {
    delete packageJSON.devDependencies;
    delete packageJSON.scripts;
    writeFileSync(`./dist/package.json`, JSON.stringify(packageJSON));
}

export default writePackageJSON;
