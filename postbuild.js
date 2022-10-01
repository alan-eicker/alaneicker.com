const replace = require('replace');

replace({
  regex: new RegExp(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi),
  replacement: '',
  paths: ['dist/index.html'],
  recursive: true,
  silent: true,
});
