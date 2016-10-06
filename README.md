# AB Log

Simple 'chalk' package wrapper for logging purposes.

## Installation

`npm install ab-log`

## Usage

```
var abLog = require('ab-log');

abLog.log('Log.');
abLog.log('Log: %s.', 'important log');

abLog.success('Success.');
abLog.success('Success: %s.', 'great success');

abLog.warning('Warning.');
abLog.warning('Warning: %s.', 'dangerous warning');

abLog.error('Error.');
abLog.error('Error: `%s`.', 'horrible error.');
```
