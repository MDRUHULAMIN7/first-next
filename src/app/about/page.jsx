import React from 'react';

const getTime =async ()=>{
    const res = await fetch("http://localhost:3000/Time",{cache:'no-store'})
    const data = await res.json()
    return data.currentTime
}

const page = async() => {
    const time = await getTime()
    return (
        <div>
            <div>
                <h1 className='text-3xl text-cyan-700 text-center my-5 '>about page</h1>
                <h1>Time:{ time}</h1>
            </div>
        </div>
    );
};

export default page;