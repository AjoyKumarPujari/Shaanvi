import React from 'react'
import HightLightText from './HightLightText'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Description from './Description'
const AboutUs = () => {
  return (
    <div className='AboutUs w-[100%] h-[700px] flex justify-center items-center'>
    <div className='AboutUsMain w-[80%] h-[700px] flex  mt-10 flex justify-center items-center'>
        
       
        <div className='aboutUsLeft xl:w-[35%] h-[550px] bg-pure-greys-5 rounded-lg shadow-sm '>
            <div className='entrance_bg h-[550px] bg-no-repeat bg-center rounded-lg'>       
            </div>
        </div>

        
        <div className='aboutUsRight xl:w-[35%] sm:w-[90%] xl:h-[550px] sm:h-[550] bg-pure-greys-5 rounded-lg shadow-sm overflow-auto '>
            <Heading text={"Saanvi Royal Club"}/> 
            <SubHeading text={"Welcome to our Resort"}/>
            <Description text={"Located just in the periphery of the famous Pobitora Wildlife Sanctuary, Saanvi Royal Club Resort & Restaurant is the new destination for your vacations, daycations, and your dream moments of life. Just a pleasant 42 km ride from the heart of Guwahati City, Saanvi Royal Club is the perfect place to stay while exploring the dense greenery of Pobitora wildlife Sanctuary."}/>
            <p>
            {/* <Description text={"Home to over 2000 species of migratory birds and reptiles, and the magnificent and famous One-horned rhinoceros. A visit to the sanctuary is certain to leave you spellbound with its rich biodiversity. The resort itself is set amidst the heart of nature, providing you an environment that invigorates your body & soul."}/> */}
            </p>
        </div>
    
    </div>
</div>

  )
}

export default AboutUs