function foo() {
    var bar;
    quux = 'buggy';

    function zip() {
        var quux;
        bar = 'barbara';
    }

    return zip;
}