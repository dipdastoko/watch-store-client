import { useEffect, useState } from "react";

const useProducts = (quantity, recall) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/homeproducts?page=${quantity}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [quantity, recall]);

    return products;
}

export default useProducts;