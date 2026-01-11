// ------------question-1
function reverseStr(str) {
  // using two-pointer algorithm
  let reversed = [...str];
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let left = reversed[i]; // start of the str
    let right = reversed[str.length - 1 - i]; // end
    [left, right] = [right, left]; // swapping
  }

  return reversed.join(""); // should return string.
}

// --------------- question -2 ----

function isPalindrome(str) {
  // using two-pointer algorithm
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let left = str[i]; // left edge
    let right = str[str.length - 1 - i]; // right edge
    if (left !== right) {
      return false;
    }
  }
  return true;
}

// ------------------ question-3
function frequencyCounter(str) {
  // teaches hash maps
  const charFrequencyMap = Object.create(null);
  [...str].forEach((element) => {
    charFrequencyMap[element] = (charFrequencyMap[element] || 0) + 1;
  });
  return charFrequencyMap;
}

// --------------question-4
function findMostFrequentChars(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "Input must be a non-empty string";
  }

  const frequency = Object.create(null);
  let maxCount = 0;

  for (const char of str) {
    const count = (frequency[char] || 0) + 1;
    frequency[char] = count;
    if (count > maxCount) maxCount = count;
  }

  const mostFrequentChars = [];
  for (const char in frequency) {
    if (frequency[char] === maxCount) {
      mostFrequentChars.push(char);
    }
  }

  return `Most frequent ${mostFrequentChars.join(", ")} - ${maxCount} times`;
}
// ---------------question-5 -------------
function areAnagrams(str1, str2) {
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length !== str2.length
  ) {
    return false;
  }
  // 2️⃣ Frequency map (safe object)
  const frequency = Object.create(null);

  for (const char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  return true;
}

//---------------- question-6 ----------------
function findFirstNonRepeatingChar(str) {
  const frequencyTable = Object.create(null);
  for (const char of str) {
    frequencyTable[char] = (frequencyTable[char] || 0) + 1;
  }
  for (const char of str) {
    if (frequencyTable[char] === 1) return char;
  }

  return "Non-repeating Character is unavailable";
}

// ----------------Hw-1-----------------
function removeDuplicateCharacters(str) {
  const charsSet = new Set();
  let newStr = "";
  for (const char of str) {
    if (!charsSet.has(char)) {
      newStr += char;
    }
    charsSet.add(char);
  }
  return newStr;
}

// -------------- hw-2 ----
function containsOnlyAlphabets(str) {
  for (const char of str) {
    const charCode = char.toUpperCase().charCodeAt(0);
    const isAlphabet = charCode >= 65 && charCode <= 90;
    if (!isAlphabet) return false;
  }
  return true;
}

// ------------------ hw-3 ---------------

function reverseWordsInSentence(str) {
  let reversedSentence = [];
  str.split(" ").forEach((word) => {
    reversedSentence.unshift(word);
  }); // we could use array.reverse();
  return reversedSentence.join(" ");
}

//-------------------- hw-4
function findLongestWord(str) {
  let longest = "";
  str.split(" ").forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

// ------------------- hw-5 --------------
function countWordsInSentence(str) {
  if (typeof str !== "string" || str.length === 0) {
    return 0;
  }
  let wordCount = 0;
  let inWord = false; // it sees transitions of starting of a word.
  for (const char of str) {
    const code = char.charCodeAt(0);
    const isAlphabet =
      (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    if (isAlphabet) {
      if (!inWord) {
        wordCount++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }
  return wordCount;
}

// ------------------ hw-6 ------------
function getAllSubstrings(str) {
  if (typeof str !== "string" || str.length === 0) {
    return [];
  }

  const substrings = [];
  const length = str.length;

  for (let start = 0; start < length; start++) {
    let current = "";

    for (let end = start; end < length; end++) {
      current += str[end];
      substrings.push(current);
    }
  }

  return substrings;
}

// ----------------- hw-7 -------------
function compressString(str) {
  let count = 0;
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      encodedStr += str[i] + count;
      count = 0;
    }
  }
  return encodedStr;
}
// ____________________________________________________
// console.log(compressString("abbbqqq")); // a1b3q3
// console.log(getAllSubstrings("abcd"));
// console.log(countWordsInSentence("i am  a student"));
// console.log(findLongestWord("I love coding"));
// console.log(reverseWordsInSentence("I love coding"));
// console.log(containsOnlyAlphabets("1a"));
// console.log(removeDuplicateCharacters("abbac"));
// console.log(findFirstNonRepeatingChar("a"));
// console.log(areAnagrams("abc", "abc"));
// console.log(findMostFrequentChars("abba"));
// console.log(frequencyCounter("abbac"));
// console.log(isPalindrome("abba"));
// console.log(reverseStr("abcde"));
// console.log(reverseStr("abcd"));
