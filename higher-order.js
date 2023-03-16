//function taht adds two to input
const addTwo = (input)=> input + 2;

//function that adds s to input
const addS = (input)=> input + 's';

//callback and higher order function
const map = (array, actionOnArray) => {
    newArray = [];

    array.forEach(element => {
        newArray.push(actionOnArray(element));      
    });

    //for(i=0; i<array.length;i++){
    //    newArray.push(actionOnArray(array[i]));
    //};

    return newArray;
} ;

const multiplyBy2 = (input) => input*2;



map([1,2,3,4,5,6], multiplyBy2);