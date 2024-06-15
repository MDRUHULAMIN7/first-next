"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
     const [search,setSearch]= useState('')
     const [meals,setmeals]= useState('')

     const loaddata = async()=>{
        const res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

        const data = await res.json();
        setmeals(data?.meals)
        return data.meals;
     }

     const handleSearch=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    
     }
     useEffect(()=>{
        loaddata()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[search])

     console.log(meals);
     console.log(meals?.length);
    return (
        <div>
            <div className="bg-white-500 border border-cyan-400  rounded-md flex justify-center w-fit ">
          <input
          onChange={handleSearch}
            className=" px-3 py-2 bg-transparent rounded-none border-none text-cyan-500 "
            type="text"
            placeholder="serch meals by name"
            name="meals"
          />
          <button className=" px-2 bg-cyan-400">Search</button>
        </div>

        <div>
            <div className='grid mt-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
                { meals?.length > 0 &&
                    meals?.map(meal=> 
                    <div className='bg-cyan-50 p-3 border' key={meal.idMeal}>
                        <h1>{meal?.strMeal}</h1>
                        <h1>{meal?.strCategory}</h1>
                        <h1>{meal?.strArea}</h1>
                        <Image src={meal?.strMealThumb} alt={meal?.strMeal} height={600} style={{height:"200px"}} width={300}></Image>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default Meals;