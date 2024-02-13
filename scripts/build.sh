set -e
echo 'Starting secure-csrf package build process...'
rimraf ./dist
mkdir -p ./dist
echo 'Build'
tsc -p ./tsconfig.esm.json
tsc -p ./tsconfig.commonjs.json
echo 'Add package.json files'
npm run add-package-json-files
cp ./README.md ./dist/
cp ./CHANGELOG.md ./dist/
echo 'Secure-csrf package build process have been completed successfully!'
