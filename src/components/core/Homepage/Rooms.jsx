
import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import RoomsNAme from './RoomsNAme'
import RoomsDescriptionSort from './RoomsDescriptionSort'
import Room1 from '../../../assets/Room1.png'

const Rooms = () => {
  return (
    <div className='Services w-[350px] h-[420px] bg-white rounded-lg shadow-sm overflow-auto justify-center items-center '>
       
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
        <RoomsNAme text={"Precedential Suite I"}/> 
        </div>
        <div className='flex justify-center items-center w-[350px]'> 
            <div className='RoomDescription border-solid border-b w-[300px]'>
                <p>
                <RoomsDescriptionSort text={"18290/- + Gst/Night"}/>
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center '> 
        <div className='RoomDescription flex flex-row items-center gap-2 '>
            <p>
            <RoomsDescriptionSort text={"View Room Detail"}/>
           
            </p>
            <FaArrowRight />
        </div>
        </div>
    </div>
  )
}

export default Rooms