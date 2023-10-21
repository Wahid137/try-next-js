import getAllProducts from '@/utils/getAllProducts';
import React from 'react';

const ProductsPage = async ({ searchParams }) => {
    console.log(searchParams.category)
    const products = await getAllProducts(searchParams.category)

    return (
        <div>
            {
                products.map((product) => {

                })
            }
        </div>
    );
};

export default ProductsPage;