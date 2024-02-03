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
    return (
        <Box>
            
            <FooterContainer>
                <Row>
                    <Column>
                        <div>
                            <div className='w-[max] h-[max] flex justify-center txt-richblack-700 items-center '>
                            <div className='text-white'>
                                <SubHeading text={""}/>
                            </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <div className='w-[max] h-[max] flex justify-center items-center '>
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
                  
                    {/* <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column> */}
                    <Column>
                       
                    <Heading>Usefull Links </Heading>
                        <FooterLink href="#">
                            Resturant 
                        </FooterLink>
                        <FooterLink href="#">
                            Camping 
                        </FooterLink>
                        <FooterLink href="#">
                            SightSeeing
                        </FooterLink>
                        <FooterLink href="#">
                            FirmStay
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Address
                        </FooterLink>
                        <FooterLink href="#">
                           Address
                        </FooterLink>
                        <FooterLink href="#">
                            Email
                        </FooterLink>
                        <FooterLink href="#">
                           Phone no
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default FooterMain;