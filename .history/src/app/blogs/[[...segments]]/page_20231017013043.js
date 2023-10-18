import React from 'react';

const page = ({ params }) => {
    const [year, id] = params.segments;
    console.log(year)
    return (
        <div>
            <h1>Single Blog Page year: {year || new } id: {id}</h1>
        </div>
    );
};

export default page;