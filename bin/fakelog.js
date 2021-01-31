#!/usr/bin/env node

import program from 'commander';
import generateLog from '../index.js';

program
  .version('0.0.1')
  .description('Generates fake logs and print it to STDOUT')
  .option('-l, --length [count]', 'count of output lines', 10) // Дефолтный формат – 4 параметр
  .action(() => {
    console.log(generateLog(program.opts().length));
  })
  .parse(process.argv);
