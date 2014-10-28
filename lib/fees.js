var values = exports.fees = {
    'STOP': 0,
    'SUICIDE': 0,
    'SHA3': 20,
    'SLOAD': 20,
    'SSTORE': 100,
    'BALANCE': 20,
    'CREATE': 100,
    'CALL': 20,
    'TXDATA': 5,
    'TRANSACTION': 500
};

exports.getFee = function (opcode) {
    var fee = values[opcode];
    if (fee === undefined) {
        fee = 1;
    }
    return fee;
};
