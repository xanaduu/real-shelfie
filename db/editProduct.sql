UPDATE shelfie
SET product_name = $3,
    price = $4
WHERE shelf = $1 AND bin = $2;
