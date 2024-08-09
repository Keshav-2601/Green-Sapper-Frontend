import React from "react";
import { MDBCarousel, MDBCarouselItem,MDBCarouselCaption  } from 'mdb-react-ui-kit';
import home1 from '../Images-services/home1.jpg';
import home2 from '../Images-services/home2.jpg';
import home3 from '../Images-services/home3.jpg';
import hvac from '../Images-services/hvac.JPG';
export default class HomeBackground extends React.Component{
   render(){
    return(
        <>
       {/* css is under homepage.css */}
        <div className="BodyImage">
                    <MDBCarousel showIndicators showControls fade>
                        <MDBCarouselItem itemId={1}>
                            <img  className="Homeimages" src="https://wallpaperaccess.com/full/3434349.jpg"  alt='...' />
                            <MDBCarouselCaption>   
                                
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={2}>
                            <img  className="Homeimages" src="https://images7.alphacoders.com/550/550378.jpg"  alt='...' />
                            <MDBCarouselCaption>
                                
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId={3}>
                            <img  className="Homeimages" src={home3} alt='...' />
                            <MDBCarouselCaption>

                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={4}>
                            <img  className="Homeimages" src="https://wallpapers.com/images/hd/black-and-white-solar-panels-jxkip6hmb8k7l2wx.jpg" alt='...' />
                            <MDBCarouselCaption>

                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={5}>
                            <img  className="Homeimages" src="https://wallpaperaccess.com/full/2362761.jpg" alt='...' />
                            <MDBCarouselCaption>

                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>
            </>
       
    )
   }
}