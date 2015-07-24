Donuts - Minimalist task framework
==================================

**Note: don't use this yet. It's still in alpha and most work
has not been done yet.**

This is a very simple task runner framework designed to help you quickly
set up powerful build scripts. It's designed around the following core
principles:

* This is a framework for making scripts; you don't invoke Donuts by typing
  `donuts <task>` on the command line, you write your own script that
  utilizes the Donuts module.
* Build scripts should be rather specific and simple. Once they start doing
  too many things, it's best to split them up.
* Simplicity is key: if you want to, you can just run a JS function in response
  to a command-line argument. Or if you want more power, you can configure
  a plugin.
* Donuts does not self-advertise. End users running your build scripts don't
  need to know it exists.

You can set up a Donuts script from scratch in a few minutes, even if you're
new to the framework. It aims to have very quick startup times too—no
unnecessary task loading or processing is done.

Donuts is mainly inspired by Grunt, but approaches the concept of task running
from a slightly different angle. Tasks may use plugins, or they may not.
Tasks don't have "targets" like they do in Grunt; if you want to run a plugin
with multiple configurations, just write multiple tasks that use the same
plugin. Also, Donuts uses a standard Unix script interface.

Example
-------

Let's say you want to write a build script that can copy over some files
and start a simple Express server to host them. Make a new file called
`build.js` (or whatever name you prefer) and add the following:

```
#!/usr/bin/env node
var Donuts = require('donuts');

// Basic script information that's shown on ./build.js --help
var options = {
  'version': '1.0',
  'description': 'My first build script.',
  'epilog': 'For more info, visit <https://github.com/me/my-app>.'
};

// Define the tasks. This is an array since the order is preserved.
var tasks = [
  {
    'name': 'copy-files', // can be any name
    'help': 'Copies over build files.'
    'task': ['copy', { // plugin-defined options go here
      'src': './static/**/*',
      'dest': './build/'
    }]
  },
  {
    'name': 'dev',
    'help': 'Runs an Express server for development purposes.',
    'task': ['express', { // insert lots of options here
    }]
  }
];

// We can define some optional arguments too, but not in this example.
var args = [];

// Now all that needs to be done is invoke the Donuts module
// and call its run() method.
var buildScript = new Donuts(options, tasks, arguments);
buildScript.run();
```

This script can then be run like any standard Unix script, responding
to `--help` to display its capabilities.

    $ chmod +x ./build.js    # do this once to make it executable
    $ ./build.js --help

This shows the following output:

```
output goes here
```

As simple as the above script is, there are quite a few options that can be
used when defining tasks. The purpose is to provide quite a bit of flexibility
for use in real-world complex applications, without complicating the API.


License
-------

MIT license.
