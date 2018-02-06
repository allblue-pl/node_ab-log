'use strict';

const
    chalk = require(`chalk`)
;

class abLog_Class
{

    cError(text)
    {
        return chalk.red(text);
    }

    cInfo(text)
    {
        return chalk.magenta(text);
    }

    cLog(text)
    {
        return text;
    }

    cSuccess(test)
    {
        return chalk.green(text);
    }

    cWarn(text)
    {
        return chalk.yellow(text);
    }

    error() {
        arguments[0] = this.cError(arguments[0]);
        console.error.apply(console, arguments);
    }

    info() {
        arguments[0] = this.cInfo(arguments[0]);
        console.log.apply(console, arguments);
    }

    log() {
        arguments[0] = this.cLog(arguments[0]);
        console.log.apply(console, arguments);
    }

    success() {
        arguments[0] = this.cSuccess(arguments[0]);
        console.log.apply(console, arguments);
    }

    warn() {
        arguments[0] = this.cWarn(arguments[0]);
        console.warn.apply(console, arguments);
    }
}
module.exports = new abLog_Class();