module.exports = {
    getBins(req,res){
        let {id} = req.params;
        const db = req.app.get('db');
        db.getBins([id])
        .then(bins => {
            res.status(200).send(bins)
        })
        .catch(() => res.status(500).send());
    },

    newProduct(req,res){
        console.log(req.body);
        let {shelf, bin, product_name, price} = req.body;
        const db = req.app.get('db');
        db.newProduct([shelf, bin, product_name, price])
        .then(() => {
            console.log('ok');
            res.status(200).send()
        })
        .catch((err) => {
            res.status(500).send(err)
        });
    }
}
