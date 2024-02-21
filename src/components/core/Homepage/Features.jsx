import React from 'react'
import FeaturesCampingName from './FeaturesCampingName'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import Food from '../../../assets/food-service (1).png'

const Features = () => {
  return (
    <div className='Services w-[300px] h-[330px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center '>
       
       <div className='flex justify-center items-center'>
        <div className='w-[80px] h-[80px] mt-10 bg-orange-5 rounded-full flex justify-center items-center '>
            <img
                src={Food}
                alt=""
                className='shadow-white'
                height='60px'
                width='60'
            />
        </div>
        </div>
        <div className='flex justify-center items-center '>
        <FeaturesCampingName text={"Public Restaurant"}/> 
        </div>
        <div>
            <p>
            <FeaturesCampingDescription text={"Dine amidst lush views in our AC restaurant, enjoying North Eastern flavors"}/>
            </p>
        </div>
    </div>
  )
}

export default Features