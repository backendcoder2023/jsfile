// Rajitha's Question  for frappe

// 1)Define a function to count the frequency of words in a given list of words.
// Example:
// words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple'] 
// count_word_frequency(words) 
// Output:
//  {'apple': 3, 'orange': 2, 'banana': 1}

// const prompt = require('prompt-sync')(); // Import prompt-sync module


// function count(words) {
//     const frequency = {};
//     words.forEach(word => {
//         frequency[word] = (frequency[word] || 0) + 1;
//     });
//     console.log(frequency);
// }
// const userInput = prompt('Enter words separated by spaces: ');
// const userWords = userInput.split(' ');
// count(userWords);


// 2)Define a function with takes two dictionaries as parameters and merge them and sum the values of common keys.
// Example:
// dict1 = {'a': 1, 'b': 2, 'c': 3}
// dict2 = {'b': 3, 'c': 4, 'd': 5}
// merge_dicts(dict1, dict2)
// Output:
// {'a': 1, 'b': 5, 'c': 7, 'd': 5}

// let dict1 = {
//     a : 1,
//     b : 2,
//     c : 3,
//     };
// let dict2 = {
//     b : 3,
//     c : 4,
//     d : 5,
//     } 
//     for (let i in dict1){
//         if(i in dict2){
//             dict2[i]+=dict1[i]
//         }else{
//             dict2[i] = dict1[i]
//         }
//     }
// console.log(dict2);

// 3)Key with the Highest Value
// Define a function which takes a dictionary as a parameter and returns the key with the highest value in a dictionary.
// Example:
// my_dict = {'a': 5, 'b': 9, 'c': 2}
// max_value_key(my_dict))
// Output:
// b

let my_dict = {
    'a': 5, 
    'b': 9, 
    'c': 2,
};
let maxKey = 0;
let maxValue = -Infinity;
for (let key in my_dict) {
    let value = my_dict[key];
    if (value > maxValue) {
       maxKey = key;
        maxValue = value;
    }
}
console.log(maxKey);

// 4)Reverse Key-Value Pairs
// Define a function which takes as a parameter dictionary and returns a dictionary in which everse the key-value pairs are reversed.
// Example:
// my_dict = {'a': 1, 'b': 2, 'c': 3}
// reverse_dict(my_dict)
// Output:
// {1: 'a', 2: 'b', 3: 'c'}

// 5)Conditional Filter
// Define a function that takes a dictionary as a parameter and returns a dictionary with elements based on a condition.
// Example:
// my_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4} 
// filtered_dict = filter_dict(my_dict, lambda k, v: v % 2 == 0) 
// Output:
// {'b': 2, 'd': 4}

// 6)Define a function which takes two lists as parameters and check if two given lists have the same frequency of elements.
// Example:
// list1 = [1, 2, 3, 2, 1]
// list2 = [3, 1, 2, 1, 3]
// check_same_frequency(list1, list2)
// Output:
// False

// function 