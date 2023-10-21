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
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const blogs = await res.json()

    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, body, title }) => (
                    <div key={id}>
                        <Link className="block border p-2 my-2 border-blue-500" href={`/blogs/${year}/${id}`} key={id}>
                            {title}
                        </Link>

                    </div>
                ))
            }
        </div >
    );
};

export default page;