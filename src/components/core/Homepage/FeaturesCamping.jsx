import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Food from '../../../assets/camping.png'
import { Link } from 'react-router-dom'
const FeaturesCamping = () => {
  return (
    <div className='Services w-[300px] h-[330px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center cursor-pointer'>
       
    <div className='flex justify-center items-center'>
     <div className='w-[80px] h-[80px] mt-10 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Food}
             alt=""
             className='shadow-white'
             height='60px'
             width='60px'
         />
     </div>
     </div>
     <div className='flex justify-center items-center '>
     {/* <FeaturesCampingName text={"Camping"}/>  */}
     <Link to="/Camping"><FeaturesCampingName text={"Camping"}/> </Link>
     </div>
     <div>
         <p>
         <FeaturesCampingDescription text={"Camp in green grasslands beneath a starry canopy for a serene escape"}/>
         </p>
     </div>
 </div>
  )
}

export default FeaturesCamping