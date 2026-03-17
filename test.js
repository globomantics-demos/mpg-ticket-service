const fs = require('fs');
const path = require('path');

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const version = pkg.dependencies['@globoticket/common'];
const lib = path.join(__dirname, '..', 'registry', 'common-' + version, 'schemas', 'event.js');
const { validateEvent } = require(lib);

if (validateEvent({ id: 'evt-1' }) !== true) {
  console.error('ticket-service: FAIL - an event with an id should be valid');
  process.exit(1);
}
console.log('ticket-service: ok (common ' + version + ')');
