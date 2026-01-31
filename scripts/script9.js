// ----------------question-1
function isSubstringManual(str, subStr) {
  if (
    typeof str !== "string" ||
    typeof subStr !== "string" ||
    str.length === 0 ||
    subStr.length === 0
  ) {
    return "invalid input";
  }
  const strLength = str.length;
  const subStrLength = subStr.length;
  let isExist = true;
  for (let i = 0; i <= strLength - subStrLength; i += subStrLength) {
    for (let j = 0; j < subStrLength; j++) {
      strChar = str[j + i];
      subStrChar = subStr[j];
      if (strChar !== subStrChar) {
        isExist = false; // if condition pass
        break;
      }
    }
    if (isExist) return isExist; // if true;
  }
  return isExist; // Substring doesn't exist in str.
}

// -------------- Question - 2 --------------
function findSubstringIndex(str, subStr) {
  if (
    typeof str !== "string" ||
    typeof subStr !== "string" ||
    str.length === 0 ||
    subStr.length === 0
  ) {
    return "invalid input";
  }
  const strLength = str.length;
  const subStrLength = subStr.length;
  let isExist = true;
  for (let i = 0; i <= strLength - subStrLength; i++) {
    for (let j = 0; j < subStrLength; j++) {
      let strChar = str[j + i];
      let subStrChar = subStr[j];
      if (strChar !== subStrChar) {
        isExist = false; // if condition pass
        break;
      }
      isExist = true;
    }
    if (isExist) return `found at index ${i}`; // if true;
  }
  return "not found"; // Substring doesn't exist in str.
}
// ---------------- question-3 ---------
function isStringRotation(str1, str2) {
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length === 0 ||
    str2.length === 0
  ) {
    return "invalid input";
  }
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  let rotatedStr2 = str2;
  for (let i = 0; i < str1.length; i++) {
    let firstChar = rotatedStr2[0];
    rotatedStr2 = [...rotatedStr2];
    rotatedStr2.shift();
    rotatedStr2.push(firstChar);
    rotatedStr2 = rotatedStr2.join("");
    console.log(rotatedStr2);
    if (rotatedStr2 === str1) return true;
  }
  return false;
}
//___________________________________________
function isStringRotation(str1, str2) {
  // Step 1: Input validation
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length === 0 ||
    str2.length === 0
  ) {
    return false;
  }

  // Step 2: Length mismatch check
  if (str1.length !== str2.length) return false;

  // Step 3: Concatenate str2 with itself
  const combined = str2 + str2;

  // Step 4: Manual substring search (str1 inside combined)
  for (let i = 0; i <= combined.length - str1.length; i++) {
    let match = true;

    for (let j = 0; j < str1.length; j++) {
      if (combined[i + j] !== str1[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  // Step 5: No rotation found
  return false;
}

// ---------------------- hw-1 ----------------
function countWordFrequency(str) {
  str = str.trim();
  if (str.length === 0) {
    return "invalid input";
  }
  let frequencyTable = Object.create(null);

  str.split(" ").forEach((word) => {
    if (word !== "") {
      frequencyTable[word] = (frequencyTable[word] || 0) + 1;
    }
  });
  return frequencyTable;
}
// ----------------------- hw-2 ----------------
function isPangram(str) {
  let dictionary = new Set();
  for (char of str.toLowerCase()) {
    if (char !== " ") dictionary.add(char); // Set() object will not add duplicates
  }
  console.log(dictionary.size, dictionary);
  return dictionary.size === 26;
}
// ----------------- hw-3 ---------

function removeDuplicateWords(str) {
  let seen = new Set();
  let refinedStr = [];
  str.split(" ").forEach((word) => {
    if (!seen.has(word)) {
      seen.add(word);
      refinedStr.push(word);
    }
  });
  return refinedStr.join(" ");
}

// ------------------------- hw -4 -------------

function findLongestPalindromicSubstring(str) {
  let longest = 2;
  let palindromes = [];
  for (i = 0; i < str.length; i++) {
    let subStr = "";
    for (j = i; j < str.length; j++) {
      subStr += str[j];
      if (subStr.length !== 1 && subStr.length !== str.length) {
        let isPalindrome = subStr === [...subStr].reverse().join("");
        if (isPalindrome) {
          longest < subStr.length && (longest = subStr.length); // short-circuiting
          palindromes.push(subStr);
        }
      }
    }
  }

  const longestPalindromes = palindromes.filter((palindrome) => {
    return palindrome.length === longest;
  });

  return longestPalindromes;
}

// --------------- hw-5 ---------------------------
function findAnagramGroup(arrOfStr) {
  if (arrOfStr.length < 2) return "invalid input";
  const firstCharFreq = Object.create(null);
  for (let char of arrOfStr[0]) {
    firstCharFreq[char] = (firstCharFreq[char] || 0) + 1;
  }

  arrOfStr[0];
  let arrOfAnagrams = [arrOfStr[0]];
  for (let i = 1; i < arrOfStr.length; i++) {
    if (arrOfStr[0].length === arrOfStr[i].length) {
      let isAnagram = true;
      let compareObj = firstCharFreq;
      for (let char of arrOfStr[i]) {
        if (!compareObj[char]) {
          isAnagram = false;
          break;
          compareObj[char]--;
        }
      }
      if (isAnagram) {
        arrOfAnagrams.push(arrOfStr[i]);
      }
    }
  }
  return `${arrOfAnagrams.length > 1 ? arrOfAnagrams : "no anagram pair"}`;
}
// ------------------------hw-6 --------------
/*
 * Industry Takeaways --
 *  Sliding window avoids recomputation
 *  Hash map gives O(1) lookup
 *  Pointer jumping is the key optimization */
function longestUniqueSubstring(str) {
  let charIndexMap = Object.create(null); // stores last seen index
  let left = 0; // window start
  let maxLength = 0;
  let startIndex = 0; // start index of best substring

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    console.log("right", right);
    // If character already seen inside current window
    if (charIndexMap[currentChar] >= left) {
      left = charIndexMap[currentChar] + 1;
    }
    console.log("226 left -", left);

    charIndexMap[currentChar] = right;

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1; // why???
      console.log("231 left -", left);
      startIndex = left; // why???
    }
  }
  return str.slice(startIndex, startIndex + maxLength);
}

console.log(longestUniqueSubstring("abca"));
// console.log(longestUniqueSubstring("abcabcb123"));
// console.log(findAnagramGroup(["cat", "dog"]));
// console.log(findLongestPalindromicSubstring("babad"));
// console.log(removeDuplicateWords("this is is a test test string"));
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(countWordFrequency(" i love i love"));
// console.log(isStringRotation("abc", "acb"));
// console.log(findSubstringIndex("letha", "think"));
// console.log(isSubstringManual("letha", "t"));
// console.log(findSubstringIndex("hello world", "re"));
