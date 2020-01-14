module.exports = function parseStringAsArrays(arrayAsString){
    return arrayAsString.Split(',').map(e => {
        e.trim()
    });
}