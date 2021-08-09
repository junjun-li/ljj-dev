#!/usr/bin/env node

const importLocal = require('import-local')

if (importLocal(__filename)) {
  require('npmlog').info('cli', 'using local version of @ljj-cli')
} else {
  require('../lib')(process.argv.slice(2))
}
