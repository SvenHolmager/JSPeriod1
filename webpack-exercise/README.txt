//To run project!
npm start



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

//To import CSS files from within a javascript module
npm install --save-dev style-loader css-loader

//To import images for backgrounds / icons etc.
npm install --save-dev file-loader

// Sets up a simple web server with the ability to use live reloading
npm install --save-dev webpack-dev-server

// Loading data like JSON, CSV, TSV, XML
npm install --save-dev csv-loader xml-loader


npm install --save-dev html-webpack-plugin
npm install clean-webpack-plugin --save-dev


//A wrapper that will emit files prcessed by webpack to a server
npm install --save-dev express webpack-dev-middleware

//Expand server to use ES6 via Babel
npm install --save-dev babel-loader babel-core babel-preset-env

//Install Bootstrap
npm i bootstrap --save