import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: 'Blogs | Try Next js',
    description: 'Try Next js',
}

// const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: "title1"
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: "title2"
//     },
//     {
//         id: 3,
//         year: 2016,
//         title: "title3"
//     },
//     {
//         id: 4,
//         year: 2016,
//         title: "title4"
//     },

// ]

const BlogsPage = async () => {


    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, body, title }) => (
                    <div key={id} className="block border p-2 my-2 border-blue-500">
                        <h2 className='text-2xl'>{id}. {title}</h2>
                        <p>{body}</p>
                        <Link className="inline-block mt-5" href={`/blogs/${id}`}>
                            <button className='text-white px-2 py-1 bg-blue-500'>Details</button>
                        </Link>
                    </div>
                ))
            }
        </div >
    );
};

export default BlogsPage;