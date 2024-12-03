function circumferenc(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}
console.log(circumferenc("4.567abcdefgh"));
console.log(circumferenc("abcdefgh"))