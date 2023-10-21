import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlogData(params.id);

    return {
        title: title,
    };
};

const page = async ({ params }) => {
    const { id, title, body } = await loadSingleBlogData(params.id)

    return (
        <div key={id} className="block border mx-2 p-2 my-2 border-blue-500">
            <h2 className='text-2xl'>{id}. {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default page;