'use strict';
// arrow fucntions

/*
function add (var1, var2) {
     return var1 + var2;
}
*/

const add = (var1, var2) => var1 + var2;
const ret = add(1, 2);
console.log(ret);

API.prototype.get = function (resource) {
    var self = this;
    return new Promise(function (resolve, reject) {
        http.get(self.uri + resource, function (data) {
            resolve(data);
        })
    })
}

API.prototype.get = (resource) =>
    new Promise((resolve, reject) => {
        http.get(self.uri + resource,  (data) => {
            resolve(data);
        })
    });
