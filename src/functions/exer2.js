/**
 * Created by yairr on 11/06/2017.
 */
function repeat(operation, num) {
    if (num === 0) return;
    operation();
    repeat (operation, num-1);
}

// Do not remove the line below
module.exports = repeat
