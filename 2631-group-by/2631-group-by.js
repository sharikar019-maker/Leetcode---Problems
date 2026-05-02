/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result ={};
    for(let item of this){
      const key = fn(item);
      if(!result [key]){
        result [key] =[];
      }
        result[key].push(item);
    }
    return result;
};

const array=[
    {id:"1"},
    {id : "1"},
    {id : "2"}
];
const fn = item => item.id;
console.log(array.groupBy(fn));