"use client"
import React from 'react';

const HeaderNavBar = () => {
    return (
        <div className='flex'>
            <div className='flex gap-5 items-center'>
                <h2>Home</h2>
                <h2>Favourite</h2>
            </div>
            <div className='flex bg-gray-100 p-[6px] rounded-md w-[40%] gap-[3] hidden md:flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type='text' placeholder='search' className='bg-transparent outline-none w-full'/>
            </div>
        </div>
    );
}

export default HeaderNavBar;