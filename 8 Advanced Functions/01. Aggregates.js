function aggregates(arr) {
    console.log("Sum = " + arr.reduce((a,b) => a+b));
    console.log("Min = " + arr.reduce((a,b) => Math.min(a,b)));
    console.log("Max = " + arr.reduce((a,b) => Math.max(a,b)));
    console.log("Product = " + arr.reduce((a,b) => a*b));
    console.log("Join = " + arr.reduce((a,b) => ""+a+b));
}

/*
function aggregates(arrOfNum) {
    let arr = arrOfNum;
    reduce(arr, (a,b) => a+b);
    reduce(arr, (a,b) => Math.min(a,b));
    reduce(arr, (a,b) => Math.max(a,b));
    reduce(arr, (a,b) => a*b);
    reduce(arr, (a,b) => "" + a + b);

    function reduce(arr, f) {
        let result = arr.shift();
        for (let num of arr) {
            result = f(result, num);
        }
        console.log(result);
    }

}
*/

aggregates([2, 3, 10, 5]);
