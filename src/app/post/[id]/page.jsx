import React from 'react';

const detailData = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data =await res.json()
    return data
}
const page =async ({params}) => {
    console.log(params);
     const viewDetails= await detailData(params.id)
     console.log(viewDetails);

    return (
    <div className='grid grid-cols-3 mt-4 '>
            <div  className='border border-cyan-400 bg-cyan-100 p-3 rounded-lg '>
        <h1>{viewDetails.title}
        </h1>
        <h1>{viewDetails.body}
        </h1>
        </div>
    </div>
    );
};

export default page;