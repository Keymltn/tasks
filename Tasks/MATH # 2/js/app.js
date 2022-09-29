


function sumOfNegatives(nums) {
    let negs = [];
    let sum = 0;
  
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] < 0) {
        negs.push(nums[i])
      }
      
      else{
        sum += nums[i]
      }
    }
  
    console.log(negs)
  
    return sum
  }
  
  let result = sumOfNegatives([4, -5, -10, 6]);
  