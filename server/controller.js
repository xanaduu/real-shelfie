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
    },

    editProduct(req,res){
        let {id} = req.params;
        let {product_name, price} = req.body;
        const db = req.app.get('db');
        db.editProduct([id[0], id[1], product_name, price])
        .then(product => {
            console.log(product);
            res.status(200).send(product)
        })
        .catch(() => res.status(500).send());
    },

    deleteProduct(req,res){
        let {id} = req.params;
        const db = req.app.get('db');
        console.log(db);
        db.deleteProduct([id[0], id[1]])
        .then(() => {
            res.status(200).send('Product Deleted')
        })
        .catch(() => res.status(500).send());
    }
}
