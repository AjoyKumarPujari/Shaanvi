import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Safari from '../../../assets/safari.png'
import { Link } from 'react-router-dom'

const ServicesSightseeing = () => {
  return (
    
    
    <div className='Services w-[300px] h-[330px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center cursor-pointer'>
       
    <div className='flex justify-center items-center'>
     <div className='w-[80px] h-[80px] mt-10 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Safari}
             alt=""
             className='shadow-white'
             height='60px'
             width='60px'
         />
     </div>
     </div>
     <div className='flex justify-center items-center '>
     {/* <FeaturesCampingName text={"Sightseeing"}/>  */}
     <Link to="/Sightseeing"><FeaturesCampingName text={"Sightseeing"}/> </Link>
     </div>
     <div>
         <p>
         <FeaturesCampingDescription text={"Explore stunning landscapes and rich history in our curated tour."}/>
         </p>
     </div>
 </div>
 




  )
}

export default ServicesSightseeing