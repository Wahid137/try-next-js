import Link from 'next/link';
import React from 'react';
const blogs = [
    {
        id: 1,
        year: 2016,
        title: "title1"
    },
    {
        id: 2,
        year: 2016,
        title: "title2"
    },
    {
        id: 3,
        year: 2016,
        title: "title3"
    },
    {
        id: 4,
        year: 2016,
        title: "title4"
    },

]

const page = () => {
    return (
        <div>
            {
                blogs.map(({ id, year, title }) => (
                    <Link href={`/blogs/${year}/${id}` key={id}}>{title}</Link>
    ))
}
        </div >
    );
};

export default page;