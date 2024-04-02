import React from 'react'
import img1 from '../assets/img1 (1).png'
import img2 from '../assets/img3 (1).png'

const Banner = () => {
    return (
        // <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='section-container bg-gradient-to-r  from-0% to-[#FCFCFC] to-100%'>
            <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

 {/* images */}
 <div className='md:w-1/2'>
                    <img src={img1} alt="" />
                    
                    <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                    <div className='flex  py-2 rounded-2xl items-center gap-3 shadow-md w-64' style={{marginTop:20}} >
                        <div>
                            <img src={img2} alt="" className='rounded-2x1' style={{ height: 120, width:105 }} />
                        </div>
                        <div className='space-y-1'>
                        <h5 className='font-medium mb-1' style={{marginTop:30}}>Mix Pasta </h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                        </div>
                        <p className='text-red'>₹180.00</p>
                        </div>
                    </div>
                    <div className='sm:flex hidden  py-2 rounded-2xl items-center gap-3 shadow-md w-64' style={{marginTop:20}}>
                        <div>
                            <img src={img2} alt="" className='rounded-2x1' style={{ height: 120, width:105 }} />
                        </div>
                        <div className='space-y-1'>
                        <h5 className='font-medium mb-1' style={{marginTop:30}}>Mix Pasta </h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly/>
                        </div>
                        <p className='text-red'>₹180.00</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* texts */}

                <div className='md:w-1/2 space-y-z px-4'>
                    <h2 className='md:text-5xl text-4l font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
                    <p>Where Each Plate Weaves a story of Culinary Mastery and Passionate Craftmanship</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now </button>
                </div>

               
            </div>
        </div>
    )
}

export default Banner