# node-typescript-starter-template

A basic template to quickly setup a node project with typescript

### some alternatives to tsc-watch

1. `ts-node src/index.ts`
2. `nodemon` (required nodemon.js)
3. `tsc -w`
4. `concurrently -k -n \"Typescript, Node\" -c \"yellow.bold, cyan.bold\" \"npm run dev:watch-ts\" \"nodemon ./dist/server/js\"`

5. `npm i -D tsx` and `tsx watch src/index.ts` (seems best combination of speed and minimal config)
6. starting from nodejs `v16.19.0`, the CLI introduced the `--watch` option, eliminating additional dependencies like `nodemon`; use CLI `--watch` option with `ts-node` like this: `node --watch --loader=ts-node/esm ./src/index.ts`
7. new kid in town: `ts-node-dev` => `ts-node-dev --respawn --transpileOnly ./src/index.ts`

### environment file should be .env and added to gitignore
