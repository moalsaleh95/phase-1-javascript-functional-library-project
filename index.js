const arrayProducer = function (collection) {
    if (Array.isArray(collection)) return collection;
    else return Object.values(collection);
}

const myEach = function (collection, callback) {
    let array = arrayProducer(collection);
    array.forEach(element => callback(element))
    return collection;
}

const myMap = function (collection, callback) {
    let array = arrayProducer(collection);
    return array.map(e => callback(e));
}

const myReduce = function (collection, callback, acc) {
    let array = arrayProducer(collection);
    if (!acc) {
        acc = array[0];
        return array.slice(1).reduce(callback, acc)
    }
    return array.reduce(callback, acc)
}

// this function return true or false only.. using the some() method which is cool!:
// const myFind = function (collection, predicate) {
//     let array = arrayProducer(collection);
//     return array.some(element => predicate(element))
// }

const myFind = function (collection, predicate) {
    let array = arrayProducer(collection);
    return array.find(element => predicate(element));
}

const myFilter = function (collection, predicate) {
    let array = arrayProducer(collection);
    return array.filter(element => predicate(element));

}

const mySize = function (collection) {
    let array = arrayProducer(collection);
    return array.length;
}

const myFirst = function (array, n) {
    let _array = arrayProducer(array);
    if (n) return _array.slice(0, n);
    else return _array[0]
}

const myLast = function (array, n) {
    return (n) ? array.slice(array.length - n, array.length) : array[array.length - 1];
}

const myKeys = function (object) {
    return Object.keys(object);
}

const myValues = function (object) {
    return Object.values(object);
}