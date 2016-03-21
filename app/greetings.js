var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("Hello"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("Tired, thanks"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    console.log(greeter);
}
;
