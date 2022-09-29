function sumOfTwoArrays(arr1, arr2) {
    let result = arr1.concat(arr2)
    let resulter = 0
    for (let i = 0; i < result.length; i++) {
        resulter += result[i]
    }
    console.log(resulter);
 }

 sumOfTwoArrays([4, -5, -10, 6], [6, 9, 14, -1, 6])
