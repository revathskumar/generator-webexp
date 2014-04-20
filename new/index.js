'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var NewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the new subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('index.html', 'app/' + this.name + '.html');
    this.copy('index.js', 'app/scripts/' + this.name + '.js');
  }
});

module.exports = NewGenerator;
