import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Food from '../../../assets/camping.png'
const FeaturesCamping = () => {
  return (
    <div className='Services w-[350px] h-[400px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center '>
       
    <div className='flex justify-center items-center'>
     <div className='w-[100px] h-[100px] mt-20 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Food}
             alt=""
             className='shadow-white'
             height='70px'
             width='70px'
         />
     </div>
     </div>
     <div className='flex justify-center items-center '>
     <FeaturesCampingName text={"Camping"}/> 
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