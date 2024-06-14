set -e
echo 'Starting secure-csrf package build process...'
rimraf ./dist
mkdir -p ./dist
echo 'Build esm'
tsc -p ./tsconfig.esm.json
echo 'Build commonjs'
tsc -p ./tsconfig.commonjs.json
echo 'Add package.json files'
npm run add-package-json-files
echo 'Add readme, changelog and licence'
cp ./README.md ./dist/
cp ./CHANGELOG.md ./dist/
cp ./LICENCE ./dist/
echo 'Secure-csrf package build process have been completed successfully!'
