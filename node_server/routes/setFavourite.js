const router = require('express').Router();
const queryHelper = require('../helper/query');

router.post('/',(req,res) => {

    const {productId} = req.body;

    const query = `update products set isFav = ${true} where id = ${productId}` ;
    queryHelper(query,'update').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});



module.exports = router;