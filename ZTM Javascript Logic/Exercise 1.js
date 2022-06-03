// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// numbers need to be in order, and if it's repeated all occurences of number should be in own array.
// create a new solution array
// sort numbers first?
// find out if number occurs more than once
// if occurs more than once, create new array with all occurences
// if number doesn't occr more than once, just push to solution array

const problemArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

function answer (array) {
    const sortedArray = array.sort((a, b) => a - b);
    let duplicateArray;
    let solutionArray = [];
    

    let i = 0;
    let pos;
    while (i < sortedArray.length)
    if (sortedArray[0] === sortedArray[1]) {
        pos = sortedArray.lastIndexOf(sortedArray[0]) + 1;
        duplicateArray = sortedArray.splice(0, pos);
        solutionArray.push(duplicateArray);
    } else {
        solutionArray.push(sortedArray[0]);
        sortedArray.shift();
    }
    
    return solutionArray
}

console.log(answer(problemArray));

