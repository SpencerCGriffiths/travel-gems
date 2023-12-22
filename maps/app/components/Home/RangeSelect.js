"use client"
import React, { useState } from 'react';

const RangeSelect = () => {
    const [radius, setRadius] = useState(10);
    return (
        <div className='mt-5'>
            <h2 className='font-bold px-2'>Select radius (in meters)</h2>
            <input type="range" className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' 
            min="0" max="100" step={10} defaultValue={radius} onChange={(e)=> setRadius(e.target.value)}/>
              <label className='text-gray-500'>{radius*100} meters</label>
        </div>
    );
}

export default RangeSelect;