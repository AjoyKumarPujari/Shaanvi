import React from 'react'
import FeaturesCampingName from './FeaturesCampingName'
import FeaturesCampingDescription from './FeaturesCampingDescription'
import Food from '../../../assets/food-service (1).png'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className='Services w-[300px] h-[300px] bg-white rounded-lg shadow-sm overflow-auto  justify-center items-center  cursor-pointer'>
       
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
        <Link to="/Resturent"><FeaturesCampingName text={"Public Restaurant"}/> </Link>
 
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