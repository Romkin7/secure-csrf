import { writeFileSync } from 'fs';
import writePackageJSON from './copyPackageJson';

/**
 * addPackageJsonFiles function
 * @param {string} filePathEsm
 * @param {string} filePathCommonjs
 * @returns {void}
 */
function addPackageJsonFiles(
    filePathEsm: string,
    filePathCommonjs: string,
): void {
    writeFileSync(filePathEsm, JSON.stringify({ type: 'module' }));
    writeFileSync(filePathCommonjs, JSON.stringify({ type: 'commonjs' }));
}

addPackageJsonFiles('./dist/esm/package.json', './dist/commonjs/package.json');
writePackageJSON();
