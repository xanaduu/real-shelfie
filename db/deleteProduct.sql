UPDATE shelfie
SET product_name = NULL,
    price = NULL
WHERE shelf = $1 AND bin = $2;
