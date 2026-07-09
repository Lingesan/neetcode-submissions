class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const count = {}
        for(let i=0;i< s.length;i++){
            let ch = s[i];
            if(count[ch]){
                count[ch] += 1;
            } else {
                count[ch] = 1;
            }
            ch = t[i];
            if(count[ch]){
                count[ch] -= 1;
            } else {
                count[ch] = -1;
            }
        }
        return !(Object.values(count).some(a => a));
    }
}
