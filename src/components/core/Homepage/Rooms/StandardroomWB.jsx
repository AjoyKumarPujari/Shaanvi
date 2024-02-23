


import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import RoomsNAme from './RoomsNAme'
import RoomsDescriptionSort from './RoomsDescriptionSort'
import Room1 from '../../../../components/core/Homepage/Rooms/StandardRoomsWB/Standardroomwithbalcony.JPG'
import {Route, Routes, Link} from "react-router-dom"
const StandardroomWB = () => {
  return (
    <div className='Services w-[300px] h-[380px] bg-white rounded-lg shadow-sm overflow-auto justify-center items-center '>
       
       <div className='flex justify-center items-center'>
        <div className='w-[max] h-[max] flex justify-center items-center '>
            <img
                src={Room1}
                alt=""
                className='shadow-white'
                height=''
                width=''
            />
        </div>
        </div>
        <div className='flex justify-center items-center '>
        <RoomsNAme text={"Standard (With Balcony)"}/> 
        </div>
        <div className='flex justify-center items-center w-[300px]'> 
            <div className='RoomDescription border-solid border-b w-[300px]'>
                <p>
                <RoomsDescriptionSort text={"2800/- + Gst/Night"}/>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center '> 
        <div className='RoomDescription flex flex-row items-center gap-2 '>
            <p>
           
            <Link to="/standardroomswb"> <RoomsDescriptionSort text={"View Room Detail"}/></Link>
            </p>
            <FaArrowRight />
        </div>
        </div>
    </div>
  )
}

export default StandardroomWB