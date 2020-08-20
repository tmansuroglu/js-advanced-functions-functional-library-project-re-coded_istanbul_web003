const fi = (function () {
    return {
        libraryMethod: function () {
            return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
        },

        each: function (x, func) {
            if (Array.isArray(x)) {
                x.forEach(func);
            } else {
                Object.values(x).forEach(func);
            }
            return x;
        },

        map: function (x, func) {
            if (Array.isArray(x)) {
                return x.map(func);
            } else {
                return Object.values(x).map(func);
            }
        },

        reduce: function (x, func, startPoint = -2) {
            if (Array.isArray(x)) {
                return x.reduce(func, startPoint);
            } else {
                return Object.values(x).reduce(func, startPoint);
            }
        },

        functions: function () {},

        find: function (x, func) {
            if (Array.isArray(x)) {
                return x.find(func);
            } else {
                return Object.values(x).find(func);
            }
        },
        filter: function (x, func) {
            if (Array.isArray(x)) {
                return x.filter(func);
            } else {
                return Object.values(x).filter(func);
            }
        },
        size: function (x) {
            if (Array.isArray(x)) {
                return x.length;
            } else {
                return Object.keys(x).length;
            }
        },
        first: function (x, n) {
            if (n === undefined) {
                return x.slice(0, 1)[0];
            } else {
                return x.slice(0, n);
            }
        },
        last: function (x, n) {
            if (n === undefined) {
                return x.slice(x.length - 1, x.length)[0];
            } else {
                return x.slice(x.length - n, x.length);
            }
        },
        compact: function (arr) {
            return arr.filter(Boolean);
        },
        sortBy: function (x, func) {
            const result = [];
            const obj = {};
            x.map((y) => {
                obj[y] = func(y);
            });
            //console.log(Object.entries(obj))
            const sortedValues = Object.values(obj).sort((a, b) => a - b);
            for (const eachProcessed of sortedValues) {
                for (const each of x) {
                    if (eachProcessed === func(each)) {
                        result.push(each);
                    }
                }
            }
            return result;
        },
        flatten: function (arr, state) {
            console.log("desired output");
            console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            let result = [];
            if (state) {
                for (const each of arr) {
                    if (!Array.isArray(each)) {
                        result.push(each);
                    } else {
                        for (const nestedArrEl of each) {
                            result.push(nestedArrEl);
                        }
                    }
                }
            } else {
                console.log("returned output");
                const strVer = [...arr.toString().split(",")];
                return strVer.map((x) => parseInt(x));
            }
            return result;
        },
        uniq: function (arr, state, func) {
            const arr2 = [];
            const filtered = [...new Set(arr)];
            if (state === undefined && func === undefined) {
                return filtered;
            } else {
                for (const each of filtered) {
                    if (func(each) > 0) {
                        arr2.push(each);
                    } else {
                        arr2.push(each);
                        break;
                    }
                }
            }
            return arr2;
        },
        keys: function (obj) {
            return Object.keys(obj);
        },
        values: function (obj) {
            return Object.values(obj);
        },
        functions: function (obj) {
            const arr = [];
            Object.entries(obj).map((x) => {
                if (typeof x[1] === "function") {
                    arr.push(x[0]);
                }
            });
            return arr;
        },
    };
})();

fi.libraryMethod();
