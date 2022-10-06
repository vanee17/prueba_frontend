const getPairs = (array) => {
    if(array == null || array == undefined){
        return 0;
    }else{
        return array.filter( a => a % 2 == 0);
    }
    }

console.log(getPairs([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getPairs(null));
console.log(getPairs([100, 22, 30, 40, 57, 67, 71, 80, 90]));


var myArray = [2, 3, 5, 7, 11, 13, 17,22,12,55];

function isPrime(n) {
  var limit = Math.round(Math.sqrt(n));
  for (var i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return n;
}

console.log(myArray.filter(n=>isPrime(n)));