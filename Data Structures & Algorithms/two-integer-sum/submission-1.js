class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0;i< nums.length;i++){
            const num = nums[i];
            const remaining = target - num;
            if(map.has(remaining)){
                return [map.get(remaining), i];
            }
            map.set(num, i);
        }
        throw new Error('There should be atleast one pair of indices')       
    }
}
