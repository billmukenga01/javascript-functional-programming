//function taht adds two to input
const addTwo = (input)=> input + 2;

//function that adds s to input
const addS = (input)=> input + 's';

//callback and higher order function
const map = (array, actionOnArray) => {
    array.forEach(element => {
        actionOnArray(element);    
    });
} 

const multiplyBy2 = (input) =>{
    return input*2;
}


map([1,2,3,4,5,6], multiplyBy2);