const router = require('express').Router();
const queryHelper = require('../helper/query');

router.get('/:name',(req,res) => {

    const {name} = req.params;
    console.log(name);
    const query = `select * from products where name='${name}'`;
    queryHelper(query,'select').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});



module.exports = router;