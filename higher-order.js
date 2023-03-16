//function taht adds two to input
const addTwo = (input)=> input + 2;

//function that adds s to input
const addS = (input)=> input + 's';

//callback and higher order function
const map = (array, actionOnArray) => {
    newArray = [];

    for(i=0; i<array.length;i++){
        array.push(array[actionOnArray(i)]);
    }

    return newArray;
} 

const multiplyBy2 = (input) =>{
    return input*2;
}


map([1,2,3,4,5,6], multiplyBy2);