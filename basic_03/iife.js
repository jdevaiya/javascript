//  Immediately Invoked Function Expression (IIFE)

(function chai(){ // named IIFE
    console.log(`DB connected`)
})();

// () // first will use for define function 
// () // call a function 

//  IIFE  used for main in global scope problem solution 
//  in this we can require to use ";" after IIFE function use


((name) => { //without name IIFE
    console.log(`DB connected ${name}`);
})('jayendra');

