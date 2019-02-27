/**
 * Returns the grammar rules
 */
module.exports = Object.freeze({
    'language': "#source# #EOF#",
    /**
     * Identifier:
     */
    'identifier': ['<id>'],
    'source': ['#function#'],
    /**
     * Function:
     *
     * function teste: a,b => {
     *    print('Hello');
     * }
     *
     */
    'function': 'function #identifier#: #functionParams# => #statement#',
    'functionParams': ['void', '#functionWithParams#'],
    'functionWithParams': ['#identifier#', '#identifier#, #functionWithParams#'],
    /**
     * Statement:
     *
     * {
     *    print('Hello');
     * }
     */
    'statement': "{#EOL##block##EOL#};",
    'block': '   print(\'Hello\');',
    'EOL': ['\n', '\r\n'],
    'EOF': '\0'
});