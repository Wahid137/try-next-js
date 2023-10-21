import React from 'react';

const page = ({ params }) => {

    return (
        <div>
            <h1>Single Blog Page year: {params.id}</h1>
        </div>
    );
};

export default page;