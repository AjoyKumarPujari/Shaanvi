import react from 'react'


class ReactImageGallery extends react.Component
{
        render()
        { 
            let imgGallery = [
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img1'},
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img2'},
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img3'},
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img4'},
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img5'},
                {src:'https://th.bing.com/th/id/R.4d19e85cb8f19e1aa9c4f21bed32070a?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0', title:'img6'}
               
                
            ];
            return(
                <>
               
                   
                    <hr/>
                    <div className='container-fluid mt-10 bg-pure-greys-5 txt-richblack-700'>
                    <div className='row' style={{ margin: '0', marginLeft: '-5px', marginRight: '-5px' }}>
                        {imgGallery.map((index, idx) => (
                        <div key={idx} className='col' style={{ padding: '0', margin: '0', marginLeft: '0', marginRight: '0' }}>
                            <img
                            src={index.src}
                            alt="Images"
                            height="450px"
                            width="100%" // Set width to 100%
                            />
                        </div>
                        ))}
                    </div>
                    </div>




               
                   
                </>
            )
        }
}

export default ReactImageGallery