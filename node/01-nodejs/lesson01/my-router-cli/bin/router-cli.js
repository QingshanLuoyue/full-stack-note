#!/usr/bin/env node
console.log('1 :>> ', 1);

const program = require('commander')
program.version(require('../package').version)
// program
//     .command('init <name>')
//     .description('init project')
//     .action(
//         require('../lib/init')
//     )

program
    .command('routerinit')
    .description('refresh routers...')
    .action(require('../lib/refresh')())