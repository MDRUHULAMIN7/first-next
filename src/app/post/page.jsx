import { redirect } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
const fetchdata=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json();
    // if(data && data[0] && data[0].id){
    //     redirect(`/post/${data[0]?.id}`)
    // }
    // console.log(data[5].id);
    return data
   
}

const Postpage =async () => {
   
    const postData = await fetchdata()
    console.log(postData);

    fetchdata()
    return (
        <div className='mt-8'> 
        <h1 className='my-5 text-3xl text-center'>Posts</h1>
            <div className='grid grid-cols-3 gap-3 '>
                {postData?.slice(0,12)?.map(data=><div className='border border-cyan-400 bg-cyan-100 p-3 rounded-lg ' key={data.id}>
                 <h1>Id:{data.id}</h1>
                 <h1>Title:{data.title}</h1>
                 <h1><button className='bg-transparent border border-cyan-400 text-cyan-400 px-3 py-2 rounded-md mt-3'><Link href={`/post/${data.id}`}>View detsils</Link></button></h1>
                </div>)}
            </div>
        </div>
    );
};

export default Postpage;