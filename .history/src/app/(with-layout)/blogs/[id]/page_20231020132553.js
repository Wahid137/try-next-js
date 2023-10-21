import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';

const page = ({ params }) => {

    const { id, title, body } = loadSingleBlogData(params.id)
    console.log(title)
    return (
        <div key={id} className="block border mx-2 p-2 my-2 border-blue-500">
            <h2 className='text-2xl'>{id}. {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default page;