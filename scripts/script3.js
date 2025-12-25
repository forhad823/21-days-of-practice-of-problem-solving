//q-3,4
function printPyramidPattern(row = 0) {
  let pyramid = ``;
  let invertedPyramid = ``;
  // for (let i = 1; i <= row; i++) {
  //   pyramid += "\n" + " ".repeat(row - i) + "*".repeat(i * 2 - 1);
  // }

  // for (let i = row; i >= 1; i--) {
  //   invertedPyramid += "\n" + " ".repeat(row - i) + "*".repeat(i * 2 - 1);
  // }

  /*   for (let i = 1; i <= row; i++) {
    pyramid += "\n";

    for (let space = i; space > 1; space--) {
      pyramid += " ";
    }
    for (let j = 1; j <= 2 * (row - i) + 1; j++) {
      pyramid += "*";
    }
  } */

  for (let i = row; i >= 1; i--) {
    pyramid += "\n";
    let width = i + row;
    for (let j = 1; j <= 2 * row - 1; j++) {
      if (j <= row - i || j >= width) {
        pyramid += "|";
      } else {
        pyramid += "*";
      }
    }
  }
  // console.log(invertedPyramid);
  return pyramid;
}
// console.log(printPyramidPattern(5));

// ___________________q-5__________________

function printHollowSqrPattern(rows = 0) {
  let hollowSqr = ``;
  for (let i = 1; i <= rows; i++) {
    /*     let middle =
      i === 1 || i === rows ? "*".repeat(rows - 2) : " ".repeat(rows - 2);
    hollowSqr += "\n*" + middle + "*"; */
    hollowSqr += "\n";
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || i === rows || j === 1 || j === rows) {
        // middle row checking
        hollowSqr += "*";
      } else {
        hollowSqr += " ";
      }
    }
  }
  return hollowSqr;
}

// _________________q-6____________________
function printHollowPyramid(rows = 0) {
  let pyramid = ``;
  for (let i = rows; i >= 1; i--) {
    pyramid += "\n";
    let width = i + rows;
    for (let j = 1; j <= 2 * rows - 1; j++) {
      if (j <= rows - i || j >= width) {
        pyramid += "|";
      } else {
        if (i !== 1 && i !== rows && j < width - 1 && j > rows - i + 1) {
          pyramid += " ";
        } else {
          pyramid += "*";
        }
      }
    }
  }
  return pyramid;
}

const row = 5;

for (let i = 1; i <= 2 * row - 1; i += 2) {
  let str = "";
  const currentRow = (i + 1) / 2;

  for (let j = 1; j <= row + currentRow - 1; j++) {
    if (
      j <= row - currentRow ||
      (j > row - currentRow + 1 &&
        j < row + currentRow - 1 &&
        i !== 2 * row - 1)
    ) {
      str += " ";
    } else {
      str += "*";
    }
  }

  // console.log(str);
}

// ________________q-7___________
function printAltBinaryTriangle(rows = 0) {
  let BinaryTriangle = ``;
  for (i = 1; i <= rows; i++) {
    BinaryTriangle += "\n";
    for (j = 1; j <= i; j++) {
      BinaryTriangle += i % 2 === 0 ? ((j + 1) % 2) + " " : (j % 2) + " ";

      /* const isOddRow = i % 2 !== 0;
      const isEvenRow = i % 2 === 0;
      const isOddColumn = j % 2 !== 0;
      const isEvenColumn = j % 2 === 0;
      if ((isOddRow && isOddColumn) || (isEvenRow && isEvenColumn)) {
        BinaryTriangle += "1 ";
      } else {
        BinaryTriangle += "0 ";
      } */
    }
  }
  return BinaryTriangle;
}

//-------------- HW-2 & 4 ------------------
function printButterflyPattern(rows = 0) {
  let butterfly = ``;
  for (let i = 1; i <= rows * 2 - 1; i++) {
    butterfly += "\n";
    let mirrorRow = i <= rows ? i : rows * 2 - i;
    for (let j = 1; j <= rows * 2 - 1; j++) {
      const hollowSpaceStart = mirrorRow + 1;
      const hollowSpaceEnd = rows * 2 - mirrorRow - 1;
      if (i !== rows && j >= hollowSpaceStart && j <= hollowSpaceEnd) {
        butterfly += " ";
      } else {
        butterfly += "*";
      }
    }
  }
  return butterfly;
}
function printHourGlassPattern(rows = 0) {
  let hourGlass = ``;
  for (let i = 1; i <= rows * 2 - 1; i++) {
    hourGlass += "\n";
    let mirrorRow = i <= rows ? i : rows * 2 - i;
    for (let j = 1; j <= rows * 2 - 1; j++) {
      const solidSpaceStart = mirrorRow;
      const solidSpaceEnd = rows * 2 - mirrorRow;
      if (j >= solidSpaceStart && j <= solidSpaceEnd) {
        hourGlass += "*";
      } else {
        hourGlass += " ";
      }
    }
  }
  return hourGlass;
}
//------------- hw- 3 & 5 -----------------
function printDiamondPattern(rows = 0) {
  let diamond = ``;
  for (let i = 1; i <= rows * 2 - 1; i++) {
    diamond += "\n";
    let mirrorRow = i <= rows ? i : rows * 2 - i;
    for (let j = 1; j <= rows * 2 - 1; j++) {
      const solidSpaceStart = rows - mirrorRow;
      const solidSpaceEnd = rows + mirrorRow;
      if (j > solidSpaceStart && j < solidSpaceEnd) {
        diamond += "*";
      } else {
        diamond += " ";
      }
    }
  }
  return diamond;
}

function printHollowDiamond(rows = 0) {
  let hollowDiamond = ``;
  for (let i = 1; i <= rows * 2 - 1; i++) {
    hollowDiamond += "\n";
    let mirrorRow = i <= rows ? i : rows * 2 - i;
    for (let j = 1; j <= rows * 2 - 1; j++) {
      const solidSpaceStart = rows - mirrorRow;
      const hollowSpaceStart = solidSpaceStart + 2;
      const solidSpaceEnd = rows + mirrorRow;
      const hollowSpaceEnd = solidSpaceEnd - 2;
      if (
        (j > solidSpaceStart && j < hollowSpaceStart) ||
        (j < solidSpaceEnd && j > hollowSpaceEnd)
      ) {
        hollowDiamond += "*";
      } else {
        hollowDiamond += " ";
      }
    }
  }
  return hollowDiamond;
}

// -------------hw-6 -------------------------

function printRhombus(rows = 0) {
  let rhombus = ``;
  for (let i = rows; i >= 1; i--) {
    rhombus += "\n";
    for (let j = 1; j <= 2 * rows - 1; j++) {
      isInSolidSpace = j > rows - i && j <= 2 * rows - i;

      if (isInSolidSpace) {
        rhombus += "*";
      } else {
        rhombus += " ";
      }
    }
  }
  return rhombus;
}

// ------------ hw-7 ----------------

function multiplicationTableUpto(N) {
  let tables = "";
  for (i = 1; i <= N; i++) {
    tables += `\nTable of ${i}`;
    for (j = 1; j <= 10; j++) {
      tables += `\n  ${i} x ${j} = ${i * j}`;
    }
    tables += `\n____________________________`;
  }
  return tables;
}

console.log(multiplicationTableUpto(30));
