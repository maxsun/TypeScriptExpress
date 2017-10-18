# TypeScript Express Boilerplate

An *extremely* basic Hello-World Express server in TypeScript.

Make sure you have [NPM](https://www.npmjs.com/), [Gulp](https://gulpjs.com/), and [Nodemon](https://github.com/remy/nodemon) installed.

## Getting started:

    
    git clone https://github.com/maxsun/typescript-express-boilerplate
    
    cd typescript-express-boilerplate/
    
    npm install
    
    gulp develop

### About:

The main code is in `src/main.ts`.

`gulp develop` executes Nodemon and the TypeScript compiler, which compiles `main.ts` and saves it to `dist/main.js`.

After running gulp, the server should be running at [localhost:3000](http://localhost:3000)
