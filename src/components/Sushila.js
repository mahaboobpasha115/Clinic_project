import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stylings from "./apollo.module.css";
import ClinicCards from './ClinicCards';


class Sushila extends Component {
    handleBack = () => {
        this.props.history.push("/");
      };
    render() { 
        return ( 
            <div className={stylings.container}>
                <div className={stylings.title}>
                    <h1> Sushila Matrutva Clinic</h1>
                </div>
                <div className={stylings.wrapper}>
                <Carousel autoPlay className={stylings.sliders} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                      <div className={stylings.slider}>
                       <img alt="" src="sushila1.jpg"/>
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="sushila2.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="sushila3.jpg" />
                      </div>
                     
                    </Carousel>
                </div>
                <div className={stylings.info}>
                    <p className={stylings.firstpara}><b>Address:</b> Channasandra, Bangalore
#249, Channasandra Main Road, 2nd Cross, Opp MVJ Engineering college Kadugodi, Bangalore, Landmark: Opposite MVJ College, Bangalore, Bangalore</p>
<p>Sushila Mathrutva Clinic is a highly specialized Gynecology/Obstetrics Clinic in Channasandra, Bangalore. The clinic is visited by obstetrician like Dr. Hira Mardi. The Clinic specializes in services like Obstetrics & Gynaecology, Pregnancy Problems, Contraceptive Services, Reproductive Endocrinology ,Comprehensive Pre Natal Care, High Risk Pregnancy Including diabetes etc, menstrual disorders, polycystic ovarian diseases, cervical cancer(PAP smear) screening, PCOS/PCOD & women related disorders etc.

The clinic also has modern Ultrasound scanning facility.

The timings of Sushila Matrutva Clinic are: Mon-Sun: 05:00PM - 09:00PM.</p>
    </div>
    <div className={stylings.doctors}>
        <h2>Doctors working in this Clinic..</h2>
        <ClinicCards src="sushiladoc.jpg" h2="Dr. Hira Mardi" h4="MBBS, MS - Obstetrics & Gynaecology

Obstetrician, Gynecologist
"
p="10 Years Experience Overall  (7 years as specialist)"/>
       
        
    </div>
    <button onClick={this.handleBack}>Back</button>
            </div>
         );
    }
}
 
export default Sushila;