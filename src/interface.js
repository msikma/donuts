// Donuts Task Runner
// Copyright (C) 2015, Michiel Sikma <info@michielsikma.com>
// MIT license

import { ArgumentParser } from 'argparse';

class TaskInterface {
  constructor(options, tasks=[], args=[]) {
    // Construct the root parser with the user-defined information.
    this.parser = new ArgumentParser({
      'version': options.version || null,
      'description': options.description || null,
      'epilog': options.epilog || null,
      'addHelp': true
    });

    // Activate the ability to add subparsers, which we'll use to define
    // the available tasks.
    this.subParsers = this.parser.addSubparsers();

    // Apply scripts and arguments.
    this.processTasks(tasks);
    this.processArgs(args);
  }
  addTask(name, help, fn) {
    this.subParsers.addParser(name, {'help': help});
  }
  addArg(cmds, opts) {
    this.parser.addArgument(cmds, opts);
  }
  addTasks(tasks) {
    for (let task of tasks) {
      this.addTask(task.name, task.help, task.fn, task.args);
    }
  }
  addArgs(args) {
    for (let arg of args) {
      this.addArg(arg.arguments, arg.options);
    }
  }
}

export default TaskInterface;
