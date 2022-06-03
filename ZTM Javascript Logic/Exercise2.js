// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added 
// together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// add each number in an array to every other number in array
// compare this number to the target number
// if matches, return the two numbers in a new array

function answer (array, num) {
    answerArray = []
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if ((array[i] + array[j] == num) && (array[i] !== array[j])) {
                answerArray.push(array[i], array[j]);
                i = array.length;
                j = array.length;
            }
        }
    }
    return answerArray;
}

console.log(answer([1, 2, 3, 4], 6));
