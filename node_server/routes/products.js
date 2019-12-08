const router = require('express').Router();
const queryHelper = require('../helper/query');

router.get('/',(req,res) => {
    const query = "select * from products";
    queryHelper(query,'select').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});



module.exports = router;