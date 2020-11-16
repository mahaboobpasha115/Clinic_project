import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stylings from "./apollo.module.css";
import ClinicCards from './ClinicCards';


class Vita extends Component {
    handleBack = () => {
        this.props.history.push("/");
      };
    
    render() { 
        return ( 
            <div className={stylings.container}>
                <div className={stylings.title}>
                    <h1>Vita Family Clinic</h1>
                </div>
                <div className={stylings.wrapper}>
                <Carousel autoPlay className={stylings.sliders} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                      <div className={stylings.slider}>
                       <img alt="" src="vita1.jpg"/>
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="vita5.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="vita3.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="vita4.jpg"/>
                      </div>
                     
                    </Carousel>
                </div>
                <div className={stylings.info}>
                    <p className={stylings.firstpara}><b>Address:</b> HSR Layout, Bangalore
No 495, 24th Main, 17th Cross, 2nd Sector, HSR Layout, Bangalore 560102, landmark- Opposite to Bathinda Junction, Landmark: Opposite to Bathinda Junction, Bangalore</p>
<p>Vita Family Clinic is a multi Speciality clinic in HSR Layout, Bangalore. The clinic is visited by doctors like Dr. Sharat Honnatti, Dr. Pavan Kumar, Dr. P. S. Gupta. and many other consultants. Vita Family Clinic provides " Vitamin B and Vitamin B12" tests at a very nominal price.</p>
    </div>
    <div className={stylings.doctors}>
        <h2>Doctors working in this Clinic..</h2>
        <div className={stylings.useflex}>
        <ClinicCards src="vitadoc1.jpg" h2="Dr. P. S. Gupta" h4="MBBS, DVD, MD - Dermatology, Dermatologist"
p="23 Years Experience Overall  (23 years as specialist)"/>
        <ClinicCards src="vitadoc2.jpg" h2="Dr. Mahantesh Magadum" h4="MBBS, MS - Orthopaedics

Orthopedist
"
p="28 Years Experience Overall  (23 years as specialist)" />
        <ClinicCards src="vitadoc3.jpg" h2="Dr. Pavan Kumar" h4="MBBS, MD - Pediatrics

Pediatrician
"
p="9 Years Experience Overall  (8 years as specialist)"/>
        </div>
    </div>
    <button onClick={this.handleBack}>Back</button>
            </div>
         );
    }
}
 
export default Vita;