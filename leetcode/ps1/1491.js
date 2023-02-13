/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function(salary) {
    return salary.reduce(
        (a, b) => { 
          if(Math.min(...salary) !== b && Math.max(...salary) !== b) { 
               return a + b;
            } else {
               return a;
            }
        }
    , 0) / (salary.length-2)
  };
  
average([4000,3000,1000,2000])