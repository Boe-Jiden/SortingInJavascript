//Bubble sort takes a value and iterates through every other element to see if its bigger or not, and then swaps with the other element if its bigger
var testArr = [2000, 4, 3, 6, 7, 6, 7776, 8, 4] //test value
function bubbleSorter(array){ 
    //Make a loop that runs as many times as there are elements in the array by using its "length" property
    for (let i = 0; i<array.length; i++){
        //Make a nested loop that runs as many times as there are elements in the array in order to compare an element with all the other elements
        for (let j = i; j<array.length; j++){
            //Compare element with the next element
            if (array[i] > array[j]){
                //swap if the next element is greater 
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        } 
    }
    return array
}
console.log(bubbleSorter(testArr))
//console.log(testArr)