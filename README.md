# node-typescript-starter-template

A basic template to quickly setup a node project with typescript

### some alternatives to tsc-watch

1. `ts-node src/index.ts`
2. `nodemon` (required nodemon.js)
3. `tsc -w`
4. `concurrently -k -n \"Typescript, Node\" -c \"yellow.bold, cyan.bold\" \"npm run dev:watch-ts\" \"nodemon ./dist/server/js\"`

### environment file should be .env and added to gitignore
