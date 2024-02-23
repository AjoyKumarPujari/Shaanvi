
import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import RoomsNAme from './RoomsNAme'
import RoomsDescriptionSort from './RoomsDescriptionSort'
import Room1 from '../../../../assets/Room1.png'
import {Route, Routes, Link} from "react-router-dom"
const Rooms = () => {
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
        <RoomsNAme text={"Standard (Without Balcony) "}/> 
        </div>
        <div className='flex justify-center items-center w-[300px]'> 
            <div className='RoomDescription border-solid border-b w-[300px]'>
                <p>
                <RoomsDescriptionSort text={"2500/- + Gst/Night"}/>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center '> 
        <div className='RoomDescription flex flex-row items-center gap-2 '>
            <p>
           
            <Link to="/standardrooms"> <RoomsDescriptionSort text={"View Room Detail"}/></Link>
            </p>
            <FaArrowRight />
        </div>
        </div>
    </div>
  )
}

export default Rooms