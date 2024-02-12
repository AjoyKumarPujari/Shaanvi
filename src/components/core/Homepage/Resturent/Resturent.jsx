import React from 'react'
import Heading from '../Heading'
import SubHeading from '../SubHeading'
import Description from '../Description'
import Restaurant from '../../../../assets/Restaurant1.JPG'
import Navbar from '../Navbar/Navbar'
import FooterMain from '../Footer'
import "../../Homepage/Resturent/Resturents.css"
// const slides =[
//     "https://drive.google.com/file/d/1yU6KXw53ik9_jj8hGiPeRaE75szQVi7r/view?usp=drive_link",
//     "https://drive.google.com/file/d/1orVotI0dNCjUiO3RRVpKy3ngRbFtwFy_/view?usp=drive_link",
//     "https://drive.google.com/file/d/1tTiJwGxGyUSR18R1Ha8Rb8Hg94p0DdPR/view?usp=drive_link",
//     "https://drive.google.com/file/d/19n7a6nPfRt01WIH2IAnLWcY8-lok-9jv/view?usp=drive_link",
// ]

function Resturent() {
  return (
    <div>
    <div>
        <Navbar/>
        <div className='Restaurant-bg  flex bg-no-repeat bg-center backdrop-blur-md'>
        <div className='RestaurantAboutUs w-[100%]  flex flex-row justify-center items-center'>
            
            <div className='RestaurantMain w-[80%]  flex gap-20 mt-10 flex justify-center items-center'>
                
            
                <div className='RestaurantLeft  flex justify-center rounded-lg  '>
                                <img
                                    src={Restaurant}
                                    alt=""
                                    className='shadow-white rounded-lg'
                                    height='100%'
                                    width='100%'
                                
                                />

                </div>

                
                <div className='RestaurantRight  bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
                    <Heading text={"Restaurant"}/> 
                    <SubHeading text={"An indulgence fest for your taste buds"}/>
                    <Description text={"We have a multi cuisine well furnished restaurant Savour the bright cheerful atmosphere along with our authentic Assamese and North Eastern Cuisines Whatever cuisine you choose, our chefs will ensure that your taste buds get the indulgence they need With a breathtaking view of the undulating greenery outside, the setting is perfect for a casual chat with your loved ones,topped with savoury food and soulful music, ofcourse Moreover we also have a half opened sitting restaurant for outdoor vibe with pleasant music"}/>
                    
                </div>
            
            </div>
        </div>
        </div>
   
    </div>
    
    </div>
    
  )
}

export default Resturent