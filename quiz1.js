// 1-Write a recursive function which receives an array and returns the sum of the elements of the array.

function arraySum(arr) {
    // sum ALL the things!
  if(arr.length <= 1){return arr[0]}
  return arr[0] + arraySum(arr.splice(1, arr.length))
   
  };

// 2-Given two temperatures, return true if one is less than 0 and the other is greater than 100.
// a.	icyHot(120, -1) → true
// b.	icyHot(-1, 120) → true
// c.	icyHot(2, 120) → false

function icyHot(value1,value2){
//   one = (value1 < 0 && value1 > 100 ) ? true : false;
//   two = (value2 <0 && value2 >100) ? true : false;
   if(value1 < 0  && value2 > 100 || value1 > 100 && value2 < 0){
       return true
   }else{
       return false
   }
}

// 3-Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
// a.	makes10(9, 10) → true
// b.	makes10(9, 9) → false
// c.	makes10(1, 9) → true

function makes10(a,b){
    if(a === 10 || b === 10 || a+b === 10){
        return true
    }else{
        return false
    }
}


// 4-Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
// a.	front22("kitten") → "kikittenki"
// b.	front22("Ha") → "HaHaHa"
// c.	front22("abc") → "ababcab"

function front22(string){
    if(string.length > 2){
        two = string.slice(0, 2);
        console.log(two)
        return two+string+two
    }else{
        chars = string.slice(0,string.length);
        return chars+string+chars
    }
}

// 5-Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/ Submit the screenshot of your solution after being put through the codility grader.

// 6-(Optional) Solve https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/ Submit a screenshot of your solution after being put through the codility grader.