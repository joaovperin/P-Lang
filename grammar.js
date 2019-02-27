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
    'functionParams': ['#functionParamsNo#', '#functionParamsYes#'],
    'functionParamsNo': 'void',
    'functionParamsYes': ['#identifier#', '#identifier#, #functionParamsYes#'],
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