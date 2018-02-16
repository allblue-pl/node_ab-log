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

    cSuccess(text)
    {
        return chalk.green(text);
    }

    cWarn(text)
    {
        return chalk.yellow(text);
    }

    error() {
        arguments[0] = this.cError(this._formatArg(arguments[0]));
        console.error.apply(console, arguments);
    }

    info() {
        arguments[0] = this.cInfo(this._formatArg(arguments[0]));
        console.log.apply(console, arguments);
    }

    log() {
        arguments[0] = this.cLog(this._formatArg(arguments[0]));
        console.log.apply(console, arguments);
    }

    success() {
        arguments[0] = this.cSuccess(this._formatArg(arguments[0]));
        console.log.apply(console, arguments);
    }

    warn() {
        arguments[0] = this.cWarn(this._formatArg(arguments[0]));
        console.warn.apply(console, arguments);
    }


    _formatArg(arg)
    {
        if (arg instanceof Error)
            return arg.stack;

        return arg;
    }

}
module.exports = new abLog_Class();