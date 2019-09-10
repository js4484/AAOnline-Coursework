Array.prototype.myUniq = function() {
  let newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    if (!newArray.includes(this[i])) {
      newArray.push(this[i]) 
    }
  }

  return newArray;
}
console.log([1,2,3,4,5,1,3,5].myUniq());


Array.prototype.twoSum = function() {
  let newArray = [];

  for (let i = 0; i < this.length; i += 1) {

    for (let j = 0; j < this.length; j += 1) {
      if ((this[i] + this[j] == 0) && (j > i)) {
        newArray.push([i, j])
      }
    }
  }

  return newArray
};
console.log([1, 2, 3, -4, -3, 8].twoSum());


Array.prototype.transpose = function () {
    let newArray = [];

    for (let i = 0; i <= (this[i].length - 1); i += 1) {
        const row = [];
        for (let j = 0; j <= this.length - 1; j += 1) {
            row.push(this[j][i]);
        }
        newArray.push(row);
    }
    
    return newArray
}