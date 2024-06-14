set -e
echo 'Starting secure-csrf package build process...'
rimraf ./dist
mkdir -p ./dist
echo 'Build secure-csrf'
npm run build-package
echo 'Add readme, changelog and licence'
cp ./README.md ./dist/
cp ./CHANGELOG.md ./dist/
cp ./LICENSE ./dist/
echo 'Copy package json'
npm run copy-package-json
echo 'Secure-csrf package build process have been completed successfully!'
