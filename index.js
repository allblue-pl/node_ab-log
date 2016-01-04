'use strict';

var chalk = require('chalk');


module.exports = {
    error: function(msg) {
        console.error(chalk.red(msg));
    },
    log: function(msg) {
        console.log(msg);
    },
    success: function(msg) {
        console.log(chalk.green(msg));
    },
    warning: function(msg) {
        console.warn(chalk.yellow(msg));
    }
};
