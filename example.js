var Donuts = require('./index.js');

var options = {
  'version': '1.0',
  'description': 'This is an example script',
  'epilog': 'Epilog test'
};
var tasks = [
  {
    'name': 'dev',
    'help': 'Runs hot reloading dev server at localhost.',
    'fn': function() {
      console.log('dev script!');
    },
    'args': [
      {
        'args': ['-p', '--port'],
        'options': {
          'nargs': 1,
          'required': false,
          'help': 'Specifies the listening port for the dev server (default: 8080).'
        }
      }
    ]
  },
  {
    'name': 'staging',
    'help': 'Creates a staging build in /public/.',
    'fn': function() {
      console.log('staging script!');
    },
    'args': [
      {
        'args': ['-p', '--port'],
        'options': {
          'nargs': 1,
          'required': false,
          'help': 'Specifies the listening port for the staging server (default: 8080).'
        }
      }
    ]
  },
  {
    'name': 'production',
    'help': 'Creates a production build in /public/.'
  },
  {
    'name': 'clean',
    'help': 'Empties out the /public/ directory.'
  },
  {
    'name': 'copy',
    'help': 'Copies over static assets.'
  },
  {
    'name': 'lint',
    'help': 'Checks code correctness using ESLint and JSCS.'
  }
];
var arguments = [
  {
    'arguments': ['-u', '--useless'],
    'options': {
      'nargs': 1,
      'required': false,
      'help': 'Does nothing.'
    }
  }
];

var script = new Donuts(options, tasks, arguments);
script.run();
