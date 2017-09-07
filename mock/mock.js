/*
 * @Author: Conroy 
 * @Date: 2017-09-05 14:43:53 
 * @Last Modified by: Conroy
 * @Last Modified time: 2017-09-05 14:46:11
 */

var router = require('express').Router();

module.exports = router ;

router.get('/api',(req,res) =>　{
    res.send('hello World')
})