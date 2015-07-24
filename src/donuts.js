// Donuts Task Runner
// Copyright (C) 2015, Michiel Sikma <info@michielsikma.com>
// MIT license

import TaskInterface from './interface';
import TaskParser from './parser'

class Donuts {
  construct(opts, tasks, args) {
    this.opts = opts;
    this.taskParser = new TaskParser();

    // Run through the tasks we'd like to have and process them.
    TaskParser.processTasks(tasks);
  }

  /**
   * After we've added all tasks and set everything up,
   * parse the command-line arguments and run whatever script
   * we need to run.
   */
  run() {
    // First, we'll create the interface object and run all our
    // collected tasks through it.
    this.taskInterface = new TaskInterface(this.opts);

  }
}
