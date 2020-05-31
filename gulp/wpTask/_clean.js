let del = require('del');

module.exports = async function clean(){
    del.sync('./elegardenTemplate')
}