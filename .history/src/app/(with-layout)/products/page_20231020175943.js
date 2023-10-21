import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPage = async ({ searchParams }) => {

    const products = await getAllProducts(searchParams.category)
    console.log(products)
    return (
        <div>
            {
                products.map(product => <SingleProduct
                    key={product.id}
                ></SingleProduct>)

            }
        </div>
    );
};

export default ProductsPage;