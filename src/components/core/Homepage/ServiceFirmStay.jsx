import React from 'react'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import FeaturesCampingName from './FeaturesCampingName'
import Farm from '../../../assets/farm.png'

const ServiceFirmStay = () => {
  return (
    <div className='Services w-[350px] h-[400px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center '>
       
    <div className='flex justify-center items-center'>
     <div className='w-[100px] h-[100px] mt-20 bg-orange-5 rounded-full flex justify-center items-center '>
         <img
             src={Farm}
             alt=""
             className='shadow-white'
             height='70px'
             width='70px'
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