import React from "react";
import Logo from '../../../assets/Logo.png'
import SubHeading from './SubHeading';
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";



const FooterMain = () => {

    const shareUrlFB = "https://www.facebook.com/saanviroyalclub"
    const shareUrlIG = "https://www.instagram.com/saanviroyalclub/"
    return (
        <Box>
            
            <FooterContainer>
                <Row>
                    <Column> 
                        <div className='flex justify-center items-center '>
                            <div className='w-[max] h-[max]  '>
                                <img
                                    src={Logo}
                                    alt=""
                                    className='shadow-white'
                                    height=''
                                    width=''
                                />
                            </div>
                        </div>
                        <div>
                            <div className='w-[max] h-[max] flex justify-center txt-richblack-700 items-center '>
                            <div className='text-white'>
                            <SubHeading text={"Saanvi Royal Club"}/>
                            </div>
                            </div>
                        </div>
                    </Column>
                  
                    
                    <Column>
                       
                    <Heading>Usefull Links </Heading>
                        <FooterLink href="/Resturent">
                            Resturant 
                        </FooterLink>
                        <FooterLink href="/Camping">
                            Camping 
                        </FooterLink>
                        <FooterLink href="/Sightseeing">
                            SightSeeing
                        </FooterLink>
                        <FooterLink href="/Rooms">
                            FirmStay
                        </FooterLink>
                    </Column>


                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink >
                            2.No. Murkata, Mayangn 
                        </FooterLink>
                        <FooterLink >
                           Pin: 782411, Assam
                        </FooterLink>
                        <FooterLink >
                            saanviroyalclub@gmail.com
                        </FooterLink>
                        <FooterLink href="#">
                           +916001737012
                        </FooterLink>
                    </Column>

                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href={shareUrlFB}>
                            <div style={{
                               
                                height: '2vh',
                                width: '100%',
                            }}>
                            <h1 >
                               Facebook
                            </h1>
                            </div>
                        </FooterLink>
                        <FooterLink href={shareUrlIG}>
                            <div style={{
                               
                                height: '2vh',
                                width: '100%',
                            }}>
                            <h1 >
                               Instagram
                            </h1>
                            </div>
                        </FooterLink>
                       
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default FooterMain;