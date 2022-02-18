function isValidSubquence(array = [], sequence = []) {
    let sequenceIndex = 0;
    let arrayIndex = 0;
    while (sequenceIndex < sequence.length && arrayIndex < array.length) {
        if (sequence[sequenceIndex] === array[arrayIndex]) {
            sequenceIndex++;
        }
        arrayIndex++;
    }
    return sequenceIndex === sequence.length;
}

exports.isValidSubquence = isValidSubquence