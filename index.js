/**
 * Main entry-point - Executes all the program logic within the grammar rules
 */
const tracery = require('tracery-grammar');
const grammarSource = require('./grammar');

module.exports = (() => {

    var grammar = tracery.createGrammar(grammarSource);

    grammar.addModifiers(tracery.baseEngModifiers);
    console.log(grammar.flatten('#language#'));

})();
