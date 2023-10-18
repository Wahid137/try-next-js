import React from 'react';

const page = ({ params }) => {
    console.log(params.id)
    return (
        <div>
            <h1>Single Blog Page</h1>
        </div>
    );
};

export default page;