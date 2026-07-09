class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};
        for(let i=0;i< nums.length;i++){
            const num = nums[i];
            hash[num] = i;
        }
        for(let i=0;i< nums.length;i++){
            const num = nums[i];
            const remaining = target - num;
            if(hash[remaining]){
                const secondIndex = hash[remaining];
                if(secondIndex != i){
                    return [i, secondIndex]
                }
            }
        } 
        throw new Error('There should be atleast one pair of indices')       
    }
}
