/*
 What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    let reference = word.split('');
    let splitWords = words.reduce((all, item, index)=>{
        all.push(item.split(''));
        return all;
    }, []);
    let valid_anagrams = [];

    for(let i = 0; i < splitWords.length; i += 1) {
        console.log('reference: ', reference);

        for(let j = 0; j < reference.length; j) {
            if(splitWords[i].indexOf(reference[j]) !== -1) {
                splitWords[i].splice(splitWords[i].indexOf(reference[j]), 1);
                reference.splice(j, 1);
            } else {
                j += 1;
            }
        }
        if(splitWords[i].length === 0 && reference.length === 0) {
            valid_anagrams.push(words[i]);
        }
        reference = word.split('');
    }

    return valid_anagrams;
}

function anagrams2(word, words){
    word = word.split('').sort().join('');

    return words.reduce((all, item, index) => {
        if(word === item.split('').sort().join('')) {
            all.push(item);
        }
        return all;
    }, [])
}


console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))