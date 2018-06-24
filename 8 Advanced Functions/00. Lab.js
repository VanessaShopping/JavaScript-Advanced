// IIFE -> Immediately-invoked function expression
// Фунцкия която се извиква на момента. Не замърсява глобалния скоуп. Анонимна е.
let f = function () {
    console.log("Func");
};
f(); // Тук я извикваме. В променливата f се записва резултата от функцията.

// Exspression -> израз. За да направим една фунцкия(тип IIFE) exspression трябва да я сложим в скоби ( )
(function () {
    console.log("Expression");
})(); // () чрез този оператор извикваме фунцкията веднага. Друг начин да я извикаме няма, освен ако не сме я присовили на някоя променлива.

// *************************** //
// Closure -> Това е когато в една фунцкия (в тялото на IIFE)  имаме някакви данни, променливи които можем да ги достъпим
// само чрез вложени функции или обекти.
// Затваряш състояние от вътрешна функция в тялото на външната фунцкия.
let closure = (function () {
    let counter = 0; // това е Closure
    return function () {
        console.log(++counter); // Тук правим нещо с тази капсулирана променлива.
    }
})(); // () // За да работи това , тук трябва да извикаме самата функция за да може да върне резултат от вътрешната фунцкия
// и този резултат да го запише в променливата closure.
closure(); // Тук извикваме на променливата closure функцията .
closure();  // По този начин можем да достъпим променлвиата counter. Този counter не е видим никъде другаде освен в самата фунцкия
// и в другите "вложени"/ вътрешни фунцкии.
// По този начин не се замърсява глобалния скоуп

let c = (function () {
    let counter = 0;
    console.log("First Invoke");
    return function () {
        ++counter;
        console.log("Този ретърн записва резултата в променливата c");
        console.log(counter);
    }
})(); // () тук се извиква функцията
console.log(c); // `c` всъщност е фунцкията return function(){.........}. и по точно резултата от тази фунцкия.
c(); // Тук се извиква closure-a на фунцкията и връща резултата от return function

// ****************************************** //
// This , call , apply , bind


let maria = {
    name: 'Maria',
    hello: function (thing) {
        console.log(this.name + " says hello " + thing + " " + this.neshtoDrugo);
    },
    neshtoDrugo: "drugo"
};
maria.hello("world"); // На позиция hello: има функция ,която приема нещо (thing)
// maria.neshtoDrugo = 'syvsem drugo';
// console.log(maria.neshtoDrugo);


let ivan = {
    name: 'Ivan',
    neshtoDrugo: "na ivan drugoto"
};

maria.hello.call(ivan, "now"); // Първото е променливата тип обект Ivan -> това ЩЕ БЪДЕ  THIS-a в обекта Maria.
//  this.name в този случай е Ivan , защото в обекта Ivan name: `Ivan` , а в обекта Maria name: `Maria`
// В обекта Ivan има name: 'Ivan' който всъщност е this.name в обекта Maria, Понеже го подаваме през обекта Ivan
// , второто е аргумент. Ако има други аргументи се разделят със запетая
maria.hello.apply(ivan, ['again']); // apply and call са едно и също нещо. Разилката е ,че аргументите при apply са един масив.
// Когато ползваме call и apply първия аргумент е обекта. За да се изпълни правилно,
// когато ползваме this и в двата обекта трябва да са с еднакви имена.
// В обекта Maria -> this.name го има и за работи и за Ivan трябва в обекта на Ivan да има name.

console.log("***************************************");
let a = maria.hello.call(ivan, " from call"); // Тук се извиква , но нищо не се записва в а. а е undefined
let helloIvan = maria.hello.bind(ivan, " from bind"); // Докато тук с bind се записва функцията на Maria която сме извикали.
// Все едно сме я копирали / доблирали в helloIvan. helloIvan променлива която държи фунцкия
// Можем да я ползваме , но реално тази функция не съществува в обекта Ivan
// Или по-точно функцията от обекта Мариа , която ползва this-a на обекта Ivan е запазена в променливата helloIvan
// Функцията от обекта Мариа + this от обекта Иван = helloIvan
helloIvan();












