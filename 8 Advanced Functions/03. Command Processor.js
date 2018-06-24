function solve(arr) {
    let cmdProcessor = (function () { // Анонимна фунцкия , която я пазим в променлива cmdProcessor. IIFE
        let result = "";                        // Immediately-invoked function expression
        return { // IIFE връща обект в този случай. Може да върне и функция
            'append': (str) => { // append, removeStart ... са зададени да се изпълнят, след като ги подадем отвън.
                result += str
            },
            'removeStart': (num) => { // По надоло извикваме променливата cmdProcessor. [подаваме ключа](тук е стойноста)
                result = result.substring(num)
            },
            'removeEnd': (num) => {
                result = result.substring(0, result.length - num)
            },
            'print': () => {
                console.log(result)
            }
        }
    }());

    for (let cmdItem of arr) { // Тук въртим цикъл за всеки стринг от масива
        let [cmd, item] = cmdItem.split(' '); // всеки стринг е съставен от две думи. Разделяме ги и ги запазваме в две променливи
        cmdProcessor[cmd](item); 
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

/*
function commandProcessor(arr) {
    let result = "";
    for (let str of arr) {
        let commandType = str.split(" ")[0];
        let commandValue = str.split(" ")[1];
        switch (commandType) {
            case"append":
                result += commandValue;
                break;
            case"removeStart":
                result = result.slice(commandValue);
                break;
            case"removeEnd":
                result = result.slice(0, -commandValue);
                break;
            case"print":
                console.log(result);
                break;
        }
    }
}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
*/
