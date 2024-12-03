<<<<<<< HEAD
function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m == null) {
        return 0;
    }
    return m.length;

}
=======
function getVowels(str){
    const m = str.match(/[aeiou]/gi);
    if (m==null){
        return 0;
    }
    return m.length;

}
>>>>>>> 829979193f999aa3e46e627588d1573a7511e859
console.log(getVowels("seeing"));