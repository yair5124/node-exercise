/**
 * Created by yairr on 11/06/2017.Object.prototype.hasOwnProperty.call(object, 'quack')
 */
function duckCount1() {
    console.log(JSON.stringify(arguments));
    return 0 + ('0' in arguments && arguments['0'] && Object.prototype.hasOwnProperty.call(arguments['0'],'quack'))
        + ('1' in arguments && arguments['1'] && Object.prototype.hasOwnProperty.call(arguments['1'],'quack'))
        + ('2' in arguments && arguments['2'] && Object.prototype.hasOwnProperty.call(arguments['2'],'quack'))
        + ('3' in arguments && arguments['3'] && Object.prototype.hasOwnProperty.call(arguments['3'],'quack'))
        + ('4' in arguments && arguments['4'] && Object.prototype.hasOwnProperty.call(arguments['4'],'quack'))
        + ('5' in arguments && arguments['5'] && Object.prototype.hasOwnProperty.call(arguments['5'],'quack'))
        + ('6' in arguments && arguments['6'] && Object.prototype.hasOwnProperty.call(arguments['6'],'quack'))
        + ('7' in arguments && arguments['7'] && Object.prototype.hasOwnProperty.call(arguments['7'],'quack'))
        + ('8' in arguments && arguments['8'] && Object.prototype.hasOwnProperty.call(arguments['8'],'quack'))
        + ('9' in arguments && arguments['9'] && Object.prototype.hasOwnProperty.call(arguments['9'],'quack'))
        + ('10' in arguments && arguments['10'] && Object.prototype.hasOwnProperty.call(arguments['10'],'quack'))
        + ('11' in arguments && arguments['11'] && Object.prototype.hasOwnProperty.call(arguments['11'],'quack'))
        + ('12' in arguments && arguments['12'] && Object.prototype.hasOwnProperty.call(arguments['12'],'quack'))
        + ('13' in arguments && arguments['13'] && Object.prototype.hasOwnProperty.call(arguments['13'],'quack'))
        + ('14' in arguments && arguments['14'] && Object.prototype.hasOwnProperty.call(arguments['14'],'quack'))
        + ('15' in arguments && arguments['15'] && Object.prototype.hasOwnProperty.call(arguments['15'],'quack'))
        + ('16' in arguments && arguments['16'] && Object.prototype.hasOwnProperty.call(arguments['16'],'quack'))
        + ('17' in arguments && arguments['17'] && Object.prototype.hasOwnProperty.call(arguments['17'],'quack'))
        + ('18' in arguments && arguments['18'] && Object.prototype.hasOwnProperty.call(arguments['18'],'quack'))
        + ('19' in arguments && arguments['19'] && Object.prototype.hasOwnProperty.call(arguments['19'],'quack'))
    + ('20' in arguments && arguments['20'] && Object.prototype.hasOwnProperty.call(arguments['20'],'quack'));
}
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(obj => {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length;
}
module.exports = duckCount