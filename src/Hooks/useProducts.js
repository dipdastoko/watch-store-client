import { useEffect, useState } from "react";

const useProducts = (quantity, recall) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://watch-store-server-hqwm.onrender.com/homeproducts?page=${quantity}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [quantity, recall]);

    return products;
}

export default useProducts;