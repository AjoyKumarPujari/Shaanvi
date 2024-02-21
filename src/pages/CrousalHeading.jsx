import React from 'react'

const CrousalHeading = ({text}) => {
    return (
        <div className='headingtext  ml-10 mr-10 '>
        <span className='headingtext  text-3xl  font-small '   style={{
                '@media only screen and (max-width: 400px)': {
                    fontSize: '3xl'
                }
            }} >
            {text}
        </span>
        </div>
      )
}

export default CrousalHeading


