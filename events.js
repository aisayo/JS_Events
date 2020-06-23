//adding onclick event 

// function helloWorld(){
//     alert("Clicked")
// }

// parameters

// console.log(`Testing parameters: ${a} ${b}`)

// function addingParameters(a, b){
//     console.log(`Reading parameters: ${a} ${b}`)
// }

// addingParameters("hello", "world")


// return values 

// function returningValues(x){
//     if (x < 5) {
//         console.log("before return")
//         return "Less than 5"
//         console.log('after return')
//     } 
//     console.log("after if statement")
//     return "More than 5"
//     console.log("after return statement")
// }

// returningValues(6)


// scoping

// let global = "global scope"
// // console.log(functionScope)

// function whatTheScope(){
//     let functionScope = "function scope"
//     console.log(global)
//     console.log(functionScope)

//     if (true){
//         var blockScope = "blockScope"
//         let blockScope = "blockScope"
//         console.log(blockScope)
//     }

//         console.log(blockScope)
// }

// whatTheScope()

// JavaScript Engine 

    // const myVar = 42;
    
    // function myFunc () {
    //     const myVar = 9001;
        
    //     return myVar;

    // }
    
    // myFunc();


// lexical scoping

    // const myVar = 'Foo';
    
    // function first () {

    //     console.log('Inside first()');
        
    //     console.log('myVar is currently equal to:', myVar);
    // }
    
    // function second () {

    //     const myVar = 'Bar';
        
    //     first();

    // }


//     const myVar = 'Foo';
 
//     function second () {
//     function first () {
//         console.log('Inside first()');
    
//         console.log('myVar is currently equal to:', myVar);
//     }
 
//     const myVar = 'Bar';
 
//     first();
// }



// hoisting 

    // function myFunc () {
    //     return 'Hello, world!';
    //   }
    
    //   myFunc();


    // myFunc();
    
    // function myFunc () {
    //   return 'Hello, world!';
    // }


    // function myFunc () {
    //     console.log(hello);
       
    //     var hello = 'World!';
    //   }