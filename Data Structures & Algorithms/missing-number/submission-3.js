class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a,b)=> a-b);
        for (let i=0 ; i<nums.length+1 ;i++){
            if (i!== nums[i]){
                return i;
            }
        }
    }
}
