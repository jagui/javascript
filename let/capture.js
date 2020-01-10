for (var i = 0; i < 5 ;i++) {
    setTimeout(function () {
        console.log(i)
    }, 1)
}


for (let n = 0; n < 5; n++) {
    setTimeout(function () {
        console.log(n);
    }, 1)
}

/*
1st loop prints 5,5,5,5,5 (doesn't capture n)
2nd loop prints 0,1,2,3,4 (captures n)
 */

console.log(i); // prints 5
//console.log(n); throws an error coz n is not in scope
