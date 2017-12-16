module.exports = {
    getBins(req,res){
        let {id} = req.params;
        const db = req.app.get('db');
        db.getBins([id])
        .then(bins => {
            res.status(200).send(bins)
        })
        .catch(() => res.status(500).send());
    }
}
