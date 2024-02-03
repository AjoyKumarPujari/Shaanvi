import React from 'react'
import FeaturesCampingName from './FeaturesCampingName'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import Food from '../../../assets/food-service (1).png'

const Features = () => {
  return (
    <div className='Services w-[350px] h-[400px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center '>
       
       <div className='flex justify-center items-center'>
        <div className='w-[100px] h-[100px] mt-20 bg-orange-5 rounded-full flex justify-center items-center '>
            <img
                src={Food}
                alt=""
                className='shadow-white'
                height='80px'
                width='80'
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