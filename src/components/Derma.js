import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stylings from "./apollo.module.css";
import ClinicCards from './ClinicCards';


class Derma extends Component {
    handleBack = () => {
        this.props.history.push("/");
      };
    render() { 
        return ( 
            <div className={stylings.container}>
                <div className={stylings.title}>
                    <h1>Dermasculpt Hair Transplant and Skin Clinic</h1>
                </div>
                <div className={stylings.wrapper}>
                <Carousel autoPlay className={stylings.sliders} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                      <div className={stylings.slider}>
                       <img alt="" src="derma1.jpg"/>
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="derma2.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="derma3.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="derma4.jpg"/>
                      </div>
                     
                    </Carousel>
                </div>
                <div className={stylings.info}>
                    <p className={stylings.firstpara}><b>Address:</b> JP Nagar, Bangalore
1944, South End`D' Cross Road, 3rd Phase J P Nagar, JAYANAGAR 9TH BLOCK, Landmark: Opposite to SLV Ragigudda Hotel, Bangalore</p>
<p>Dermasculpt Hair Transplant and Skin Clinic is a Dermatology, Trichology and Cosmetology super specialty center with highly experienced team committed to providing and promoting advanced and internationally updated treatments and procedures, having a patient care-centered approach.</p>
    </div>
    <div className={stylings.doctors}>
        <h2>Doctors working in this Clinic..</h2>
        <ClinicCards src="dermadoc.jpg" h2="
Dr. Deepak Devakar" h4="MBBS, DDVL

Dermatologist, Cosmetologist, Pediatric Dermatologist,Trichologist, Venereologist"
p="16 Years Experience Overall  (12 years as specialist)"/>
        
        
    </div>
    <button onClick={this.handleBack}>Back</button>
            </div>
         );
    }
}
 
export default Derma;