function palindrome(string) {
    string = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    return string === string.split('').reverse().join('');
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"));