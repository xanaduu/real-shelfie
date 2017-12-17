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
    },

    getProduct(req,res){
        let {id} = req.params;
        const db = req.app.get('db');
        db.getProduct([id[0], id[1]])
        .then(product => {
            console.log(product);
            res.status(200).send(product)
        })
        .catch(() => res.status(500).send());
    }
}
