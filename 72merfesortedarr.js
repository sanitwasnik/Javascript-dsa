// define a function
function mergeSortedArray(array1, array2){
    // define variables we are going to use
    const mergedArray = []; 
    // empty array for now

    // grab the array1 &2  item
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j =1;


// check input
if(array1.length === 0 ){
    return array2;
}

if(array2.length ===0){
    return array1;
}

// while condition
while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item){
        mergedArray.push(array1Item)
        array1Item = array1[i];
        i++;
    }
    else{
        mergedArray.push(array2Item)
        array2Item = array2[j];
        j++;
    }
}




// return mergedArray at the end;
    return mergedArray;

    // console.log to show the output on vs code instead of return statement.
    console.log(mergedArray);

 
}
mergeSortedArray([0, 3, 4 ,31],[4,  6, 30])
