class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let rev= s.split('').reverse().join('');
        if(rev === s){
            return true;
        }
        return false;
    }
}
