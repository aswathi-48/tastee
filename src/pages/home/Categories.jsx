import React from 'react';

const categoryItems = [
  { id: 1, title: "Main Dish", des: "(86 dishes)",image:'./categoryyy/img4.png' },
  { id: 2, title: "Break Fast", des: "(56 Break Fast)", image:'./categoryyy/img2 (1).png' },
  { id: 3, title: "Dessert", des: "(66 Desserts)", image:'./categoryyy/dessert.png' },
  { id: 4, title: "Browse All", des: "(396 Items)", image:'./categoryyy/img5.png' },
];

const Categories = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
        <p className='subtitle'>Customer Favourites</p>
        <h3 className='title'>Popular Categories</h3>
      </div>

      {/* Categories cards */}
      <div className='flex flex-col sm:flex-row flext-wrap gap-8 justify-around items-center mt-12'>
      {categoryItems.map((item,i)=>(
                    <div key={i} className='shadow-lg rounded-md bg-whitesmoke py-6 px-5 w-72 mx-auto text-center curdor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto item-center justify-center'>
                        <img src={item.image} alt=""  className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))}
      </div>
    </div>
  );
}

export default Categories;
