import React from 'react';

const page = ({ params }) => {
    const { year, } = params.segments
    return (
        <div>
            <h1>Single Blog Page-{params.id}</h1>
        </div>
    );
};

export default page;