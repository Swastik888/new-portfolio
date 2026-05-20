// function abc(){
//     console.log(1)
//     abc()
// }
// abc()


//print 1 to n...

function printNumbers(n){
    
    if(n>0){
        printNumbers(n-1)
        console.log(n)
    }
}

printNumbers(8)

//Space complexity and TC both is = O(n).....


///Find factorial...

function factorial(n){
    if(n===0 || n===1){
        return 1
    }

    return n*factorial(n-1)
}
console.log(factorial(5))