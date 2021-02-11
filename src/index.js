module.exports = function reverse (n) {
    let string = [...Math.abs(n).toString()];
    return Number(string.reverse().join(""));
}
