Array.prototype.myEach = function(myFunc) {
    for (let i = 0; i < this.length; i += 1) {
        // myFunc(this[i], i, this);
        myFunc(this[i]);
    }
}

Array.prototype.myMap = function(myMapFunc) {
   
    const mapped = [];
    const myEachFunc = function(ele) {
        mapped.push(myMapFunc(ele))
    }
    this.myEach(myEachFunc);

    // for (let i = 0; i < this.length; i += 1) {
    //     let elm = this[i];
    //     let newElm = myFunc(elm, i, this);
    //     mapped.push(newElm);
    // }

    return mapped
}

fun2 = function (x) {
    return x + 1;
}

[1, 2, 3].myMap(fun2);


Array.prototype.myReduce = function (callback, initialValue) {

    // const mapped = [];
    // const myEachFunc = function (ele) {
    //     mapped.push(myMapFunc(ele))
    // }
    // this.myEach(myEachFunc);
}