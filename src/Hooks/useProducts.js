import { useEffect, useState } from "react";

const useProducts = (quantity, recall) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://polar-citadel-78881.herokuapp.com/homeproducts?page=${quantity}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [quantity, recall]);

    return products;
}

export default useProducts;