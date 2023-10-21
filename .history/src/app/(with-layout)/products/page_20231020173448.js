import getAllProducts from '@/utils/getAllProducts';
import React from 'react';

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.category)
    return (
        <div>

        </div>
    );
};

export default ProductsPage;