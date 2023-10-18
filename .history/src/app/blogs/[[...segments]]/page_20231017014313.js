import React from 'react';

const page = ({ params }) => {
    const [year, id] = params.segments;
    console.log(year)
    return (
        <div>
            <h1>Single Blog Page year: {year || 0} for: {id || 0}</h1>
        </div>
    );
};

export default page;