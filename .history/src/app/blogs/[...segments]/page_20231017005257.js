import React from 'react';

const page = ({ params }) => {
    const { year, id } = params.segments
    return (
        <div>
            <h1>Single Blog Page year: {year} id: {id}</h1>
        </div>
    );
};

export default page;