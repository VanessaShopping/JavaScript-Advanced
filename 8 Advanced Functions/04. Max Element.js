function solve(arr) {
    return Math.max.apply(null, arr); // Понеже Math не може да работи с масиви ползваме apply
    // първия аргумент е обекта, който в слуея е null
    // втория е масив от аргументи.
    // apply приемаше (обект, [масив от аргументи])
    // call приемаше (обект, арг1, арг2, арг3.......) / Не може да ползва масив
}


function solveTwo(arr) {
    return Math.max(...arr);
}