'use strict';

var chalk = require('chalk');


module.exports = {
    error: function(msg) {
        chalk.red(msg);
        process.exit();
    },
    log: function(msg) {
        console.log(msg);
    },
    success: function(msg) {
        chalk.green(msg);
    },
    warning: function(msg) {
        chalk.yellow(msg);
    }
};
