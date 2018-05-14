// GETTING STARTED CODE!
npm init -y
npm install webpack webpack-cli --save-dev

npm install --save lodash

// BUNDLE SOLUTION
npx webpack

// sets a specific webpack.config.js file. Others can be used for more advanced projects.
npx webpack --config webpack.config.js 

// With build script in place in the package.json we can run following command
npm run build
