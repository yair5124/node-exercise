/**
 * Created by yairr on 11/06/2017.
 */
function countWords(inputWords) {
    return inputWords.reduce((accumulator, currentValue, currentIndex, array) => {
        accumulator[currentValue] = accumulator.hasOwnProperty(currentValue) ? accumulator[currentValue]+1 : 1;
        return accumulator;
    }, {});
}

module.exports = countWords
