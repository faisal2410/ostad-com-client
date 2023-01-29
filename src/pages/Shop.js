import { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import ProductCard from "../components/cards/ProductCard";

const Shop=()=> {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const { data } = await axios.get("/products");
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadCatgories();
    }, []);

    const loadCatgories = async () => {
        try {
            const { data } = await axios.get("/catgories");
            setCategories(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Jumbotron title="Hello World" subTitle="Welcome to React E-commerce" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">sidebar</div>

                    <div className="col-md-9">
                        <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                            {products?.length} Products
                        </h2>

                        <div className="row">
                            {products?.map((p) => (
                                <div className="col-md-4" key={p._id}>
                                    <ProductCard p={p} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
