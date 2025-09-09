import React from 'react'

function card({image,title}) {
  return (
    <div>
         <div className=' h-[250px]  rounded group '>
            <img src={image} alt={title} className='h-full w-full object-fill rounded  group-hover:shadow-lg' />
            
          </div>
    </div>
  )
}

export default card