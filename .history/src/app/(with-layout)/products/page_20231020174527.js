import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPage = async ({ searchParams }) => {
    console.log(searchParams.category)
    const products = await getAllProducts(searchParams.category)

    return (
        <div>
            {
                products.map((product) => {
                    <SingleProduct />
                })
            }
        </div>
    );
};

export default ProductsPage;