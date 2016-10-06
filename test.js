'use strict';

var abLog = require('./index.js');


abLog.log('Log.');
abLog.log('Log: %s.', 'important log');

abLog.success('Success.');
abLog.success('Success: %s.', 'great success');

abLog.warn('Warning.');
abLog.warn('Warning: %s.', 'dangerous warning');

abLog.error('Error.');
abLog.error('Error: `%s`.', 'horrible error.');
