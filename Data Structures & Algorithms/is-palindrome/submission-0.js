class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        const s = str.replaceAll(/\s/g,'').toLowerCase().replaceAll(/\W/g ,'');
        for(let i=0;i<(s.length/2);i++){
            const rev = s.length - i - 1;
            if(s[i] !== s[rev]){
                return false;
            }
        }
        return true;
    }
}
