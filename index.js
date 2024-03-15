  function testFunc(num) {
    const _num = parseInt(num);

    if(isNaN(_num)) {
        console.log('first')
        return;
    }
    
    return num ** num;
}

module.exports = {
    testFunc
}