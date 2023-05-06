var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack); // Det här är medvetet felaktigt
}

//Tömmer den existerade stacken
exports.emptyStack = function() {
    return stack;
}

//Returnerar det längsta elementet i stacken
exports.findLongestElement = function() {
    return _.sortBy(stack, 'length').reverse()[0];
}