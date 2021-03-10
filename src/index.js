

module.exports = function check(str, bracketsConfig) {
    var stack = []; // [0] = '(',
    var openingBrackets = [];
    var closingBrackets = [];

    var bracketsConfigArr = Array.from(bracketsConfig); //  [['(', ')']]

    if (str.length % 2 != 0) {
        return false;
    }

    for (var i = 0; i < bracketsConfigArr.length; i++) {
        var openClosePair = bracketsConfigArr[i]; // ['(', ')']
        var openSymbol = Array.from(openClosePair[0]); // ['(']
        var closeSymbol = Array.from(openClosePair[1]);// [')']
        openingBrackets.push(openSymbol.toString());
        closingBrackets.push(closeSymbol.toString());
    }

    // var openingBrackets = [];// ['(']
    // var closingBrackets = [];// [')']

    return isValid(str); // str = '())n(';

    function isValid(str) {
        for (var i = 0; i < str.length; i++) { // 4
            var theBracket = str[i]; // [0] = '(', [1] = ')'

            if (openingBrackets.includes(theBracket) && closingBrackets.includes(theBracket) && stack.includes(theBracket)) {
                var openBracket = stack.pop();
                var openBracketIndex = openingBrackets.indexOf(openBracket);
                var closeBracket = closingBrackets[openBracketIndex];
                if (closeBracket != theBracket) {
                    return false;
                }
            } else if (openingBrackets.includes(theBracket)) {
                stack.push(theBracket);
            } else if (closingBrackets.includes(theBracket)) {
                var openBracket = stack.pop();
                var openBracketIndex = openingBrackets.indexOf(openBracket);
                var closeBracket = closingBrackets[openBracketIndex];
                if (closeBracket != theBracket) {
                    return false; 
                }
            } else {
                return false;
            }
        }
        return true;
    };
}
