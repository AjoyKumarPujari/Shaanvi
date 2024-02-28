
import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Event from '../../../assets/EVENT.png'
import { Link } from 'react-router-dom'

const ServiceEvents = () => {
  return (
    <div className='Services w-[300px] h-[300px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center cursor-pointer'>
       
    <div className='flex justify-center items-center'>
     <div className='w-[80px] h-[80px] mt-10 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Event}
             alt=""
             className='shadow-white'
             height='60px'
             width='60px'
         />
     </div>
     </div>
     <div className='flex justify-center items-center '>
     <Link to="/event"><FeaturesCampingName text={"Events"}/> </Link>
     </div>
     <div>
         <p>
         <FeaturesCampingDescription text={"Craft timeless memories in our modern yet elegant event space."}/>
         </p>
     </div>
 </div>
  )
}

export default ServiceEvents