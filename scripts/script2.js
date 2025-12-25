function startCalculation() {
  const value = Number(document.getElementById("num").value);

  runWithTimer("PrintSqrNumInRange", () => PrintSqrNumInRange(value));
  // runWithTimer("sumOfOdd", () => sumOfOdd(value));
}
function runWithTimer(label, fn) {
  console.time(label);
  console.log(fn());
  console.timeEnd(label);
}

// hw-2
const checkTriangle = (sides = null, anglesInDegree = null) => {
  // Validation
  if (!sides || sides.length !== 3) {
    return "not a triangle";
  }

  const [side1, side2, side3] = [...sides].sort((a, b) => a - b);

  // Triangle inequality check
  if (side1 + side2 <= side3 || side1 <= 0) {
    return "not a triangle";
  }

  // Priority 1: Check for Equilateral (all sides or all angles equal)
  if (side1 === side2 && side2 === side3) {
    return "Equilateral triangle";
  }

  if (anglesInDegree?.length === 3 && new Set(anglesInDegree).size === 1) {
    return "Equilateral triangle";
  }

  // Priority 2: Check for Right-angled
  const isRightBySides = side1 ** 2 + side2 ** 2 === side3 ** 2;
  const isRightByAngles = anglesInDegree?.includes(90);

  if (isRightBySides || isRightByAngles) {
    // Check if it's also isosceles (right-angled isosceles)
    if (side1 === side2 || side2 === side3) {
      return "Right-angled isosceles triangle";
    }
    return "Right-angled triangle";
  }

  // Priority 3: Check for Isosceles (2 sides or 2 angles equal)
  if (side1 === side2 || side2 === side3) {
    return "Isosceles triangle";
  }

  if (anglesInDegree?.length === 3 && new Set(anglesInDegree).size === 2) {
    return "Isosceles triangle";
  }

  // Priority 4: Scalene (all different)
  return "Scalene triangle";
};

// hw-3 incomeTex calculator

const indiaTaxSlabs = [
  { limit: 250000, rate: 0 }, // No tax up to ₹2,50,000
  { limit: 250000, rate: 0.05 }, // 5% on ₹2,50,001 - ₹5,00,000
  { limit: 500000, rate: 0.2 }, // 20% on ₹5,00,001 - ₹10,00,000
  { limit: Infinity, rate: 0.3 }, // 30% above ₹10,00,000
];

function TaxCalculator(income, taxSlabs) {
  let Totaltax = 0;
  let remainingIncome = income;
  for (let slab of taxSlabs) {
    if (remainingIncome === 0) break;
    const amountInThisSlab = Math.min(remainingIncome, slab.limit);
    Totaltax += amountInThisSlab * slab.rate;
    remainingIncome -= amountInThisSlab;
  }
  return Totaltax;
}

console.log(TaxCalculator(1500000, indiaTaxSlabs));

// hw-1
/* function checkCharecter(input) {
  const char = String(input);
  if (!char || char.length !== 1) return "not a valid/single character ";
  const AsciCode = char.charCodeAt(0);
  console.log(AsciCode);
  if (/[0-9]/.test(char)) return "Digit";
  if (/[a-z]/.test(char)) return "LowerCase Letter";
  if (/[A-Z]/.test(char)) return "UpperCase Letter";
  return "Special Character";

  // return ChatCode;
} */
