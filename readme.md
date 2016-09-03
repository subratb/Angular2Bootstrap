Configuration steps for first run:

Make sure NodeJS and NPM are installed in your system.

1.	Navigate to project folder in command line and run "npm install"
	This will install all the packages specified in package.json
2.	Initialize typings for typescript by running "typings install" in the same command line
	This will install typings for TypeScript to understand all angular modules. This is defined in typings.json
3.	Run the gulp default task in TaskRunnerExplorer
	Executes the task defined in gulpfile.js. This moves/transpiles script/css files to their respective directories