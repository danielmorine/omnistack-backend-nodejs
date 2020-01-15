module.exports = function parseStringAsArrays(arrayAsString){
    return arrayAsString.split(',').map(e =>
        e.trim()
    );
}