/**
 * convert function - it can also handle data with multiple root node
 * @param {Array} array containing data mentioning parent
 * @returns data contating root nodes with children
 */

export const convert = (array) => {
    var map = {};
    for(var i = 0; i < array.length; i++){
        var obj = array[i];

        if (map[obj.name]) {
          obj.children = map[obj.name].children;
        } else {
          obj.children= [];
        }

        map[obj.name] = obj;

        var parent = obj.parent || '-';
        if(!map[parent]){
            map[parent] = {
                children: []
            };
        }
        map[parent].children.push(obj);
    }
    return map['-'].children;
};