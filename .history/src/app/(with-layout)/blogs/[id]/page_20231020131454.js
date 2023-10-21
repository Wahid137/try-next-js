import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

const page = ({ params }) => {
    const { id, title, body } = loadSingleBlogData(params.id)

    return (
        <div>
            <h1>Single Blog Page year: {params.id}</h1>
        </div>
    );
};

export default page;