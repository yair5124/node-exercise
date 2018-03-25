/**
 * Created by yairr on 11/06/2017.
 */
function reduce(arr, fn, initial) {
    return (function reduceElement(index, value) {
        if (arr.length === index) return value;
        return reduceElement(index+1, fn(value, arr[index], index, arr));
    })(0, initial);
}

module.exports = reduce