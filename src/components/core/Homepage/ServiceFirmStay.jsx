import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Farm from '../../../assets/farm.png'

const ServiceFirmStay = () => {
  return (
    <div className='Services w-[300px] h-[330px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center '>
       
    <div className='flex justify-center items-center'>
     <div className='w-[80px] h-[80px] mt-20 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Farm}
             alt=""
             className='shadow-white'
             height='60px'
             width='60px'
         />
     </div>
     </div>
     <div className='flex justify-center items-center '>
     <FeaturesCampingName text={"Firm Stay"}/> 
     </div>
     <div>
         <p>
         <FeaturesCampingDescription text={"Relax in our farm stay, blending rustic charm with modern comforts ."}/>
         </p>
     </div>
 </div>
  )
}

export default ServiceFirmStay